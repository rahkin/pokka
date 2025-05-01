import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle authentication state
onAuthStateChanged(auth, (user) => {
  if (!user) {
    // If not authenticated, try to sign in anonymously
    signInAnonymously(auth)
      .then(() => {
        console.log('Anonymous authentication successful');
      })
      .catch((error) => {
        console.error('Error signing in anonymously:', error);
        if (error.code === 'auth/configuration-not-found') {
          console.error('Please enable Anonymous Authentication in your Firebase Console');
        }
      });
  }
});

export const db = getFirestore(app);
export const database = getDatabase(app);
export { auth }; 