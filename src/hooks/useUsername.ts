import { useState, useEffect } from 'react'
import { useAccount } from 'wagmi'
import { db } from '../config/firebase'
import { doc, getDoc, setDoc, getDocs, query, collection, where } from 'firebase/firestore'

interface UsernameHook {
  username: string | null
  isLoading: boolean
  error: string | null
  setUsername: (newUsername: string) => Promise<void>
  checkUsernameAvailable: (username: string) => Promise<boolean>
  validateUsername: (username: string) => string | null
}

export const useUsername = (): UsernameHook => {
  const { address } = useAccount()
  const [username, setUsernameState] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUsername = async () => {
      if (!address) {
        setUsernameState(null)
        setIsLoading(false)
        return
      }

      try {
        const userDoc = await getDoc(doc(db, 'usernames', address))
        if (userDoc.exists()) {
          setUsernameState(userDoc.data().username)
        } else {
          setUsernameState(null)
        }
      } catch (err) {
        console.error('Error fetching username:', err)
        setError('Failed to fetch username')
      } finally {
        setIsLoading(false)
      }
    }

    fetchUsername()
  }, [address])

  const validateUsername = (username: string): string | null => {
    if (!username) {
      return 'Username is required'
    }
    if (username.length < 3) {
      return 'Username must be at least 3 characters long'
    }
    if (username.length > 20) {
      return 'Username must be at most 20 characters long'
    }
    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      return 'Username can only contain letters, numbers, and underscores'
    }
    return null
  }

  const checkUsernameAvailable = async (username: string): Promise<boolean> => {
    try {
      const validationError = validateUsername(username)
      if (validationError) {
        throw new Error(validationError)
      }

      const q = query(
        collection(db, 'usernames'),
        where('username', '==', username.toLowerCase())
      )
      const querySnapshot = await getDocs(q)
      return querySnapshot.empty
    } catch (err) {
      console.error('Error checking username availability:', err)
      throw err
    }
  }

  const setUsername = async (newUsername: string): Promise<void> => {
    if (!address) {
      throw new Error('No wallet connected')
    }

    try {
      const validationError = validateUsername(newUsername)
      if (validationError) {
        throw new Error(validationError)
      }

      // Check if username is available
      const isAvailable = await checkUsernameAvailable(newUsername)
      if (!isAvailable) {
        throw new Error('Username already taken')
      }

      // Store username in Firestore
      await setDoc(doc(db, 'usernames', address), {
        username: newUsername.toLowerCase(),
        address,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      })

      setUsernameState(newUsername)
    } catch (err) {
      console.error('Error setting username:', err)
      setError(err instanceof Error ? err.message : 'Failed to set username')
      throw err
    }
  }

  return {
    username,
    isLoading,
    error,
    setUsername,
    checkUsernameAvailable,
    validateUsername
  }
} 