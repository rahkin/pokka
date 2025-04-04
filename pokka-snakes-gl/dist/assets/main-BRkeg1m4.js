var Ac=Object.defineProperty;var Cc=(s,e,t)=>e in s?Ac(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Yr=(s,e,t)=>Cc(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Er="162",kn={ROTATE:0,DOLLY:1,PAN:2},Hn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Pc=0,jr=1,Rc=2,za=1,wr=2,en=3,xn=0,vt=1,Ut=2,gn=0,li=1,Kr=2,$r=3,Zr=4,Lc=5,Un=100,Dc=101,Uc=102,Jr=103,Qr=104,Ic=200,Nc=201,Fc=202,Oc=203,fr=204,pr=205,zc=206,Bc=207,Gc=208,kc=209,Hc=210,Vc=211,Wc=212,Xc=213,qc=214,Yc=0,jc=1,Kc=2,hs=3,$c=4,Zc=5,Jc=6,Qc=7,br=0,el=1,tl=2,_n=0,nl=1,il=2,sl=3,rl=4,ol=5,al=6,cl=7,Ba=300,ui=301,di=302,mr=303,gr=304,vs=306,_r=1e3,kt=1001,vr=1002,bt=1003,eo=1004,_i=1005,Et=1006,As=1007,Nn=1008,vn=1009,ll=1010,hl=1011,Tr=1012,Ga=1013,fn=1014,tn=1015,Ti=1016,ka=1017,Ha=1018,Fn=1020,ul=1021,Ot=1023,dl=1024,fl=1025,On=1026,fi=1027,pl=1028,Va=1029,ml=1030,Wa=1031,Xa=1033,Cs=33776,Ps=33777,Rs=33778,Ls=33779,to=35840,no=35841,io=35842,so=35843,qa=36196,ro=37492,oo=37496,ao=37808,co=37809,lo=37810,ho=37811,uo=37812,fo=37813,po=37814,mo=37815,go=37816,_o=37817,vo=37818,xo=37819,Mo=37820,So=37821,Ds=36492,yo=36494,Eo=36495,gl=36283,wo=36284,bo=36285,To=36286,_l=3200,vl=3201,Ar=0,xl=1,dn="",Vt="srgb",Sn="srgb-linear",Cr="display-p3",xs="display-p3-linear",us="linear",tt="srgb",ds="rec709",fs="p3",Vn=7680,Ao=519,Ml=512,Sl=513,yl=514,Ya=515,El=516,wl=517,bl=518,Tl=519,Co=35044,Po="300 es",xr=1035,nn=2e3,ps=2001;class Gn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],as=Math.PI/180,ms=180/Math.PI;function Ci(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(St[s&255]+St[s>>8&255]+St[s>>16&255]+St[s>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]).toLowerCase()}function gt(s,e,t){return Math.max(e,Math.min(t,s))}function Al(s,e){return(s%e+e)%e}function Us(s,e,t){return(1-t)*s+t*e}function Ro(s){return(s&s-1)===0&&s!==0}function Mr(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function vi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function At(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Cl={DEG2RAD:as};class ae{constructor(e=0,t=0){ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,n,i,r,o,a,c,l){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],m=n[5],g=n[8],M=i[0],p=i[3],d=i[6],S=i[1],x=i[4],E=i[7],L=i[2],C=i[5],T=i[8];return r[0]=o*M+a*S+c*L,r[3]=o*p+a*x+c*C,r[6]=o*d+a*E+c*T,r[1]=l*M+h*S+u*L,r[4]=l*p+h*x+u*C,r[7]=l*d+h*E+u*T,r[2]=f*M+m*S+g*L,r[5]=f*p+m*x+g*C,r[8]=f*d+m*E+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,m=l*r-o*c,g=t*u+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return e[0]=u*M,e[1]=(i*l-h*n)*M,e[2]=(a*n-i*o)*M,e[3]=f*M,e[4]=(h*t-i*c)*M,e[5]=(i*r-a*t)*M,e[6]=m*M,e[7]=(n*c-l*t)*M,e[8]=(o*t-n*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Is.makeScale(e,t)),this}rotate(e){return this.premultiply(Is.makeRotation(-e)),this}translate(e,t){return this.premultiply(Is.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Is=new Ge;function ja(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ai(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Pl(){const s=Ai("canvas");return s.style.display="block",s}const Lo={};function Rl(s){s in Lo||(Lo[s]=!0,console.warn(s))}const Do=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Uo=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ni={[Sn]:{transfer:us,primaries:ds,toReference:s=>s,fromReference:s=>s},[Vt]:{transfer:tt,primaries:ds,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[xs]:{transfer:us,primaries:fs,toReference:s=>s.applyMatrix3(Uo),fromReference:s=>s.applyMatrix3(Do)},[Cr]:{transfer:tt,primaries:fs,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Uo),fromReference:s=>s.applyMatrix3(Do).convertLinearToSRGB()}},Ll=new Set([Sn,xs]),$e={enabled:!0,_workingColorSpace:Sn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Ll.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Ni[e].toReference,i=Ni[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Ni[s].primaries},getTransfer:function(s){return s===dn?us:Ni[s].transfer}};function hi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ns(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Wn;class Ka{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Wn===void 0&&(Wn=Ai("canvas")),Wn.width=e.width,Wn.height=e.height;const n=Wn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Wn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ai("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=hi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(hi(t[n]/255)*255):t[n]=hi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Dl=0;class $a{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dl++}),this.uuid=Ci(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Fs(i[o].image)):r.push(Fs(i[o]))}else r=Fs(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Fs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ka.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ul=0;class Tt extends Gn{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=kt,i=kt,r=Et,o=Nn,a=Ot,c=vn,l=Tt.DEFAULT_ANISOTROPY,h=dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ul++}),this.uuid=Ci(),this.name="",this.source=new $a(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ba)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _r:e.x=e.x-Math.floor(e.x);break;case kt:e.x=e.x<0?0:1;break;case vr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _r:e.y=e.y-Math.floor(e.y);break;case kt:e.y=e.y<0?0:1;break;case vr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=Ba;Tt.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,n=0,i=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],m=c[5],g=c[9],M=c[2],p=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-M)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+M)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,E=(m+1)/2,L=(d+1)/2,C=(h+f)/4,T=(u+M)/4,U=(g+p)/4;return x>E&&x>L?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=C/n,r=T/n):E>L?E<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(E),n=C/i,r=U/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=T/r,i=U/r),this.set(n,i,r,t),this}let S=Math.sqrt((p-g)*(p-g)+(u-M)*(u-M)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(u-M)/S,this.z=(f-h)/S,this.w=Math.acos((l+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Il extends Gn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Et,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const r=new Tt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $a(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zn extends Il{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Za extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=bt,this.minFilter=bt,this.wrapR=kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nl extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=bt,this.minFilter=bt,this.wrapR=kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const f=r[o+0],m=r[o+1],g=r[o+2],M=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=M;return}if(u!==M||c!==f||l!==m||h!==g){let p=1-a;const d=c*f+l*m+h*g+u*M,S=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const L=Math.sqrt(x),C=Math.atan2(L,d*S);p=Math.sin(p*C)/L,a=Math.sin(a*C)/L}const E=a*S;if(c=c*p+f*E,l=l*p+m*E,h=h*p+g*E,u=u*p+M*E,p===1-a){const L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*m-l*f,e[t+1]=c*g+h*f+l*u-a*m,e[t+2]=l*g+h*m+a*f-c*u,e[t+3]=h*g-a*u-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),f=c(n/2),m=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*m*g,this._y=l*m*u-f*h*g,this._z=l*h*g+f*m*u,this._w=l*h*u-f*m*g;break;case"YXZ":this._x=f*h*u+l*m*g,this._y=l*m*u-f*h*g,this._z=l*h*g-f*m*u,this._w=l*h*u+f*m*g;break;case"ZXY":this._x=f*h*u-l*m*g,this._y=l*m*u+f*h*g,this._z=l*h*g+f*m*u,this._w=l*h*u-f*m*g;break;case"ZYX":this._x=f*h*u-l*m*g,this._y=l*m*u+f*h*g,this._z=l*h*g-f*m*u,this._w=l*h*u+f*m*g;break;case"YZX":this._x=f*h*u+l*m*g,this._y=l*m*u+f*h*g,this._z=l*h*g-f*m*u,this._w=l*h*u-f*m*g;break;case"XZY":this._x=f*h*u-l*m*g,this._y=l*m*u-f*h*g,this._z=l*h*g+f*m*u,this._w=l*h*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(o-i)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+l)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(r-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-i)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(e=0,t=0,n=0){w.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Io.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Io.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Os.copy(this).projectOnVector(e),this.sub(Os)}reflect(e){return this.sub(Os.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Os=new w,Io=new Bn;class Pi{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zt):zt.fromBufferAttribute(r,o),zt.applyMatrix4(e.matrixWorld),this.expandByPoint(zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fi.copy(n.boundingBox)),Fi.applyMatrix4(e.matrixWorld),this.union(Fi)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,zt),zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xi),Oi.subVectors(this.max,xi),Xn.subVectors(e.a,xi),qn.subVectors(e.b,xi),Yn.subVectors(e.c,xi),sn.subVectors(qn,Xn),rn.subVectors(Yn,qn),Tn.subVectors(Xn,Yn);let t=[0,-sn.z,sn.y,0,-rn.z,rn.y,0,-Tn.z,Tn.y,sn.z,0,-sn.x,rn.z,0,-rn.x,Tn.z,0,-Tn.x,-sn.y,sn.x,0,-rn.y,rn.x,0,-Tn.y,Tn.x,0];return!zs(t,Xn,qn,Yn,Oi)||(t=[1,0,0,0,1,0,0,0,1],!zs(t,Xn,qn,Yn,Oi))?!1:(zi.crossVectors(sn,rn),t=[zi.x,zi.y,zi.z],zs(t,Xn,qn,Yn,Oi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Kt=[new w,new w,new w,new w,new w,new w,new w,new w],zt=new w,Fi=new Pi,Xn=new w,qn=new w,Yn=new w,sn=new w,rn=new w,Tn=new w,xi=new w,Oi=new w,zi=new w,An=new w;function zs(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){An.fromArray(s,r);const a=i.x*Math.abs(An.x)+i.y*Math.abs(An.y)+i.z*Math.abs(An.z),c=e.dot(An),l=t.dot(An),h=n.dot(An);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Fl=new Pi,Mi=new w,Bs=new w;class Ri{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Fl.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mi.subVectors(e,this.center);const t=Mi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Mi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mi.copy(e.center).add(Bs)),this.expandByPoint(Mi.copy(e.center).sub(Bs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $t=new w,Gs=new w,Bi=new w,on=new w,ks=new w,Gi=new w,Hs=new w;class Ms{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$t)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$t.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($t.copy(this.origin).addScaledVector(this.direction,t),$t.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Gs.copy(e).add(t).multiplyScalar(.5),Bi.copy(t).sub(e).normalize(),on.copy(this.origin).sub(Gs);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Bi),a=on.dot(this.direction),c=-on.dot(Bi),l=on.lengthSq(),h=Math.abs(1-o*o);let u,f,m,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){const M=1/h;u*=M,f*=M,m=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),m=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),m=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Gs).addScaledVector(Bi,f),m}intersectSphere(e,t){$t.subVectors(e.center,this.origin);const n=$t.dot(this.direction),i=$t.dot($t)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,$t)!==null}intersectTriangle(e,t,n,i,r){ks.subVectors(t,e),Gi.subVectors(n,e),Hs.crossVectors(ks,Gi);let o=this.direction.dot(Hs),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;on.subVectors(this.origin,e);const c=a*this.direction.dot(Gi.crossVectors(on,Gi));if(c<0)return null;const l=a*this.direction.dot(ks.cross(on));if(l<0||c+l>o)return null;const h=-a*on.dot(Hs);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(e,t,n,i,r,o,a,c,l,h,u,f,m,g,M,p){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,f,m,g,M,p)}set(e,t,n,i,r,o,a,c,l,h,u,f,m,g,M,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=g,d[11]=M,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/jn.setFromMatrixColumn(e,0).length(),r=1/jn.setFromMatrixColumn(e,1).length(),o=1/jn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,m=o*u,g=a*h,M=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=m+g*l,t[5]=f-M*l,t[9]=-a*c,t[2]=M-f*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*h,m=c*u,g=l*h,M=l*u;t[0]=f+M*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=M+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*h,m=c*u,g=l*h,M=l*u;t[0]=f-M*a,t[4]=-o*u,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=M-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*h,m=o*u,g=a*h,M=a*u;t[0]=c*h,t[4]=g*l-m,t[8]=f*l+M,t[1]=c*u,t[5]=M*l+f,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,m=o*l,g=a*c,M=a*l;t[0]=c*h,t[4]=M-f*u,t[8]=g*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=m*u+g,t[10]=f-M*u}else if(e.order==="XZY"){const f=o*c,m=o*l,g=a*c,M=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+M,t[5]=o*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=a*h,t[10]=M*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ol,e,zl)}lookAt(e,t,n){const i=this.elements;return Lt.subVectors(e,t),Lt.lengthSq()===0&&(Lt.z=1),Lt.normalize(),an.crossVectors(n,Lt),an.lengthSq()===0&&(Math.abs(n.z)===1?Lt.x+=1e-4:Lt.z+=1e-4,Lt.normalize(),an.crossVectors(n,Lt)),an.normalize(),ki.crossVectors(Lt,an),i[0]=an.x,i[4]=ki.x,i[8]=Lt.x,i[1]=an.y,i[5]=ki.y,i[9]=Lt.y,i[2]=an.z,i[6]=ki.z,i[10]=Lt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],m=n[13],g=n[2],M=n[6],p=n[10],d=n[14],S=n[3],x=n[7],E=n[11],L=n[15],C=i[0],T=i[4],U=i[8],V=i[12],_=i[1],A=i[5],q=i[9],$=i[13],D=i[2],X=i[6],G=i[10],Z=i[14],W=i[3],K=i[7],J=i[11],re=i[15];return r[0]=o*C+a*_+c*D+l*W,r[4]=o*T+a*A+c*X+l*K,r[8]=o*U+a*q+c*G+l*J,r[12]=o*V+a*$+c*Z+l*re,r[1]=h*C+u*_+f*D+m*W,r[5]=h*T+u*A+f*X+m*K,r[9]=h*U+u*q+f*G+m*J,r[13]=h*V+u*$+f*Z+m*re,r[2]=g*C+M*_+p*D+d*W,r[6]=g*T+M*A+p*X+d*K,r[10]=g*U+M*q+p*G+d*J,r[14]=g*V+M*$+p*Z+d*re,r[3]=S*C+x*_+E*D+L*W,r[7]=S*T+x*A+E*X+L*K,r[11]=S*U+x*q+E*G+L*J,r[15]=S*V+x*$+E*Z+L*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],m=e[14],g=e[3],M=e[7],p=e[11],d=e[15];return g*(+r*c*u-i*l*u-r*a*f+n*l*f+i*a*m-n*c*m)+M*(+t*c*m-t*l*f+r*o*f-i*o*m+i*l*h-r*c*h)+p*(+t*l*u-t*a*m-r*o*u+n*o*m+r*a*h-n*l*h)+d*(-i*a*h-t*c*u+t*a*f+i*o*u-n*o*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],m=e[11],g=e[12],M=e[13],p=e[14],d=e[15],S=u*p*l-M*f*l+M*c*m-a*p*m-u*c*d+a*f*d,x=g*f*l-h*p*l-g*c*m+o*p*m+h*c*d-o*f*d,E=h*M*l-g*u*l+g*a*m-o*M*m-h*a*d+o*u*d,L=g*u*c-h*M*c-g*a*f+o*M*f+h*a*p-o*u*p,C=t*S+n*x+i*E+r*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return e[0]=S*T,e[1]=(M*f*r-u*p*r-M*i*m+n*p*m+u*i*d-n*f*d)*T,e[2]=(a*p*r-M*c*r+M*i*l-n*p*l-a*i*d+n*c*d)*T,e[3]=(u*c*r-a*f*r-u*i*l+n*f*l+a*i*m-n*c*m)*T,e[4]=x*T,e[5]=(h*p*r-g*f*r+g*i*m-t*p*m-h*i*d+t*f*d)*T,e[6]=(g*c*r-o*p*r-g*i*l+t*p*l+o*i*d-t*c*d)*T,e[7]=(o*f*r-h*c*r+h*i*l-t*f*l-o*i*m+t*c*m)*T,e[8]=E*T,e[9]=(g*u*r-h*M*r-g*n*m+t*M*m+h*n*d-t*u*d)*T,e[10]=(o*M*r-g*a*r+g*n*l-t*M*l-o*n*d+t*a*d)*T,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*m-t*a*m)*T,e[12]=L*T,e[13]=(h*M*i-g*u*i+g*n*f-t*M*f-h*n*p+t*u*p)*T,e[14]=(g*a*i-o*M*i-g*n*c+t*M*c+o*n*p-t*a*p)*T,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*f+t*a*f)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,m=r*h,g=r*u,M=o*h,p=o*u,d=a*u,S=c*l,x=c*h,E=c*u,L=n.x,C=n.y,T=n.z;return i[0]=(1-(M+d))*L,i[1]=(m+E)*L,i[2]=(g-x)*L,i[3]=0,i[4]=(m-E)*C,i[5]=(1-(f+d))*C,i[6]=(p+S)*C,i[7]=0,i[8]=(g+x)*T,i[9]=(p-S)*T,i[10]=(1-(f+M))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=jn.set(i[0],i[1],i[2]).length();const o=jn.set(i[4],i[5],i[6]).length(),a=jn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Bt.copy(this);const l=1/r,h=1/o,u=1/a;return Bt.elements[0]*=l,Bt.elements[1]*=l,Bt.elements[2]*=l,Bt.elements[4]*=h,Bt.elements[5]*=h,Bt.elements[6]*=h,Bt.elements[8]*=u,Bt.elements[9]*=u,Bt.elements[10]*=u,t.setFromRotationMatrix(Bt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=nn){const c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let m,g;if(a===nn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ps)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=nn){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-r),f=(t+e)*l,m=(n+i)*h;let g,M;if(a===nn)g=(o+r)*u,M=-2*u;else if(a===ps)g=r*u,M=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=M,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const jn=new w,Bt=new Je,Ol=new w(0,0,0),zl=new w(1,1,1),an=new w,ki=new w,Lt=new w,No=new Je,Fo=new Bn;class Ht{constructor(e=0,t=0,n=0,i=Ht.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return No.makeRotationFromQuaternion(e),this.setFromRotationMatrix(No,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fo.setFromEuler(this),this.setFromQuaternion(Fo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ht.DEFAULT_ORDER="XYZ";class Ja{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bl=0;const Oo=new w,Kn=new Bn,Zt=new Je,Hi=new w,Si=new w,Gl=new w,kl=new Bn,zo=new w(1,0,0),Bo=new w(0,1,0),Go=new w(0,0,1),Hl={type:"added"},Vl={type:"removed"},Vs={type:"childadded",child:null},Ws={type:"childremoved",child:null};class ct extends Gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bl++}),this.uuid=Ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DEFAULT_UP.clone();const e=new w,t=new Ht,n=new Bn,i=new w(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Je},normalMatrix:{value:new Ge}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ja,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Kn.setFromAxisAngle(e,t),this.quaternion.multiply(Kn),this}rotateOnWorldAxis(e,t){return Kn.setFromAxisAngle(e,t),this.quaternion.premultiply(Kn),this}rotateX(e){return this.rotateOnAxis(zo,e)}rotateY(e){return this.rotateOnAxis(Bo,e)}rotateZ(e){return this.rotateOnAxis(Go,e)}translateOnAxis(e,t){return Oo.copy(e).applyQuaternion(this.quaternion),this.position.add(Oo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zo,e)}translateY(e){return this.translateOnAxis(Bo,e)}translateZ(e){return this.translateOnAxis(Go,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Hi.copy(e):Hi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Si.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zt.lookAt(Si,Hi,this.up):Zt.lookAt(Hi,Si,this.up),this.quaternion.setFromRotationMatrix(Zt),i&&(Zt.extractRotation(i.matrixWorld),Kn.setFromRotationMatrix(Zt),this.quaternion.premultiply(Kn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Hl),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vl),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Si,e,Gl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Si,kl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ct.DEFAULT_UP=new w(0,1,0);ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gt=new w,Jt=new w,Xs=new w,Qt=new w,$n=new w,Zn=new w,ko=new w,qs=new w,Ys=new w,js=new w;class Xt{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Gt.subVectors(e,t),i.cross(Gt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Gt.subVectors(i,t),Jt.subVectors(n,t),Xs.subVectors(e,t);const o=Gt.dot(Gt),a=Gt.dot(Jt),c=Gt.dot(Xs),l=Jt.dot(Jt),h=Jt.dot(Xs),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,m=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Qt)===null?!1:Qt.x>=0&&Qt.y>=0&&Qt.x+Qt.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Qt)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Qt.x),c.addScaledVector(o,Qt.y),c.addScaledVector(a,Qt.z),c)}static isFrontFacing(e,t,n,i){return Gt.subVectors(n,t),Jt.subVectors(e,t),Gt.cross(Jt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gt.subVectors(this.c,this.b),Jt.subVectors(this.a,this.b),Gt.cross(Jt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Xt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Xt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;$n.subVectors(i,n),Zn.subVectors(r,n),qs.subVectors(e,n);const c=$n.dot(qs),l=Zn.dot(qs);if(c<=0&&l<=0)return t.copy(n);Ys.subVectors(e,i);const h=$n.dot(Ys),u=Zn.dot(Ys);if(h>=0&&u<=h)return t.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector($n,o);js.subVectors(e,r);const m=$n.dot(js),g=Zn.dot(js);if(g>=0&&m<=g)return t.copy(r);const M=m*l-c*g;if(M<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Zn,a);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return ko.subVectors(r,i),a=(u-h)/(u-h+(m-g)),t.copy(i).addScaledVector(ko,a);const d=1/(p+M+f);return o=M*d,a=f*d,t.copy(n).addScaledVector($n,o).addScaledVector(Zn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Qa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cn={h:0,s:0,l:0},Vi={h:0,s:0,l:0};function Ks(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Se{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=$e.workingColorSpace){if(e=Al(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ks(o,r,e+1/3),this.g=Ks(o,r,e),this.b=Ks(o,r,e-1/3)}return $e.toWorkingColorSpace(this,i),this}setStyle(e,t=Vt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const n=Qa[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}copyLinearToSRGB(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return $e.fromWorkingColorSpace(yt.copy(this),e),Math.round(gt(yt.r*255,0,255))*65536+Math.round(gt(yt.g*255,0,255))*256+Math.round(gt(yt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(yt.copy(this),t);const n=yt.r,i=yt.g,r=yt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(yt.copy(this),t),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=Vt){$e.fromWorkingColorSpace(yt.copy(this),e);const t=yt.r,n=yt.g,i=yt.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(cn),this.setHSL(cn.h+e,cn.s+t,cn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(cn),e.getHSL(Vi);const n=Us(cn.h,Vi.h,t),i=Us(cn.s,Vi.s,t),r=Us(cn.l,Vi.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yt=new Se;Se.NAMES=Qa;let Wl=0;class yn extends Gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wl++}),this.uuid=Ci(),this.name="",this.type="Material",this.blending=li,this.side=xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fr,this.blendDst=pr,this.blendEquation=Un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ao,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vn,this.stencilZFail=Vn,this.stencilZPass=Vn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==li&&(n.blending=this.blending),this.side!==xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fr&&(n.blendSrc=this.blendSrc),this.blendDst!==pr&&(n.blendDst=this.blendDst),this.blendEquation!==Un&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ao&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ss extends yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ht,this.combine=br,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new w,Wi=new ae;class qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Co,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Rl("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Wi.fromBufferAttribute(this,t),Wi.applyMatrix3(e),this.setXY(t,Wi.x,Wi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Co&&(e.usage=this.usage),e}}class ec extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class tc extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Xe extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Xl=0;const Ft=new Je,$s=new ct,Jn=new w,Dt=new Pi,yi=new Pi,mt=new w;class _t extends Gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xl++}),this.uuid=Ci(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ja(e)?tc:ec)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ft.makeRotationFromQuaternion(e),this.applyMatrix4(Ft),this}rotateX(e){return Ft.makeRotationX(e),this.applyMatrix4(Ft),this}rotateY(e){return Ft.makeRotationY(e),this.applyMatrix4(Ft),this}rotateZ(e){return Ft.makeRotationZ(e),this.applyMatrix4(Ft),this}translate(e,t,n){return Ft.makeTranslation(e,t,n),this.applyMatrix4(Ft),this}scale(e,t,n){return Ft.makeScale(e,t,n),this.applyMatrix4(Ft),this}lookAt(e){return $s.lookAt(e),$s.updateMatrix(),this.applyMatrix4($s.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jn).negate(),this.translate(Jn.x,Jn.y,Jn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Xe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Dt.setFromBufferAttribute(r),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){const n=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];yi.setFromBufferAttribute(a),this.morphTargetsRelative?(mt.addVectors(Dt.min,yi.min),Dt.expandByPoint(mt),mt.addVectors(Dt.max,yi.max),Dt.expandByPoint(mt)):(Dt.expandByPoint(yi.min),Dt.expandByPoint(yi.max))}Dt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)mt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(mt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)mt.fromBufferAttribute(a,l),c&&(Jn.fromBufferAttribute(e,l),mt.add(Jn)),i=Math.max(i,n.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let U=0;U<n.count;U++)a[U]=new w,c[U]=new w;const l=new w,h=new w,u=new w,f=new ae,m=new ae,g=new ae,M=new w,p=new w;function d(U,V,_){l.fromBufferAttribute(n,U),h.fromBufferAttribute(n,V),u.fromBufferAttribute(n,_),f.fromBufferAttribute(r,U),m.fromBufferAttribute(r,V),g.fromBufferAttribute(r,_),h.sub(l),u.sub(l),m.sub(f),g.sub(f);const A=1/(m.x*g.y-g.x*m.y);isFinite(A)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(A),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(A),a[U].add(M),a[V].add(M),a[_].add(M),c[U].add(p),c[V].add(p),c[_].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let U=0,V=S.length;U<V;++U){const _=S[U],A=_.start,q=_.count;for(let $=A,D=A+q;$<D;$+=3)d(e.getX($+0),e.getX($+1),e.getX($+2))}const x=new w,E=new w,L=new w,C=new w;function T(U){L.fromBufferAttribute(i,U),C.copy(L);const V=a[U];x.copy(V),x.sub(L.multiplyScalar(L.dot(V))).normalize(),E.crossVectors(C,V);const A=E.dot(c[U])<0?-1:1;o.setXYZW(U,x.x,x.y,x.z,A)}for(let U=0,V=S.length;U<V;++U){const _=S[U],A=_.start,q=_.count;for(let $=A,D=A+q;$<D;$+=3)T(e.getX($+0)),T(e.getX($+1)),T(e.getX($+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new w,r=new w,o=new w,a=new w,c=new w,l=new w,h=new w,u=new w;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),M=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let m=0,g=0;for(let M=0,p=c.length;M<p;M++){a.isInterleavedBufferAttribute?m=c[M]*a.data.stride+a.offset:m=c[M]*h;for(let d=0;d<h;d++)f[g++]=l[m++]}return new qt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _t,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],m=e(f,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const m=l[u];h.push(m.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ho=new Je,Cn=new Ms,Xi=new Ri,Vo=new w,Qn=new w,ei=new w,ti=new w,Zs=new w,qi=new w,Yi=new ae,ji=new ae,Ki=new ae,Wo=new w,Xo=new w,qo=new w,$i=new w,Zi=new w;class be extends ct{constructor(e=new _t,t=new Ss){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){qi.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Zs.fromBufferAttribute(u,e),o?qi.addScaledVector(Zs,h):qi.addScaledVector(Zs.sub(t),h))}t.add(qi)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xi.copy(n.boundingSphere),Xi.applyMatrix4(r),Cn.copy(e.ray).recast(e.near),!(Xi.containsPoint(Cn.origin)===!1&&(Cn.intersectSphere(Xi,Vo)===null||Cn.origin.distanceToSquared(Vo)>(e.far-e.near)**2))&&(Ho.copy(r).invert(),Cn.copy(e.ray).applyMatrix4(Ho),!(n.boundingBox!==null&&Cn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Cn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,M=f.length;g<M;g++){const p=f[g],d=o[p.materialIndex],S=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let E=S,L=x;E<L;E+=3){const C=a.getX(E),T=a.getX(E+1),U=a.getX(E+2);i=Ji(this,d,e,n,l,h,u,C,T,U),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),M=Math.min(a.count,m.start+m.count);for(let p=g,d=M;p<d;p+=3){const S=a.getX(p),x=a.getX(p+1),E=a.getX(p+2);i=Ji(this,o,e,n,l,h,u,S,x,E),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,M=f.length;g<M;g++){const p=f[g],d=o[p.materialIndex],S=Math.max(p.start,m.start),x=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let E=S,L=x;E<L;E+=3){const C=E,T=E+1,U=E+2;i=Ji(this,d,e,n,l,h,u,C,T,U),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),M=Math.min(c.count,m.start+m.count);for(let p=g,d=M;p<d;p+=3){const S=p,x=p+1,E=p+2;i=Ji(this,o,e,n,l,h,u,S,x,E),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function ql(s,e,t,n,i,r,o,a){let c;if(e.side===vt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===xn,a),c===null)return null;Zi.copy(a),Zi.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Zi);return l<t.near||l>t.far?null:{distance:l,point:Zi.clone(),object:s}}function Ji(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,Qn),s.getVertexPosition(c,ei),s.getVertexPosition(l,ti);const h=ql(s,e,t,n,Qn,ei,ti,$i);if(h){i&&(Yi.fromBufferAttribute(i,a),ji.fromBufferAttribute(i,c),Ki.fromBufferAttribute(i,l),h.uv=Xt.getInterpolation($i,Qn,ei,ti,Yi,ji,Ki,new ae)),r&&(Yi.fromBufferAttribute(r,a),ji.fromBufferAttribute(r,c),Ki.fromBufferAttribute(r,l),h.uv1=Xt.getInterpolation($i,Qn,ei,ti,Yi,ji,Ki,new ae)),o&&(Wo.fromBufferAttribute(o,a),Xo.fromBufferAttribute(o,c),qo.fromBufferAttribute(o,l),h.normal=Xt.getInterpolation($i,Qn,ei,ti,Wo,Xo,qo,new w),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new w,materialIndex:0};Xt.getNormal(Qn,ei,ti,u.normal),h.face=u}return h}class It extends _t{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Xe(l,3)),this.setAttribute("normal",new Xe(h,3)),this.setAttribute("uv",new Xe(u,2));function g(M,p,d,S,x,E,L,C,T,U,V){const _=E/T,A=L/U,q=E/2,$=L/2,D=C/2,X=T+1,G=U+1;let Z=0,W=0;const K=new w;for(let J=0;J<G;J++){const re=J*A-$;for(let fe=0;fe<X;fe++){const Re=fe*_-q;K[M]=Re*S,K[p]=re*x,K[d]=D,l.push(K.x,K.y,K.z),K[M]=0,K[p]=0,K[d]=C>0?1:-1,h.push(K.x,K.y,K.z),u.push(fe/T),u.push(1-J/U),Z+=1}}for(let J=0;J<U;J++)for(let re=0;re<T;re++){const fe=f+re+X*J,Re=f+re+X*(J+1),k=f+(re+1)+X*(J+1),te=f+(re+1)+X*J;c.push(fe,Re,te),c.push(Re,k,te),W+=6}a.addGroup(m,W,V),m+=W,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new It(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function pi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function wt(s){const e={};for(let t=0;t<s.length;t++){const n=pi(s[t]);for(const i in n)e[i]=n[i]}return e}function Yl(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function nc(s){return s.getRenderTarget()===null?s.outputColorSpace:$e.workingColorSpace}const jl={clone:pi,merge:wt};var Kl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$l=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mn extends yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kl,this.fragmentShader=$l,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pi(e.uniforms),this.uniformsGroups=Yl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ic extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=nn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ln=new w,Yo=new ae,jo=new ae;class Ct extends ic{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ms*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(as*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(as*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ln.x,ln.y).multiplyScalar(-e/ln.z),ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ln.x,ln.y).multiplyScalar(-e/ln.z)}getViewSize(e,t){return this.getViewBounds(e,Yo,jo),t.subVectors(jo,Yo)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(as*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ni=-90,ii=1;class Zl extends ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ct(ni,ii,e,t);i.layers=this.layers,this.add(i);const r=new Ct(ni,ii,e,t);r.layers=this.layers,this.add(r);const o=new Ct(ni,ii,e,t);o.layers=this.layers,this.add(o);const a=new Ct(ni,ii,e,t);a.layers=this.layers,this.add(a);const c=new Ct(ni,ii,e,t);c.layers=this.layers,this.add(c);const l=new Ct(ni,ii,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===nn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ps)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class sc extends Tt{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:ui,super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jl extends zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new sc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Et}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new It(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vt,blending:gn});r.uniforms.tEquirect.value=t;const o=new be(i,r),a=t.minFilter;return t.minFilter===Nn&&(t.minFilter=Et),new Zl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Js=new w,Ql=new w,eh=new Ge;class hn{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Js.subVectors(n,t).cross(Ql.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Js),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||eh.getNormalMatrix(e),i=this.coplanarPoint(Js).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pn=new Ri,Qi=new w;class Pr{constructor(e=new hn,t=new hn,n=new hn,i=new hn,r=new hn,o=new hn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=nn){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],m=i[8],g=i[9],M=i[10],p=i[11],d=i[12],S=i[13],x=i[14],E=i[15];if(n[0].setComponents(c-r,f-l,p-m,E-d).normalize(),n[1].setComponents(c+r,f+l,p+m,E+d).normalize(),n[2].setComponents(c+o,f+h,p+g,E+S).normalize(),n[3].setComponents(c-o,f-h,p-g,E-S).normalize(),n[4].setComponents(c-a,f-u,p-M,E-x).normalize(),t===nn)n[5].setComponents(c+a,f+u,p+M,E+x).normalize();else if(t===ps)n[5].setComponents(a,u,M,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pn)}intersectsSprite(e){return Pn.center.set(0,0,0),Pn.radius=.7071067811865476,Pn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Qi.x=i.normal.x>0?e.max.x:e.min.x,Qi.y=i.normal.y>0?e.max.y:e.min.y,Qi.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Qi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rc(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function th(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,h){const u=l.array,f=l.usage,m=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,f),l.onUploadCallback();let M;if(u instanceof Float32Array)M=s.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)M=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)M=s.SHORT;else if(u instanceof Uint32Array)M=s.UNSIGNED_INT;else if(u instanceof Int32Array)M=s.INT;else if(u instanceof Int8Array)M=s.BYTE;else if(u instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:M,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,h,u){const f=h.array,m=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,l),m.count===-1&&g.length===0&&s.bufferSubData(u,0,f),g.length!==0){for(let M=0,p=g.length;M<p;M++){const d=g[M];t?s.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):s.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}m.count!==-1&&(t?s.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):s.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);if(u===void 0)n.set(l,i(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}class pn extends _t{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,f=t/c,m=[],g=[],M=[],p=[];for(let d=0;d<h;d++){const S=d*f-o;for(let x=0;x<l;x++){const E=x*u-r;g.push(E,-S,0),M.push(0,0,1),p.push(x/a),p.push(1-d/c)}}for(let d=0;d<c;d++)for(let S=0;S<a;S++){const x=S+l*d,E=S+l*(d+1),L=S+1+l*(d+1),C=S+1+l*d;m.push(x,E,C),m.push(E,L,C)}this.setIndex(m),this.setAttribute("position",new Xe(g,3)),this.setAttribute("normal",new Xe(M,3)),this.setAttribute("uv",new Xe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pn(e.width,e.height,e.widthSegments,e.heightSegments)}}var nh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ih=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ah=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ch=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,uh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,dh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ph=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_h=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,vh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Eh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,wh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,bh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Th=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ah=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ch=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ph=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Ih=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Nh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Oh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Wh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Xh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Kh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$h=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,iu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,su=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ru=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ou=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,au=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,cu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,lu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,du=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_u=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,vu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,xu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Mu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Su=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Tu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Au=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ru=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Du=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Iu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ou=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Bu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ku=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ju=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ku=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$u=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ju=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ed=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,td=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,id=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ad=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ld=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,hd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ud=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,md=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_d=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Md=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Sd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ed=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Td=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ad=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ld=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ud=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Id=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:nh,alphahash_pars_fragment:ih,alphamap_fragment:sh,alphamap_pars_fragment:rh,alphatest_fragment:oh,alphatest_pars_fragment:ah,aomap_fragment:ch,aomap_pars_fragment:lh,batching_pars_vertex:hh,batching_vertex:uh,begin_vertex:dh,beginnormal_vertex:fh,bsdfs:ph,iridescence_fragment:mh,bumpmap_pars_fragment:gh,clipping_planes_fragment:_h,clipping_planes_pars_fragment:vh,clipping_planes_pars_vertex:xh,clipping_planes_vertex:Mh,color_fragment:Sh,color_pars_fragment:yh,color_pars_vertex:Eh,color_vertex:wh,common:bh,cube_uv_reflection_fragment:Th,defaultnormal_vertex:Ah,displacementmap_pars_vertex:Ch,displacementmap_vertex:Ph,emissivemap_fragment:Rh,emissivemap_pars_fragment:Lh,colorspace_fragment:Dh,colorspace_pars_fragment:Uh,envmap_fragment:Ih,envmap_common_pars_fragment:Nh,envmap_pars_fragment:Fh,envmap_pars_vertex:Oh,envmap_physical_pars_fragment:Kh,envmap_vertex:zh,fog_vertex:Bh,fog_pars_vertex:Gh,fog_fragment:kh,fog_pars_fragment:Hh,gradientmap_pars_fragment:Vh,lightmap_fragment:Wh,lightmap_pars_fragment:Xh,lights_lambert_fragment:qh,lights_lambert_pars_fragment:Yh,lights_pars_begin:jh,lights_toon_fragment:$h,lights_toon_pars_fragment:Zh,lights_phong_fragment:Jh,lights_phong_pars_fragment:Qh,lights_physical_fragment:eu,lights_physical_pars_fragment:tu,lights_fragment_begin:nu,lights_fragment_maps:iu,lights_fragment_end:su,logdepthbuf_fragment:ru,logdepthbuf_pars_fragment:ou,logdepthbuf_pars_vertex:au,logdepthbuf_vertex:cu,map_fragment:lu,map_pars_fragment:hu,map_particle_fragment:uu,map_particle_pars_fragment:du,metalnessmap_fragment:fu,metalnessmap_pars_fragment:pu,morphinstance_vertex:mu,morphcolor_vertex:gu,morphnormal_vertex:_u,morphtarget_pars_vertex:vu,morphtarget_vertex:xu,normal_fragment_begin:Mu,normal_fragment_maps:Su,normal_pars_fragment:yu,normal_pars_vertex:Eu,normal_vertex:wu,normalmap_pars_fragment:bu,clearcoat_normal_fragment_begin:Tu,clearcoat_normal_fragment_maps:Au,clearcoat_pars_fragment:Cu,iridescence_pars_fragment:Pu,opaque_fragment:Ru,packing:Lu,premultiplied_alpha_fragment:Du,project_vertex:Uu,dithering_fragment:Iu,dithering_pars_fragment:Nu,roughnessmap_fragment:Fu,roughnessmap_pars_fragment:Ou,shadowmap_pars_fragment:zu,shadowmap_pars_vertex:Bu,shadowmap_vertex:Gu,shadowmask_pars_fragment:ku,skinbase_vertex:Hu,skinning_pars_vertex:Vu,skinning_vertex:Wu,skinnormal_vertex:Xu,specularmap_fragment:qu,specularmap_pars_fragment:Yu,tonemapping_fragment:ju,tonemapping_pars_fragment:Ku,transmission_fragment:$u,transmission_pars_fragment:Zu,uv_pars_fragment:Ju,uv_pars_vertex:Qu,uv_vertex:ed,worldpos_vertex:td,background_vert:nd,background_frag:id,backgroundCube_vert:sd,backgroundCube_frag:rd,cube_vert:od,cube_frag:ad,depth_vert:cd,depth_frag:ld,distanceRGBA_vert:hd,distanceRGBA_frag:ud,equirect_vert:dd,equirect_frag:fd,linedashed_vert:pd,linedashed_frag:md,meshbasic_vert:gd,meshbasic_frag:_d,meshlambert_vert:vd,meshlambert_frag:xd,meshmatcap_vert:Md,meshmatcap_frag:Sd,meshnormal_vert:yd,meshnormal_frag:Ed,meshphong_vert:wd,meshphong_frag:bd,meshphysical_vert:Td,meshphysical_frag:Ad,meshtoon_vert:Cd,meshtoon_frag:Pd,points_vert:Rd,points_frag:Ld,shadow_vert:Dd,shadow_frag:Ud,sprite_vert:Id,sprite_frag:Nd},ce={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Wt={basic:{uniforms:wt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:wt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Se(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:wt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:wt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:wt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Se(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:wt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:wt([ce.points,ce.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:wt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:wt([ce.common,ce.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:wt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:wt([ce.sprite,ce.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:wt([ce.common,ce.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:wt([ce.lights,ce.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Wt.physical={uniforms:wt([Wt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const es={r:0,b:0,g:0},Rn=new Ht,Fd=new Je;function Od(s,e,t,n,i,r,o){const a=new Se(0);let c=r===!0?0:1,l,h,u=null,f=0,m=null;function g(p,d){let S=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?t:e).get(x)),x===null?M(a,c):x&&x.isColor&&(M(x,1),S=!0);const E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||S)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===vs)?(h===void 0&&(h=new be(new It(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:pi(Wt.backgroundCube.uniforms),vertexShader:Wt.backgroundCube.vertexShader,fragmentShader:Wt.backgroundCube.fragmentShader,side:vt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Rn.copy(d.backgroundRotation),Rn.x*=-1,Rn.y*=-1,Rn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Rn.y*=-1,Rn.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Fd.makeRotationFromEuler(Rn)),h.material.toneMapped=$e.getTransfer(x.colorSpace)!==tt,(u!==x||f!==x.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,m=s.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new be(new pn(2,2),new Mn({name:"BackgroundMaterial",uniforms:pi(Wt.background.uniforms),vertexShader:Wt.background.vertexShader,fragmentShader:Wt.background.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=$e.getTransfer(x.colorSpace)!==tt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||m!==s.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,m=s.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function M(p,d){p.getRGB(es,nc(s)),n.buffers.color.setClear(es.r,es.g,es.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),c=d,M(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,M(a,c)},render:g}}function zd(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=p(null);let l=c,h=!1;function u(D,X,G,Z,W){let K=!1;if(o){const J=M(Z,G,X);l!==J&&(l=J,m(l.object)),K=d(D,Z,G,W),K&&S(D,Z,G,W)}else{const J=X.wireframe===!0;(l.geometry!==Z.id||l.program!==G.id||l.wireframe!==J)&&(l.geometry=Z.id,l.program=G.id,l.wireframe=J,K=!0)}W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),(K||h)&&(h=!1,U(D,X,G,Z),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(D){return n.isWebGL2?s.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?s.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function M(D,X,G){const Z=G.wireframe===!0;let W=a[D.id];W===void 0&&(W={},a[D.id]=W);let K=W[X.id];K===void 0&&(K={},W[X.id]=K);let J=K[Z];return J===void 0&&(J=p(f()),K[Z]=J),J}function p(D){const X=[],G=[],Z=[];for(let W=0;W<i;W++)X[W]=0,G[W]=0,Z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:G,attributeDivisors:Z,object:D,attributes:{},index:null}}function d(D,X,G,Z){const W=l.attributes,K=X.attributes;let J=0;const re=G.getAttributes();for(const fe in re)if(re[fe].location>=0){const k=W[fe];let te=K[fe];if(te===void 0&&(fe==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),fe==="instanceColor"&&D.instanceColor&&(te=D.instanceColor)),k===void 0||k.attribute!==te||te&&k.data!==te.data)return!0;J++}return l.attributesNum!==J||l.index!==Z}function S(D,X,G,Z){const W={},K=X.attributes;let J=0;const re=G.getAttributes();for(const fe in re)if(re[fe].location>=0){let k=K[fe];k===void 0&&(fe==="instanceMatrix"&&D.instanceMatrix&&(k=D.instanceMatrix),fe==="instanceColor"&&D.instanceColor&&(k=D.instanceColor));const te={};te.attribute=k,k&&k.data&&(te.data=k.data),W[fe]=te,J++}l.attributes=W,l.attributesNum=J,l.index=Z}function x(){const D=l.newAttributes;for(let X=0,G=D.length;X<G;X++)D[X]=0}function E(D){L(D,0)}function L(D,X){const G=l.newAttributes,Z=l.enabledAttributes,W=l.attributeDivisors;G[D]=1,Z[D]===0&&(s.enableVertexAttribArray(D),Z[D]=1),W[D]!==X&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,X),W[D]=X)}function C(){const D=l.newAttributes,X=l.enabledAttributes;for(let G=0,Z=X.length;G<Z;G++)X[G]!==D[G]&&(s.disableVertexAttribArray(G),X[G]=0)}function T(D,X,G,Z,W,K,J){J===!0?s.vertexAttribIPointer(D,X,G,W,K):s.vertexAttribPointer(D,X,G,Z,W,K)}function U(D,X,G,Z){if(n.isWebGL2===!1&&(D.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const W=Z.attributes,K=G.getAttributes(),J=X.defaultAttributeValues;for(const re in K){const fe=K[re];if(fe.location>=0){let Re=W[re];if(Re===void 0&&(re==="instanceMatrix"&&D.instanceMatrix&&(Re=D.instanceMatrix),re==="instanceColor"&&D.instanceColor&&(Re=D.instanceColor)),Re!==void 0){const k=Re.normalized,te=Re.itemSize,de=t.get(Re);if(de===void 0)continue;const Ce=de.buffer,xe=de.type,pe=de.bytesPerElement,qe=n.isWebGL2===!0&&(xe===s.INT||xe===s.UNSIGNED_INT||Re.gpuType===Ga);if(Re.isInterleavedBufferAttribute){const Ae=Re.data,N=Ae.stride,ht=Re.offset;if(Ae.isInstancedInterleavedBuffer){for(let ye=0;ye<fe.locationSize;ye++)L(fe.location+ye,Ae.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let ye=0;ye<fe.locationSize;ye++)E(fe.location+ye);s.bindBuffer(s.ARRAY_BUFFER,Ce);for(let ye=0;ye<fe.locationSize;ye++)T(fe.location+ye,te/fe.locationSize,xe,k,N*pe,(ht+te/fe.locationSize*ye)*pe,qe)}else{if(Re.isInstancedBufferAttribute){for(let Ae=0;Ae<fe.locationSize;Ae++)L(fe.location+Ae,Re.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let Ae=0;Ae<fe.locationSize;Ae++)E(fe.location+Ae);s.bindBuffer(s.ARRAY_BUFFER,Ce);for(let Ae=0;Ae<fe.locationSize;Ae++)T(fe.location+Ae,te/fe.locationSize,xe,k,te*pe,te/fe.locationSize*Ae*pe,qe)}}else if(J!==void 0){const k=J[re];if(k!==void 0)switch(k.length){case 2:s.vertexAttrib2fv(fe.location,k);break;case 3:s.vertexAttrib3fv(fe.location,k);break;case 4:s.vertexAttrib4fv(fe.location,k);break;default:s.vertexAttrib1fv(fe.location,k)}}}}C()}function V(){q();for(const D in a){const X=a[D];for(const G in X){const Z=X[G];for(const W in Z)g(Z[W].object),delete Z[W];delete X[G]}delete a[D]}}function _(D){if(a[D.id]===void 0)return;const X=a[D.id];for(const G in X){const Z=X[G];for(const W in Z)g(Z[W].object),delete Z[W];delete X[G]}delete a[D.id]}function A(D){for(const X in a){const G=a[X];if(G[D.id]===void 0)continue;const Z=G[D.id];for(const W in Z)g(Z[W].object),delete Z[W];delete G[D.id]}}function q(){$(),h=!0,l!==c&&(l=c,m(l.object))}function $(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:q,resetDefaultState:$,dispose:V,releaseStatesOfGeometry:_,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:E,disableUnusedAttributes:C}}function Bd(s,e,t,n){const i=n.isWebGL2;let r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,f){if(f===0)return;let m,g;if(i)m=s,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,u,f),t.update(u,r,f)}function l(h,u,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let M=0;M<f;M++)g+=u[M];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Gd(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),M=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),d=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,E=o||e.has("OES_texture_float"),L=x&&E,C=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:M,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:S,vertexTextures:x,floatFragmentTextures:E,floatVertexTextures:L,maxSamples:C}}function kd(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new hn,a=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||n!==0||i;return i=f,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,m){const g=u.clippingPlanes,M=u.clipIntersection,p=u.clipShadows,d=s.get(u);if(!i||g===null||g.length===0||r&&!p)r?h(null):l();else{const S=r?0:n,x=S*4;let E=d.clippingState||null;c.value=E,E=h(g,f,x,m);for(let L=0;L!==x;++L)E[L]=t[L];d.clippingState=E,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,m,g){const M=u!==null?u.length:0;let p=null;if(M!==0){if(p=c.value,g!==!0||p===null){const d=m+M*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<d)&&(p=new Float32Array(d));for(let x=0,E=m;x!==M;++x,E+=4)o.copy(u[x]).applyMatrix4(S,a),o.normal.toArray(p,E),p[E+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,p}}function Hd(s){let e=new WeakMap;function t(o,a){return a===mr?o.mapping=ui:a===gr&&(o.mapping=di),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===mr||a===gr)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Jl(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class oc extends ic{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ri=4,Ko=[.125,.215,.35,.446,.526,.582],In=20,Qs=new oc,$o=new Se;let er=null,tr=0,nr=0;const Dn=(1+Math.sqrt(5))/2,si=1/Dn,Zo=[new w(1,1,1),new w(-1,1,1),new w(1,1,-1),new w(-1,1,-1),new w(0,Dn,si),new w(0,Dn,-si),new w(si,0,Dn),new w(-si,0,Dn),new w(Dn,si,0),new w(-Dn,si,0)];class Jo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){er=this._renderer.getRenderTarget(),tr=this._renderer.getActiveCubeFace(),nr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ta(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ea(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(er,tr,nr),e.scissorTest=!1,ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ui||e.mapping===di?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),er=this._renderer.getRenderTarget(),tr=this._renderer.getActiveCubeFace(),nr=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:Ti,format:Ot,colorSpace:Sn,depthBuffer:!1},i=Qo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qo(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vd(r)),this._blurMaterial=Wd(r,e,t)}return i}_compileMaterial(e){const t=new be(this._lodPlanes[0],e);this._renderer.compile(t,Qs)}_sceneToCubeUV(e,t,n,i){const a=new Ct(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor($o),h.toneMapping=_n,h.autoClear=!1;const m=new Ss({name:"PMREM.Background",side:vt,depthWrite:!1,depthTest:!1}),g=new be(new It,m);let M=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,M=!0):(m.color.copy($o),M=!0);for(let d=0;d<6;d++){const S=d%3;S===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):S===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));const x=this._cubeSize;ts(i,S*x,d>2?x:0,x,x),h.setRenderTarget(i),M&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ui||e.mapping===di;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ta()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ea());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new be(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;ts(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Qs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Zo[(i-1)%Zo.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new be(this._lodPlanes[i],l),f=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*In-1),M=r/g,p=isFinite(r)?1+Math.floor(h*M):In;p>In&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${In}`);const d=[];let S=0;for(let T=0;T<In;++T){const U=T/M,V=Math.exp(-U*U/2);d.push(V),T===0?S+=V:T<p&&(S+=2*V)}for(let T=0;T<d.length;T++)d[T]=d[T]/S;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const E=this._sizeLods[i],L=3*E*(i>x-ri?i-x+ri:0),C=4*(this._cubeSize-E);ts(t,L,C,3*E,2*E),c.setRenderTarget(t),c.render(u,Qs)}}function Vd(s){const e=[],t=[],n=[];let i=s;const r=s-ri+1+Ko.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-ri?c=Ko[o-s+ri-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,M=3,p=2,d=1,S=new Float32Array(M*g*m),x=new Float32Array(p*g*m),E=new Float32Array(d*g*m);for(let C=0;C<m;C++){const T=C%3*2/3-1,U=C>2?0:-1,V=[T,U,0,T+2/3,U,0,T+2/3,U+1,0,T,U,0,T+2/3,U+1,0,T,U+1,0];S.set(V,M*g*C),x.set(f,p*g*C);const _=[C,C,C,C,C,C];E.set(_,d*g*C)}const L=new _t;L.setAttribute("position",new qt(S,M)),L.setAttribute("uv",new qt(x,p)),L.setAttribute("faceIndex",new qt(E,d)),e.push(L),i>ri&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Qo(s,e,t){const n=new zn(s,e,t);return n.texture.mapping=vs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ts(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Wd(s,e,t){const n=new Float32Array(In),i=new w(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:In,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Rr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function ea(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function ta(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Rr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Xd(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===mr||c===gr,h=c===ui||c===di;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Jo(s)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new Jo(s));const f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function qd(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Yd(s,e,t,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const M=f.morphAttributes[g];for(let p=0,d=M.length;p<d;p++)e.remove(M[p])}f.removeEventListener("dispose",o),delete i[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const g in f)e.update(f[g],s.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const M=m[g];for(let p=0,d=M.length;p<d;p++)e.update(M[p],s.ARRAY_BUFFER)}}function l(u){const f=[],m=u.index,g=u.attributes.position;let M=0;if(m!==null){const S=m.array;M=m.version;for(let x=0,E=S.length;x<E;x+=3){const L=S[x+0],C=S[x+1],T=S[x+2];f.push(L,C,C,T,T,L)}}else if(g!==void 0){const S=g.array;M=g.version;for(let x=0,E=S.length/3-1;x<E;x+=3){const L=x+0,C=x+1,T=x+2;f.push(L,C,C,T,T,L)}}else return;const p=new(ja(f)?tc:ec)(f,1);p.version=M;const d=r.get(u);d&&e.remove(d),r.set(u,p)}function h(u){const f=r.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function jd(s,e,t,n){const i=n.isWebGL2;let r;function o(m){r=m}let a,c;function l(m){a=m.type,c=m.bytesPerElement}function h(m,g){s.drawElements(r,g,a,m*c),t.update(g,r,1)}function u(m,g,M){if(M===0)return;let p,d;if(i)p=s,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](r,g,a,m*c,M),t.update(g,r,M)}function f(m,g,M){if(M===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<M;d++)this.render(m[d]/c,g[d]);else{p.multiDrawElementsWEBGL(r,g,0,a,m,0,M);let d=0;for(let S=0;S<M;S++)d+=g[S];t.update(d,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function Kd(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function $d(s,e){return s[0]-e[0]}function Zd(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Jd(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new it,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){const f=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,M=g!==void 0?g.length:0;let p=r.get(h);if(p===void 0||p.count!==M){let $=function(){A.dispose(),r.delete(h),h.removeEventListener("dispose",$)};var m=$;p!==void 0&&p.texture.dispose();const d=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,x=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],C=h.morphAttributes.color||[];let T=0;d===!0&&(T=1),S===!0&&(T=2),x===!0&&(T=3);let U=h.attributes.position.count*T,V=1;U>e.maxTextureSize&&(V=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const _=new Float32Array(U*V*4*M),A=new Za(_,U,V,M);A.type=tn,A.needsUpdate=!0;const q=T*4;for(let D=0;D<M;D++){const X=E[D],G=L[D],Z=C[D],W=U*V*4*D;for(let K=0;K<X.count;K++){const J=K*q;d===!0&&(o.fromBufferAttribute(X,K),_[W+J+0]=o.x,_[W+J+1]=o.y,_[W+J+2]=o.z,_[W+J+3]=0),S===!0&&(o.fromBufferAttribute(G,K),_[W+J+4]=o.x,_[W+J+5]=o.y,_[W+J+6]=o.z,_[W+J+7]=0),x===!0&&(o.fromBufferAttribute(Z,K),_[W+J+8]=o.x,_[W+J+9]=o.y,_[W+J+10]=o.z,_[W+J+11]=Z.itemSize===4?o.w:1)}}p={count:M,texture:A,size:new ae(U,V)},r.set(h,p),h.addEventListener("dispose",$)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)u.getUniforms().setValue(s,"morphTexture",l.morphTexture,t);else{let d=0;for(let x=0;x<f.length;x++)d+=f[x];const S=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(s,"morphTargetBaseInfluence",S),u.getUniforms().setValue(s,"morphTargetInfluences",f)}u.getUniforms().setValue(s,"morphTargetsTexture",p.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}else{const g=f===void 0?0:f.length;let M=n[h.id];if(M===void 0||M.length!==g){M=[];for(let E=0;E<g;E++)M[E]=[E,0];n[h.id]=M}for(let E=0;E<g;E++){const L=M[E];L[0]=E,L[1]=f[E]}M.sort(Zd);for(let E=0;E<8;E++)E<g&&M[E][1]?(a[E][0]=M[E][0],a[E][1]=M[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort($d);const p=h.morphAttributes.position,d=h.morphAttributes.normal;let S=0;for(let E=0;E<8;E++){const L=a[E],C=L[0],T=L[1];C!==Number.MAX_SAFE_INTEGER&&T?(p&&h.getAttribute("morphTarget"+E)!==p[C]&&h.setAttribute("morphTarget"+E,p[C]),d&&h.getAttribute("morphNormal"+E)!==d[C]&&h.setAttribute("morphNormal"+E,d[C]),i[E]=T,S+=T):(p&&h.hasAttribute("morphTarget"+E)===!0&&h.deleteAttribute("morphTarget"+E),d&&h.hasAttribute("morphNormal"+E)===!0&&h.deleteAttribute("morphNormal"+E),i[E]=0)}const x=h.morphTargetsRelative?1:1-S;u.getUniforms().setValue(s,"morphTargetBaseInfluence",x),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Qd(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class ac extends Tt{constructor(e,t,n,i,r,o,a,c,l,h){if(h=h!==void 0?h:On,h!==On&&h!==fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===On&&(n=fn),n===void 0&&h===fi&&(n=Fn),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:bt,this.minFilter=c!==void 0?c:bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const cc=new Tt,lc=new ac(1,1);lc.compareFunction=Ya;const hc=new Za,uc=new Nl,dc=new sc,na=[],ia=[],sa=new Float32Array(16),ra=new Float32Array(9),oa=new Float32Array(4);function mi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=na[i];if(r===void 0&&(r=new Float32Array(i),na[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function dt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function ft(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ys(s,e){let t=ia[e];t===void 0&&(t=new Int32Array(e),ia[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function ef(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function tf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;s.uniform2fv(this.addr,e),ft(t,e)}}function nf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;s.uniform3fv(this.addr,e),ft(t,e)}}function sf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;s.uniform4fv(this.addr,e),ft(t,e)}}function rf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;oa.set(n),s.uniformMatrix2fv(this.addr,!1,oa),ft(t,n)}}function of(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;ra.set(n),s.uniformMatrix3fv(this.addr,!1,ra),ft(t,n)}}function af(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;sa.set(n),s.uniformMatrix4fv(this.addr,!1,sa),ft(t,n)}}function cf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function lf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;s.uniform2iv(this.addr,e),ft(t,e)}}function hf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;s.uniform3iv(this.addr,e),ft(t,e)}}function uf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;s.uniform4iv(this.addr,e),ft(t,e)}}function df(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function ff(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;s.uniform2uiv(this.addr,e),ft(t,e)}}function pf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;s.uniform3uiv(this.addr,e),ft(t,e)}}function mf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;s.uniform4uiv(this.addr,e),ft(t,e)}}function gf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?lc:cc;t.setTexture2D(e||r,i)}function _f(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||uc,i)}function vf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||dc,i)}function xf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||hc,i)}function Mf(s){switch(s){case 5126:return ef;case 35664:return tf;case 35665:return nf;case 35666:return sf;case 35674:return rf;case 35675:return of;case 35676:return af;case 5124:case 35670:return cf;case 35667:case 35671:return lf;case 35668:case 35672:return hf;case 35669:case 35673:return uf;case 5125:return df;case 36294:return ff;case 36295:return pf;case 36296:return mf;case 35678:case 36198:case 36298:case 36306:case 35682:return gf;case 35679:case 36299:case 36307:return _f;case 35680:case 36300:case 36308:case 36293:return vf;case 36289:case 36303:case 36311:case 36292:return xf}}function Sf(s,e){s.uniform1fv(this.addr,e)}function yf(s,e){const t=mi(e,this.size,2);s.uniform2fv(this.addr,t)}function Ef(s,e){const t=mi(e,this.size,3);s.uniform3fv(this.addr,t)}function wf(s,e){const t=mi(e,this.size,4);s.uniform4fv(this.addr,t)}function bf(s,e){const t=mi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Tf(s,e){const t=mi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Af(s,e){const t=mi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Cf(s,e){s.uniform1iv(this.addr,e)}function Pf(s,e){s.uniform2iv(this.addr,e)}function Rf(s,e){s.uniform3iv(this.addr,e)}function Lf(s,e){s.uniform4iv(this.addr,e)}function Df(s,e){s.uniform1uiv(this.addr,e)}function Uf(s,e){s.uniform2uiv(this.addr,e)}function If(s,e){s.uniform3uiv(this.addr,e)}function Nf(s,e){s.uniform4uiv(this.addr,e)}function Ff(s,e,t){const n=this.cache,i=e.length,r=ys(t,i);dt(n,r)||(s.uniform1iv(this.addr,r),ft(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||cc,r[o])}function Of(s,e,t){const n=this.cache,i=e.length,r=ys(t,i);dt(n,r)||(s.uniform1iv(this.addr,r),ft(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||uc,r[o])}function zf(s,e,t){const n=this.cache,i=e.length,r=ys(t,i);dt(n,r)||(s.uniform1iv(this.addr,r),ft(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||dc,r[o])}function Bf(s,e,t){const n=this.cache,i=e.length,r=ys(t,i);dt(n,r)||(s.uniform1iv(this.addr,r),ft(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||hc,r[o])}function Gf(s){switch(s){case 5126:return Sf;case 35664:return yf;case 35665:return Ef;case 35666:return wf;case 35674:return bf;case 35675:return Tf;case 35676:return Af;case 5124:case 35670:return Cf;case 35667:case 35671:return Pf;case 35668:case 35672:return Rf;case 35669:case 35673:return Lf;case 5125:return Df;case 36294:return Uf;case 36295:return If;case 36296:return Nf;case 35678:case 36198:case 36298:case 36306:case 35682:return Ff;case 35679:case 36299:case 36307:return Of;case 35680:case 36300:case 36308:case 36293:return zf;case 36289:case 36303:case 36311:case 36292:return Bf}}class kf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Mf(t.type)}}class Hf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Gf(t.type)}}class Vf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const ir=/(\w+)(\])?(\[|\.)?/g;function aa(s,e){s.seq.push(e),s.map[e.id]=e}function Wf(s,e,t){const n=s.name,i=n.length;for(ir.lastIndex=0;;){const r=ir.exec(n),o=ir.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){aa(t,l===void 0?new kf(a,s,e):new Hf(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Vf(a),aa(t,u)),t=u}}}class cs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Wf(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function ca(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Xf=37297;let qf=0;function Yf(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function jf(s){const e=$e.getPrimaries($e.workingColorSpace),t=$e.getPrimaries(s);let n;switch(e===t?n="":e===fs&&t===ds?n="LinearDisplayP3ToLinearSRGB":e===ds&&t===fs&&(n="LinearSRGBToLinearDisplayP3"),s){case Sn:case xs:return[n,"LinearTransferOETF"];case Vt:case Cr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function la(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Yf(s.getShaderSource(e),o)}else return i}function Kf(s,e){const t=jf(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function $f(s,e){let t;switch(e){case nl:t="Linear";break;case il:t="Reinhard";break;case sl:t="OptimizedCineon";break;case rl:t="ACESFilmic";break;case al:t="AgX";break;case cl:t="Neutral";break;case ol:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Zf(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.alphaToCoverage||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(oi).join(`
`)}function Jf(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oi).join(`
`)}function Qf(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ep(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function oi(s){return s!==""}function ha(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ua(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sr(s){return s.replace(tp,ip)}const np=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ip(s,e){let t=Be[e];if(t===void 0){const n=np.get(e);if(n!==void 0)t=Be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Sr(t)}const sp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function da(s){return s.replace(sp,rp)}function rp(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function fa(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	`;return s.isWebGL2&&(e+=`precision ${s.precision} sampler3D;
		precision ${s.precision} sampler2DArray;
		precision ${s.precision} sampler2DShadow;
		precision ${s.precision} samplerCubeShadow;
		precision ${s.precision} sampler2DArrayShadow;
		precision ${s.precision} isampler2D;
		precision ${s.precision} isampler3D;
		precision ${s.precision} isamplerCube;
		precision ${s.precision} isampler2DArray;
		precision ${s.precision} usampler2D;
		precision ${s.precision} usampler3D;
		precision ${s.precision} usamplerCube;
		precision ${s.precision} usampler2DArray;
		`),s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function op(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===za?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===wr?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===en&&(e="SHADOWMAP_TYPE_VSM"),e}function ap(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ui:case di:e="ENVMAP_TYPE_CUBE";break;case vs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cp(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case di:e="ENVMAP_MODE_REFRACTION";break}return e}function lp(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case br:e="ENVMAP_BLENDING_MULTIPLY";break;case el:e="ENVMAP_BLENDING_MIX";break;case tl:e="ENVMAP_BLENDING_ADD";break}return e}function hp(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function up(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=op(t),l=ap(t),h=cp(t),u=lp(t),f=hp(t),m=t.isWebGL2?"":Zf(t),g=Jf(t),M=Qf(r),p=i.createProgram();let d,S,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(oi).join(`
`),d.length>0&&(d+=`
`),S=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(oi).join(`
`),S.length>0&&(S+=`
`)):(d=[fa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oi).join(`
`),S=[m,fa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_n?"#define TONE_MAPPING":"",t.toneMapping!==_n?Be.tonemapping_pars_fragment:"",t.toneMapping!==_n?$f("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Kf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(oi).join(`
`)),o=Sr(o),o=ha(o,t),o=ua(o,t),a=Sr(a),a=ha(a,t),a=ua(a,t),o=da(o),a=da(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Po?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Po?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const E=x+d+o,L=x+S+a,C=ca(i,i.VERTEX_SHADER,E),T=ca(i,i.FRAGMENT_SHADER,L);i.attachShader(p,C),i.attachShader(p,T),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function U(q){if(s.debug.checkShaderErrors){const $=i.getProgramInfoLog(p).trim(),D=i.getShaderInfoLog(C).trim(),X=i.getShaderInfoLog(T).trim();let G=!0,Z=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,C,T);else{const W=la(i,C,"vertex"),K=la(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+$+`
`+W+`
`+K)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(D===""||X==="")&&(Z=!1);Z&&(q.diagnostics={runnable:G,programLog:$,vertexShader:{log:D,prefix:d},fragmentShader:{log:X,prefix:S}})}i.deleteShader(C),i.deleteShader(T),V=new cs(i,p),_=ep(i,p)}let V;this.getUniforms=function(){return V===void 0&&U(this),V};let _;this.getAttributes=function(){return _===void 0&&U(this),_};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=i.getProgramParameter(p,Xf)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qf++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=C,this.fragmentShader=T,this}let dp=0;class fp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new pp(e),t.set(e,n)),n}}class pp{constructor(e){this.id=dp++,this.code=e,this.usedTimes=0}}function mp(s,e,t,n,i,r,o){const a=new Ja,c=new fp,l=new Set,h=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,m=i.vertexTextures;let g=i.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function d(_,A,q,$,D){const X=$.fog,G=D.geometry,Z=_.isMeshStandardMaterial?$.environment:null,W=(_.isMeshStandardMaterial?t:e).get(_.envMap||Z),K=W&&W.mapping===vs?W.image.height:null,J=M[_.type];_.precision!==null&&(g=i.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const re=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,fe=re!==void 0?re.length:0;let Re=0;G.morphAttributes.position!==void 0&&(Re=1),G.morphAttributes.normal!==void 0&&(Re=2),G.morphAttributes.color!==void 0&&(Re=3);let k,te,de,Ce;if(J){const je=Wt[J];k=je.vertexShader,te=je.fragmentShader}else k=_.vertexShader,te=_.fragmentShader,c.update(_),de=c.getVertexShaderID(_),Ce=c.getFragmentShaderID(_);const xe=s.getRenderTarget(),pe=D.isInstancedMesh===!0,qe=D.isBatchedMesh===!0,Ae=!!_.map,N=!!_.matcap,ht=!!W,ye=!!_.aoMap,Ie=!!_.lightMap,Ee=!!_.bumpMap,We=!!_.normalMap,Ne=!!_.displacementMap,Oe=!!_.emissiveMap,Qe=!!_.metalnessMap,b=!!_.roughnessMap,v=_.anisotropy>0,H=_.clearcoat>0,Y=_.iridescence>0,ne=_.sheen>0,Q=_.transmission>0,Le=v&&!!_.anisotropyMap,we=H&&!!_.clearcoatMap,oe=H&&!!_.clearcoatNormalMap,le=H&&!!_.clearcoatRoughnessMap,De=Y&&!!_.iridescenceMap,se=Y&&!!_.iridescenceThicknessMap,rt=ne&&!!_.sheenColorMap,ke=ne&&!!_.sheenRoughnessMap,Me=!!_.specularMap,me=!!_.specularColorMap,_e=!!_.specularIntensityMap,P=Q&&!!_.transmissionMap,j=Q&&!!_.thicknessMap,ge=!!_.gradientMap,R=!!_.alphaMap,ie=_.alphaTest>0,F=!!_.alphaHash,ee=!!_.extensions;let he=_n;_.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(he=s.toneMapping);const Ve={isWebGL2:u,shaderID:J,shaderType:_.type,shaderName:_.name,vertexShader:k,fragmentShader:te,defines:_.defines,customVertexShaderID:de,customFragmentShaderID:Ce,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:qe,instancing:pe,instancingColor:pe&&D.instanceColor!==null,instancingMorph:pe&&D.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:xe===null?s.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Sn,alphaToCoverage:!!_.alphaToCoverage,map:Ae,matcap:N,envMap:ht,envMapMode:ht&&W.mapping,envMapCubeUVHeight:K,aoMap:ye,lightMap:Ie,bumpMap:Ee,normalMap:We,displacementMap:m&&Ne,emissiveMap:Oe,normalMapObjectSpace:We&&_.normalMapType===xl,normalMapTangentSpace:We&&_.normalMapType===Ar,metalnessMap:Qe,roughnessMap:b,anisotropy:v,anisotropyMap:Le,clearcoat:H,clearcoatMap:we,clearcoatNormalMap:oe,clearcoatRoughnessMap:le,iridescence:Y,iridescenceMap:De,iridescenceThicknessMap:se,sheen:ne,sheenColorMap:rt,sheenRoughnessMap:ke,specularMap:Me,specularColorMap:me,specularIntensityMap:_e,transmission:Q,transmissionMap:P,thicknessMap:j,gradientMap:ge,opaque:_.transparent===!1&&_.blending===li&&_.alphaToCoverage===!1,alphaMap:R,alphaTest:ie,alphaHash:F,combine:_.combine,mapUv:Ae&&p(_.map.channel),aoMapUv:ye&&p(_.aoMap.channel),lightMapUv:Ie&&p(_.lightMap.channel),bumpMapUv:Ee&&p(_.bumpMap.channel),normalMapUv:We&&p(_.normalMap.channel),displacementMapUv:Ne&&p(_.displacementMap.channel),emissiveMapUv:Oe&&p(_.emissiveMap.channel),metalnessMapUv:Qe&&p(_.metalnessMap.channel),roughnessMapUv:b&&p(_.roughnessMap.channel),anisotropyMapUv:Le&&p(_.anisotropyMap.channel),clearcoatMapUv:we&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:oe&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:se&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:ke&&p(_.sheenRoughnessMap.channel),specularMapUv:Me&&p(_.specularMap.channel),specularColorMapUv:me&&p(_.specularColorMap.channel),specularIntensityMapUv:_e&&p(_.specularIntensityMap.channel),transmissionMapUv:P&&p(_.transmissionMap.channel),thicknessMapUv:j&&p(_.thicknessMap.channel),alphaMapUv:R&&p(_.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(We||v),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!G.attributes.uv&&(Ae||R),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:D.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Re,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&q.length>0,shadowMapType:s.shadowMap.type,toneMapping:he,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Ae&&_.map.isVideoTexture===!0&&$e.getTransfer(_.map.colorSpace)===tt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ut,flipSided:_.side===vt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:ee&&_.extensions.derivatives===!0,extensionFragDepth:ee&&_.extensions.fragDepth===!0,extensionDrawBuffers:ee&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:ee&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ee&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ee&&_.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ve.vertexUv1s=l.has(1),Ve.vertexUv2s=l.has(2),Ve.vertexUv3s=l.has(3),l.clear(),Ve}function S(_){const A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(const q in _.defines)A.push(q),A.push(_.defines[q]);return _.isRawShaderMaterial===!1&&(x(A,_),E(A,_),A.push(s.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function x(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function E(_,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.instancingMorph&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.normalMapObjectSpace&&a.enable(7),A.normalMapTangentSpace&&a.enable(8),A.clearcoat&&a.enable(9),A.iridescence&&a.enable(10),A.alphaTest&&a.enable(11),A.vertexColors&&a.enable(12),A.vertexAlphas&&a.enable(13),A.vertexUv1s&&a.enable(14),A.vertexUv2s&&a.enable(15),A.vertexUv3s&&a.enable(16),A.vertexTangents&&a.enable(17),A.anisotropy&&a.enable(18),A.alphaHash&&a.enable(19),A.batching&&a.enable(20),_.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.alphaToCoverage&&a.enable(20),_.push(a.mask)}function L(_){const A=M[_.type];let q;if(A){const $=Wt[A];q=jl.clone($.uniforms)}else q=_.uniforms;return q}function C(_,A){let q;for(let $=0,D=h.length;$<D;$++){const X=h[$];if(X.cacheKey===A){q=X,++q.usedTimes;break}}return q===void 0&&(q=new up(s,A,_,r),h.push(q)),q}function T(_){if(--_.usedTimes===0){const A=h.indexOf(_);h[A]=h[h.length-1],h.pop(),_.destroy()}}function U(_){c.remove(_)}function V(){c.dispose()}return{getParameters:d,getProgramCacheKey:S,getUniforms:L,acquireProgram:C,releaseProgram:T,releaseShaderCache:U,programs:h,dispose:V}}function gp(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function _p(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function pa(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ma(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,m,g,M,p){let d=s[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:M,group:p},s[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=M,d.group=p),e++,d}function a(u,f,m,g,M,p){const d=o(u,f,m,g,M,p);m.transmission>0?n.push(d):m.transparent===!0?i.push(d):t.push(d)}function c(u,f,m,g,M,p){const d=o(u,f,m,g,M,p);m.transmission>0?n.unshift(d):m.transparent===!0?i.unshift(d):t.unshift(d)}function l(u,f){t.length>1&&t.sort(u||_p),n.length>1&&n.sort(f||pa),i.length>1&&i.sort(f||pa)}function h(){for(let u=e,f=s.length;u<f;u++){const m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function vp(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new ma,s.set(n,[o])):i>=r.length?(o=new ma,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function xp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new Se};break;case"SpotLight":t={position:new w,direction:new w,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new w,halfWidth:new w,halfHeight:new w};break}return s[e.id]=t,t}}}function Mp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Sp=0;function yp(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Ep(s,e){const t=new xp,n=Mp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new w);const r=new w,o=new Je,a=new Je;function c(h,u){let f=0,m=0,g=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let M=0,p=0,d=0,S=0,x=0,E=0,L=0,C=0,T=0,U=0,V=0;h.sort(yp);const _=u===!0?Math.PI:1;for(let q=0,$=h.length;q<$;q++){const D=h[q],X=D.color,G=D.intensity,Z=D.distance,W=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=X.r*G*_,m+=X.g*G*_,g+=X.b*G*_;else if(D.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(D.sh.coefficients[K],G);V++}else if(D.isDirectionalLight){const K=t.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity*_),D.castShadow){const J=D.shadow,re=n.get(D);re.shadowBias=J.bias,re.shadowNormalBias=J.normalBias,re.shadowRadius=J.radius,re.shadowMapSize=J.mapSize,i.directionalShadow[M]=re,i.directionalShadowMap[M]=W,i.directionalShadowMatrix[M]=D.shadow.matrix,E++}i.directional[M]=K,M++}else if(D.isSpotLight){const K=t.get(D);K.position.setFromMatrixPosition(D.matrixWorld),K.color.copy(X).multiplyScalar(G*_),K.distance=Z,K.coneCos=Math.cos(D.angle),K.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),K.decay=D.decay,i.spot[d]=K;const J=D.shadow;if(D.map&&(i.spotLightMap[T]=D.map,T++,J.updateMatrices(D),D.castShadow&&U++),i.spotLightMatrix[d]=J.matrix,D.castShadow){const re=n.get(D);re.shadowBias=J.bias,re.shadowNormalBias=J.normalBias,re.shadowRadius=J.radius,re.shadowMapSize=J.mapSize,i.spotShadow[d]=re,i.spotShadowMap[d]=W,C++}d++}else if(D.isRectAreaLight){const K=t.get(D);K.color.copy(X).multiplyScalar(G),K.halfWidth.set(D.width*.5,0,0),K.halfHeight.set(0,D.height*.5,0),i.rectArea[S]=K,S++}else if(D.isPointLight){const K=t.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity*_),K.distance=D.distance,K.decay=D.decay,D.castShadow){const J=D.shadow,re=n.get(D);re.shadowBias=J.bias,re.shadowNormalBias=J.normalBias,re.shadowRadius=J.radius,re.shadowMapSize=J.mapSize,re.shadowCameraNear=J.camera.near,re.shadowCameraFar=J.camera.far,i.pointShadow[p]=re,i.pointShadowMap[p]=W,i.pointShadowMatrix[p]=D.shadow.matrix,L++}i.point[p]=K,p++}else if(D.isHemisphereLight){const K=t.get(D);K.skyColor.copy(D.color).multiplyScalar(G*_),K.groundColor.copy(D.groundColor).multiplyScalar(G*_),i.hemi[x]=K,x++}}S>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const A=i.hash;(A.directionalLength!==M||A.pointLength!==p||A.spotLength!==d||A.rectAreaLength!==S||A.hemiLength!==x||A.numDirectionalShadows!==E||A.numPointShadows!==L||A.numSpotShadows!==C||A.numSpotMaps!==T||A.numLightProbes!==V)&&(i.directional.length=M,i.spot.length=d,i.rectArea.length=S,i.point.length=p,i.hemi.length=x,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=C+T-U,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=V,A.directionalLength=M,A.pointLength=p,A.spotLength=d,A.rectAreaLength=S,A.hemiLength=x,A.numDirectionalShadows=E,A.numPointShadows=L,A.numSpotShadows=C,A.numSpotMaps=T,A.numLightProbes=V,i.version=Sp++)}function l(h,u){let f=0,m=0,g=0,M=0,p=0;const d=u.matrixWorldInverse;for(let S=0,x=h.length;S<x;S++){const E=h[S];if(E.isDirectionalLight){const L=i.directional[f];L.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(d),f++}else if(E.isSpotLight){const L=i.spot[g];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(d),L.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(d),g++}else if(E.isRectAreaLight){const L=i.rectArea[M];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(d),a.identity(),o.copy(E.matrixWorld),o.premultiply(d),a.extractRotation(o),L.halfWidth.set(E.width*.5,0,0),L.halfHeight.set(0,E.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),M++}else if(E.isPointLight){const L=i.point[m];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(d),m++}else if(E.isHemisphereLight){const L=i.hemi[p];L.direction.setFromMatrixPosition(E.matrixWorld),L.direction.transformDirection(d),p++}}}return{setup:c,setupView:l,state:i}}function ga(s,e){const t=new Ep(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function wp(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let c;return a===void 0?(c=new ga(s,e),t.set(r,[c])):o>=a.length?(c=new ga(s,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class bp extends yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_l,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Tp extends yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ap=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Pp(s,e,t){let n=new Pr;const i=new ae,r=new ae,o=new it,a=new bp({depthPacking:vl}),c=new Tp,l={},h=t.maxTextureSize,u={[xn]:vt,[vt]:xn,[Ut]:Ut},f=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:Ap,fragmentShader:Cp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new _t;g.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new be(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=za;let d=this.type;this.render=function(C,T,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const V=s.getRenderTarget(),_=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),q=s.state;q.setBlending(gn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const $=d!==en&&this.type===en,D=d===en&&this.type!==en;for(let X=0,G=C.length;X<G;X++){const Z=C[X],W=Z.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const K=W.getFrameExtents();if(i.multiply(K),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/K.x),i.x=r.x*K.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/K.y),i.y=r.y*K.y,W.mapSize.y=r.y)),W.map===null||$===!0||D===!0){const re=this.type!==en?{minFilter:bt,magFilter:bt}:{};W.map!==null&&W.map.dispose(),W.map=new zn(i.x,i.y,re),W.map.texture.name=Z.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const J=W.getViewportCount();for(let re=0;re<J;re++){const fe=W.getViewport(re);o.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),q.viewport(o),W.updateMatrices(Z,re),n=W.getFrustum(),E(T,U,W.camera,Z,this.type)}W.isPointLightShadow!==!0&&this.type===en&&S(W,U),W.needsUpdate=!1}d=this.type,p.needsUpdate=!1,s.setRenderTarget(V,_,A)};function S(C,T){const U=e.update(M);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new zn(i.x,i.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(T,null,U,f,M,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(T,null,U,m,M,null)}function x(C,T,U,V){let _=null;const A=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(A!==void 0)_=A;else if(_=U.isPointLight===!0?c:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const q=_.uuid,$=T.uuid;let D=l[q];D===void 0&&(D={},l[q]=D);let X=D[$];X===void 0&&(X=_.clone(),D[$]=X,T.addEventListener("dispose",L)),_=X}if(_.visible=T.visible,_.wireframe=T.wireframe,V===en?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:u[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,U.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const q=s.properties.get(_);q.light=U}return _}function E(C,T,U,V,_){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&_===en)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const $=e.update(C),D=C.material;if(Array.isArray(D)){const X=$.groups;for(let G=0,Z=X.length;G<Z;G++){const W=X[G],K=D[W.materialIndex];if(K&&K.visible){const J=x(C,K,V,_);C.onBeforeShadow(s,C,T,U,$,J,W),s.renderBufferDirect(U,null,$,J,C,W),C.onAfterShadow(s,C,T,U,$,J,W)}}}else if(D.visible){const X=x(C,D,V,_);C.onBeforeShadow(s,C,T,U,$,X,null),s.renderBufferDirect(U,null,$,X,C,null),C.onAfterShadow(s,C,T,U,$,X,null)}}const q=C.children;for(let $=0,D=q.length;$<D;$++)E(q[$],T,U,V,_)}function L(C){C.target.removeEventListener("dispose",L);for(const U in l){const V=l[U],_=C.target.uuid;_ in V&&(V[_].dispose(),delete V[_])}}}function Rp(s,e,t){const n=t.isWebGL2;function i(){let R=!1;const ie=new it;let F=null;const ee=new it(0,0,0,0);return{setMask:function(he){F!==he&&!R&&(s.colorMask(he,he,he,he),F=he)},setLocked:function(he){R=he},setClear:function(he,Ve,je,Ze,ot){ot===!0&&(he*=Ze,Ve*=Ze,je*=Ze),ie.set(he,Ve,je,Ze),ee.equals(ie)===!1&&(s.clearColor(he,Ve,je,Ze),ee.copy(ie))},reset:function(){R=!1,F=null,ee.set(-1,0,0,0)}}}function r(){let R=!1,ie=null,F=null,ee=null;return{setTest:function(he){he?pe(s.DEPTH_TEST):qe(s.DEPTH_TEST)},setMask:function(he){ie!==he&&!R&&(s.depthMask(he),ie=he)},setFunc:function(he){if(F!==he){switch(he){case Yc:s.depthFunc(s.NEVER);break;case jc:s.depthFunc(s.ALWAYS);break;case Kc:s.depthFunc(s.LESS);break;case hs:s.depthFunc(s.LEQUAL);break;case $c:s.depthFunc(s.EQUAL);break;case Zc:s.depthFunc(s.GEQUAL);break;case Jc:s.depthFunc(s.GREATER);break;case Qc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}F=he}},setLocked:function(he){R=he},setClear:function(he){ee!==he&&(s.clearDepth(he),ee=he)},reset:function(){R=!1,ie=null,F=null,ee=null}}}function o(){let R=!1,ie=null,F=null,ee=null,he=null,Ve=null,je=null,Ze=null,ot=null;return{setTest:function(Ye){R||(Ye?pe(s.STENCIL_TEST):qe(s.STENCIL_TEST))},setMask:function(Ye){ie!==Ye&&!R&&(s.stencilMask(Ye),ie=Ye)},setFunc:function(Ye,et,xt){(F!==Ye||ee!==et||he!==xt)&&(s.stencilFunc(Ye,et,xt),F=Ye,ee=et,he=xt)},setOp:function(Ye,et,xt){(Ve!==Ye||je!==et||Ze!==xt)&&(s.stencilOp(Ye,et,xt),Ve=Ye,je=et,Ze=xt)},setLocked:function(Ye){R=Ye},setClear:function(Ye){ot!==Ye&&(s.clearStencil(Ye),ot=Ye)},reset:function(){R=!1,ie=null,F=null,ee=null,he=null,Ve=null,je=null,Ze=null,ot=null}}}const a=new i,c=new r,l=new o,h=new WeakMap,u=new WeakMap;let f={},m={},g=new WeakMap,M=[],p=null,d=!1,S=null,x=null,E=null,L=null,C=null,T=null,U=null,V=new Se(0,0,0),_=0,A=!1,q=null,$=null,D=null,X=null,G=null;const Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,K=0;const J=s.getParameter(s.VERSION);J.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(J)[1]),W=K>=1):J.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),W=K>=2);let re=null,fe={};const Re=s.getParameter(s.SCISSOR_BOX),k=s.getParameter(s.VIEWPORT),te=new it().fromArray(Re),de=new it().fromArray(k);function Ce(R,ie,F,ee){const he=new Uint8Array(4),Ve=s.createTexture();s.bindTexture(R,Ve),s.texParameteri(R,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(R,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let je=0;je<F;je++)n&&(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)?s.texImage3D(ie,0,s.RGBA,1,1,ee,0,s.RGBA,s.UNSIGNED_BYTE,he):s.texImage2D(ie+je,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,he);return Ve}const xe={};xe[s.TEXTURE_2D]=Ce(s.TEXTURE_2D,s.TEXTURE_2D,1),xe[s.TEXTURE_CUBE_MAP]=Ce(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(xe[s.TEXTURE_2D_ARRAY]=Ce(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),xe[s.TEXTURE_3D]=Ce(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),pe(s.DEPTH_TEST),c.setFunc(hs),Ne(!1),Oe(jr),pe(s.CULL_FACE),Ee(gn);function pe(R){f[R]!==!0&&(s.enable(R),f[R]=!0)}function qe(R){f[R]!==!1&&(s.disable(R),f[R]=!1)}function Ae(R,ie){return m[R]!==ie?(s.bindFramebuffer(R,ie),m[R]=ie,n&&(R===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=ie),R===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=ie)),!0):!1}function N(R,ie){let F=M,ee=!1;if(R){F=g.get(ie),F===void 0&&(F=[],g.set(ie,F));const he=R.textures;if(F.length!==he.length||F[0]!==s.COLOR_ATTACHMENT0){for(let Ve=0,je=he.length;Ve<je;Ve++)F[Ve]=s.COLOR_ATTACHMENT0+Ve;F.length=he.length,ee=!0}}else F[0]!==s.BACK&&(F[0]=s.BACK,ee=!0);if(ee)if(t.isWebGL2)s.drawBuffers(F);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(F);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function ht(R){return p!==R?(s.useProgram(R),p=R,!0):!1}const ye={[Un]:s.FUNC_ADD,[Dc]:s.FUNC_SUBTRACT,[Uc]:s.FUNC_REVERSE_SUBTRACT};if(n)ye[Jr]=s.MIN,ye[Qr]=s.MAX;else{const R=e.get("EXT_blend_minmax");R!==null&&(ye[Jr]=R.MIN_EXT,ye[Qr]=R.MAX_EXT)}const Ie={[Ic]:s.ZERO,[Nc]:s.ONE,[Fc]:s.SRC_COLOR,[fr]:s.SRC_ALPHA,[Hc]:s.SRC_ALPHA_SATURATE,[Gc]:s.DST_COLOR,[zc]:s.DST_ALPHA,[Oc]:s.ONE_MINUS_SRC_COLOR,[pr]:s.ONE_MINUS_SRC_ALPHA,[kc]:s.ONE_MINUS_DST_COLOR,[Bc]:s.ONE_MINUS_DST_ALPHA,[Vc]:s.CONSTANT_COLOR,[Wc]:s.ONE_MINUS_CONSTANT_COLOR,[Xc]:s.CONSTANT_ALPHA,[qc]:s.ONE_MINUS_CONSTANT_ALPHA};function Ee(R,ie,F,ee,he,Ve,je,Ze,ot,Ye){if(R===gn){d===!0&&(qe(s.BLEND),d=!1);return}if(d===!1&&(pe(s.BLEND),d=!0),R!==Lc){if(R!==S||Ye!==A){if((x!==Un||C!==Un)&&(s.blendEquation(s.FUNC_ADD),x=Un,C=Un),Ye)switch(R){case li:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kr:s.blendFunc(s.ONE,s.ONE);break;case $r:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Zr:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case li:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case $r:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Zr:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}E=null,L=null,T=null,U=null,V.set(0,0,0),_=0,S=R,A=Ye}return}he=he||ie,Ve=Ve||F,je=je||ee,(ie!==x||he!==C)&&(s.blendEquationSeparate(ye[ie],ye[he]),x=ie,C=he),(F!==E||ee!==L||Ve!==T||je!==U)&&(s.blendFuncSeparate(Ie[F],Ie[ee],Ie[Ve],Ie[je]),E=F,L=ee,T=Ve,U=je),(Ze.equals(V)===!1||ot!==_)&&(s.blendColor(Ze.r,Ze.g,Ze.b,ot),V.copy(Ze),_=ot),S=R,A=!1}function We(R,ie){R.side===Ut?qe(s.CULL_FACE):pe(s.CULL_FACE);let F=R.side===vt;ie&&(F=!F),Ne(F),R.blending===li&&R.transparent===!1?Ee(gn):Ee(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),c.setFunc(R.depthFunc),c.setTest(R.depthTest),c.setMask(R.depthWrite),a.setMask(R.colorWrite);const ee=R.stencilWrite;l.setTest(ee),ee&&(l.setMask(R.stencilWriteMask),l.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),l.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),b(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?pe(s.SAMPLE_ALPHA_TO_COVERAGE):qe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(R){q!==R&&(R?s.frontFace(s.CW):s.frontFace(s.CCW),q=R)}function Oe(R){R!==Pc?(pe(s.CULL_FACE),R!==$&&(R===jr?s.cullFace(s.BACK):R===Rc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):qe(s.CULL_FACE),$=R}function Qe(R){R!==D&&(W&&s.lineWidth(R),D=R)}function b(R,ie,F){R?(pe(s.POLYGON_OFFSET_FILL),(X!==ie||G!==F)&&(s.polygonOffset(ie,F),X=ie,G=F)):qe(s.POLYGON_OFFSET_FILL)}function v(R){R?pe(s.SCISSOR_TEST):qe(s.SCISSOR_TEST)}function H(R){R===void 0&&(R=s.TEXTURE0+Z-1),re!==R&&(s.activeTexture(R),re=R)}function Y(R,ie,F){F===void 0&&(re===null?F=s.TEXTURE0+Z-1:F=re);let ee=fe[F];ee===void 0&&(ee={type:void 0,texture:void 0},fe[F]=ee),(ee.type!==R||ee.texture!==ie)&&(re!==F&&(s.activeTexture(F),re=F),s.bindTexture(R,ie||xe[R]),ee.type=R,ee.texture=ie)}function ne(){const R=fe[re];R!==void 0&&R.type!==void 0&&(s.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Q(){try{s.compressedTexImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Le(){try{s.compressedTexImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function we(){try{s.texSubImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function oe(){try{s.texSubImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function le(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function De(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function se(){try{s.texStorage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function rt(){try{s.texStorage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ke(){try{s.texImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Me(){try{s.texImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function me(R){te.equals(R)===!1&&(s.scissor(R.x,R.y,R.z,R.w),te.copy(R))}function _e(R){de.equals(R)===!1&&(s.viewport(R.x,R.y,R.z,R.w),de.copy(R))}function P(R,ie){let F=u.get(ie);F===void 0&&(F=new WeakMap,u.set(ie,F));let ee=F.get(R);ee===void 0&&(ee=s.getUniformBlockIndex(ie,R.name),F.set(R,ee))}function j(R,ie){const ee=u.get(ie).get(R);h.get(ie)!==ee&&(s.uniformBlockBinding(ie,ee,R.__bindingPointIndex),h.set(ie,ee))}function ge(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},re=null,fe={},m={},g=new WeakMap,M=[],p=null,d=!1,S=null,x=null,E=null,L=null,C=null,T=null,U=null,V=new Se(0,0,0),_=0,A=!1,q=null,$=null,D=null,X=null,G=null,te.set(0,0,s.canvas.width,s.canvas.height),de.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:pe,disable:qe,bindFramebuffer:Ae,drawBuffers:N,useProgram:ht,setBlending:Ee,setMaterial:We,setFlipSided:Ne,setCullFace:Oe,setLineWidth:Qe,setPolygonOffset:b,setScissorTest:v,activeTexture:H,bindTexture:Y,unbindTexture:ne,compressedTexImage2D:Q,compressedTexImage3D:Le,texImage2D:ke,texImage3D:Me,updateUBOMapping:P,uniformBlockBinding:j,texStorage2D:se,texStorage3D:rt,texSubImage2D:we,texSubImage3D:oe,compressedTexSubImage2D:le,compressedTexSubImage3D:De,scissor:me,viewport:_e,reset:ge}}function Lp(s,e,t,n,i,r,o){const a=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ae,u=new WeakMap;let f;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(b,v){return g?new OffscreenCanvas(b,v):Ai("canvas")}function p(b,v,H,Y){let ne=1;const Q=Qe(b);if((Q.width>Y||Q.height>Y)&&(ne=Y/Math.max(Q.width,Q.height)),ne<1||v===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Le=v?Mr:Math.floor,we=Le(ne*Q.width),oe=Le(ne*Q.height);f===void 0&&(f=M(we,oe));const le=H?M(we,oe):f;return le.width=we,le.height=oe,le.getContext("2d").drawImage(b,0,0,we,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+we+"x"+oe+")."),le}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),b;return b}function d(b){const v=Qe(b);return Ro(v.width)&&Ro(v.height)}function S(b){return a?!1:b.wrapS!==kt||b.wrapT!==kt||b.minFilter!==bt&&b.minFilter!==Et}function x(b,v){return b.generateMipmaps&&v&&b.minFilter!==bt&&b.minFilter!==Et}function E(b){s.generateMipmap(b)}function L(b,v,H,Y,ne=!1){if(a===!1)return v;if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Q=v;if(v===s.RED&&(H===s.FLOAT&&(Q=s.R32F),H===s.HALF_FLOAT&&(Q=s.R16F),H===s.UNSIGNED_BYTE&&(Q=s.R8)),v===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(Q=s.R8UI),H===s.UNSIGNED_SHORT&&(Q=s.R16UI),H===s.UNSIGNED_INT&&(Q=s.R32UI),H===s.BYTE&&(Q=s.R8I),H===s.SHORT&&(Q=s.R16I),H===s.INT&&(Q=s.R32I)),v===s.RG&&(H===s.FLOAT&&(Q=s.RG32F),H===s.HALF_FLOAT&&(Q=s.RG16F),H===s.UNSIGNED_BYTE&&(Q=s.RG8)),v===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(Q=s.RG8UI),H===s.UNSIGNED_SHORT&&(Q=s.RG16UI),H===s.UNSIGNED_INT&&(Q=s.RG32UI),H===s.BYTE&&(Q=s.RG8I),H===s.SHORT&&(Q=s.RG16I),H===s.INT&&(Q=s.RG32I)),v===s.RGBA){const Le=ne?us:$e.getTransfer(Y);H===s.FLOAT&&(Q=s.RGBA32F),H===s.HALF_FLOAT&&(Q=s.RGBA16F),H===s.UNSIGNED_BYTE&&(Q=Le===tt?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function C(b,v,H){return x(b,H)===!0||b.isFramebufferTexture&&b.minFilter!==bt&&b.minFilter!==Et?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function T(b){return b===bt||b===eo||b===_i?s.NEAREST:s.LINEAR}function U(b){const v=b.target;v.removeEventListener("dispose",U),_(v),v.isVideoTexture&&u.delete(v)}function V(b){const v=b.target;v.removeEventListener("dispose",V),q(v)}function _(b){const v=n.get(b);if(v.__webglInit===void 0)return;const H=b.source,Y=m.get(H);if(Y){const ne=Y[v.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&A(b),Object.keys(Y).length===0&&m.delete(H)}n.remove(b)}function A(b){const v=n.get(b);s.deleteTexture(v.__webglTexture);const H=b.source,Y=m.get(H);delete Y[v.__cacheKey],o.memory.textures--}function q(b){const v=n.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let ne=0;ne<v.__webglFramebuffer[Y].length;ne++)s.deleteFramebuffer(v.__webglFramebuffer[Y][ne]);else s.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)s.deleteFramebuffer(v.__webglFramebuffer[Y]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const H=b.textures;for(let Y=0,ne=H.length;Y<ne;Y++){const Q=n.get(H[Y]);Q.__webglTexture&&(s.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(H[Y])}n.remove(b)}let $=0;function D(){$=0}function X(){const b=$;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),$+=1,b}function G(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function Z(b,v){const H=n.get(b);if(b.isVideoTexture&&Ne(b),b.isRenderTargetTexture===!1&&b.version>0&&H.__version!==b.version){const Y=b.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(H,b,v);return}}t.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+v)}function W(b,v){const H=n.get(b);if(b.version>0&&H.__version!==b.version){de(H,b,v);return}t.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+v)}function K(b,v){const H=n.get(b);if(b.version>0&&H.__version!==b.version){de(H,b,v);return}t.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+v)}function J(b,v){const H=n.get(b);if(b.version>0&&H.__version!==b.version){Ce(H,b,v);return}t.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+v)}const re={[_r]:s.REPEAT,[kt]:s.CLAMP_TO_EDGE,[vr]:s.MIRRORED_REPEAT},fe={[bt]:s.NEAREST,[eo]:s.NEAREST_MIPMAP_NEAREST,[_i]:s.NEAREST_MIPMAP_LINEAR,[Et]:s.LINEAR,[As]:s.LINEAR_MIPMAP_NEAREST,[Nn]:s.LINEAR_MIPMAP_LINEAR},Re={[Ml]:s.NEVER,[Tl]:s.ALWAYS,[Sl]:s.LESS,[Ya]:s.LEQUAL,[yl]:s.EQUAL,[bl]:s.GEQUAL,[El]:s.GREATER,[wl]:s.NOTEQUAL};function k(b,v,H){if(v.type===tn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Et||v.magFilter===As||v.magFilter===_i||v.magFilter===Nn||v.minFilter===Et||v.minFilter===As||v.minFilter===_i||v.minFilter===Nn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),H?(s.texParameteri(b,s.TEXTURE_WRAP_S,re[v.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,re[v.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,re[v.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,fe[v.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,fe[v.minFilter])):(s.texParameteri(b,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(b,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(v.wrapS!==kt||v.wrapT!==kt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(b,s.TEXTURE_MAG_FILTER,T(v.magFilter)),s.texParameteri(b,s.TEXTURE_MIN_FILTER,T(v.minFilter)),v.minFilter!==bt&&v.minFilter!==Et&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,Re[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===bt||v.minFilter!==_i&&v.minFilter!==Nn||v.type===tn&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===Ti&&e.has("OES_texture_half_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");s.texParameterf(b,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function te(b,v){let H=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",U));const Y=v.source;let ne=m.get(Y);ne===void 0&&(ne={},m.set(Y,ne));const Q=G(v);if(Q!==b.__cacheKey){ne[Q]===void 0&&(ne[Q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ne[Q].usedTimes++;const Le=ne[b.__cacheKey];Le!==void 0&&(ne[b.__cacheKey].usedTimes--,Le.usedTimes===0&&A(v)),b.__cacheKey=Q,b.__webglTexture=ne[Q].texture}return H}function de(b,v,H){let Y=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=s.TEXTURE_3D);const ne=te(b,v),Q=v.source;t.bindTexture(Y,b.__webglTexture,s.TEXTURE0+H);const Le=n.get(Q);if(Q.version!==Le.__version||ne===!0){t.activeTexture(s.TEXTURE0+H);const we=$e.getPrimaries($e.workingColorSpace),oe=v.colorSpace===dn?null:$e.getPrimaries(v.colorSpace),le=v.colorSpace===dn||we===oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const De=S(v)&&d(v.image)===!1;let se=p(v.image,De,!1,i.maxTextureSize);se=Oe(v,se);const rt=d(se)||a,ke=r.convert(v.format,v.colorSpace);let Me=r.convert(v.type),me=L(v.internalFormat,ke,Me,v.colorSpace,v.isVideoTexture);k(Y,v,rt);let _e;const P=v.mipmaps,j=a&&v.isVideoTexture!==!0&&me!==qa,ge=Le.__version===void 0||ne===!0,R=Q.dataReady,ie=C(v,se,rt);if(v.isDepthTexture)me=s.DEPTH_COMPONENT,a?v.type===tn?me=s.DEPTH_COMPONENT32F:v.type===fn?me=s.DEPTH_COMPONENT24:v.type===Fn?me=s.DEPTH24_STENCIL8:me=s.DEPTH_COMPONENT16:v.type===tn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===On&&me===s.DEPTH_COMPONENT&&v.type!==Tr&&v.type!==fn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=fn,Me=r.convert(v.type)),v.format===fi&&me===s.DEPTH_COMPONENT&&(me=s.DEPTH_STENCIL,v.type!==Fn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Fn,Me=r.convert(v.type))),ge&&(j?t.texStorage2D(s.TEXTURE_2D,1,me,se.width,se.height):t.texImage2D(s.TEXTURE_2D,0,me,se.width,se.height,0,ke,Me,null));else if(v.isDataTexture)if(P.length>0&&rt){j&&ge&&t.texStorage2D(s.TEXTURE_2D,ie,me,P[0].width,P[0].height);for(let F=0,ee=P.length;F<ee;F++)_e=P[F],j?R&&t.texSubImage2D(s.TEXTURE_2D,F,0,0,_e.width,_e.height,ke,Me,_e.data):t.texImage2D(s.TEXTURE_2D,F,me,_e.width,_e.height,0,ke,Me,_e.data);v.generateMipmaps=!1}else j?(ge&&t.texStorage2D(s.TEXTURE_2D,ie,me,se.width,se.height),R&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,se.width,se.height,ke,Me,se.data)):t.texImage2D(s.TEXTURE_2D,0,me,se.width,se.height,0,ke,Me,se.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){j&&ge&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ie,me,P[0].width,P[0].height,se.depth);for(let F=0,ee=P.length;F<ee;F++)_e=P[F],v.format!==Ot?ke!==null?j?R&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,F,0,0,0,_e.width,_e.height,se.depth,ke,_e.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,F,me,_e.width,_e.height,se.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?R&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,F,0,0,0,_e.width,_e.height,se.depth,ke,Me,_e.data):t.texImage3D(s.TEXTURE_2D_ARRAY,F,me,_e.width,_e.height,se.depth,0,ke,Me,_e.data)}else{j&&ge&&t.texStorage2D(s.TEXTURE_2D,ie,me,P[0].width,P[0].height);for(let F=0,ee=P.length;F<ee;F++)_e=P[F],v.format!==Ot?ke!==null?j?R&&t.compressedTexSubImage2D(s.TEXTURE_2D,F,0,0,_e.width,_e.height,ke,_e.data):t.compressedTexImage2D(s.TEXTURE_2D,F,me,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?R&&t.texSubImage2D(s.TEXTURE_2D,F,0,0,_e.width,_e.height,ke,Me,_e.data):t.texImage2D(s.TEXTURE_2D,F,me,_e.width,_e.height,0,ke,Me,_e.data)}else if(v.isDataArrayTexture)j?(ge&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ie,me,se.width,se.height,se.depth),R&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ke,Me,se.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,me,se.width,se.height,se.depth,0,ke,Me,se.data);else if(v.isData3DTexture)j?(ge&&t.texStorage3D(s.TEXTURE_3D,ie,me,se.width,se.height,se.depth),R&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ke,Me,se.data)):t.texImage3D(s.TEXTURE_3D,0,me,se.width,se.height,se.depth,0,ke,Me,se.data);else if(v.isFramebufferTexture){if(ge)if(j)t.texStorage2D(s.TEXTURE_2D,ie,me,se.width,se.height);else{let F=se.width,ee=se.height;for(let he=0;he<ie;he++)t.texImage2D(s.TEXTURE_2D,he,me,F,ee,0,ke,Me,null),F>>=1,ee>>=1}}else if(P.length>0&&rt){if(j&&ge){const F=Qe(P[0]);t.texStorage2D(s.TEXTURE_2D,ie,me,F.width,F.height)}for(let F=0,ee=P.length;F<ee;F++)_e=P[F],j?R&&t.texSubImage2D(s.TEXTURE_2D,F,0,0,ke,Me,_e):t.texImage2D(s.TEXTURE_2D,F,me,ke,Me,_e);v.generateMipmaps=!1}else if(j){if(ge){const F=Qe(se);t.texStorage2D(s.TEXTURE_2D,ie,me,F.width,F.height)}R&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ke,Me,se)}else t.texImage2D(s.TEXTURE_2D,0,me,ke,Me,se);x(v,rt)&&E(Y),Le.__version=Q.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function Ce(b,v,H){if(v.image.length!==6)return;const Y=te(b,v),ne=v.source;t.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+H);const Q=n.get(ne);if(ne.version!==Q.__version||Y===!0){t.activeTexture(s.TEXTURE0+H);const Le=$e.getPrimaries($e.workingColorSpace),we=v.colorSpace===dn?null:$e.getPrimaries(v.colorSpace),oe=v.colorSpace===dn||Le===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const le=v.isCompressedTexture||v.image[0].isCompressedTexture,De=v.image[0]&&v.image[0].isDataTexture,se=[];for(let F=0;F<6;F++)!le&&!De?se[F]=p(v.image[F],!1,!0,i.maxCubemapSize):se[F]=De?v.image[F].image:v.image[F],se[F]=Oe(v,se[F]);const rt=se[0],ke=d(rt)||a,Me=r.convert(v.format,v.colorSpace),me=r.convert(v.type),_e=L(v.internalFormat,Me,me,v.colorSpace),P=a&&v.isVideoTexture!==!0,j=Q.__version===void 0||Y===!0,ge=ne.dataReady;let R=C(v,rt,ke);k(s.TEXTURE_CUBE_MAP,v,ke);let ie;if(le){P&&j&&t.texStorage2D(s.TEXTURE_CUBE_MAP,R,_e,rt.width,rt.height);for(let F=0;F<6;F++){ie=se[F].mipmaps;for(let ee=0;ee<ie.length;ee++){const he=ie[ee];v.format!==Ot?Me!==null?P?ge&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,ee,0,0,he.width,he.height,Me,he.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,ee,_e,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,ee,0,0,he.width,he.height,Me,me,he.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,ee,_e,he.width,he.height,0,Me,me,he.data)}}}else{if(ie=v.mipmaps,P&&j){ie.length>0&&R++;const F=Qe(se[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,R,_e,F.width,F.height)}for(let F=0;F<6;F++)if(De){P?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,se[F].width,se[F].height,Me,me,se[F].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,_e,se[F].width,se[F].height,0,Me,me,se[F].data);for(let ee=0;ee<ie.length;ee++){const Ve=ie[ee].image[F].image;P?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,ee+1,0,0,Ve.width,Ve.height,Me,me,Ve.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,ee+1,_e,Ve.width,Ve.height,0,Me,me,Ve.data)}}else{P?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,Me,me,se[F]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,_e,Me,me,se[F]);for(let ee=0;ee<ie.length;ee++){const he=ie[ee];P?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,ee+1,0,0,Me,me,he.image[F]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,ee+1,_e,Me,me,he.image[F])}}}x(v,ke)&&E(s.TEXTURE_CUBE_MAP),Q.__version=ne.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function xe(b,v,H,Y,ne,Q){const Le=r.convert(H.format,H.colorSpace),we=r.convert(H.type),oe=L(H.internalFormat,Le,we,H.colorSpace);if(!n.get(v).__hasExternalTextures){const De=Math.max(1,v.width>>Q),se=Math.max(1,v.height>>Q);ne===s.TEXTURE_3D||ne===s.TEXTURE_2D_ARRAY?t.texImage3D(ne,Q,oe,De,se,v.depth,0,Le,we,null):t.texImage2D(ne,Q,oe,De,se,0,Le,we,null)}t.bindFramebuffer(s.FRAMEBUFFER,b),We(v)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,ne,n.get(H).__webglTexture,0,Ee(v)):(ne===s.TEXTURE_2D||ne>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,ne,n.get(H).__webglTexture,Q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function pe(b,v,H){if(s.bindRenderbuffer(s.RENDERBUFFER,b),v.depthBuffer&&!v.stencilBuffer){let Y=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(H||We(v)){const ne=v.depthTexture;ne&&ne.isDepthTexture&&(ne.type===tn?Y=s.DEPTH_COMPONENT32F:ne.type===fn&&(Y=s.DEPTH_COMPONENT24));const Q=Ee(v);We(v)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Q,Y,v.width,v.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,Q,Y,v.width,v.height)}else s.renderbufferStorage(s.RENDERBUFFER,Y,v.width,v.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,b)}else if(v.depthBuffer&&v.stencilBuffer){const Y=Ee(v);H&&We(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Y,s.DEPTH24_STENCIL8,v.width,v.height):We(v)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Y,s.DEPTH24_STENCIL8,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,b)}else{const Y=v.textures;for(let ne=0;ne<Y.length;ne++){const Q=Y[ne],Le=r.convert(Q.format,Q.colorSpace),we=r.convert(Q.type),oe=L(Q.internalFormat,Le,we,Q.colorSpace),le=Ee(v);H&&We(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,le,oe,v.width,v.height):We(v)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,le,oe,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,oe,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function qe(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);const Y=n.get(v.depthTexture).__webglTexture,ne=Ee(v);if(v.depthTexture.format===On)We(v)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Y,0,ne):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Y,0);else if(v.depthTexture.format===fi)We(v)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Y,0,ne):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Ae(b){const v=n.get(b),H=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");qe(v.__webglFramebuffer,b)}else if(H){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]=s.createRenderbuffer(),pe(v.__webglDepthbuffer[Y],b,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=s.createRenderbuffer(),pe(v.__webglDepthbuffer,b,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function N(b,v,H){const Y=n.get(b);v!==void 0&&xe(Y.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&Ae(b)}function ht(b){const v=b.texture,H=n.get(b),Y=n.get(v);b.addEventListener("dispose",V);const ne=b.textures,Q=b.isWebGLCubeRenderTarget===!0,Le=ne.length>1,we=d(b)||a;if(Le||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=v.version,o.memory.textures++),Q){H.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(a&&v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer[oe]=[];for(let le=0;le<v.mipmaps.length;le++)H.__webglFramebuffer[oe][le]=s.createFramebuffer()}else H.__webglFramebuffer[oe]=s.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer=[];for(let oe=0;oe<v.mipmaps.length;oe++)H.__webglFramebuffer[oe]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(Le)if(i.drawBuffers)for(let oe=0,le=ne.length;oe<le;oe++){const De=n.get(ne[oe]);De.__webglTexture===void 0&&(De.__webglTexture=s.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&We(b)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let oe=0;oe<ne.length;oe++){const le=ne[oe];H.__webglColorRenderbuffer[oe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[oe]);const De=r.convert(le.format,le.colorSpace),se=r.convert(le.type),rt=L(le.internalFormat,De,se,le.colorSpace,b.isXRRenderTarget===!0),ke=Ee(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,ke,rt,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,H.__webglColorRenderbuffer[oe])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),pe(H.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),k(s.TEXTURE_CUBE_MAP,v,we);for(let oe=0;oe<6;oe++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let le=0;le<v.mipmaps.length;le++)xe(H.__webglFramebuffer[oe][le],b,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,le);else xe(H.__webglFramebuffer[oe],b,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);x(v,we)&&E(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let oe=0,le=ne.length;oe<le;oe++){const De=ne[oe],se=n.get(De);t.bindTexture(s.TEXTURE_2D,se.__webglTexture),k(s.TEXTURE_2D,De,we),xe(H.__webglFramebuffer,b,De,s.COLOR_ATTACHMENT0+oe,s.TEXTURE_2D,0),x(De,we)&&E(s.TEXTURE_2D)}t.unbindTexture()}else{let oe=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?oe=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,Y.__webglTexture),k(oe,v,we),a&&v.mipmaps&&v.mipmaps.length>0)for(let le=0;le<v.mipmaps.length;le++)xe(H.__webglFramebuffer[le],b,v,s.COLOR_ATTACHMENT0,oe,le);else xe(H.__webglFramebuffer,b,v,s.COLOR_ATTACHMENT0,oe,0);x(v,we)&&E(oe),t.unbindTexture()}b.depthBuffer&&Ae(b)}function ye(b){const v=d(b)||a,H=b.textures;for(let Y=0,ne=H.length;Y<ne;Y++){const Q=H[Y];if(x(Q,v)){const Le=b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,we=n.get(Q).__webglTexture;t.bindTexture(Le,we),E(Le),t.unbindTexture()}}}function Ie(b){if(a&&b.samples>0&&We(b)===!1){const v=b.textures,H=b.width,Y=b.height;let ne=s.COLOR_BUFFER_BIT;const Q=[],Le=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=n.get(b),oe=v.length>1;if(oe)for(let le=0;le<v.length;le++)t.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let le=0;le<v.length;le++){Q.push(s.COLOR_ATTACHMENT0+le),b.depthBuffer&&Q.push(Le);const De=we.__ignoreDepthValues!==void 0?we.__ignoreDepthValues:!1;if(De===!1&&(b.depthBuffer&&(ne|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&(ne|=s.STENCIL_BUFFER_BIT)),oe&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,we.__webglColorRenderbuffer[le]),De===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Le]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Le])),oe){const se=n.get(v[le]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,se,0)}s.blitFramebuffer(0,0,H,Y,0,0,H,Y,ne,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Q)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),oe)for(let le=0;le<v.length;le++){t.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,we.__webglColorRenderbuffer[le]);const De=n.get(v[le]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,De,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}}function Ee(b){return Math.min(i.maxSamples,b.samples)}function We(b){const v=n.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ne(b){const v=o.render.frame;u.get(b)!==v&&(u.set(b,v),b.update())}function Oe(b,v){const H=b.colorSpace,Y=b.format,ne=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===xr||H!==Sn&&H!==dn&&($e.getTransfer(H)===tt?a===!1?e.has("EXT_sRGB")===!0&&Y===Ot?(b.format=xr,b.minFilter=Et,b.generateMipmaps=!1):v=Ka.sRGBToLinear(v):(Y!==Ot||ne!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),v}function Qe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(h.width=b.naturalWidth||b.width,h.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(h.width=b.displayWidth,h.height=b.displayHeight):(h.width=b.width,h.height=b.height),h}this.allocateTextureUnit=X,this.resetTextureUnits=D,this.setTexture2D=Z,this.setTexture2DArray=W,this.setTexture3D=K,this.setTextureCube=J,this.rebindTextures=N,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=We}function Dp(s,e,t){const n=t.isWebGL2;function i(r,o=dn){let a;const c=$e.getTransfer(o);if(r===vn)return s.UNSIGNED_BYTE;if(r===ka)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Ha)return s.UNSIGNED_SHORT_5_5_5_1;if(r===ll)return s.BYTE;if(r===hl)return s.SHORT;if(r===Tr)return s.UNSIGNED_SHORT;if(r===Ga)return s.INT;if(r===fn)return s.UNSIGNED_INT;if(r===tn)return s.FLOAT;if(r===Ti)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===ul)return s.ALPHA;if(r===Ot)return s.RGBA;if(r===dl)return s.LUMINANCE;if(r===fl)return s.LUMINANCE_ALPHA;if(r===On)return s.DEPTH_COMPONENT;if(r===fi)return s.DEPTH_STENCIL;if(r===xr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===pl)return s.RED;if(r===Va)return s.RED_INTEGER;if(r===ml)return s.RG;if(r===Wa)return s.RG_INTEGER;if(r===Xa)return s.RGBA_INTEGER;if(r===Cs||r===Ps||r===Rs||r===Ls)if(c===tt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Cs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ps)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Rs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ls)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Cs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ps)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Rs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ls)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===to||r===no||r===io||r===so)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===to)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===no)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===io)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===so)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===qa)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ro||r===oo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===ro)return c===tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===oo)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ao||r===co||r===lo||r===ho||r===uo||r===fo||r===po||r===mo||r===go||r===_o||r===vo||r===xo||r===Mo||r===So)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===ao)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===co)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===lo)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ho)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===uo)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===fo)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===po)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===mo)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===go)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===_o)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===vo)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===xo)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Mo)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===So)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ds||r===yo||r===Eo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Ds)return c===tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===yo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Eo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===gl||r===wo||r===bo||r===To)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ds)return a.COMPRESSED_RED_RGTC1_EXT;if(r===wo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===bo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===To)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Fn?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Up extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ai extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ip={type:"move"};class sr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const M of e.hand.values()){const p=t.getJointPose(M,n),d=this._getHandJoint(l,M);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ip)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ai;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Np=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Op{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Tt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new Mn({extensions:{fragDepth:!0},vertexShader:Np,fragmentShader:Fp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new be(new pn(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class zp extends Gn{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,m=null,g=null;const M=new Op,p=t.getContextAttributes();let d=null,S=null;const x=[],E=[],L=new ae;let C=null;const T=new Ct;T.layers.enable(1),T.viewport=new it;const U=new Ct;U.layers.enable(2),U.viewport=new it;const V=[T,U],_=new Up;_.layers.enable(1),_.layers.enable(2);let A=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let te=x[k];return te===void 0&&(te=new sr,x[k]=te),te.getTargetRaySpace()},this.getControllerGrip=function(k){let te=x[k];return te===void 0&&(te=new sr,x[k]=te),te.getGripSpace()},this.getHand=function(k){let te=x[k];return te===void 0&&(te=new sr,x[k]=te),te.getHandSpace()};function $(k){const te=E.indexOf(k.inputSource);if(te===-1)return;const de=x[te];de!==void 0&&(de.update(k.inputSource,k.frame,l||o),de.dispatchEvent({type:k.type,data:k.inputSource}))}function D(){i.removeEventListener("select",$),i.removeEventListener("selectstart",$),i.removeEventListener("selectend",$),i.removeEventListener("squeeze",$),i.removeEventListener("squeezestart",$),i.removeEventListener("squeezeend",$),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",X);for(let k=0;k<x.length;k++){const te=E[k];te!==null&&(E[k]=null,x[k].disconnect(te))}A=null,q=null,M.reset(),e.setRenderTarget(d),m=null,f=null,u=null,i=null,S=null,Re.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",$),i.addEventListener("selectstart",$),i.addEventListener("selectend",$),i.addEventListener("squeeze",$),i.addEventListener("squeezestart",$),i.addEventListener("squeezeend",$),i.addEventListener("end",D),i.addEventListener("inputsourceschange",X),p.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(L),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const te={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,te),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new zn(m.framebufferWidth,m.framebufferHeight,{format:Ot,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let te=null,de=null,Ce=null;p.depth&&(Ce=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=p.stencil?fi:On,de=p.stencil?Fn:fn);const xe={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(xe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new zn(f.textureWidth,f.textureHeight,{format:Ot,type:vn,depthTexture:new ac(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const pe=e.properties.get(S);pe.__ignoreDepthValues=f.ignoreDepthValues}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Re.setContext(i),Re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function X(k){for(let te=0;te<k.removed.length;te++){const de=k.removed[te],Ce=E.indexOf(de);Ce>=0&&(E[Ce]=null,x[Ce].disconnect(de))}for(let te=0;te<k.added.length;te++){const de=k.added[te];let Ce=E.indexOf(de);if(Ce===-1){for(let pe=0;pe<x.length;pe++)if(pe>=E.length){E.push(de),Ce=pe;break}else if(E[pe]===null){E[pe]=de,Ce=pe;break}if(Ce===-1)break}const xe=x[Ce];xe&&xe.connect(de)}}const G=new w,Z=new w;function W(k,te,de){G.setFromMatrixPosition(te.matrixWorld),Z.setFromMatrixPosition(de.matrixWorld);const Ce=G.distanceTo(Z),xe=te.projectionMatrix.elements,pe=de.projectionMatrix.elements,qe=xe[14]/(xe[10]-1),Ae=xe[14]/(xe[10]+1),N=(xe[9]+1)/xe[5],ht=(xe[9]-1)/xe[5],ye=(xe[8]-1)/xe[0],Ie=(pe[8]+1)/pe[0],Ee=qe*ye,We=qe*Ie,Ne=Ce/(-ye+Ie),Oe=Ne*-ye;te.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Oe),k.translateZ(Ne),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const Qe=qe+Ne,b=Ae+Ne,v=Ee-Oe,H=We+(Ce-Oe),Y=N*Ae/b*Qe,ne=ht*Ae/b*Qe;k.projectionMatrix.makePerspective(v,H,Y,ne,Qe,b),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function K(k,te){te===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(te.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;M.texture!==null&&(k.near=M.depthNear,k.far=M.depthFar),_.near=U.near=T.near=k.near,_.far=U.far=T.far=k.far,(A!==_.near||q!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),A=_.near,q=_.far,T.near=A,T.far=q,U.near=A,U.far=q,T.updateProjectionMatrix(),U.updateProjectionMatrix(),k.updateProjectionMatrix());const te=k.parent,de=_.cameras;K(_,te);for(let Ce=0;Ce<de.length;Ce++)K(de[Ce],te);de.length===2?W(_,T,U):_.projectionMatrix.copy(T.projectionMatrix),J(k,_,te)};function J(k,te,de){de===null?k.matrix.copy(te.matrixWorld):(k.matrix.copy(de.matrixWorld),k.matrix.invert(),k.matrix.multiply(te.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(te.projectionMatrix),k.projectionMatrixInverse.copy(te.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=ms*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(k){c=k,f!==null&&(f.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)},this.hasDepthSensing=function(){return M.texture!==null};let re=null;function fe(k,te){if(h=te.getViewerPose(l||o),g=te,h!==null){const de=h.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let Ce=!1;de.length!==_.cameras.length&&(_.cameras.length=0,Ce=!0);for(let pe=0;pe<de.length;pe++){const qe=de[pe];let Ae=null;if(m!==null)Ae=m.getViewport(qe);else{const ht=u.getViewSubImage(f,qe);Ae=ht.viewport,pe===0&&(e.setRenderTargetTextures(S,ht.colorTexture,f.ignoreDepthValues?void 0:ht.depthStencilTexture),e.setRenderTarget(S))}let N=V[pe];N===void 0&&(N=new Ct,N.layers.enable(pe),N.viewport=new it,V[pe]=N),N.matrix.fromArray(qe.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(qe.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),pe===0&&(_.matrix.copy(N.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),Ce===!0&&_.cameras.push(N)}const xe=i.enabledFeatures;if(xe&&xe.includes("depth-sensing")){const pe=u.getDepthInformation(de[0]);pe&&pe.isValid&&pe.texture&&M.init(e,pe,i.renderState)}}for(let de=0;de<x.length;de++){const Ce=E[de],xe=x[de];Ce!==null&&xe!==void 0&&xe.update(Ce,te,l||o)}M.render(e,_),re&&re(k,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}const Re=new rc;Re.setAnimationLoop(fe),this.setAnimationLoop=function(k){re=k},this.dispose=function(){}}}const Ln=new Ht,Bp=new Je;function Gp(s,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,nc(s)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,S,x,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,E)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),M(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?c(p,d,S,x):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===vt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===vt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const S=e.get(d),x=S.envMap,E=S.envMapRotation;if(x&&(p.envMap.value=x,Ln.copy(E),Ln.x*=-1,Ln.y*=-1,Ln.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ln.y*=-1,Ln.z*=-1),p.envMapRotation.value.setFromMatrix4(Bp.makeRotationFromEuler(Ln)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const L=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*L,t(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,S,x){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*S,p.scale.value=x*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,S){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===vt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function M(p,d){const S=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function kp(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(S,x){const E=x.program;n.uniformBlockBinding(S,E)}function l(S,x){let E=i[S.id];E===void 0&&(g(S),E=h(S),i[S.id]=E,S.addEventListener("dispose",p));const L=x.program;n.updateUBOMapping(S,L);const C=e.render.frame;r[S.id]!==C&&(f(S),r[S.id]=C)}function h(S){const x=u();S.__bindingPointIndex=x;const E=s.createBuffer(),L=S.__size,C=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,L,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,E),E}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const x=i[S.id],E=S.uniforms,L=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let C=0,T=E.length;C<T;C++){const U=Array.isArray(E[C])?E[C]:[E[C]];for(let V=0,_=U.length;V<_;V++){const A=U[V];if(m(A,C,V,L)===!0){const q=A.__offset,$=Array.isArray(A.value)?A.value:[A.value];let D=0;for(let X=0;X<$.length;X++){const G=$[X],Z=M(G);typeof G=="number"||typeof G=="boolean"?(A.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,q+D,A.__data)):G.isMatrix3?(A.__data[0]=G.elements[0],A.__data[1]=G.elements[1],A.__data[2]=G.elements[2],A.__data[3]=0,A.__data[4]=G.elements[3],A.__data[5]=G.elements[4],A.__data[6]=G.elements[5],A.__data[7]=0,A.__data[8]=G.elements[6],A.__data[9]=G.elements[7],A.__data[10]=G.elements[8],A.__data[11]=0):(G.toArray(A.__data,D),D+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,q,A.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(S,x,E,L){const C=S.value,T=x+"_"+E;if(L[T]===void 0)return typeof C=="number"||typeof C=="boolean"?L[T]=C:L[T]=C.clone(),!0;{const U=L[T];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return L[T]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function g(S){const x=S.uniforms;let E=0;const L=16;for(let T=0,U=x.length;T<U;T++){const V=Array.isArray(x[T])?x[T]:[x[T]];for(let _=0,A=V.length;_<A;_++){const q=V[_],$=Array.isArray(q.value)?q.value:[q.value];for(let D=0,X=$.length;D<X;D++){const G=$[D],Z=M(G),W=E%L;W!==0&&L-W<Z.boundary&&(E+=L-W),q.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=E,E+=Z.storage}}}const C=E%L;return C>0&&(E+=L-C),S.__size=E,S.__cache={},this}function M(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function p(S){const x=S.target;x.removeEventListener("dispose",p);const E=o.indexOf(x.__bindingPointIndex);o.splice(E,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function d(){for(const S in i)s.deleteBuffer(i[S]);o=[],i={},r={}}return{bind:c,update:l,dispose:d}}class Lr{constructor(e={}){const{canvas:t=Pl(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),g=new Int32Array(4);let M=null,p=null;const d=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vt,this._useLegacyLights=!1,this.toneMapping=_n,this.toneMappingExposure=1;const x=this;let E=!1,L=0,C=0,T=null,U=-1,V=null;const _=new it,A=new it;let q=null;const $=new Se(0);let D=0,X=t.width,G=t.height,Z=1,W=null,K=null;const J=new it(0,0,X,G),re=new it(0,0,X,G);let fe=!1;const Re=new Pr;let k=!1,te=!1,de=null;const Ce=new Je,xe=new ae,pe=new w,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ae(){return T===null?Z:1}let N=n;function ht(y,I){for(let z=0;z<y.length;z++){const B=y[z],O=t.getContext(B,I);if(O!==null)return O}return null}try{const y={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Er}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",R,!1),t.addEventListener("webglcontextcreationerror",ie,!1),N===null){const I=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&I.shift(),N=ht(I,y),N===null)throw ht(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let ye,Ie,Ee,We,Ne,Oe,Qe,b,v,H,Y,ne,Q,Le,we,oe,le,De,se,rt,ke,Me,me,_e;function P(){ye=new qd(N),Ie=new Gd(N,ye,e),ye.init(Ie),Me=new Dp(N,ye,Ie),Ee=new Rp(N,ye,Ie),We=new Kd(N),Ne=new gp,Oe=new Lp(N,ye,Ee,Ne,Ie,Me,We),Qe=new Hd(x),b=new Xd(x),v=new th(N,Ie),me=new zd(N,ye,v,Ie),H=new Yd(N,v,We,me),Y=new Qd(N,H,v,We),se=new Jd(N,Ie,Oe),oe=new kd(Ne),ne=new mp(x,Qe,b,ye,Ie,me,oe),Q=new Gp(x,Ne),Le=new vp,we=new wp(ye,Ie),De=new Od(x,Qe,b,Ee,Y,f,c),le=new Pp(x,Y,Ie),_e=new kp(N,We,Ie,Ee),rt=new Bd(N,ye,We,Ie),ke=new jd(N,ye,We,Ie),We.programs=ne.programs,x.capabilities=Ie,x.extensions=ye,x.properties=Ne,x.renderLists=Le,x.shadowMap=le,x.state=Ee,x.info=We}P();const j=new zp(x,N);this.xr=j,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const y=ye.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=ye.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(y){y!==void 0&&(Z=y,this.setSize(X,G,!1))},this.getSize=function(y){return y.set(X,G)},this.setSize=function(y,I,z=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=y,G=I,t.width=Math.floor(y*Z),t.height=Math.floor(I*Z),z===!0&&(t.style.width=y+"px",t.style.height=I+"px"),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(X*Z,G*Z).floor()},this.setDrawingBufferSize=function(y,I,z){X=y,G=I,Z=z,t.width=Math.floor(y*z),t.height=Math.floor(I*z),this.setViewport(0,0,y,I)},this.getCurrentViewport=function(y){return y.copy(_)},this.getViewport=function(y){return y.copy(J)},this.setViewport=function(y,I,z,B){y.isVector4?J.set(y.x,y.y,y.z,y.w):J.set(y,I,z,B),Ee.viewport(_.copy(J).multiplyScalar(Z).round())},this.getScissor=function(y){return y.copy(re)},this.setScissor=function(y,I,z,B){y.isVector4?re.set(y.x,y.y,y.z,y.w):re.set(y,I,z,B),Ee.scissor(A.copy(re).multiplyScalar(Z).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(y){Ee.setScissorTest(fe=y)},this.setOpaqueSort=function(y){W=y},this.setTransparentSort=function(y){K=y},this.getClearColor=function(y){return y.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(y=!0,I=!0,z=!0){let B=0;if(y){let O=!1;if(T!==null){const ue=T.texture.format;O=ue===Xa||ue===Wa||ue===Va}if(O){const ue=T.texture.type,ve=ue===vn||ue===fn||ue===Tr||ue===Fn||ue===ka||ue===Ha,Te=De.getClearColor(),Pe=De.getClearAlpha(),He=Te.r,Ue=Te.g,Fe=Te.b;ve?(m[0]=He,m[1]=Ue,m[2]=Fe,m[3]=Pe,N.clearBufferuiv(N.COLOR,0,m)):(g[0]=He,g[1]=Ue,g[2]=Fe,g[3]=Pe,N.clearBufferiv(N.COLOR,0,g))}else B|=N.COLOR_BUFFER_BIT}I&&(B|=N.DEPTH_BUFFER_BIT),z&&(B|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",R,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),Le.dispose(),we.dispose(),Ne.dispose(),Qe.dispose(),b.dispose(),Y.dispose(),me.dispose(),_e.dispose(),ne.dispose(),j.dispose(),j.removeEventListener("sessionstart",ot),j.removeEventListener("sessionend",Ye),de&&(de.dispose(),de=null),et.stop()};function ge(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const y=We.autoReset,I=le.enabled,z=le.autoUpdate,B=le.needsUpdate,O=le.type;P(),We.autoReset=y,le.enabled=I,le.autoUpdate=z,le.needsUpdate=B,le.type=O}function ie(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function F(y){const I=y.target;I.removeEventListener("dispose",F),ee(I)}function ee(y){he(y),Ne.remove(y)}function he(y){const I=Ne.get(y).programs;I!==void 0&&(I.forEach(function(z){ne.releaseProgram(z)}),y.isShaderMaterial&&ne.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,z,B,O,ue){I===null&&(I=qe);const ve=O.isMesh&&O.matrixWorld.determinant()<0,Te=Ec(y,I,z,B,O);Ee.setMaterial(B,ve);let Pe=z.index,He=1;if(B.wireframe===!0){if(Pe=H.getWireframeAttribute(z),Pe===void 0)return;He=2}const Ue=z.drawRange,Fe=z.attributes.position;let at=Ue.start*He,Rt=(Ue.start+Ue.count)*He;ue!==null&&(at=Math.max(at,ue.start*He),Rt=Math.min(Rt,(ue.start+ue.count)*He)),Pe!==null?(at=Math.max(at,0),Rt=Math.min(Rt,Pe.count)):Fe!=null&&(at=Math.max(at,0),Rt=Math.min(Rt,Fe.count));const pt=Rt-at;if(pt<0||pt===1/0)return;me.setup(O,B,Te,z,Pe);let jt,st=rt;if(Pe!==null&&(jt=v.get(Pe),st=ke,st.setIndex(jt)),O.isMesh)B.wireframe===!0?(Ee.setLineWidth(B.wireframeLinewidth*Ae()),st.setMode(N.LINES)):st.setMode(N.TRIANGLES);else if(O.isLine){let ze=B.linewidth;ze===void 0&&(ze=1),Ee.setLineWidth(ze*Ae()),O.isLineSegments?st.setMode(N.LINES):O.isLineLoop?st.setMode(N.LINE_LOOP):st.setMode(N.LINE_STRIP)}else O.isPoints?st.setMode(N.POINTS):O.isSprite&&st.setMode(N.TRIANGLES);if(O.isBatchedMesh)st.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)st.renderInstances(at,pt,O.count);else if(z.isInstancedBufferGeometry){const ze=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Es=Math.min(z.instanceCount,ze);st.renderInstances(at,pt,Es)}else st.render(at,pt)};function Ve(y,I,z){y.transparent===!0&&y.side===Ut&&y.forceSinglePass===!1?(y.side=vt,y.needsUpdate=!0,Ii(y,I,z),y.side=xn,y.needsUpdate=!0,Ii(y,I,z),y.side=Ut):Ii(y,I,z)}this.compile=function(y,I,z=null){z===null&&(z=y),p=we.get(z),p.init(),S.push(p),z.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),y!==z&&y.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights(x._useLegacyLights);const B=new Set;return y.traverse(function(O){const ue=O.material;if(ue)if(Array.isArray(ue))for(let ve=0;ve<ue.length;ve++){const Te=ue[ve];Ve(Te,z,O),B.add(Te)}else Ve(ue,z,O),B.add(ue)}),S.pop(),p=null,B},this.compileAsync=function(y,I,z=null){const B=this.compile(y,I,z);return new Promise(O=>{function ue(){if(B.forEach(function(ve){Ne.get(ve).currentProgram.isReady()&&B.delete(ve)}),B.size===0){O(y);return}setTimeout(ue,10)}ye.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let je=null;function Ze(y){je&&je(y)}function ot(){et.stop()}function Ye(){et.start()}const et=new rc;et.setAnimationLoop(Ze),typeof self<"u"&&et.setContext(self),this.setAnimationLoop=function(y){je=y,j.setAnimationLoop(y),y===null?et.stop():et.start()},j.addEventListener("sessionstart",ot),j.addEventListener("sessionend",Ye),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(I),I=j.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,I,T),p=we.get(y,S.length),p.init(),S.push(p),Ce.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Re.setFromProjectionMatrix(Ce),te=this.localClippingEnabled,k=oe.init(this.clippingPlanes,te),M=Le.get(y,d.length),M.init(),d.push(M),xt(y,I,0,x.sortObjects),M.finish(),x.sortObjects===!0&&M.sort(W,K),this.info.render.frame++,k===!0&&oe.beginShadows();const z=p.state.shadowsArray;if(le.render(z,y,I),k===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1)&&De.render(M,y),p.setupLights(x._useLegacyLights),I.isArrayCamera){const B=I.cameras;for(let O=0,ue=B.length;O<ue;O++){const ve=B[O];En(M,y,ve,ve.viewport)}}else En(M,y,I);T!==null&&(Oe.updateMultisampleRenderTarget(T),Oe.updateRenderTargetMipmap(T)),y.isScene===!0&&y.onAfterRender(x,y,I),me.resetDefaultState(),U=-1,V=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,d.pop(),d.length>0?M=d[d.length-1]:M=null};function xt(y,I,z,B){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Re.intersectsSprite(y)){B&&pe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ce);const ve=Y.update(y),Te=y.material;Te.visible&&M.push(y,ve,Te,z,pe.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Re.intersectsObject(y))){const ve=Y.update(y),Te=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),pe.copy(y.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),pe.copy(ve.boundingSphere.center)),pe.applyMatrix4(y.matrixWorld).applyMatrix4(Ce)),Array.isArray(Te)){const Pe=ve.groups;for(let He=0,Ue=Pe.length;He<Ue;He++){const Fe=Pe[He],at=Te[Fe.materialIndex];at&&at.visible&&M.push(y,ve,at,z,pe.z,Fe)}}else Te.visible&&M.push(y,ve,Te,z,pe.z,null)}}const ue=y.children;for(let ve=0,Te=ue.length;ve<Te;ve++)xt(ue[ve],I,z,B)}function En(y,I,z,B){const O=y.opaque,ue=y.transmissive,ve=y.transparent;p.setupLightsView(z),k===!0&&oe.setGlobalState(x.clippingPlanes,z),ue.length>0&&Di(O,ue,I,z),B&&Ee.viewport(_.copy(B)),O.length>0&&Ui(O,I,z),ue.length>0&&Ui(ue,I,z),ve.length>0&&Ui(ve,I,z),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Di(y,I,z,B){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;const ue=Ie.isWebGL2;de===null&&(de=new zn(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?Ti:vn,minFilter:Nn,samples:ue?4:0})),x.getDrawingBufferSize(xe),ue?de.setSize(xe.x,xe.y):de.setSize(Mr(xe.x),Mr(xe.y));const ve=x.getRenderTarget();x.setRenderTarget(de),x.getClearColor($),D=x.getClearAlpha(),D<1&&x.setClearColor(16777215,.5),x.clear();const Te=x.toneMapping;x.toneMapping=_n,Ui(y,z,B),Oe.updateMultisampleRenderTarget(de),Oe.updateRenderTargetMipmap(de);let Pe=!1;for(let He=0,Ue=I.length;He<Ue;He++){const Fe=I[He],at=Fe.object,Rt=Fe.geometry,pt=Fe.material,jt=Fe.group;if(pt.side===Ut&&at.layers.test(B.layers)){const st=pt.side;pt.side=vt,pt.needsUpdate=!0,Hr(at,z,B,Rt,pt,jt),pt.side=st,pt.needsUpdate=!0,Pe=!0}}Pe===!0&&(Oe.updateMultisampleRenderTarget(de),Oe.updateRenderTargetMipmap(de)),x.setRenderTarget(ve),x.setClearColor($,D),x.toneMapping=Te}function Ui(y,I,z){const B=I.isScene===!0?I.overrideMaterial:null;for(let O=0,ue=y.length;O<ue;O++){const ve=y[O],Te=ve.object,Pe=ve.geometry,He=B===null?ve.material:B,Ue=ve.group;Te.layers.test(z.layers)&&Hr(Te,I,z,Pe,He,Ue)}}function Hr(y,I,z,B,O,ue){y.onBeforeRender(x,I,z,B,O,ue),y.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),O.onBeforeRender(x,I,z,B,y,ue),O.transparent===!0&&O.side===Ut&&O.forceSinglePass===!1?(O.side=vt,O.needsUpdate=!0,x.renderBufferDirect(z,I,B,O,y,ue),O.side=xn,O.needsUpdate=!0,x.renderBufferDirect(z,I,B,O,y,ue),O.side=Ut):x.renderBufferDirect(z,I,B,O,y,ue),y.onAfterRender(x,I,z,B,O,ue)}function Ii(y,I,z){I.isScene!==!0&&(I=qe);const B=Ne.get(y),O=p.state.lights,ue=p.state.shadowsArray,ve=O.state.version,Te=ne.getParameters(y,O.state,ue,I,z),Pe=ne.getProgramCacheKey(Te);let He=B.programs;B.environment=y.isMeshStandardMaterial?I.environment:null,B.fog=I.fog,B.envMap=(y.isMeshStandardMaterial?b:Qe).get(y.envMap||B.environment),B.envMapRotation=B.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,He===void 0&&(y.addEventListener("dispose",F),He=new Map,B.programs=He);let Ue=He.get(Pe);if(Ue!==void 0){if(B.currentProgram===Ue&&B.lightsStateVersion===ve)return Wr(y,Te),Ue}else Te.uniforms=ne.getUniforms(y),y.onBuild(z,Te,x),y.onBeforeCompile(Te,x),Ue=ne.acquireProgram(Te,Pe),He.set(Pe,Ue),B.uniforms=Te.uniforms;const Fe=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Fe.clippingPlanes=oe.uniform),Wr(y,Te),B.needsLights=bc(y),B.lightsStateVersion=ve,B.needsLights&&(Fe.ambientLightColor.value=O.state.ambient,Fe.lightProbe.value=O.state.probe,Fe.directionalLights.value=O.state.directional,Fe.directionalLightShadows.value=O.state.directionalShadow,Fe.spotLights.value=O.state.spot,Fe.spotLightShadows.value=O.state.spotShadow,Fe.rectAreaLights.value=O.state.rectArea,Fe.ltc_1.value=O.state.rectAreaLTC1,Fe.ltc_2.value=O.state.rectAreaLTC2,Fe.pointLights.value=O.state.point,Fe.pointLightShadows.value=O.state.pointShadow,Fe.hemisphereLights.value=O.state.hemi,Fe.directionalShadowMap.value=O.state.directionalShadowMap,Fe.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Fe.spotShadowMap.value=O.state.spotShadowMap,Fe.spotLightMatrix.value=O.state.spotLightMatrix,Fe.spotLightMap.value=O.state.spotLightMap,Fe.pointShadowMap.value=O.state.pointShadowMap,Fe.pointShadowMatrix.value=O.state.pointShadowMatrix),B.currentProgram=Ue,B.uniformsList=null,Ue}function Vr(y){if(y.uniformsList===null){const I=y.currentProgram.getUniforms();y.uniformsList=cs.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function Wr(y,I){const z=Ne.get(y);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function Ec(y,I,z,B,O){I.isScene!==!0&&(I=qe),Oe.resetTextureUnits();const ue=I.fog,ve=B.isMeshStandardMaterial?I.environment:null,Te=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Sn,Pe=(B.isMeshStandardMaterial?b:Qe).get(B.envMap||ve),He=B.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ue=!!z.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Fe=!!z.morphAttributes.position,at=!!z.morphAttributes.normal,Rt=!!z.morphAttributes.color;let pt=_n;B.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(pt=x.toneMapping);const jt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,st=jt!==void 0?jt.length:0,ze=Ne.get(B),Es=p.state.lights;if(k===!0&&(te===!0||y!==V)){const Nt=y===V&&B.id===U;oe.setState(B,y,Nt)}let nt=!1;B.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Es.state.version||ze.outputColorSpace!==Te||O.isBatchedMesh&&ze.batching===!1||!O.isBatchedMesh&&ze.batching===!0||O.isInstancedMesh&&ze.instancing===!1||!O.isInstancedMesh&&ze.instancing===!0||O.isSkinnedMesh&&ze.skinning===!1||!O.isSkinnedMesh&&ze.skinning===!0||O.isInstancedMesh&&ze.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&ze.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&ze.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&ze.instancingMorph===!1&&O.morphTexture!==null||ze.envMap!==Pe||B.fog===!0&&ze.fog!==ue||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==oe.numPlanes||ze.numIntersection!==oe.numIntersection)||ze.vertexAlphas!==He||ze.vertexTangents!==Ue||ze.morphTargets!==Fe||ze.morphNormals!==at||ze.morphColors!==Rt||ze.toneMapping!==pt||Ie.isWebGL2===!0&&ze.morphTargetsCount!==st)&&(nt=!0):(nt=!0,ze.__version=B.version);let wn=ze.currentProgram;nt===!0&&(wn=Ii(B,I,O));let Xr=!1,gi=!1,ws=!1;const Mt=wn.getUniforms(),bn=ze.uniforms;if(Ee.useProgram(wn.program)&&(Xr=!0,gi=!0,ws=!0),B.id!==U&&(U=B.id,gi=!0),Xr||V!==y){Mt.setValue(N,"projectionMatrix",y.projectionMatrix),Mt.setValue(N,"viewMatrix",y.matrixWorldInverse);const Nt=Mt.map.cameraPosition;Nt!==void 0&&Nt.setValue(N,pe.setFromMatrixPosition(y.matrixWorld)),Ie.logarithmicDepthBuffer&&Mt.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Mt.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),V!==y&&(V=y,gi=!0,ws=!0)}if(O.isSkinnedMesh){Mt.setOptional(N,O,"bindMatrix"),Mt.setOptional(N,O,"bindMatrixInverse");const Nt=O.skeleton;Nt&&(Ie.floatVertexTextures?(Nt.boneTexture===null&&Nt.computeBoneTexture(),Mt.setValue(N,"boneTexture",Nt.boneTexture,Oe)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&(Mt.setOptional(N,O,"batchingTexture"),Mt.setValue(N,"batchingTexture",O._matricesTexture,Oe));const bs=z.morphAttributes;if((bs.position!==void 0||bs.normal!==void 0||bs.color!==void 0&&Ie.isWebGL2===!0)&&se.update(O,z,wn),(gi||ze.receiveShadow!==O.receiveShadow)&&(ze.receiveShadow=O.receiveShadow,Mt.setValue(N,"receiveShadow",O.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(bn.envMap.value=Pe,bn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),gi&&(Mt.setValue(N,"toneMappingExposure",x.toneMappingExposure),ze.needsLights&&wc(bn,ws),ue&&B.fog===!0&&Q.refreshFogUniforms(bn,ue),Q.refreshMaterialUniforms(bn,B,Z,G,de),cs.upload(N,Vr(ze),bn,Oe)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(cs.upload(N,Vr(ze),bn,Oe),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Mt.setValue(N,"center",O.center),Mt.setValue(N,"modelViewMatrix",O.modelViewMatrix),Mt.setValue(N,"normalMatrix",O.normalMatrix),Mt.setValue(N,"modelMatrix",O.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Nt=B.uniformsGroups;for(let Ts=0,Tc=Nt.length;Ts<Tc;Ts++)if(Ie.isWebGL2){const qr=Nt[Ts];_e.update(qr,wn),_e.bind(qr,wn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return wn}function wc(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function bc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(y,I,z){Ne.get(y.texture).__webglTexture=I,Ne.get(y.depthTexture).__webglTexture=z;const B=Ne.get(y);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=z===void 0,B.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,I){const z=Ne.get(y);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,z=0){T=y,L=I,C=z;let B=!0,O=null,ue=!1,ve=!1;if(y){const Pe=Ne.get(y);Pe.__useDefaultFramebuffer!==void 0?(Ee.bindFramebuffer(N.FRAMEBUFFER,null),B=!1):Pe.__webglFramebuffer===void 0?Oe.setupRenderTarget(y):Pe.__hasExternalTextures&&Oe.rebindTextures(y,Ne.get(y.texture).__webglTexture,Ne.get(y.depthTexture).__webglTexture);const He=y.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(ve=!0);const Ue=Ne.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ue[I])?O=Ue[I][z]:O=Ue[I],ue=!0):Ie.isWebGL2&&y.samples>0&&Oe.useMultisampledRTT(y)===!1?O=Ne.get(y).__webglMultisampledFramebuffer:Array.isArray(Ue)?O=Ue[z]:O=Ue,_.copy(y.viewport),A.copy(y.scissor),q=y.scissorTest}else _.copy(J).multiplyScalar(Z).floor(),A.copy(re).multiplyScalar(Z).floor(),q=fe;if(Ee.bindFramebuffer(N.FRAMEBUFFER,O)&&Ie.drawBuffers&&B&&Ee.drawBuffers(y,O),Ee.viewport(_),Ee.scissor(A),Ee.setScissorTest(q),ue){const Pe=Ne.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,Pe.__webglTexture,z)}else if(ve){const Pe=Ne.get(y.texture),He=I||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Pe.__webglTexture,z||0,He)}U=-1},this.readRenderTargetPixels=function(y,I,z,B,O,ue,ve){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Ne.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ve!==void 0&&(Te=Te[ve]),Te){Ee.bindFramebuffer(N.FRAMEBUFFER,Te);try{const Pe=y.texture,He=Pe.format,Ue=Pe.type;if(He!==Ot&&Me.convert(He)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Ue===Ti&&(ye.has("EXT_color_buffer_half_float")||Ie.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Ue!==vn&&Me.convert(Ue)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ue===tn&&(Ie.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-B&&z>=0&&z<=y.height-O&&N.readPixels(I,z,B,O,Me.convert(He),Me.convert(Ue),ue)}finally{const Pe=T!==null?Ne.get(T).__webglFramebuffer:null;Ee.bindFramebuffer(N.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(y,I,z=0){const B=Math.pow(2,-z),O=Math.floor(I.image.width*B),ue=Math.floor(I.image.height*B);Oe.setTexture2D(I,0),N.copyTexSubImage2D(N.TEXTURE_2D,z,0,0,y.x,y.y,O,ue),Ee.unbindTexture()},this.copyTextureToTexture=function(y,I,z,B=0){const O=I.image.width,ue=I.image.height,ve=Me.convert(z.format),Te=Me.convert(z.type);Oe.setTexture2D(z,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,z.unpackAlignment),I.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,B,y.x,y.y,O,ue,ve,Te,I.image.data):I.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,B,y.x,y.y,I.mipmaps[0].width,I.mipmaps[0].height,ve,I.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,B,y.x,y.y,ve,Te,I.image),B===0&&z.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(y,I,z,B,O=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ue=Math.round(y.max.x-y.min.x),ve=Math.round(y.max.y-y.min.y),Te=y.max.z-y.min.z+1,Pe=Me.convert(B.format),He=Me.convert(B.type);let Ue;if(B.isData3DTexture)Oe.setTexture3D(B,0),Ue=N.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)Oe.setTexture2DArray(B,0),Ue=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment);const Fe=N.getParameter(N.UNPACK_ROW_LENGTH),at=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Rt=N.getParameter(N.UNPACK_SKIP_PIXELS),pt=N.getParameter(N.UNPACK_SKIP_ROWS),jt=N.getParameter(N.UNPACK_SKIP_IMAGES),st=z.isCompressedTexture?z.mipmaps[O]:z.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,st.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,st.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,y.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,y.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,y.min.z),z.isDataTexture||z.isData3DTexture?N.texSubImage3D(Ue,O,I.x,I.y,I.z,ue,ve,Te,Pe,He,st.data):B.isCompressedArrayTexture?N.compressedTexSubImage3D(Ue,O,I.x,I.y,I.z,ue,ve,Te,Pe,st.data):N.texSubImage3D(Ue,O,I.x,I.y,I.z,ue,ve,Te,Pe,He,st),N.pixelStorei(N.UNPACK_ROW_LENGTH,Fe),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,at),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Rt),N.pixelStorei(N.UNPACK_SKIP_ROWS,pt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,jt),O===0&&B.generateMipmaps&&N.generateMipmap(Ue),Ee.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?Oe.setTextureCube(y,0):y.isData3DTexture?Oe.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Oe.setTexture2DArray(y,0):Oe.setTexture2D(y,0),Ee.unbindTexture()},this.resetState=function(){L=0,C=0,T=null,Ee.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Cr?"display-p3":"srgb",t.unpackColorSpace=$e.workingColorSpace===xs?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Hp extends Lr{}Hp.prototype.isWebGL1Renderer=!0;class gs{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Se(e),this.density=t}clone(){return new gs(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Vp extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ht,this.environmentRotation=new Ht,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Dr extends yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _a=new w,va=new w,xa=new Je,rr=new Ms,ns=new Ri;class fc extends ct{constructor(e=new _t,t=new Dr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)_a.fromBufferAttribute(t,i-1),va.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=_a.distanceTo(va);e.setAttribute("lineDistance",new Xe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ns.copy(n.boundingSphere),ns.applyMatrix4(i),ns.radius+=r,e.ray.intersectsSphere(ns)===!1)return;xa.copy(i).invert(),rr.copy(e.ray).applyMatrix4(xa);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new w,h=new w,u=new w,f=new w,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const d=Math.max(0,o.start),S=Math.min(g.count,o.start+o.count);for(let x=d,E=S-1;x<E;x+=m){const L=g.getX(x),C=g.getX(x+1);if(l.fromBufferAttribute(p,L),h.fromBufferAttribute(p,C),rr.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);const U=e.ray.origin.distanceTo(f);U<e.near||U>e.far||t.push({distance:U,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),S=Math.min(p.count,o.start+o.count);for(let x=d,E=S-1;x<E;x+=m){if(l.fromBufferAttribute(p,x),h.fromBufferAttribute(p,x+1),rr.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(f);C<e.near||C>e.far||t.push({distance:C,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Ma=new w,Sa=new w;class Wp extends fc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Ma.fromBufferAttribute(t,i),Sa.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ma.distanceTo(Sa);e.setAttribute("lineDistance",new Xe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pc extends yn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ya=new Je,yr=new Ms,is=new Ri,ss=new w;class Xp extends ct{constructor(e=new _t,t=new pc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),is.copy(n.boundingSphere),is.applyMatrix4(i),is.radius+=r,e.ray.intersectsSphere(is)===!1)return;ya.copy(i).invert(),yr.copy(e.ray).applyMatrix4(ya);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=f,M=m;g<M;g++){const p=l.getX(g);ss.fromBufferAttribute(u,p),Ea(ss,p,c,i,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=f,M=m;g<M;g++)ss.fromBufferAttribute(u,g),Ea(ss,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ea(s,e,t,n,i,r,o){const a=yr.distanceSqToPoint(s);if(a<t){const c=new w;yr.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class Yt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const h=n[i],f=n[i+1]-h,m=(o-h)/f;return(i+m)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new ae:new w);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new w,i=[],r=[],o=[],a=new w,c=new Je;for(let m=0;m<=e;m++){const g=m/e;i[m]=this.getTangentAt(g,new w)}r[0]=new w,o[0]=new w;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(i[m-1],i[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(gt(i[m-1].dot(i[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(a,g))}o[m].crossVectors(i[m],r[m])}if(t===!0){let m=Math.acos(gt(r[0].dot(r[e]),-1,1));m/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],m*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ur extends Yt{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ae){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,m=l-this.aY;c=f*h-m*u+this.aX,l=f*u+m*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class qp extends Ur{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ir(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,m=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,m*=h,i(o,a,f,m)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const rs=new w,or=new Ir,ar=new Ir,cr=new Ir;class Yp extends Yt{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new w){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(rs.subVectors(i[0],i[1]).add(i[0]),l=rs);const u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(rs.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=rs),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),m),M=Math.pow(u.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(h),m);M<1e-4&&(M=1),g<1e-4&&(g=M),p<1e-4&&(p=M),or.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,M,p),ar.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,M,p),cr.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,M,p)}else this.curveType==="catmullrom"&&(or.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),ar.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),cr.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(or.calc(c),ar.calc(c),cr.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new w().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function wa(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function jp(s,e){const t=1-s;return t*t*e}function Kp(s,e){return 2*(1-s)*s*e}function $p(s,e){return s*s*e}function wi(s,e,t,n){return jp(s,e)+Kp(s,t)+$p(s,n)}function Zp(s,e){const t=1-s;return t*t*t*e}function Jp(s,e){const t=1-s;return 3*t*t*s*e}function Qp(s,e){return 3*(1-s)*s*s*e}function em(s,e){return s*s*s*e}function bi(s,e,t,n,i){return Zp(s,e)+Jp(s,t)+Qp(s,n)+em(s,i)}class mc extends Yt{constructor(e=new ae,t=new ae,n=new ae,i=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ae){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(bi(e,i.x,r.x,o.x,a.x),bi(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class tm extends Yt{constructor(e=new w,t=new w,n=new w,i=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new w){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(bi(e,i.x,r.x,o.x,a.x),bi(e,i.y,r.y,o.y,a.y),bi(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class gc extends Yt{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nm extends Yt{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _c extends Yt{constructor(e=new ae,t=new ae,n=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ae){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(wi(e,i.x,r.x,o.x),wi(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class im extends Yt{constructor(e=new w,t=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new w){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(wi(e,i.x,r.x,o.x),wi(e,i.y,r.y,o.y),wi(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vc extends Yt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(wa(a,c.x,l.x,h.x,u.x),wa(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ae().fromArray(i))}return this}}var ba=Object.freeze({__proto__:null,ArcCurve:qp,CatmullRomCurve3:Yp,CubicBezierCurve:mc,CubicBezierCurve3:tm,EllipseCurve:Ur,LineCurve:gc,LineCurve3:nm,QuadraticBezierCurve:_c,QuadraticBezierCurve3:im,SplineCurve:vc});class sm extends Yt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ba[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new ba[i.type]().fromJSON(i))}return this}}class rm extends sm{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new gc(this.currentPoint.clone(),new ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new _c(this.currentPoint.clone(),new ae(e,t),new ae(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new mc(this.currentPoint.clone(),new ae(e,t),new ae(n,i),new ae(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new vc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){const l=new Ur(e,t,n,i,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Nr extends _t{constructor(e=[new ae(0,-.5),new ae(.5,0),new ae(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=gt(i,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/t,u=new w,f=new ae,m=new w,g=new w,M=new w;let p=0,d=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:p=e[S+1].x-e[S].x,d=e[S+1].y-e[S].y,m.x=d*1,m.y=-p,m.z=d*0,M.copy(m),m.normalize(),c.push(m.x,m.y,m.z);break;case e.length-1:c.push(M.x,M.y,M.z);break;default:p=e[S+1].x-e[S].x,d=e[S+1].y-e[S].y,m.x=d*1,m.y=-p,m.z=d*0,g.copy(m),m.x+=M.x,m.y+=M.y,m.z+=M.z,m.normalize(),c.push(m.x,m.y,m.z),M.copy(g)}for(let S=0;S<=t;S++){const x=n+S*h*i,E=Math.sin(x),L=Math.cos(x);for(let C=0;C<=e.length-1;C++){u.x=e[C].x*E,u.y=e[C].y,u.z=e[C].x*L,o.push(u.x,u.y,u.z),f.x=S/t,f.y=C/(e.length-1),a.push(f.x,f.y);const T=c[3*C+0]*E,U=c[3*C+1],V=c[3*C+0]*L;l.push(T,U,V)}}for(let S=0;S<t;S++)for(let x=0;x<e.length-1;x++){const E=x+S*e.length,L=E,C=E+e.length,T=E+e.length+1,U=E+1;r.push(L,C,U),r.push(T,U,C)}this.setIndex(r),this.setAttribute("position",new Xe(o,3)),this.setAttribute("uv",new Xe(a,2)),this.setAttribute("normal",new Xe(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nr(e.points,e.segments,e.phiStart,e.phiLength)}}class Fr extends Nr{constructor(e=1,t=1,n=4,i=8){const r=new rm;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new Fr(e.radius,e.length,e.capSegments,e.radialSegments)}}class un extends _t{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],m=[];let g=0;const M=[],p=n/2;let d=0;S(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Xe(u,3)),this.setAttribute("normal",new Xe(f,3)),this.setAttribute("uv",new Xe(m,2));function S(){const E=new w,L=new w;let C=0;const T=(t-e)/n;for(let U=0;U<=r;U++){const V=[],_=U/r,A=_*(t-e)+e;for(let q=0;q<=i;q++){const $=q/i,D=$*c+a,X=Math.sin(D),G=Math.cos(D);L.x=A*X,L.y=-_*n+p,L.z=A*G,u.push(L.x,L.y,L.z),E.set(X,T,G).normalize(),f.push(E.x,E.y,E.z),m.push($,1-_),V.push(g++)}M.push(V)}for(let U=0;U<i;U++)for(let V=0;V<r;V++){const _=M[V][U],A=M[V+1][U],q=M[V+1][U+1],$=M[V][U+1];h.push(_,A,$),h.push(A,q,$),C+=6}l.addGroup(d,C,0),d+=C}function x(E){const L=g,C=new ae,T=new w;let U=0;const V=E===!0?e:t,_=E===!0?1:-1;for(let q=1;q<=i;q++)u.push(0,p*_,0),f.push(0,_,0),m.push(.5,.5),g++;const A=g;for(let q=0;q<=i;q++){const D=q/i*c+a,X=Math.cos(D),G=Math.sin(D);T.x=V*G,T.y=p*_,T.z=V*X,u.push(T.x,T.y,T.z),f.push(0,_,0),C.x=X*.5+.5,C.y=G*.5*_+.5,m.push(C.x,C.y),g++}for(let q=0;q<i;q++){const $=L+q,D=A+q;E===!0?h.push(D,D+1,$):h.push(D+1,D,$),U+=3}l.addGroup(d,U,E===!0?1:2),d+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new un(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Or extends _t{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new Xe(r,3)),this.setAttribute("normal",new Xe(r.slice(),3)),this.setAttribute("uv",new Xe(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const x=new w,E=new w,L=new w;for(let C=0;C<t.length;C+=3)m(t[C+0],x),m(t[C+1],E),m(t[C+2],L),c(x,E,L,S)}function c(S,x,E,L){const C=L+1,T=[];for(let U=0;U<=C;U++){T[U]=[];const V=S.clone().lerp(E,U/C),_=x.clone().lerp(E,U/C),A=C-U;for(let q=0;q<=A;q++)q===0&&U===C?T[U][q]=V:T[U][q]=V.clone().lerp(_,q/A)}for(let U=0;U<C;U++)for(let V=0;V<2*(C-U)-1;V++){const _=Math.floor(V/2);V%2===0?(f(T[U][_+1]),f(T[U+1][_]),f(T[U][_])):(f(T[U][_+1]),f(T[U+1][_+1]),f(T[U+1][_]))}}function l(S){const x=new w;for(let E=0;E<r.length;E+=3)x.x=r[E+0],x.y=r[E+1],x.z=r[E+2],x.normalize().multiplyScalar(S),r[E+0]=x.x,r[E+1]=x.y,r[E+2]=x.z}function h(){const S=new w;for(let x=0;x<r.length;x+=3){S.x=r[x+0],S.y=r[x+1],S.z=r[x+2];const E=p(S)/2/Math.PI+.5,L=d(S)/Math.PI+.5;o.push(E,1-L)}g(),u()}function u(){for(let S=0;S<o.length;S+=6){const x=o[S+0],E=o[S+2],L=o[S+4],C=Math.max(x,E,L),T=Math.min(x,E,L);C>.9&&T<.1&&(x<.2&&(o[S+0]+=1),E<.2&&(o[S+2]+=1),L<.2&&(o[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function m(S,x){const E=S*3;x.x=e[E+0],x.y=e[E+1],x.z=e[E+2]}function g(){const S=new w,x=new w,E=new w,L=new w,C=new ae,T=new ae,U=new ae;for(let V=0,_=0;V<r.length;V+=9,_+=6){S.set(r[V+0],r[V+1],r[V+2]),x.set(r[V+3],r[V+4],r[V+5]),E.set(r[V+6],r[V+7],r[V+8]),C.set(o[_+0],o[_+1]),T.set(o[_+2],o[_+3]),U.set(o[_+4],o[_+5]),L.copy(S).add(x).add(E).divideScalar(3);const A=p(L);M(C,_+0,S,A),M(T,_+2,x,A),M(U,_+4,E,A)}}function M(S,x,E,L){L<0&&S.x===1&&(o[x]=S.x-1),E.x===0&&E.z===0&&(o[x]=L/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function d(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.vertices,e.indices,e.radius,e.details)}}class _s extends Or{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new _s(e.radius,e.detail)}}class zr extends _t{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let u=e;const f=(t-e)/i,m=new w,g=new ae;for(let M=0;M<=i;M++){for(let p=0;p<=n;p++){const d=r+p/n*o;m.x=u*Math.cos(d),m.y=u*Math.sin(d),c.push(m.x,m.y,m.z),l.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let M=0;M<i;M++){const p=M*(n+1);for(let d=0;d<n;d++){const S=d+p,x=S,E=S+n+1,L=S+n+2,C=S+1;a.push(x,E,C),a.push(E,L,C)}}this.setIndex(a),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(l,3)),this.setAttribute("uv",new Xe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ut extends _t{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new w,f=new w,m=[],g=[],M=[],p=[];for(let d=0;d<=n;d++){const S=[],x=d/n;let E=0;d===0&&o===0?E=.5/t:d===n&&c===Math.PI&&(E=-.5/t);for(let L=0;L<=t;L++){const C=L/t;u.x=-e*Math.cos(i+C*r)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(i+C*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),M.push(f.x,f.y,f.z),p.push(C+E,1-x),S.push(l++)}h.push(S)}for(let d=0;d<n;d++)for(let S=0;S<t;S++){const x=h[d][S+1],E=h[d][S],L=h[d+1][S],C=h[d+1][S+1];(d!==0||o>0)&&m.push(x,E,C),(d!==n-1||c<Math.PI)&&m.push(E,L,C)}this.setIndex(m),this.setAttribute("position",new Xe(g,3)),this.setAttribute("normal",new Xe(M,3)),this.setAttribute("uv",new Xe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ut(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Br extends _t{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new w,u=new w,f=new w;for(let m=0;m<=n;m++)for(let g=0;g<=i;g++){const M=g/i*r,p=m/n*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(M),u.y=(e+t*Math.cos(p))*Math.sin(M),u.z=t*Math.sin(p),a.push(u.x,u.y,u.z),h.x=e*Math.cos(M),h.y=e*Math.sin(M),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/i),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=i;g++){const M=(i+1)*m+g-1,p=(i+1)*(m-1)+g-1,d=(i+1)*(m-1)+g,S=(i+1)*m+g;o.push(M,p,S),o.push(p,d,S)}this.setIndex(o),this.setAttribute("position",new Xe(a,3)),this.setAttribute("normal",new Xe(c,3)),this.setAttribute("uv",new Xe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Br(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class mn extends yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ar,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ht,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ke extends yn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Se(16777215),this.specular=new Se(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ar,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ht,this.combine=br,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Ta={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class om{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const m=l[u],g=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}}const am=new om;class Gr{constructor(e){this.manager=e!==void 0?e:am,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Gr.DEFAULT_MATERIAL_NAME="__DEFAULT";class cm extends Gr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ta.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Ai("img");function c(){h(),Ta.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Aa extends Gr{constructor(e){super(e)}load(e,t,n,i){const r=new Tt,o=new cm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Li extends ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class xc extends Li{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const lr=new Je,Ca=new w,Pa=new w;class kr{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pr,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ca.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ca),Pa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pa),t.updateMatrixWorld(),lr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(lr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class lm extends kr{constructor(){super(new Ct(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ms*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ra extends Li{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new lm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const La=new Je,Ei=new w,hr=new w;class hm extends kr{constructor(){super(new Ct(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ae(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ei.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ei),hr.copy(n.position),hr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(hr),n.updateMatrixWorld(),i.makeTranslation(-Ei.x,-Ei.y,-Ei.z),La.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(La)}}class um extends Li{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new hm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class dm extends kr{constructor(){super(new oc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mc extends Li{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new dm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Sc extends Li{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Da{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class fm extends Wp{constructor(e=10,t=10,n=4473924,i=8947848){n=new Se(n),i=new Se(i);const r=t/2,o=e/t,a=e/2,c=[],l=[];for(let f=0,m=0,g=-a;f<=t;f++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const M=f===r?n:i;M.toArray(l,m),m+=3,M.toArray(l,m),m+=3,M.toArray(l,m),m+=3,M.toArray(l,m),m+=3}const h=new _t;h.setAttribute("position",new Xe(c,3)),h.setAttribute("color",new Xe(l,3));const u=new Dr({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Er}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Er);const Ua={type:"change"},ur={type:"start"},Ia={type:"end"},os=new Ms,Na=new hn,pm=Math.cos(70*Cl.DEG2RAD);class mm extends Gn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new w,this.cursor=new w,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:kn.ROTATE,MIDDLE:kn.DOLLY,RIGHT:kn.PAN},this.touches={ONE:Hn.ROTATE,TWO:Hn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",we),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",we),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ua),n.update(),r=i.NONE},this.update=function(){const P=new w,j=new Bn().setFromUnitVectors(e.up,new w(0,1,0)),ge=j.clone().invert(),R=new w,ie=new Bn,F=new w,ee=2*Math.PI;return function(Ve=null){const je=n.object.position;P.copy(je).sub(n.target),P.applyQuaternion(j),a.setFromVector3(P),n.autoRotate&&r===i.NONE&&q(_(Ve)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Ze=n.minAzimuthAngle,ot=n.maxAzimuthAngle;isFinite(Ze)&&isFinite(ot)&&(Ze<-Math.PI?Ze+=ee:Ze>Math.PI&&(Ze-=ee),ot<-Math.PI?ot+=ee:ot>Math.PI&&(ot-=ee),Ze<=ot?a.theta=Math.max(Ze,Math.min(ot,a.theta)):a.theta=a.theta>(Ze+ot)/2?Math.max(Ze,a.theta):Math.min(ot,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Ye=!1;if(n.zoomToCursor&&C||n.object.isOrthographicCamera)a.radius=J(a.radius);else{const et=a.radius;a.radius=J(a.radius*l),Ye=et!=a.radius}if(P.setFromSpherical(a),P.applyQuaternion(ge),je.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&C){let et=null;if(n.object.isPerspectiveCamera){const xt=P.length();et=J(xt*l);const En=xt-et;n.object.position.addScaledVector(E,En),n.object.updateMatrixWorld(),Ye=!!En}else if(n.object.isOrthographicCamera){const xt=new w(L.x,L.y,0);xt.unproject(n.object);const En=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Ye=En!==n.object.zoom;const Di=new w(L.x,L.y,0);Di.unproject(n.object),n.object.position.sub(Di).add(xt),n.object.updateMatrixWorld(),et=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;et!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(et).add(n.object.position):(os.origin.copy(n.object.position),os.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(os.direction))<pm?e.lookAt(n.target):(Na.setFromNormalAndCoplanarPoint(n.object.up,n.target),os.intersectPlane(Na,n.target))))}else if(n.object.isOrthographicCamera){const et=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),et!==n.object.zoom&&(n.object.updateProjectionMatrix(),Ye=!0)}return l=1,C=!1,Ye||R.distanceToSquared(n.object.position)>o||8*(1-ie.dot(n.object.quaternion))>o||F.distanceToSquared(n.target)>o?(n.dispatchEvent(Ua),R.copy(n.object.position),ie.copy(n.object.quaternion),F.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",De),n.domElement.removeEventListener("pointerdown",Oe),n.domElement.removeEventListener("pointercancel",b),n.domElement.removeEventListener("wheel",Y),n.domElement.removeEventListener("pointermove",Qe),n.domElement.removeEventListener("pointerup",b),n.domElement.getRootNode().removeEventListener("keydown",Q,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",we),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new Da,c=new Da;let l=1;const h=new w,u=new ae,f=new ae,m=new ae,g=new ae,M=new ae,p=new ae,d=new ae,S=new ae,x=new ae,E=new w,L=new ae;let C=!1;const T=[],U={};let V=!1;function _(P){return P!==null?2*Math.PI/60*n.autoRotateSpeed*P:2*Math.PI/60/60*n.autoRotateSpeed}function A(P){const j=Math.abs(P*.01);return Math.pow(.95,n.zoomSpeed*j)}function q(P){c.theta-=P}function $(P){c.phi-=P}const D=function(){const P=new w;return function(ge,R){P.setFromMatrixColumn(R,0),P.multiplyScalar(-ge),h.add(P)}}(),X=function(){const P=new w;return function(ge,R){n.screenSpacePanning===!0?P.setFromMatrixColumn(R,1):(P.setFromMatrixColumn(R,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(ge),h.add(P)}}(),G=function(){const P=new w;return function(ge,R){const ie=n.domElement;if(n.object.isPerspectiveCamera){const F=n.object.position;P.copy(F).sub(n.target);let ee=P.length();ee*=Math.tan(n.object.fov/2*Math.PI/180),D(2*ge*ee/ie.clientHeight,n.object.matrix),X(2*R*ee/ie.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(D(ge*(n.object.right-n.object.left)/n.object.zoom/ie.clientWidth,n.object.matrix),X(R*(n.object.top-n.object.bottom)/n.object.zoom/ie.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Z(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(P,j){if(!n.zoomToCursor)return;C=!0;const ge=n.domElement.getBoundingClientRect(),R=P-ge.left,ie=j-ge.top,F=ge.width,ee=ge.height;L.x=R/F*2-1,L.y=-(ie/ee)*2+1,E.set(L.x,L.y,1).unproject(n.object).sub(n.object.position).normalize()}function J(P){return Math.max(n.minDistance,Math.min(n.maxDistance,P))}function re(P){u.set(P.clientX,P.clientY)}function fe(P){K(P.clientX,P.clientX),d.set(P.clientX,P.clientY)}function Re(P){g.set(P.clientX,P.clientY)}function k(P){f.set(P.clientX,P.clientY),m.subVectors(f,u).multiplyScalar(n.rotateSpeed);const j=n.domElement;q(2*Math.PI*m.x/j.clientHeight),$(2*Math.PI*m.y/j.clientHeight),u.copy(f),n.update()}function te(P){S.set(P.clientX,P.clientY),x.subVectors(S,d),x.y>0?Z(A(x.y)):x.y<0&&W(A(x.y)),d.copy(S),n.update()}function de(P){M.set(P.clientX,P.clientY),p.subVectors(M,g).multiplyScalar(n.panSpeed),G(p.x,p.y),g.copy(M),n.update()}function Ce(P){K(P.clientX,P.clientY),P.deltaY<0?W(A(P.deltaY)):P.deltaY>0&&Z(A(P.deltaY)),n.update()}function xe(P){let j=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?$(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,n.keyPanSpeed),j=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?$(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,-n.keyPanSpeed),j=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(n.keyPanSpeed,0),j=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(-n.keyPanSpeed,0),j=!0;break}j&&(P.preventDefault(),n.update())}function pe(P){if(T.length===1)u.set(P.pageX,P.pageY);else{const j=me(P),ge=.5*(P.pageX+j.x),R=.5*(P.pageY+j.y);u.set(ge,R)}}function qe(P){if(T.length===1)g.set(P.pageX,P.pageY);else{const j=me(P),ge=.5*(P.pageX+j.x),R=.5*(P.pageY+j.y);g.set(ge,R)}}function Ae(P){const j=me(P),ge=P.pageX-j.x,R=P.pageY-j.y,ie=Math.sqrt(ge*ge+R*R);d.set(0,ie)}function N(P){n.enableZoom&&Ae(P),n.enablePan&&qe(P)}function ht(P){n.enableZoom&&Ae(P),n.enableRotate&&pe(P)}function ye(P){if(T.length==1)f.set(P.pageX,P.pageY);else{const ge=me(P),R=.5*(P.pageX+ge.x),ie=.5*(P.pageY+ge.y);f.set(R,ie)}m.subVectors(f,u).multiplyScalar(n.rotateSpeed);const j=n.domElement;q(2*Math.PI*m.x/j.clientHeight),$(2*Math.PI*m.y/j.clientHeight),u.copy(f)}function Ie(P){if(T.length===1)M.set(P.pageX,P.pageY);else{const j=me(P),ge=.5*(P.pageX+j.x),R=.5*(P.pageY+j.y);M.set(ge,R)}p.subVectors(M,g).multiplyScalar(n.panSpeed),G(p.x,p.y),g.copy(M)}function Ee(P){const j=me(P),ge=P.pageX-j.x,R=P.pageY-j.y,ie=Math.sqrt(ge*ge+R*R);S.set(0,ie),x.set(0,Math.pow(S.y/d.y,n.zoomSpeed)),Z(x.y),d.copy(S);const F=(P.pageX+j.x)*.5,ee=(P.pageY+j.y)*.5;K(F,ee)}function We(P){n.enableZoom&&Ee(P),n.enablePan&&Ie(P)}function Ne(P){n.enableZoom&&Ee(P),n.enableRotate&&ye(P)}function Oe(P){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",Qe),n.domElement.addEventListener("pointerup",b)),!ke(P)&&(se(P),P.pointerType==="touch"?oe(P):v(P)))}function Qe(P){n.enabled!==!1&&(P.pointerType==="touch"?le(P):H(P))}function b(P){switch(rt(P),T.length){case 0:n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",Qe),n.domElement.removeEventListener("pointerup",b),n.dispatchEvent(Ia),r=i.NONE;break;case 1:const j=T[0],ge=U[j];oe({pointerId:j,pageX:ge.x,pageY:ge.y});break}}function v(P){let j;switch(P.button){case 0:j=n.mouseButtons.LEFT;break;case 1:j=n.mouseButtons.MIDDLE;break;case 2:j=n.mouseButtons.RIGHT;break;default:j=-1}switch(j){case kn.DOLLY:if(n.enableZoom===!1)return;fe(P),r=i.DOLLY;break;case kn.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;Re(P),r=i.PAN}else{if(n.enableRotate===!1)return;re(P),r=i.ROTATE}break;case kn.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;re(P),r=i.ROTATE}else{if(n.enablePan===!1)return;Re(P),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ur)}function H(P){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;k(P);break;case i.DOLLY:if(n.enableZoom===!1)return;te(P);break;case i.PAN:if(n.enablePan===!1)return;de(P);break}}function Y(P){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(P.preventDefault(),n.dispatchEvent(ur),Ce(ne(P)),n.dispatchEvent(Ia))}function ne(P){const j=P.deltaMode,ge={clientX:P.clientX,clientY:P.clientY,deltaY:P.deltaY};switch(j){case 1:ge.deltaY*=16;break;case 2:ge.deltaY*=100;break}return P.ctrlKey&&!V&&(ge.deltaY*=10),ge}function Q(P){P.key==="Control"&&(V=!0,n.domElement.getRootNode().addEventListener("keyup",Le,{passive:!0,capture:!0}))}function Le(P){P.key==="Control"&&(V=!1,n.domElement.getRootNode().removeEventListener("keyup",Le,{passive:!0,capture:!0}))}function we(P){n.enabled===!1||n.enablePan===!1||xe(P)}function oe(P){switch(Me(P),T.length){case 1:switch(n.touches.ONE){case Hn.ROTATE:if(n.enableRotate===!1)return;pe(P),r=i.TOUCH_ROTATE;break;case Hn.PAN:if(n.enablePan===!1)return;qe(P),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Hn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;N(P),r=i.TOUCH_DOLLY_PAN;break;case Hn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ht(P),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ur)}function le(P){switch(Me(P),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ye(P),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Ie(P),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;We(P),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ne(P),n.update();break;default:r=i.NONE}}function De(P){n.enabled!==!1&&P.preventDefault()}function se(P){T.push(P.pointerId)}function rt(P){delete U[P.pointerId];for(let j=0;j<T.length;j++)if(T[j]==P.pointerId){T.splice(j,1);return}}function ke(P){for(let j=0;j<T.length;j++)if(T[j]==P.pointerId)return!0;return!1}function Me(P){let j=U[P.pointerId];j===void 0&&(j=new ae,U[P.pointerId]=j),j.set(P.pageX,P.pageY)}function me(P){const j=P.pointerId===T[0]?T[1]:T[0];return U[j]}n.domElement.addEventListener("contextmenu",De),n.domElement.addEventListener("pointerdown",Oe),n.domElement.addEventListener("pointercancel",b),n.domElement.addEventListener("wheel",Y,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Q,{passive:!0,capture:!0}),this.update()}}class gm{constructor(e){if(!e||!e.camera)throw new Error("Game and camera must be initialized");this.game=e,this.camera=e.camera,this.target=null,this.offset=new w(0,15,20),this.currentPosition=new w,this.currentLookAt=new w,this.smoothFactor=.1,this.defaultPosition=new w(0,15,20),this.defaultLookAt=new w(0,0,0),this.settings={followSpeed:2,rotationSpeed:1,zoomSpeed:1,minZoom:10,maxZoom:50,shakeMagnitude:.5,tiltRange:{min:.3,max:1.2}},this.shake={active:!1,duration:0,intensity:0,trauma:0},this.currentPosition.copy(this.camera.position),this.currentLookAt.set(0,0,0),this.update=this.update.bind(this),this.setTarget=this.setTarget.bind(this),this.cleanup=this.cleanup.bind(this),this.reset=this.reset.bind(this),e.renderer?this.setupControls():console.warn("Renderer not initialized, skipping OrbitControls setup")}setupControls(){try{this.orbitControls=new mm(this.camera,this.game.renderer.domElement),this.orbitControls.enableDamping=!0,this.orbitControls.dampingFactor=.05,this.orbitControls.screenSpacePanning=!1,this.orbitControls.minDistance=this.settings.minZoom,this.orbitControls.maxDistance=this.settings.maxZoom,this.orbitControls.maxPolarAngle=Math.PI/2,this.orbitControls.enabled=!1}catch(e){console.warn("Error setting up OrbitControls:",e)}}update(e){if(!(!this.camera||!this.target))try{const t=this.target.position.clone().add(this.offset);this.currentPosition.lerp(t,e*this.settings.followSpeed),this.currentLookAt.lerp(this.target.position,e*this.settings.followSpeed),this.camera.position.copy(this.currentPosition),this.camera.lookAt(this.currentLookAt),Math.random()<.01&&console.log("Camera: Updated position",{cameraPosition:this.camera.position.clone(),targetPosition:this.target.position.clone(),offset:this.offset.clone(),currentLookAt:this.currentLookAt.clone()}),this.orbitControls&&this.orbitControls.enabled&&this.orbitControls.update(),this.shake.active&&this.updateShake(e)}catch(t){console.error("Error in camera update:",t)}}updateShake(e){if(this.shake.trauma<=0){this.shake.active=!1;return}const t=new w((Math.random()-.5)*this.shake.intensity*this.settings.shakeMagnitude,(Math.random()-.5)*this.shake.intensity*this.settings.shakeMagnitude,(Math.random()-.5)*this.shake.intensity*this.settings.shakeMagnitude);this.camera.position.add(t),this.shake.trauma=Math.max(0,this.shake.trauma-e*2)}setTarget(e){e&&(this.target=e,this.currentPosition.copy(e.position).add(this.offset),this.currentLookAt.copy(e.position),this.camera.position.copy(this.currentPosition),this.camera.lookAt(this.currentLookAt),console.log("Camera: Set new target",{targetPosition:e.position.clone(),cameraPosition:this.camera.position.clone(),offset:this.offset.clone()}))}cleanup(){this.orbitControls&&(this.orbitControls.dispose(),this.orbitControls=null)}reset(){this.camera.position.copy(this.defaultPosition),this.currentLookAt.copy(this.defaultLookAt),this.camera.lookAt(this.defaultLookAt),console.log("Camera: Reset to default position",{position:this.camera.position.clone(),lookAt:this.currentLookAt.clone()})}}class ls{constructor(e,t){this.game=e,this.speed=15,this.direction=new w(1,0,0),this.nextDirection=this.direction.clone(),this.segments=[],this.segmentSpacing=1.67,this.isGhost=!1,this.isInvincible=!1,this.pointMultiplier=1,this.hasRainbowTrail=!1,this.hasMagnet=!1,this.worldSize=100,this.initialized=!1,this.initializationFrames=180,this.movementEnabled=!1,this.collisionChecksEnabled=!1,this.score=0,this.group=new ai,this.game.scene.add(this.group),this.createHead(t);for(let n=0;n<5;n++){const i=t.clone().sub(this.direction.clone().multiplyScalar(this.segmentSpacing*(n+1)));this.addSegmentAtPosition(i)}this.positionHistory=[];for(let n=0;n<10;n++)this.positionHistory.push(t.clone());this.createTrail(),this.setupInput(),console.log("Snake: Initialized",{headPosition:this.head.position.clone(),segmentSpacing:this.segmentSpacing,initialSegments:this.segments.length,segmentPositions:this.segments.map(n=>n.position.clone()),frameCount:this.game.frameCount}),setTimeout(()=>{this.movementEnabled=!0,console.log("Snake: Movement enabled",{frameCount:this.game.frameCount,headPosition:this.head.position.clone(),segmentPositions:this.segments.map(n=>n.position.clone())})},4e3)}createHead(e){const t=new ut(.8,32,32);this.material=new Ke({color:4120753,emissive:4120753,emissiveIntensity:.4,shininess:50,transparent:!0,opacity:.9});const n=new ut(1,32,32),i=new Ke({color:4120753,emissive:4120753,emissiveIntensity:.5,transparent:!0,opacity:.3,side:vt});this.head=new be(t,this.material),this.headGlow=new be(n,i),this.head.position.copy(e),this.headGlow.position.copy(e),this.collisionRadius=.9,this.group.add(this.head),this.group.add(this.headGlow)}createTrail(){const e=new _t,t=[],n=[];for(let r=0;r<50;r++)t.push(0,0,0),n.push(.24,.88,.69);e.setAttribute("position",new Xe(t,3)),e.setAttribute("color",new Xe(n,3));const i=new Dr({vertexColors:!0,transparent:!0,opacity:.5,linewidth:1});this.trail=new fc(e,i),this.game.scene.add(this.trail),this.trailPoints=[];for(let r=0;r<50;r++)this.trailPoints.push(this.head.position.clone())}updateTrail(){this.trailPoints.push(this.head.position.clone()),this.trailPoints.shift();const e=this.trail.geometry.attributes.position.array;for(let t=0;t<this.trailPoints.length;t++){const n=this.trailPoints[t];e[t*3]=n.x,e[t*3+1]=n.y,e[t*3+2]=n.z}this.trail.geometry.attributes.position.needsUpdate=!0}addSegmentAtPosition(e){const t=new ut(.7,16,16),n=new Ke({color:4120753,emissive:4120753,emissiveIntensity:.2}),i=new be(t,n);i.position.copy(e),i.castShadow=!0,i.receiveShadow=!0,this.segments.push(i),this.group.add(i),console.log("Snake: Added segment",{index:this.segments.length-1,position:e.clone(),headPosition:this.head.position.clone(),direction:this.direction.clone(),spacing:this.segmentSpacing})}addSegment(){let e;this.segments.length===0?e=this.head.position.clone().sub(this.direction.clone().multiplyScalar(this.segmentSpacing)):e=this.segments[this.segments.length-1].position.clone().sub(this.direction.clone().multiplyScalar(this.segmentSpacing)),this.addSegmentAtPosition(e)}setGhostMode(e){this.isGhost=e;const t=e?.5:1,n=e?.8:.2;this.head.material.transparent=e,this.head.material.opacity=t,this.head.material.emissiveIntensity=n,this.segments.forEach(i=>{i.material.transparent=e,i.material.opacity=t,i.material.emissiveIntensity=n}),e?this.addGhostTrail():this.removeGhostTrail(),console.log("Snake: Ghost mode "+(e?"enabled":"disabled"),{opacity:t,emissiveIntensity:n,segmentCount:this.segments.length,hasGhostTrail:!!this.ghostTrails})}setTimeScale(e){this.timeScale=e,console.log("Snake: Time scale set to",e)}setMagnetMode(e){this.magnetMode=e,this.magnetRadius=e?15:0,this.magnetStrength=e?2:0;const t=e?new Se(16711935):new Se(4120753),n=e?.8:.2;this.head.material.emissive=t,this.head.material.emissiveIntensity=n,this.segments.forEach(i=>{i.material.emissive=t,i.material.emissiveIntensity=n}),console.log("Snake: Magnet mode "+(e?"enabled":"disabled"),{magnetMode:this.magnetMode,magnetRadius:this.magnetRadius,magnetStrength:this.magnetStrength})}setInvulnerable(e){this.isInvulnerable=e;const t=e?new Se(16776960):new Se(4120753),n=e?.8:.2;this.head.material.emissive=t,this.head.material.emissiveIntensity=n,this.headGlow.material.emissive=t,this.headGlow.material.emissiveIntensity=n,this.segments.forEach(i=>{i.material.emissive=t,i.material.emissiveIntensity=n}),console.log("Snake: Invulnerability "+(e?"enabled":"disabled"),{color:t.getHexString(),emissiveIntensity:n,segmentCount:this.segments.length})}addGhostTrail(){const e=new ut(.4,8,8),t=new Ke({color:4120753,transparent:!0,opacity:.3,emissive:4120753,emissiveIntensity:.3});this.ghostTrails=[];for(let n=0;n<5;n++){const i=new be(e,t);i.position.copy(this.head.position),this.game.scene.add(i),this.ghostTrails.push(i)}}removeGhostTrail(){this.ghostTrails&&(this.ghostTrails.forEach(e=>{this.game.scene.remove(e),e.geometry.dispose(),e.material.dispose()}),this.ghostTrails=null)}setDirection(e){const t=e.clone();if(this.direction.dot(t)===-1){console.log("Snake: Prevented 180-degree turn",{currentDirection:this.direction.clone(),attemptedDirection:t.clone()});return}this.nextDirection=t,this.game&&this.head&&this.game.onSnakeTurn(this.head.position),console.log("Snake: Direction changed",{oldDirection:this.direction.clone(),newDirection:this.nextDirection.clone(),headPosition:this.head?this.head.position.clone():null})}checkObstacleCollision(){if(!this.game.gameManager.obstacleSystem)return!1;const e=this.head.position,t=this.game.gameManager.obstacleSystem.isNearMovingObstacle(e),n=t?.8:.6;return this.game.gameManager.obstacleSystem.checkCollisions({position:e,radius:n})?(console.log("Snake: Obstacle collision detected",{headPosition:e.clone(),collisionRadius:n,isMovingObstacle:t}),this.game.gameManager.gameOver(),!0):!1}update(e){if(!this.game.isRunning||this.game.gameManager.isGameOver||!this.movementEnabled)return;const t=e*(this.timeScale||1);if(this.movementTimer+=t,this.movementTimer>=this.movementInterval&&(this.move(),this.movementTimer=0),this.collisionChecksEnabled&&this.checkCollisions(),this.trailEffect&&this.trailEffect.update(t),this.isGhostMode&&this.updateGhostTrail(t),this.magnetMode&&this.updateMagnetEffect(t),this.updateTrail(),this.headGlow){this.headGlow.position.copy(this.head.position);const r=1+Math.sin(performance.now()*.003)*.1;this.headGlow.scale.set(r,r,r)}if(!this.initialized&&this.game.frameCount>this.initializationFrames&&(this.initialized=!0,this.collisionChecksEnabled=!0,console.log("Snake: Initialization complete",{frameCount:this.game.frameCount,headPosition:this.head.position.clone(),segmentPositions:this.segments.map(r=>r.position.clone()),collisionChecksEnabled:this.collisionChecksEnabled})),this.nextDirection){const r=this.direction.clone();this.direction.copy(this.nextDirection),!r.equals(this.direction)&&this.game&&this.head&&this.game.onSnakeTurn(this.head.position)}const n=this.segments.map(r=>r.position.clone()),i=this.head.position.clone();this.head.position.add(this.direction.clone().multiplyScalar(this.speed*t));for(let r=0;r<this.segments.length;r++){const o=this.segments[r];if(r===0){const a=i.clone();o.position.lerp(a,.5)}else{const a=n[r-1].clone();o.position.lerp(a,.5)}}}checkWallCollision(e){if(this.isGhost)return!1;const t=e||this.head.position,n=this.worldSize/2,i=Math.abs(t.x)>n,r=Math.abs(t.z)>n;return i||r?(console.log("Snake: Wall collision detected",{position:t.clone(),currentPosition:this.head.position.clone(),xCollision:i,zCollision:r,worldSize:this.worldSize,boundary:n,x:t.x,z:t.z}),this.game.gameManager.gameOver(),!0):!1}checkPelletCollisions(){var t;if(!this.game.gameManager||!this.game.gameManager.pellets){console.log("Snake: Pellet collision check skipped - missing gameManager or pellets",{hasGameManager:!!this.game.gameManager,hasPellets:(t=this.game.gameManager)==null?void 0:t.pellets,isInitialized:this.initialized,movementEnabled:this.movementEnabled,collisionChecksEnabled:this.collisionChecksEnabled});return}const e=this.game.gameManager.pellets;for(let n=e.length-1;n>=0;n--){const i=e[n];if(!i||!i.mesh||i.isCollected)continue;const r=this.head.position.distanceTo(i.mesh.position),o=this.collisionRadius+i.radius;console.log("Snake: Checking pellet distance",{distance:r,threshold:o,headPosition:this.head.position.clone(),pelletPosition:i.mesh.position.clone()}),r<o&&(console.log("Snake: Pellet collision detected",{distance:r,threshold:o,headPosition:this.head.position.clone(),pelletPosition:i.mesh.position.clone()}),this.game.gameManager.collectPellet(i))}}checkPowerUpCollisions(){var t,n;if(!this.game.gameManager||!this.game.gameManager.powerUps){console.log("Snake: Power-up collision check skipped - missing gameManager or powerUps",{hasGameManager:!!this.game.gameManager,hasPowerUps:(t=this.game.gameManager)==null?void 0:t.powerUps,isInitialized:this.initialized,movementEnabled:this.movementEnabled,collisionChecksEnabled:this.collisionChecksEnabled});return}const e=Array.from(this.game.gameManager.powerUps);console.log("Snake: Checking power-up collisions",{powerUpCount:e.length,headPosition:this.head.position.clone(),isInitialized:this.initialized,movementEnabled:this.movementEnabled,collisionChecksEnabled:this.collisionChecksEnabled,powerUpPositions:e.map(i=>i.position.clone())});for(const i of e){if(!i||!i.position){console.log("Snake: Invalid power-up found",{powerUp:i});continue}const r=this.head.position.distanceTo(i.position),o=2;console.log("Snake: Checking power-up distance",{distance:r,threshold:o,powerUpType:i.type,headPosition:this.head.position.clone(),powerUpPosition:i.position.clone(),powerUpMesh:!!i.mesh,powerUpMeshVisible:(n=i.mesh)==null?void 0:n.visible}),r<o&&(console.log("Snake: Power-up collision detected",{distance:r,threshold:o,powerUpType:i.type,headPosition:this.head.position.clone(),powerUpPosition:i.position.clone()}),this.game.gameManager.collectPowerUp(i))}}cleanup(){for(this.removeGhostTrail();this.segments.length>0;){const e=this.segments.pop();this.group.remove(e),e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}this.head&&(this.group.remove(this.head),this.head.geometry&&this.head.geometry.dispose(),this.head.material&&this.head.material.dispose()),this.group&&this.game.scene&&this.game.scene.remove(this.group),this.segments=[],this.head=null,this.group=null,console.log("Snake: Cleanup complete",{sceneChildren:this.game.scene.children.length,hasGroup:!!this.group,segmentsLength:this.segments.length})}checkCollisions(){if(!this.initialized||!this.movementEnabled||!this.collisionChecksEnabled){console.log("Snake: Collision checks skipped",{isInitialized:this.initialized,movementEnabled:this.movementEnabled,collisionChecksEnabled:this.collisionChecksEnabled,frameCount:this.game.frameCount});return}if(this.checkPelletCollisions(),this.checkPowerUpCollisions(),!(this.isInvulnerable||this.isGhost)&&!(!this.isGhost&&this.checkWallCollision())){if(!this.isInvulnerable&&!this.isGhost&&this.game.gameManager.obstacleSystem&&this.checkObstacleCollision()){this.game.gameManager.gameOver();return}if(!this.isInvulnerable&&!this.isGhost){const e=this.segmentSpacing*.4;for(let t=4;t<this.segments.length;t++){const n=this.segments[t],i=this.head.position.distanceTo(n.position);if(i<e){console.log("Snake: Self collision detected",{distance:i,threshold:e,segmentIndex:t,headPosition:this.head.position.clone(),segmentPosition:n.position.clone(),isInvulnerable:this.isInvulnerable,isGhost:this.isGhost}),this.game.gameManager.gameOver();return}}}}}setupInput(){window.addEventListener("keydown",e=>{if(!this.movementEnabled)return;let t;switch(e.key.toLowerCase()){case"arrowup":case"w":t=new w(0,0,-1);break;case"arrowdown":case"s":t=new w(0,0,1);break;case"arrowleft":case"a":t=new w(-1,0,0);break;case"arrowright":case"d":t=new w(1,0,0);break;default:return}t&&this.setDirection(t)})}updateMagnetEffect(e){if(!this.magnetMode||!this.game.gameManager)return;const t=this.game.gameManager.pellets;if(!t||!t.length)return;const n=this.head.position;t.forEach(i=>{if(!i||!i.mesh)return;const r=i.mesh.position,o=r.distanceTo(n);if(o<this.magnetRadius){const a=new w().subVectors(n,r).normalize(),c=this.magnetStrength*(1-o/this.magnetRadius)*e*60;r.add(a.multiplyScalar(c)),console.log("Snake: Attracting pellet",{distance:o,attractionStrength:c,pelletPosition:r.clone(),headPosition:n.clone()})}})}}class _m{constructor(e,t,n="normal"){this.game=e,this.type=n,this.velocity=new w,this.radius=.3,this.isCollected=!1,this.isSpecial=n!=="normal",this.position=t||new w((Math.random()-.5)*40,.5,(Math.random()-.5)*40),this.createMesh(),this.game.scene.add(this.mesh),this.game.scene.add(this.glow),this.initialY=this.position.y,this.hoverOffset=Math.random()*Math.PI*2,this.hoverSpeed=1.5+Math.random()*.5,this.rotationSpeed=(Math.random()-.5)*2}createMesh(){const e=new ut(this.radius,24,24),t=this.type==="normal"?16426765:14776794,n=new Ke({color:t,emissive:t,emissiveIntensity:.5,shininess:50,transparent:!0,opacity:.9});this.mesh=new be(e,n),this.mesh.position.copy(this.position),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0;const i=new ut(this.radius+.1,24,24),r=new Ke({color:t,emissive:t,emissiveIntensity:.4,transparent:!0,opacity:.3,side:vt});this.glow=new be(i,r),this.glow.position.copy(this.position)}collect(){this.isCollected||(this.isCollected=!0,this.cleanup())}update(e){if(this.isCollected)return;const t=performance.now()*.001,i=this.initialY+Math.sin(t*this.hoverSpeed+this.hoverOffset)*.1;this.position.y=i,this.mesh.position.y=i,this.glow.position.y=i,this.mesh.rotation.y+=this.rotationSpeed*e,this.glow.rotation.y=this.mesh.rotation.y;const r=1+Math.sin(t*2)*.1;this.glow.scale.set(r,r,r),this.velocity.lengthSq()>0&&(this.position.add(this.velocity.clone().multiplyScalar(e)),this.mesh.position.copy(this.position),this.glow.position.copy(this.position))}cleanup(){this.mesh&&(this.game.scene.remove(this.mesh),this.mesh.geometry&&this.mesh.geometry.dispose(),this.mesh.material&&this.mesh.material.dispose()),this.glow&&(this.game.scene.remove(this.glow),this.glow.geometry&&this.glow.geometry.dispose(),this.glow.material&&this.glow.material.dispose())}}const ci=class ci{constructor(e){this.game=e,this.powerUps=[],this.isActive=!1,this.activePowerUps=new Map,this.magnetRadius=15,this.timeSlowFactor=.5,this.magnetActive=!1,this.start()}start(){this.isActive=!0,console.log("PowerUpSystem: Started")}cleanup(){this.isActive=!1;for(const[e]of this.activePowerUps)this.deactivatePowerUp(e);this.activePowerUps.clear()}activatePowerUp(e,t=null){console.log("PowerUpSystem: Activating power-up",{type:e,hasSnake:!!this.game.snake,hasTargetSnake:!!t,activePowerUps:Array.from(this.activePowerUps.keys())});const n=t||this.game.snake;if(!n){console.error("PowerUpSystem: Cannot activate power-up - no snake found");return}const i=ci.Types[e];if(!i){console.error("PowerUpSystem: Invalid power-up type",{type:e,availableTypes:Object.keys(ci.Types)});return}const r=`${i.id}_${n===this.game.snake?"player":"bot"}`;this.activePowerUps.has(r)&&this.deactivatePowerUp(r);try{console.log("PowerUpSystem: Applying effect",{type:i.id,snake:n===this.game.snake?"player":"bot",hasEffect:typeof i.effect=="function"});const o=i.effect(n);this.activePowerUps.set(r,{type:i,cleanup:o,timer:setTimeout(()=>{this.deactivatePowerUp(r)},i.duration),startTime:performance.now()}),this.showPowerUpEffect(e,n),this.game.events&&this.game.events.emit("powerup:acquired",{type:i.id,duration:i.duration}),console.log("PowerUpSystem: Power-up activated",{type:i.id,duration:i.duration,snake:n===this.game.snake?"player":"bot",activePowerUps:Array.from(this.activePowerUps.keys())})}catch(o){console.error("PowerUpSystem: Error activating power-up",{type:e,error:o.message,stack:o.stack})}}deactivatePowerUp(e){const t=this.activePowerUps.get(e);if(t){console.log("PowerUpSystem: Deactivating power-up",{typeId:e});try{t.timer&&clearTimeout(t.timer),t.cleanup&&typeof t.cleanup=="function"&&(console.log("PowerUpSystem: Calling cleanup for",{typeId:e}),t.cleanup()),this.activePowerUps.delete(e),console.log("PowerUpSystem: Power-up deactivated",{typeId:e,activePowerUps:Array.from(this.activePowerUps.keys())})}catch(n){console.error("PowerUpSystem: Error deactivating power-up",{typeId:e,error:n.message,stack:n.stack})}}}showPowerUpEffect(e,t){const n=ci.Types[e];if(!n||!t||!t.head)return;const i=new ut(2,32,32),r=new Ke({color:n.color,transparent:!0,opacity:.5,emissive:n.color,emissiveIntensity:.5}),o=new be(i,r);t.head.add(o);const a=1e3,c=performance.now(),l=()=>{const u=(performance.now()-c)/a;u<1?(o.scale.setScalar(1+u),o.material.opacity=.5*(1-u),requestAnimationFrame(l)):(o.parent&&o.parent.remove(o),o.geometry.dispose(),r.dispose())};l()}update(e){if(this.isActive)for(const[t,n]of this.activePowerUps){if(!n.startTime)continue;performance.now()-n.startTime>=n.type.duration&&(console.log(`PowerUpSystem: Power-up ${t} expired`),this.deactivatePowerUp(t))}}};Yr(ci,"Types",{ghost:{id:"ghost",name:"Ghost Mode",icon:"👻",color:8421504,duration:8e3,effect:e=>(console.log("PowerUpSystem: Applying ghost effect to snake",{snake:e===e.game.snake?"player":"bot",hasGhostMode:typeof e.setGhostMode=="function"}),e.setGhostMode(!0),()=>e.setGhostMode(!1))},timeSlow:{id:"timeSlow",name:"Time Warp",icon:"⌛",color:65535,duration:1e4,effect:e=>(console.log("PowerUpSystem: Applying time slow effect to snake",{snake:e===e.game.snake?"player":"bot",hasTimeScale:typeof e.setTimeScale=="function"}),e.setTimeScale(.5),()=>e.setTimeScale(1))},magnet:{id:"magnet",name:"Pellet Magnet",icon:"🧲",color:16711935,duration:15e3,effect:e=>(console.log("PowerUpSystem: Applying magnet effect to snake",{snake:e===e.game.snake?"player":"bot",hasMagnetMode:typeof e.setMagnetMode=="function"}),e.setMagnetMode(!0),()=>e.setMagnetMode(!1))},shield:{id:"shield",name:"Shield",icon:"🛡️",color:16776960,duration:12e3,effect:e=>(console.log("PowerUpSystem: Applying shield effect to snake",{snake:e===e.game.snake?"player":"bot",hasInvulnerable:typeof e.setInvulnerable=="function"}),e.setInvulnerable(!0),()=>e.setInvulnerable(!1))}});let Pt=ci;class vm{constructor(e,t){this.game=e,this.type=t,this.position=new w,this.mesh=null,this.glow=null,this.createMesh()}createMesh(){const e=Pt.Types[this.type];if(!e){console.error("PowerUp: Invalid power-up type",{type:this.type,availableTypes:Object.keys(Pt.Types)});return}const t=new _s(.5,0),n=new Ke({color:e.color,emissive:e.color,emissiveIntensity:.8,transparent:!0,opacity:1,shininess:100});this.mesh=new be(t,n),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.visible=!0;const i=new _s(.6,0),r=new Ss({color:e.color,transparent:!0,opacity:.5,side:vt}),o=new be(i,r);this.mesh.add(o),this.floatOffset=Math.random()*Math.PI*2,this.game&&this.game.scene?(this.game.scene.add(this.mesh),console.log("PowerUp: Added mesh to scene",{type:this.type,powerUpType:e.id,position:this.position.clone(),hasMesh:!!this.mesh,meshVisible:this.mesh.visible,color:e.color,scene:this.game.scene})):console.error("PowerUp: Failed to add mesh to scene - game or scene not found")}setPosition(e){this.position.copy(e),this.mesh&&this.mesh.position.copy(e)}update(e){this.mesh&&(this.floatOffset+=e*2,this.mesh.position.y=this.position.y+Math.sin(this.floatOffset)*.2,this.mesh.rotation.y+=e*2,this.mesh.rotation.z+=e)}cleanup(){if(this.mesh){if(this.game&&this.game.scene&&this.game.scene.remove(this.mesh),this.mesh.geometry&&this.mesh.geometry.dispose(),this.mesh.material&&this.mesh.material.dispose(),this.mesh.children.length>0){const e=this.mesh.children[0];e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}this.mesh=null,this.glow=null}}collect(){this.game.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.mesh.children[0].geometry.dispose(),this.mesh.children[0].material.dispose()}applyEffect(e){switch(this.type){case"speed":e.speed*=1.5,setTimeout(()=>{e.speed/=1.5},this.duration);break;case"size":for(let t=0;t<3;t++)e.grow();break;case"ghost":e.segments.forEach(t=>{t.material.transparent=!0,t.material.opacity=.3}),setTimeout(()=>{e.segments.forEach(t=>{t.material.transparent=!1,t.material.opacity=1})},this.duration);break;case"magnet":e.magnetActive=!0,setTimeout(()=>{e.magnetActive=!1},this.duration);break;case"shield":e.isInvulnerable=!0,setTimeout(()=>{e.isInvulnerable=!1},this.duration);break}}}class yc{constructor(e){this.game=e,this.obstacles=new Set,this.patterns=this.createPatterns(),this.currentDifficulty=1}start(){console.log("ObstacleSystem: Starting"),this.cleanup(),this.initialize()}createPatterns(){return{wall:{create:e=>this.createWall(e),spacing:4},spinner:{create:e=>this.createSpinner(e),spacing:6},moving:{create:e=>this.createMovingObstacle(e),spacing:5}}}initialize(){this.createInitialObstacles()}createInitialObstacles(){for(let t=-45;t<=45;t+=4)this.createWall(new w(t,0,-45)),this.createWall(new w(t,0,45));for(let t=-45;t<=45;t+=4)this.createWall(new w(-45,0,t)),this.createWall(new w(45,0,t));for(let t=0;t<5;t++)this.createRandomObstacleWithSafeZone(0)}createWall(e){const t=new It(2,4,2),n=new mn({color:8421504,roughness:.7,metalness:.3}),i=new be(t,n);i.position.copy(e),i.position.y=2,i.castShadow=!0,i.receiveShadow=!0,this.game.scene.add(i);const r={mesh:i,type:"wall",position:i.position.clone(),radius:1.5,update:null};this.obstacles.add(r),console.log("ObstacleSystem: Created wall obstacle",{position:r.position.clone(),radius:r.radius,size:new w(2,4,2)})}createSpinner(e){const t=new It(6,1,1),n=new mn({color:16711680,roughness:.5,metalness:.5}),i=new be(t,n);i.position.copy(e),i.position.y=2,i.castShadow=!0,this.game.scene.add(i);const r={mesh:i,type:"spinner",position:i.position.clone(),radius:4,update:o=>{i.rotation.y+=o*2,r.position.copy(i.position)}};this.obstacles.add(r),console.log("ObstacleSystem: Created spinner obstacle",{position:r.position.clone(),radius:r.radius})}createMovingObstacle(e){const t=new ut(1),n=new mn({color:65280,roughness:.3,metalness:.7}),i=new be(t,n);i.position.copy(e),i.position.y=1,i.castShadow=!0;const r=e.clone();let o=0;this.game.scene.add(i);const a={mesh:i,type:"moving",isMoving:!0,position:i.position.clone(),radius:1.5,update:c=>{o+=c,i.position.x=r.x+Math.sin(o)*4,i.position.z=r.z+Math.cos(o)*4,a.position.copy(i.position)}};this.obstacles.add(a),console.log("ObstacleSystem: Created moving obstacle",{position:a.position.clone(),radius:a.radius,isMoving:a.isMoving})}createRandomObstacleWithSafeZone(e){const t=Object.keys(this.patterns),n=t[Math.floor(Math.random()*t.length)],i=this.patterns[n],r=new w((Math.random()-.5)*80,0,(Math.random()-.5)*80);i.create(r)}update(e){this.obstacles.forEach(t=>{t.update&&t.update(e)})}checkCollisions(e){let t,n=.8;if(e instanceof w)t=e;else if(e&&e.position)t=e.position,n=e.radius||n;else return console.error("ObstacleSystem: Invalid target for collision check"),!1;for(const i of this.obstacles){if(!i||!i.mesh)continue;const r=i.mesh.position,o=i.size||1,a=t.distanceTo(r),c=n+o;if(a<c)return console.log("ObstacleSystem: Collision detected",{distance:a,minDistance:c,targetPosition:t.clone(),targetRadius:n,obstaclePosition:r.clone(),obstacleRadius:o,obstacleType:i.type}),!0}return!1}increaseDifficulty(e){this.currentDifficulty+=e*.01,Math.random()<.001*this.currentDifficulty&&this.createRandomObstacleWithSafeZone(10)}reset(){this.obstacles.forEach(e=>{this.game.scene.remove(e.mesh),e.mesh.geometry&&e.mesh.geometry.dispose(),e.mesh.material&&e.mesh.material.dispose()}),this.obstacles.clear(),this.currentDifficulty=1,this.createInitialObstacles()}cleanup(){this.reset()}isNearMovingObstacle(e){if(!e||!this.obstacles)return!1;for(const t of this.obstacles){if(!t.type==="moving"&&!t.isMoving)continue;const n=e.distanceTo(t.position);if(n<4)return console.log("ObstacleSystem: Near moving obstacle",{distance:n,position:e.clone(),obstaclePosition:t.position.clone(),obstacleType:t.type}),!0}return!1}}class xm extends ls{constructor(e,t){super(e,t),this.targetPellet=null,this.updateInterval=30,this.lastUpdate=0,this.color=16711680,this.avoidanceRadius=12,this.viewDistance=60,this.wallAvoidanceDistance=25,this.wallAvoidanceStrength=25,this.obstacleAvoidanceStrength=8,this.lastPelletSwitchTime=0,this.interceptPoint=null,this.speed=13,this.baseSpeed=13,this.segmentSpacing=1.2,this.wanderAngle=0,this.wanderRadius=2,this.isGhostMode=!1,this.isMagnetMode=!1,this.isInvulnerable=!1,this.timeScale=1,this.lastPlayerPosition=null,this.playerVelocity=new w,this.lastPelletScan=0,this.pelletScanInterval=100,this.nearbyPellets=[],this.lastDirectionChange=0,this.directionChangeInterval=500,this.currentMovementDirection=new w(1,0,0),this.initBot(),this.movementEnabled=!0,this.isAlive=!0,this.collisionChecksEnabled=!0,this.isInitialized=!0;const n=new w(0,0,0);this.direction=new w().subVectors(n,this.head.position).normalize(),this.nextDirection=this.direction.clone(),this.head.position.y=.5,this.headGlow.position.y=.5,this.positionHistory=[this.head.position.clone()];for(let i=0;i<this.segments.length;i++){const r=this.segments[i],o=this.segmentSpacing*(i+1),a=this.direction.clone(),c=new w().subVectors(this.head.position,a.multiplyScalar(o));r.position.copy(c),r.position.y=.5}this.removeInputListeners()}initBot(){this.material.color.setHex(this.color),this.material.emissive.setHex(3342336),this.material.transparent=!0,this.material.opacity=.9}setupInput(){}removeInputListeners(){const e=t=>{window.removeEventListener(t,this._handleInput)};["keydown","keyup","mousemove"].forEach(e)}setDirection(e){if(!this.movementEnabled||!this.isAlive)return;const t=performance.now();t-this.lastDirectionChange<this.directionChangeInterval||(this.nextDirection.copy(e).normalize(),this.direction.copy(this.nextDirection),this.lastDirectionChange=t)}update(e){if(!this.isInitialized)return;const t=e*(this.timeScale||1);if(this.ghostTrails&&this.ghostTrails.length>0&&this.ghostTrails.forEach((i,r)=>{const o=r*.1,a=this.positionHistory[Math.floor(o*10)]||this.head.position;i.position.lerp(a,.3)}),this.isMagnetMode&&this.updateMagnetEffect(t),this.game.snake){const i=this.game.snake.head.position.clone();this.lastPlayerPosition&&(this.playerVelocity=i.clone().sub(this.lastPlayerPosition).multiplyScalar(1/t)),this.lastPlayerPosition=i}const n=performance.now();n-this.lastUpdate>this.updateInterval&&(this.updateAI(),this.lastUpdate=n),n-this.lastPelletScan>this.pelletScanInterval&&(this.scanForPellets(),this.lastPelletScan=n),this.move(t),this.collisionChecksEnabled&&this.checkCollisions(),this.checkPelletCollection()}updateMagnetEffect(e){if(!this.isMagnetMode||!this.game.gameManager)return;const t=this.game.gameManager.pellets;if(!t||!t.length)return;const n=this.head.position,i=15,r=2;t.forEach(o=>{if(!o||!o.mesh)return;const a=o.mesh.position,c=a.distanceTo(n);if(c<i){const l=new w().subVectors(n,a).normalize(),h=r*(1-c/i)*e*60;a.add(l.multiplyScalar(h)),console.log("Bot: Attracting pellet",{distance:c,attractionStrength:h,pelletPosition:a.clone(),headPosition:n.clone()})}})}scanForPellets(){if(!this.game.gameManager)return;this.nearbyPellets=[],this.game.gameManager.pellets.forEach(t=>{if(!t.mesh)return;this.head.position.distanceTo(t.mesh.position)<=this.viewDistance&&this.nearbyPellets.push({...t,type:"normal"})}),this.game.gameManager.powerUps.forEach(t=>{if(!t.mesh)return;const n=this.head.position.distanceTo(t.mesh.position);n<=this.viewDistance&&(this.nearbyPellets.push({mesh:t.mesh,position:t.mesh.position,type:"powerUp"}),console.log("Bot: Found power-up in range",{distance:n,position:t.mesh.position.clone(),botPosition:this.head.position.clone()}))}),this.nearbyPellets.sort((t,n)=>{const i=this.calculatePelletScore(t);return this.calculatePelletScore(n)-i});const e=this.nearbyPellets.filter(t=>t.type==="powerUp");e.length>0&&console.log("Bot: Power-ups in range",{count:e.length,positions:e.map(t=>t.mesh.position.clone()),botPosition:this.head.position.clone()})}calculatePelletScore(e){if(!e.mesh)return-1/0;const t=this.head.position.distanceTo(e.mesh.position);let n=1e3/(t+1);if(e.type==="powerUp"?(n*=5,n+=5e3):e.type==="bonus"&&(n*=2,n+=1e3),this.game.snake){const i=this.game.snake.head.position.distanceTo(e.mesh.position);i<t?e.type==="powerUp"?t-i<50&&(n*=4,n+=6e3):e.type==="bonus"?t-i<15&&(n*=1.3,n+=600):t-i<10&&(n*=.5,n+=50):n+=(i-t)*(e.type==="powerUp"?500:40)}return e.type==="powerUp"&&console.log("Bot: Power-up score calculation",{distance:t,score:n,position:this.head.position.clone(),powerUpPosition:e.mesh.position.clone(),playerDistance:this.game.snake?this.game.snake.head.position.distanceTo(e.mesh.position):null}),n}predictInterceptionPoint(e){if(!this.game.snake||!this.playerVelocity)return null;const t=this.game.snake.head.position,n=this.game.snake.speed||12,i=this.head.position,r=e.clone(),c=r.clone().sub(t).length()/n,u=r.clone().sub(i).length()/this.speed;return u<c*.9?r:t.clone().add(this.playerVelocity.clone().multiplyScalar(u)).clone().add(this.playerVelocity.clone().normalize().multiplyScalar(2))}move(e){if(!this.movementEnabled)return;this.head.position.clone();const t=this.direction.clone().multiplyScalar(this.speed*e);this.head.position.add(t);const i=(this.game.worldSize||45)/2,r=1;this.head.position.x=Math.max(-i+r,Math.min(i-r,this.head.position.x)),this.head.position.z=Math.max(-i+r,Math.min(i-r,this.head.position.z)),this.head.position.y=.5,this.headGlow.position.copy(this.head.position),this.positionHistory.unshift(this.head.position.clone());const o=Math.max((this.segments.length+1)*2,10);for(;this.positionHistory.length>o;)this.positionHistory.pop();const a=this.segmentSpacing;let c=0;for(let l=0;l<this.segments.length;l++){const h=this.segments[l];c+=a;let u=null,f=c;if(l===0){const m=this.direction.clone().normalize();u=this.head.position.clone().sub(m.multiplyScalar(a))}else for(let m=0;m<this.positionHistory.length-1;m++){const g=this.positionHistory[m],M=this.positionHistory[m+1],p=g.distanceTo(M);if(f<=p){const d=f/p;u=new w().lerpVectors(g,M,d);break}f-=p}if(!u&&this.positionHistory.length>0&&(u=this.positionHistory[this.positionHistory.length-1].clone()),u){const m=l===0?.5:.3*(1-l/this.segments.length*.5);h.position.lerp(u,m),h.position.y=.5}h.position.x=Math.max(-i+r,Math.min(i-r,h.position.x)),h.position.z=Math.max(-i+r,Math.min(i-r,h.position.z))}this.trail&&this.updateTrail()}updateAI(){if(!this.game.gameManager)return;this.scanForPellets(),(!this.targetPellet||!this.game.gameManager.pellets.includes(this.targetPellet))&&(this.targetPellet=this.findBestPellet(),this.interceptPoint=null);let e=new w;if(this.targetPellet&&this.targetPellet.mesh){const o=this.targetPellet.mesh.position;e.subVectors(o,this.head.position).normalize(),this.targetPellet.type==="powerUp"?this.head.position.distanceTo(o)<15?(this.wallAvoidanceStrength=10,this.speed=15):(this.wallAvoidanceStrength=25,this.speed=13):this.targetPellet.type==="bonus"&&(this.head.position.distanceTo(o)<10?(this.wallAvoidanceStrength=15,this.speed=14):(this.wallAvoidanceStrength=25,this.speed=13))}else e.copy(this.currentMovementDirection),this.speed=13,this.wallAvoidanceStrength=25;const n=(this.game.worldSize||45)/2,i=5,r=this.head.position;r.x>n-i&&this.currentMovementDirection.x>0?this.currentMovementDirection.set(0,0,1):r.x<-n+i&&this.currentMovementDirection.x<0?this.currentMovementDirection.set(0,0,-1):r.z>n-i&&this.currentMovementDirection.z>0?this.currentMovementDirection.set(-1,0,0):r.z<-n+i&&this.currentMovementDirection.z<0&&this.currentMovementDirection.set(1,0,0),this.setDirection(this.targetPellet?e:this.currentMovementDirection)}calculateCenterForce(){const e=new w(0,0,0),t=new w().subVectors(e,this.head.position),n=t.length(),i=Math.min(1,n/20);return t.normalize().multiplyScalar(i)}calculateObstacleAvoidance(){const e=new w,t=this.findNearbyObstacles(),n=this.head.position.clone().add(this.direction.clone().multiplyScalar(5));for(const i of t){const r=new w().subVectors(i.position,this.head.position),o=r.length();if(o<this.avoidanceRadius*1.5){const l=Math.pow(1/o,2)*this.obstacleAvoidanceStrength,h=new w(-r.z,0,r.x).normalize();e.add(r.normalize().multiplyScalar(l)),e.add(h.multiplyScalar(l*.8))}const a=new w().subVectors(i.position,n),c=a.length();if(c<this.avoidanceRadius*2){const l=Math.pow(1/c,2)*this.obstacleAvoidanceStrength*.7;e.add(a.normalize().multiplyScalar(-l))}}return e}calculateWallAvoidance(){const e=new w,n=(this.game.worldSize||45)/2,i=1,r=this.head.position,o=n-i-r.x,a=n-i+r.x,c=n-i-r.z,l=n-i+r.z,h=(u,f)=>u<this.wallAvoidanceDistance?Math.pow((this.wallAvoidanceDistance-u)/this.wallAvoidanceDistance,2)*this.wallAvoidanceStrength:0;if(e.x-=h(o),e.x+=h(a),e.z-=h(c),e.z+=h(l),this.isNearWall(4)&&e.multiplyScalar(2),this.isNearWall(2)){e.multiplyScalar(3);const u=this.direction.clone(),f=new w(-u.z,0,u.x);e.add(f.multiplyScalar(this.wallAvoidanceStrength))}return e}isNearWall(e){const n=(this.game.worldSize||45)/2,i=2,r=this.head.position;return Math.abs(r.x)>n-i-e||Math.abs(r.z)>n-i-e}getEmergencyTurnDirection(){const t=(this.game.worldSize||45)/2,n=this.head.position,i=t-n.x,r=t+n.x,o=t-n.z,a=t+n.z,c=Math.min(i,r,o,a);return c===i?-1:c===r?1:c===o?Math.sign(n.x):-Math.sign(n.x)}findBestPellet(){return this.nearbyPellets.length>0?this.nearbyPellets[0]:null}canReachBefore(e,t){if(!this.game.snake)return!0;const n=this.head.position.distanceTo(e),i=this.game.snake.speed||12,r=n/this.speed,o=t/i;return r<o}findAlternativePath(e){const n=Math.PI*2/8,i=5;for(let r=0;r<8;r++){const o=r*n,a=new w(Math.cos(o)*i,0,Math.sin(o)*i),c=e.clone().add(a);if(this.isPathClear(c)&&this.isPathClear(e,c))return c}return null}isGoodTacticalPosition(e){if(!this.game.snake)return!0;const t=this.game.snake.head.position,n=e.distanceTo(t);if(n>8&&n<20)return!0;let i=0;for(const r of this.nearbyPellets){if(!r.mesh||r.mesh.position===e)continue;const o=r.mesh.position.distanceTo(t);r.mesh.position.distanceTo(e)<o&&i++}return i>=2}getDistanceToNearestWall(e){const n=(this.game.worldSize||45)/2,i=n-e.x,r=n+e.x,o=n-e.z,a=n+e.z;return Math.min(i,r,o,a)}isPathClear(e){const t=new w().subVectors(e,this.head.position).normalize(),n=this.head.position.distanceTo(e),i=this.findNearbyObstacles();for(const r of i){const o=new w().subVectors(r.position,this.head.position),a=o.dot(t);if(a>0&&a<n&&o.sub(t.multiplyScalar(a)).length()<2)return!1}return!0}calculatePlayerAvoidance(){const e=new w;if(!this.game.snake)return e;const t=this.game.snake.head.position,n=new w().subVectors(this.head.position,t),i=n.length();if(i<15){const r=Math.pow(15/i,3);e.add(n.normalize().multiplyScalar(r));const o=new w(-n.z,0,n.x).normalize();e.add(o.multiplyScalar(r*.5))}for(const r of this.game.snake.segments){const o=new w().subVectors(this.head.position,r.position),a=o.length();if(a<12){const c=Math.pow(12/a,2);e.add(o.normalize().multiplyScalar(c))}}if(this.game.snake.direction){const r=t.clone().add(this.game.snake.direction.clone().multiplyScalar(5)),o=new w().subVectors(this.head.position,r),a=o.length();if(a<15){const c=Math.pow(15/a,2);e.add(o.normalize().multiplyScalar(c))}}return e}isNearObstacle(e){const t=this.findNearbyObstacles();for(const n of t)if(n.distance<e)return!0;return!1}findNearbyObstacles(){const e=[];if(this.game.gameManager.obstacleSystem)for(const t of this.game.gameManager.obstacleSystem.obstacles){if(!t.mesh)continue;const n=this.head.position.distanceTo(t.mesh.position);n<this.viewDistance&&e.push({position:t.mesh.position,distance:n})}if(this.game.snake&&this.game.snake!==this)for(const t of this.game.snake.segments){const n=this.head.position.distanceTo(t.position);n<this.viewDistance&&e.push({position:t.position,distance:n})}return e}onCollision(){this.die()}turn(e){const t=new Je;t.makeRotationY(e*.1),this.nextDirection.applyMatrix4(t),this.nextDirection.normalize(),this.direction.copy(this.nextDirection);const n=Math.atan2(this.direction.x,this.direction.z);this.head.rotation.y=n}calculateWanderForce(){this.wanderAngle+=(Math.random()-.5)*.1;const e=new w;e.x=Math.cos(this.wanderAngle)*(this.wanderRadius*.5),e.z=Math.sin(this.wanderAngle)*(this.wanderRadius*.5);const t=Math.random()*Math.PI*2,n=new w(Math.cos(t)*.3,0,Math.sin(t)*.3);return e.add(n),e.normalize()}checkCollisions(){if(this.collisionChecksEnabled){if(this.game.gameManager&&this.game.gameManager.obstacleSystem){const e=this.head.position,t=1.2;this.game.gameManager.obstacleSystem.checkCollisions({position:e,radius:t})&&(console.log("Bot: Obstacle collision detected",{position:e,radius:t}),this.game.createParticleEffect&&this.game.createParticleEffect(e,16711680,20,{scale:.2,lifetime:.5,velocityScale:2}),this.game.audioManager&&this.game.audioManager.play("collision"),this.performEmergencyAvoidance())}this.checkPlayerCollision()}}checkPlayerCollision(){if(!this.game.snake||!this.collisionChecksEnabled)return;const e=1.2,t=this.head.position,n=this.game.snake.head.position,i=t.distanceTo(n);if(i<e*2&&this.game.snake.direction){const r=this.game.snake.direction.clone().normalize(),o=new w().subVectors(t,n).normalize(),a=r.dot(o);a>.3&&(console.log("Bot: Player collision detected",{distance:i,dotProduct:a,positions:{bot:t,player:n}}),this.game.snake.die&&this.game.snake.die(),this.game.createParticleEffect&&this.game.createParticleEffect(n,16711680,30,{scale:.3,lifetime:1,velocityScale:3}),this.game.audioManager&&this.game.audioManager.play("collision"))}for(const r of this.game.snake.segments)t.distanceTo(r.position)<e*1.8&&(console.log("Bot: Player segment collision detected",{distance:t.distanceTo(r.position),positions:{bot:t,segment:r.position}}),this.game.snake.die&&this.game.snake.die(),this.game.createParticleEffect&&this.game.createParticleEffect(r.position,16711680,25,{scale:.25,lifetime:.8,velocityScale:2.5}),this.game.audioManager&&this.game.audioManager.play("collision"))}performEmergencyAvoidance(){this.head.position.clone();const e=this.direction.clone(),t=new w(-e.z,0,e.x).normalize(),n=new w(e.z,0,-e.x).normalize(),i=this.checkSpaceInDirection(t),r=this.checkSpaceInDirection(n),o=this.checkSpaceInDirection(e.multiplyScalar(-1));i>r&&i>o?this.direction.copy(t):r>i&&r>o?this.direction.copy(n):this.direction.copy(e.multiplyScalar(-1)),this.nextDirection.copy(this.direction)}checkSpaceInDirection(e){const n=this.head.position.clone(),i=n.clone().add(e.multiplyScalar(10));let r=10;const o=this.findNearbyObstacles();for(const f of o){const m=f.position.clone().sub(n),g=m.dot(e);g>0&&g<10&&m.sub(e.multiplyScalar(g)).length()<2&&(r=Math.min(r,g))}const c=(this.game.worldSize||45)/2,l=2,h=i.x,u=i.z;if(Math.abs(h)>c-l){const f=c-l-Math.abs(n.x);r=Math.min(r,f)}if(Math.abs(u)>c-l){const f=c-l-Math.abs(n.z);r=Math.min(r,f)}return r}checkPelletCollection(){if(!this.game.gameManager)return;const n=this.isMagnetMode?6:2;this.game.gameManager.pellets.forEach(i=>{if(!i.mesh)return;const r=this.head.position.distanceTo(i.mesh.position);r<n&&(console.log("Bot: Collecting regular pellet",{distance:r,collectionRadius:n,isMagnetMode:this.isMagnetMode,position:i.mesh.position.clone()}),this.collectPellet(i))}),this.game.gameManager.powerUps.forEach(i=>{if(!i.mesh)return;const r=this.head.position.distanceTo(i.mesh.position),o=this.isMagnetMode?8:4;r<o&&(console.log("Bot: Collecting power-up",{distance:r,powerUpCollectionRadius:o,isMagnetMode:this.isMagnetMode,type:i.type,position:i.mesh.position.clone()}),this.game.gameManager.collectPowerUp(i))})}collectPellet(e){var t;if(this.isAlive){if(this.game.gameManager){let n=10;Object.keys(Pt.Types).includes(e.type)?(n=100,this.game.gameManager.powerUpSystem?(console.log("Bot: Activating power-up through GameManager",{type:e.type,hasGameManager:!!this.game.gameManager,hasPowerUpSystem:!!this.game.gameManager.powerUpSystem}),this.game.gameManager.powerUpSystem.activatePowerUp(e.type,this)):console.error("Bot: PowerUpSystem not found in GameManager")):e.type==="bonus"&&(n=50),this.game.gameManager.addScore&&this.game.gameManager.addScore(n)}if(this.addSegment(),this.game.audioManager&&(Object.keys(Pt.Types).includes(e.type)?this.game.audioManager.play("powerUpCollect"):e.type==="bonus"?this.game.audioManager.play("bonusCollect"):this.game.audioManager.play("pelletCollect")),this.game.createParticleEffect){let n=16766720,i=15,r=.1;Object.keys(Pt.Types).includes(e.type)?(n=((t=Pt.Types[e.type])==null?void 0:t.color)||65280,i=25,r=.15):e.type==="bonus"&&(n=16711935,i=20,r=.12),this.game.createParticleEffect(e.mesh.position,n,i,{scale:r,lifetime:.5,velocityScale:2})}this.game.gameManager&&this.game.gameManager.removePellet(e),this.targetPellet=null}}addSegment(){const e=new be(new ut(.5,16,16),this.material.clone()),t=this.segments[this.segments.length-1],n=t?t.position:this.head.position,i=this.direction.clone().normalize();e.position.copy(n).sub(i.multiplyScalar(this.segmentSpacing)),e.position.y=.5,this.game.scene.add(e),this.segments.push(e);const r=this.positionHistory[this.positionHistory.length-1];r&&this.positionHistory.push(r.clone()),this.trail&&typeof this.trail.updateSegmentCount=="function"&&this.trail.updateSegmentCount(this.segments.length),this.segmentSpacing=Math.max(.8,1-this.segments.length*.005)}setGhostMode(e){console.log("Bot: Ghost mode",e),this.isGhostMode=e,e?(this.head.material.transparent=!0,this.head.material.opacity=.5,this.headGlow.material.transparent=!0,this.headGlow.material.opacity=.3,this.segments.forEach(t=>{t.material.transparent=!0,t.material.opacity=.5}),this.addGhostTrail()):(this.head.material.transparent=!1,this.head.material.opacity=1,this.headGlow.material.transparent=!1,this.headGlow.material.opacity=.3,this.segments.forEach(t=>{t.material.transparent=!1,t.material.opacity=1}),this.removeGhostTrail())}setTimeScale(e){console.log("Bot: Time scale",e),this.timeScale=e,this.speed=this.baseSpeed*e,this.updateInterval=30/e,this.pelletScanInterval=100/e,this.directionChangeInterval=500/e}setMagnetMode(e){if(console.log("Bot: Magnet mode",e),this.isMagnetMode=e,e){this.viewDistance=90,this.speed=this.baseSpeed*1.2;const t=new Se(16711935);this.head.material.emissive=t,this.head.material.emissiveIntensity=.8,this.headGlow.material.emissive=t,this.headGlow.material.emissiveIntensity=.5,this.segments.forEach(n=>{n.material.emissive=t,n.material.emissiveIntensity=.6})}else{this.viewDistance=60,this.speed=this.baseSpeed;const t=new Se(16711680);this.head.material.emissive=t,this.head.material.emissiveIntensity=.4,this.headGlow.material.emissive=t,this.headGlow.material.emissiveIntensity=.3,this.segments.forEach(n=>{n.material.emissive=t,n.material.emissiveIntensity=.2})}}setInvulnerable(e){if(console.log("Bot: Invulnerable mode",e),this.isInvulnerable=e,e){const t=new Se(16776960);this.head.material.emissive=t,this.head.material.emissiveIntensity=.8,this.headGlow.material.emissive=t,this.headGlow.material.emissiveIntensity=.5,this.segments.forEach(n=>{n.material.emissive=t,n.material.emissiveIntensity=.6})}else{const t=new Se(16711680);this.head.material.emissive=t,this.head.material.emissiveIntensity=.4,this.headGlow.material.emissive=t,this.headGlow.material.emissiveIntensity=.3,this.segments.forEach(n=>{n.material.emissive=t,n.material.emissiveIntensity=.2})}}addGhostTrail(){const e=new ut(.4,8,8),t=new Ke({color:16711680,transparent:!0,opacity:.3,emissive:16711680,emissiveIntensity:.3});this.ghostTrails=[];for(let n=0;n<5;n++){const i=new be(e,t);i.position.copy(this.head.position),this.game.scene.add(i),this.ghostTrails.push(i)}}removeGhostTrail(){this.ghostTrails&&(this.ghostTrails.forEach(e=>{this.game.scene.remove(e),e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}),this.ghostTrails=[])}cleanup(){this.removeGhostTrail(),super.cleanup()}}class Fa{constructor(e){this.game=e,this.isRunning=!1,this.isGameOver=!1,this.collisionChecksEnabled=!1,this.pellets=[],this.powerUps=new Set,this.powerUpSystem=new Pt(e),this.obstacleSystem=new yc(e),this.settings={maxPellets:20,powerUpChance:.1,powerUpTypes:Object.keys(Pt.Types),spawnInterval:1e3,difficultyIncrease:.1},this.startDelay=1e3,this.startTime=0,this.lastSpawnTime=0,this.score=0,this.highScores=this.loadHighScores(),this.multiplier=1,this.combo=0,this.lastPelletTime=0,this.comboTimeout=null,this.updateScoreboard(),this.setupEventListeners(),this.comboSettings={comboTimeout:3e3,basePoints:10,comboMultipliers:[1,1.5,2,3,5],comboThresholds:[0,3,5,8,10],maxComboLevel:4},this.currentCombo=0,this.comboTimer=null,this.botSnake=null,this.botStartDelay=2e3}setupRenderer(){try{this.renderer=new Lr({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=wr,document.body.appendChild(this.renderer.domElement)}catch(e){console.error("Error setting up renderer:",e)}}setupLights(){this.ambientLight=new Sc(4210752),this.scene.add(this.ambientLight),this.directionalLight=new Mc(16777215,1),this.directionalLight.position.set(1,1,1),this.directionalLight.castShadow=!0,this.directionalLight.shadow.mapSize.width=2048,this.directionalLight.shadow.mapSize.height=2048,this.scene.add(this.directionalLight),this.hemisphereLight=new xc(16777147,526368,1),this.scene.add(this.hemisphereLight)}setupEventListeners(){window.addEventListener("keydown",e=>{e.key==="r"&&this.game.restart(),e.key==="p"&&this.togglePause()})}start(){console.log("GameManager: Starting game"),this.isRunning=!0,this.isGameOver=!1,this.score=0,this.pellets=[],this.powerUps.clear(),this.totalPellets=0,this.pelletSpawnInterval=2,this.lastPelletSpawnTime=0,this.collisionChecksEnabled=!1,this.obstacleSystem.start(),this.powerUpSystem.start(),this.spawnInitialPellets(),this.spawnInitialPowerUps(),setTimeout(()=>{this.spawnBotSnake()},this.botStartDelay),setTimeout(()=>{this.collisionChecksEnabled=!0,console.log("GameManager: Enabling collision checks")},this.startDelay)}stop(){console.log("GameManager: Stopping game"),this.isRunning=!1,this.isGameOver=!1,this.collisionChecksEnabled=!1,this.powerUpSystem&&this.powerUpSystem.cleanup(),this.obstacleSystem&&this.obstacleSystem.cleanup(),this.cleanup()}spawnInitialPellets(){for(let e=0;e<5;e++)this.spawnPellet()}spawnInitialPowerUps(){for(let e=0;e<2;e++)this.spawnPowerUp()}spawnBotSnake(){const e=Math.random()*Math.PI*2,t=15,n=new w(Math.cos(e)*t,.5,Math.sin(e)*t);this.botSnake=new xm(this.game,n),console.log("GameManager: Bot snake spawned",{position:n.clone(),angle:e})}update(e){this.isRunning&&(this.powerUpSystem.update(e),this.obstacleSystem.update(e),this.botSnake&&this.botSnake.isAlive&&this.botSnake.update(e),this.handleSpawning(),this.collisionChecksEnabled&&this.checkCollisions())}checkCollisions(){this.collisionChecksEnabled&&(this.game.snake&&this.game.snake.checkCollisions(),this.botSnake&&this.botSnake.isAlive&&(this.botSnake.checkCollisions(),this.game.snake&&this.game.snake.isAlive&&this.checkSnakeCollision(this.game.snake,this.botSnake)))}checkSnakeCollision(e,t){if(!e||!t)return;if(e.head.position.distanceTo(t.head.position)<1){e.die(),t.die();return}for(const i of t.segments)if(e.head.position.distanceTo(i.position)<.8){e.die();return}for(const i of e.segments)if(t.head.position.distanceTo(i.position)<.8){t.die();return}}collectPellet(e){if(!e||!this.isRunning||!this.game.snake)return;const t=Date.now(),n=t-this.lastPelletTime;n<this.comboSettings.comboTimeout?this.currentCombo++:this.currentCombo=0;const i=this.getComboLevel(),r=this.comboSettings.comboMultipliers[i],o=e.isBonus?50:this.comboSettings.basePoints,a=Math.round(o*r);this.score+=a,this.showScorePopup(a,this.currentCombo,i),this.lastPelletTime=t,this.comboTimer&&clearTimeout(this.comboTimer),this.comboTimer=setTimeout(()=>{this.currentCombo>0&&(this.currentCombo=0,this.updateScoreboard())},this.comboSettings.comboTimeout),this.removePellet(e),this.game.snake.addSegment(),this.spawnPellet(),this.updateScoreboard(),i>=2&&this.createComboEffect(this.game.snake.head.position,i),this.game.audioManager&&this.game.audioManager.play("eat"),console.log("GameManager: Pellet collected",{points:a,basePoints:o,multiplier:r,combo:this.currentCombo,comboLevel:i,timeSinceLastPellet:n,snakeLength:this.game.snake.segments.length})}getComboLevel(){for(let e=this.comboSettings.maxComboLevel;e>=0;e--)if(this.currentCombo>=this.comboSettings.comboThresholds[e])return e;return 0}showScorePopup(e,t,n){const i=document.createElement("div");i.className="score-popup";const r=["#ffffff","#00ff00","#00ffff","#ff00ff","#ff0000"],o=[24,28,32,36,40];i.innerHTML=`
            <span class="points">+${e}</span>
            ${t>1?`<span class="combo">x${t}</span>`:""}
        `;const a=this.game.snake.head.position,c=this.worldToScreen(a);i.style.cssText=`
            position: fixed;
            left: ${c.x}px;
            top: ${c.y-50}px;
            color: ${r[n]};
            font-size: ${o[n]}px;
            text-shadow: 0 0 10px ${r[n]};
            pointer-events: none;
            z-index: 1000;
            font-family: 'Press Start 2P', monospace;
            text-align: center;
        `,document.body.appendChild(i),requestAnimationFrame(()=>{i.style.transform="translateY(-100px) scale(1.2)",i.style.opacity="0"}),setTimeout(()=>i.remove(),1e3)}createComboEffect(e,t){const n=[65280,65535,16711935,16711680],i=10+t*5;this.game.createParticleEffect(e,n[t-1],i,{scale:.2+t*.1,lifetime:1+t*.2,velocityScale:2+t,verticalForce:2+t,emissive:!0});const r={pitch:1+t*.2,volume:.5+t*.1};this.game.audioManager.play("combo",r)}worldToScreen(e){const t=e.clone();return t.project(this.game.camera),{x:(t.x+1)*window.innerWidth/2,y:(-t.y+1)*window.innerHeight/2}}collectPowerUp(e){if(!e||this.isGameOver){console.log("GameManager: Cannot collect power-up",{hasPowerUp:!!e,isGameOver:this.isGameOver});return}const t=e.mesh?e.mesh.position.clone():null,n=e.type;let i=null,r=1/0;if(this.game.snake){const o=this.game.snake.head.position.distanceTo(e.mesh.position);o<4&&(i=this.game.snake,r=o)}if(this.botSnake&&this.botSnake.isAlive){const o=this.botSnake.head.position.distanceTo(e.mesh.position);o<4&&o<r&&(i=this.botSnake,r=o)}if(i&&(console.log("GameManager: Collecting power-up",{type:n,position:t,snakeType:i===this.game.snake?"player":"bot",snakePosition:i.head.position.clone(),distance:r}),this.powerUpSystem?(console.log("GameManager: Activating power-up through PowerUpSystem",{type:n,powerUpSystem:!!this.powerUpSystem,snake:i===this.game.snake?"player":"bot"}),this.powerUpSystem.activatePowerUp(n,i)):console.error("GameManager: PowerUpSystem not found"),this.powerUps.delete(e),e.cleanup(),setTimeout(()=>{this.isRunning&&!this.isGameOver&&this.spawnPowerUp()},2e3),this.game.audioManager&&this.game.audioManager.play("powerUp"),this.game.createParticleEffect&&t)){const o=Pt.Types[n],a=o?o.color:65280;this.game.createParticleEffect(t,a,30,{scale:.3,lifetime:1,velocityScale:3})}}spawnPellet(){const e=Math.random()<.2?"bonus":"normal",t=this.game.worldSize||45,n=new w((Math.random()-.5)*t,.5,(Math.random()-.5)*t),i=new _m(this.game,n,e);this.pellets.push(i),console.log("GameManager: Spawned new pellet",{type:e,position:n.clone(),totalPellets:this.pellets.length,worldSize:t})}spawnPowerUp(){var l,h;const e=this.settings.powerUpTypes[Math.floor(Math.random()*this.settings.powerUpTypes.length)],t=this.game.worldSize||45,n=10,i=t/2-5;let r,o=0;const a=10;do{const u=Math.random()*Math.PI*2,f=n+Math.random()*(i-n);r=new w(Math.cos(u)*f,.5,Math.sin(u)*f),o++}while(this.isPositionOccupied(r)&&o<a);const c=new vm(this.game,e);c.setPosition(r),this.powerUps.add(c),console.log("GameManager: Spawned new power-up",{type:e,powerUpType:Pt.Types[e],position:r.clone(),totalPowerUps:this.powerUps.size,worldSize:t,distanceFromCenter:r.length(),collisionChecksEnabled:this.collisionChecksEnabled,isRunning:this.isRunning,isGameOver:this.isGameOver,snakePosition:(h=(l=this.game.snake)==null?void 0:l.head)==null?void 0:h.position})}isPositionOccupied(e){for(const n of this.powerUps)if(n.position.distanceTo(e)<5)return!0;return!!(this.game.snake&&this.game.snake.head&&e.distanceTo(this.game.snake.head.position)<5)}handleSpawning(){const e=Date.now();e-this.lastSpawnTime>this.settings.spawnInterval&&(this.pellets.length<this.settings.maxPellets&&(Math.random()<this.settings.powerUpChance?this.spawnPowerUp():this.spawnPellet()),this.lastSpawnTime=e)}updateDifficulty(e){this.settings.spawnInterval=Math.max(500,this.settings.spawnInterval-e*this.settings.difficultyIncrease),this.obstacleSystem.increaseDifficulty(e)}gameOver(){this.isGameOver||(console.log("GameManager: Game over triggered"),this.collisionChecksEnabled=!1,this.isGameOver=!0,this.isRunning=!1,this.botSnake&&(this.botSnake.cleanup(),this.botSnake=null),this.game.audioManager&&this.game.audioManager.play("gameOver"),this.game.handleGameOver?this.game.handleGameOver():console.error("GameManager: handleGameOver method not found on game instance"),this.highScores.push({score:this.score,date:new Date().toISOString()}),this.highScores.sort((e,t)=>t.score-e.score),this.highScores=this.highScores.slice(0,10),this.saveHighScores(),this.updateScoreboard())}showGameOverScreen(){const e=document.createElement("div");e.className="game-over",e.style.cssText=`
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 0, 0, 0.8);
            padding: 20px;
            border-radius: 10px;
            color: white;
            font-family: 'Press Start 2P', monospace;
            text-align: center;
            z-index: 1000;
        `;const t=Math.max(...this.highScores.map(i=>i.score),0);e.innerHTML=`
            <h1>Game Over</h1>
            <p>Score: ${this.score}</p>
            <p>High Score: ${t}</p>
            <button style="
                background: #3EE0B1;
                border: none;
                padding: 10px 20px;
                border-radius: 5px;
                color: black;
                font-family: 'Press Start 2P', monospace;
                cursor: pointer;
                margin-top: 20px;
            ">Play Again</button>
        `;const n=e.querySelector("button");n.onclick=()=>{document.body.removeChild(e),this.game.restart()},document.body.appendChild(e)}restart(){console.log("GameManager: Restarting game"),this.isRunning=!0,this.isGameOver=!1,this.collisionChecksEnabled=!1,this.startTime=performance.now(),this.settings.spawnInterval=1e3,this.cleanup(),this.powerUpSystem.start(),this.obstacleSystem.start(),this.spawnInitialPellets(),setTimeout(()=>{console.log("GameManager: Enabling collision checks"),this.collisionChecksEnabled=!0},3e3),console.log("GameManager: Game restarted:",{isRunning:this.isRunning,pelletCount:this.pellets.length})}togglePause(){this.isRunning=!this.isRunning,this.isRunning&&(this.startTime=performance.now(),this.collisionChecksEnabled=!1)}cleanup(){console.log("GameManager: Cleaning up game objects"),this.pellets.forEach(e=>{e&&e.cleanup&&e.cleanup()}),this.pellets=[],this.powerUps.forEach(e=>{e&&e.collect&&e.collect()}),this.powerUps.clear(),this.obstacleSystem&&this.obstacleSystem.cleanup(),this.botSnake&&(this.botSnake.cleanup(),this.botSnake=null)}addDecorations(){for(let e=0;e<20;e++){const t=.5+Math.random()*1,n=new It(t,t,t),i=new mn({color:6710886,roughness:.7,metalness:.3}),r=new be(n,i);r.position.x=(Math.random()-.5)*80,r.position.z=(Math.random()-.5)*80,r.position.y=t/2,r.castShadow=!0,r.receiveShadow=!0,this.scene.add(r)}}loadHighScores(){const e=localStorage.getItem("highScores");return e?JSON.parse(e):[]}saveHighScores(){localStorage.setItem("highScores",JSON.stringify(this.highScores))}updateScoreboard(){const e=document.getElementById("scores-container");if(!e)return;const t=[...this.highScores].sort((i,r)=>r.score-i.score).slice(0,10),n=t.map((i,r)=>`
            <div class="score-entry${i.score===this.score?" current":""}">
                <span class="rank">#${r+1}</span>
                <span class="score">${i.score}</span>
            </div>
        `).join("");t.some(i=>i.score===this.score)?e.innerHTML=n:e.innerHTML=n+`
                <div class="score-entry current">
                    <span class="rank">Current</span>
                    <span class="score">${this.score}</span>
                </div>
            `}removePellet(e){const t=this.pellets.indexOf(e);t>-1&&this.pellets.splice(t,1),e.cleanup()}}class Mm{constructor(e){this.game=e,this.score=0,this.highScore=localStorage.getItem("snakeHighScore")||0,this.activePowerUps=new Map,this.isGameOver=!1,this.audioStatus=document.createElement("div"),this.audioStatus.className="audio-status",this.audioStatus.innerHTML="🔇 Click to enable audio",document.body.appendChild(this.audioStatus),this.setupHUD()}setupHUD(){this.hudCanvas=document.createElement("canvas"),this.hudCanvas.style.position="fixed",this.hudCanvas.style.top="0",this.hudCanvas.style.left="0",this.hudCanvas.style.width="100%",this.hudCanvas.style.height="100%",this.hudCanvas.style.pointerEvents="none",document.body.appendChild(this.hudCanvas),this.ctx=this.hudCanvas.getContext("2d"),this.resize(),this.resize=this.resize.bind(this),window.addEventListener("resize",this.resize)}resize(){this.hudCanvas.width=window.innerWidth,this.hudCanvas.height=window.innerHeight}updateScore(e){this.score+=e,this.score>this.highScore&&(this.highScore=this.score,localStorage.setItem("snakeHighScore",this.highScore))}addPowerUp(e){const t=this.game.gameManager.powerUps.get(e);t&&this.activePowerUps.set(e,Date.now()+t.duration)}updatePowerUpDuration(e,t){this.activePowerUps.has(e)&&this.activePowerUps.set(e,Date.now()+t)}removePowerUp(e){this.activePowerUps.delete(e)}getPowerUpColor(e){return{"Speed Boost":"#3EE0B1","Ghost Mode":"#E179DA","Size Multiplier":"#FAA70D",Invincibility:"#3EE0B1","Point Multiplier":"#E179DA","Time Slow":"#FAA70D","Rainbow Trail":"#E179DA",Magnet:"#3EE0B1"}[e]||"#FFFFFF"}render(){this.ctx.clearRect(0,0,this.hudCanvas.width,this.hudCanvas.height),this.ctx.fillStyle="#FFFFFF",this.ctx.font='24px "One Little Font", Arial',this.ctx.textAlign="left",this.ctx.fillStyle="#3EE0B1",this.ctx.fillText(`Score: ${this.score}`,20,40),this.ctx.fillStyle="#FAA70D",this.ctx.fillText(`High Score: ${this.highScore}`,20,70);let e=100;this.ctx.font='18px "Canva Sans", Arial',this.activePowerUps.forEach((t,n)=>{const i=Math.max(0,Math.ceil((t-Date.now())/1e3)),r=this.getPowerUpColor(n);this.ctx.fillStyle=r,this.ctx.beginPath(),this.ctx.arc(30,e+8,8,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="#FFFFFF",this.ctx.fillText(`${n} (${i}s)`,50,e+12);const o=100,a=4,c=this.game.gameManager.powerUps.get(n).duration,l=Math.max(0,Math.min(1,i/(c/1e3)));this.ctx.fillStyle="#333333",this.ctx.fillRect(50,e+16,o,a),this.ctx.fillStyle=r,this.ctx.fillRect(50,e+16,o*l,a),e+=30})}update(){this.game.audioManager&&(this.game.audioManager.hasUserInteracted?this.game.audioManager.isMuted?(this.audioStatus.innerHTML="🔇 Audio muted",this.audioStatus.style.display="block"):this.audioStatus.style.display="none":this.audioStatus.style.display="block")}cleanup(){this.hudCanvas&&this.hudCanvas.parentNode&&this.hudCanvas.parentNode.removeChild(this.hudCanvas),window.removeEventListener("resize",this.resize),this.audioStatus&&this.audioStatus.remove()}showGameOver(){console.log("HUD: Showing game over screen"),this.reset();const e=document.createElement("div");e.className="game-over-overlay",e.style.cssText=`
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            pointer-events: auto;
        `;const t=document.createElement("div");t.style.cssText=`
            background: rgba(0, 0, 0, 0.8);
            padding: 30px;
            border-radius: 15px;
            color: white;
            text-align: center;
            font-family: 'One Little Font', Arial, sans-serif;
            pointer-events: auto;
        `;const n=document.createElement("h1");n.textContent="Game Over",n.style.cssText=`
            margin: 0 0 20px 0;
            font-size: 36px;
            font-family: 'One Little Font', Arial, sans-serif;
            color: #E179DA;
        `;const i=document.createElement("p");i.textContent=`Score: ${this.score}`,i.style.cssText=`
            font-size: 24px;
            margin: 10px 0;
            font-family: 'Canva Sans', Arial, sans-serif;
            color: #3EE0B1;
        `;const r=document.createElement("p");r.textContent=`High Score: ${this.highScore}`,r.style.cssText=`
            font-size: 24px;
            margin: 10px 0;
            font-family: 'Canva Sans', Arial, sans-serif;
            color: #FAA70D;
        `;const o=document.createElement("button");o.textContent="Play Again",o.style.cssText=`
            background: #3EE0B1;
            color: black;
            border: none;
            padding: 10px 20px;
            font-size: 18px;
            font-family: 'Canva Sans', Arial, sans-serif;
            border-radius: 25px;
            cursor: pointer;
            margin-top: 20px;
            pointer-events: auto;
            transition: background-color 0.3s;
        `,o.onmouseover=()=>{o.style.background="#FAA70D"},o.onmouseout=()=>{o.style.background="#3EE0B1"},t.appendChild(n),t.appendChild(i),t.appendChild(r),t.appendChild(o),e.appendChild(t),document.body.appendChild(e),o.addEventListener("click",()=>{console.log("HUD: Play Again clicked"),e.remove(),this.game&&this.game.restart()}),console.log("HUD: Game over screen shown")}reset(){console.log("HUD: Resetting"),this.score=0,this.activePowerUps.clear();const e=document.querySelector(".game-over-overlay");e&&(e.remove(),console.log("HUD: Removed game over overlay")),this.hudCanvas&&(this.hudCanvas.style.pointerEvents="none"),this.ctx&&this.ctx.clearRect(0,0,this.hudCanvas.width,this.hudCanvas.height),console.log("HUD: Reset complete")}}class Sm{constructor(e){this.scene=e,this.currentWeather="sunny",this.weatherParticles=[],this.weatherGroup=new ai,this.scene.add(this.weatherGroup),this.weatherStates={sunny:{particleCount:0,particleSpeed:0,particleSize:0,color:16777215},rain:{particleCount:1e3,particleSpeed:.5,particleSize:.1,color:4474111},snow:{particleCount:500,particleSpeed:.2,particleSize:.2,color:16777215}},this.initializeWeather()}initializeWeather(){this.createWeatherParticles(),this.setWeather("sunny")}createWeatherParticles(){const e=new _t,t=[],n=[],i=[];for(let o=0;o<1e3;o++)t.push(Math.random()*100-50,Math.random()*100,Math.random()*100-50),n.push(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1),i.push(Math.random()*.5);e.setAttribute("position",new Xe(t,3)),e.setAttribute("velocity",new Xe(n,3)),e.setAttribute("size",new Xe(i,1));const r=new pc({size:.1,color:16777215,transparent:!0,opacity:.6});this.weatherParticles=new Xp(e,r),this.weatherGroup.add(this.weatherParticles)}setWeather(e){if(!this.weatherStates[e])return;this.currentWeather=e;const t=this.weatherStates[e];this.weatherParticles.material.color.setHex(t.color),this.weatherParticles.material.size=t.particleSize;const n=this.weatherParticles.geometry.attributes.position.array,i=this.weatherParticles.geometry.attributes.velocity.array;for(let r=0;r<n.length;r+=3)e==="rain"?(n[r+1]=Math.random()*50+50,i[r+1]=-t.particleSpeed):e==="snow"?(n[r+1]=Math.random()*50+50,i[r+1]=-t.particleSpeed,i[r]=(Math.random()-.5)*.5,i[r+2]=(Math.random()-.5)*.5):(n[r+1]=Math.random()*100,i[r+1]=0);this.weatherParticles.geometry.attributes.position.needsUpdate=!0,this.weatherParticles.geometry.attributes.velocity.needsUpdate=!0}update(e){if(this.currentWeather==="sunny")return;const t=this.weatherParticles.geometry.attributes.position.array,n=this.weatherParticles.geometry.attributes.velocity.array;for(let i=0;i<t.length;i+=3)t[i]+=n[i]*e,t[i+1]+=n[i+1]*e,t[i+2]+=n[i+2]*e,t[i+1]<-10&&(t[i+1]=100,t[i]=Math.random()*100-50,t[i+2]=Math.random()*100-50);this.weatherParticles.geometry.attributes.position.needsUpdate=!0}}class ym{constructor(){this.sounds=new Map,this.weatherSounds=new Map,this.currentWeather="sunny",this.isMuted=!1,this.volume=.5,this.hasUserInteracted=!1,this.soundBuffers=new Map,this.loadedSounds=new Set,this.totalSounds=0,this.loadedCount=0,this.loadingPromise=null,this.isInitialized=!1,console.log("AudioManager: Initializing");try{this.audioContext=new(window.AudioContext||window.webkitAudioContext),console.log("AudioManager: Audio context created, state:",this.audioContext.state),this.masterGain=this.audioContext.createGain(),this.masterGain.connect(this.audioContext.destination),this.masterGain.gain.value=this.volume,this.isInitialized=!0}catch(n){console.error("AudioManager: Failed to create audio context:",n),this.isInitialized=!1}this.createAudioStatusIndicator();const e=async()=>{console.log("AudioManager: Click/touch detected"),await this.enableAudio()};[document.body,window,document.documentElement,document.getElementById("game-container")||document.body].forEach(n=>{n.addEventListener("click",e,{once:!0}),n.addEventListener("touchstart",e,{once:!0})}),console.log("AudioManager: Event listeners added")}createAudioStatusIndicator(){const e=document.createElement("div");e.id="audio-status",e.style.cssText=`
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            font-family: 'Press Start 2P', monospace;
            font-size: 12px;
            z-index: 1000;
            cursor: pointer;
            transition: opacity 0.3s;
        `,e.textContent="🔇 Click to enable audio",e.onclick=()=>this.enableAudio(),document.body.appendChild(e),this.audioStatusIndicator=e}async initializeSounds(){return this.loadingPromise?this.loadingPromise:(this.loadingPromise=new Promise(async(e,t)=>{try{console.log("AudioManager: Initializing sounds");const n={eat:["assets/audio/eat.mp3"],gameOver:["assets/audio/gameOver.mp3"],powerUp:["assets/audio/powerUp.mp3"],turn:["assets/audio/turn.mp3"],background:["assets/audio/background.mp3"],click:["assets/audio/click.mp3"]},i={rain:["assets/audio/rain.mp3"],snow:["assets/audio/snow.mp3"],wind:["assets/audio/wind.mp3"]};this.totalSounds=Object.keys(n).length+Object.keys(i).length;let r=0;const o=async(c,l)=>{try{console.log("AudioManager: Loading sound:",c);for(const h of l)try{const u=await this.loadSoundFile(h);if(u)return this.soundBuffers.set(c,u),this.loadedSounds.add(c),r++,this.loadedCount=r,this.updateLoadingProgress(),console.log("AudioManager: Successfully loaded sound:",c),!0}catch(u){console.warn(`AudioManager: Failed to load ${h}:`,u)}return!1}catch(h){return console.error("AudioManager: Error loading sound:",c,h),!1}},a=[...Object.entries(n).map(([c,l])=>o(c,l)),...Object.entries(i).map(([c,l])=>o(c,l))];await Promise.all(a),console.log("AudioManager: Sound initialization complete. Loaded:",r,"of",this.totalSounds),e()}catch(n){console.error("AudioManager: Failed to initialize sounds:",n),e()}}),this.loadingPromise)}updateLoadingProgress(){const e=this.loadedCount/this.totalSounds*100,t=document.getElementById("loading-bar"),n=document.getElementById("loading-text");t&&(t.style.width=`${e}%`),n&&(n.textContent=`Loading resources... ${Math.round(e)}%`)}async loadSoundFile(e){try{const t=await fetch(e);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const n=await t.arrayBuffer();return await this.audioContext.decodeAudioData(n)}catch(t){return console.error("AudioManager: Error loading sound file:",e,t),null}}play(e,t=!1){if(!this.isInitialized||!this.hasUserInteracted||this.isMuted){console.log("AudioManager: Sound not played - conditions not met:",{isInitialized:this.isInitialized,hasUserInteracted:this.hasUserInteracted,isMuted:this.isMuted,soundName:e});return}if(!this.loadedSounds.has(e)){console.warn("AudioManager: Sound not loaded yet:",e);return}const n=this.soundBuffers.get(e);if(!n){console.warn("AudioManager: Sound buffer not found:",e);return}try{const i=this.audioContext.createBufferSource();i.buffer=n,i.loop=t;const r=this.audioContext.createGain();r.gain.value=e==="eat"?this.volume*1.5:this.volume,i.connect(r),r.connect(this.masterGain),i.start(0),console.log("AudioManager: Started playing sound:",e),t&&this.sounds.set(e,{source:i,gainNode:r}),i.onended=()=>{i.disconnect(),r.disconnect(),t&&this.sounds.delete(e)}}catch(i){console.error("AudioManager: Failed to play sound:",e,i)}}stop(e){const t=this.sounds.get(e);if(t)try{t.source.stop(),t.source.disconnect(),t.gainNode.disconnect(),this.sounds.delete(e)}catch(n){console.error("AudioManager: Error stopping sound:",e,n)}}setVolume(e){this.volume=Math.max(0,Math.min(1,e)),this.masterGain.gain.value=this.volume}async enableAudio(){if(console.log("AudioManager: enableAudio called, hasUserInteracted:",this.hasUserInteracted),!this.hasUserInteracted)if(this.hasUserInteracted=!0,this.audioStatusIndicator&&(this.audioStatusIndicator.textContent="🔊 Audio enabled",setTimeout(()=>{this.audioStatusIndicator.style.opacity="0",setTimeout(()=>{this.audioStatusIndicator.remove()},300)},2e3)),this.audioContext)if(console.log("AudioManager: Current audio context state:",this.audioContext.state),this.audioContext.state==="suspended"){console.log("AudioManager: Resuming audio context");try{await this.audioContext.resume(),console.log("AudioManager: Audio context resumed successfully, new state:",this.audioContext.state),await this.initializeSounds(),this.play("background",!0)}catch(e){console.error("AudioManager: Failed to resume audio context:",e)}}else console.log("AudioManager: Audio context already running, starting background music"),await this.initializeSounds(),this.play("background",!0);else console.error("AudioManager: No audio context available")}cleanup(){for(const[e,t]of this.sounds)this.stop(e);this.sounds.clear(),this.audioStatusIndicator&&this.audioStatusIndicator.remove(),this.audioContext&&this.audioContext.close()}async setWeather(e){console.log("AudioManager: Setting weather to:",e,{hasUserInteracted:this.hasUserInteracted,isMuted:this.isMuted,loadedSounds:Array.from(this.loadedSounds),availableBuffers:Array.from(this.soundBuffers.keys())}),this.audioContext&&this.audioContext.state==="suspended"&&(console.log("AudioManager: Resuming audio context for weather change"),await this.audioContext.resume());for(const[t,n]of this.weatherSounds.entries())n.source&&(console.log("AudioManager: Stopping previous weather sound:",t),n.source.stop(),n.source.disconnect(),this.weatherSounds.delete(t));if(e!=="sunny"&&this.soundBuffers.has(e)){console.log("AudioManager: Playing weather sound:",e,{buffer:this.soundBuffers.get(e),audioContextState:this.audioContext.state});const t=this.soundBuffers.get(e),n=this.audioContext.createBufferSource();n.buffer=t,n.loop=!0;const i=this.audioContext.createGain();i.gain.value=this.volume*.8,n.connect(i),i.connect(this.masterGain),n.start(0),console.log("AudioManager: Started playing weather sound:",e,{volume:i.gain.value,masterVolume:this.masterGain.gain.value,audioContextState:this.audioContext.state}),this.weatherSounds.set(e,{source:n,gainNode:i})}else console.log("AudioManager: Weather sound not available:",e,{isSunny:e==="sunny",hasBuffer:this.soundBuffers.has(e),loadedSounds:Array.from(this.loadedSounds),audioContextState:this.audioContext.state})}stopAllSounds(){for(const[e,t]of this.sounds.entries())t.source&&(t.source.stop(),t.source.disconnect(),this.sounds.delete(e));for(const[e,t]of this.weatherSounds.entries())t.source&&(t.source.stop(),t.source.disconnect(),this.weatherSounds.delete(e))}}class Em{constructor(e){this.game=e,this.scores=[],this.currentScore=0,this.element=null,this.scoresContainer=null,this.createScoreboard()}createScoreboard(){this.element=document.createElement("div"),this.element.className="scoreboard";const e=document.createElement("h2");e.textContent="High Scores",this.element.appendChild(e),this.scoresContainer=document.createElement("div"),this.scoresContainer.id="scores-container",this.element.appendChild(this.scoresContainer),document.body.appendChild(this.element)}updateScore(e){this.currentScore=e,this.updateDisplay()}addScore(e){this.scores.push(e),this.scores.sort((t,n)=>n-t),this.scores=this.scores.slice(0,10),this.updateDisplay(),localStorage.setItem("snakeHighScores",JSON.stringify(this.scores))}loadScores(){const e=localStorage.getItem("snakeHighScores");e&&(this.scores=JSON.parse(e),this.updateDisplay())}updateDisplay(){if(this.scoresContainer.innerHTML="",this.currentScore>0){const e=this.createScoreEntry(this.currentScore,this.getScoreRank(this.currentScore),!0);this.scoresContainer.appendChild(e)}this.scores.forEach((e,t)=>{if(e!==this.currentScore||this.currentScore===0){const n=this.createScoreEntry(e,t+1,!1);this.scoresContainer.appendChild(n)}})}createScoreEntry(e,t,n){const i=document.createElement("div");i.className=`score-entry${n?" current":""}`;const r=document.createElement("span");r.className="rank",r.textContent=`#${t}`;const o=document.createElement("span");return o.className="score",o.textContent=e,i.appendChild(r),i.appendChild(o),i}getScoreRank(e){return this.scores.filter(t=>t>e).length+1}reset(){this.currentScore=0,this.updateDisplay()}cleanup(){this.element&&this.element.parentNode&&this.element.parentNode.removeChild(this.element)}}class wm{constructor(e){this._loadingProgressCallback=e||(()=>{}),this.initializeCore(),this.updateLoadingProgress(10,"Initializing core components..."),this.audioManager=new ym,this.initializeGame().catch(t=>{console.error("Game: Failed to initialize:",t),this.forceShowGame()}),this.lastTime=0,this.isRunning=!1,this.isGameOver=!1,this.lastPelletSpawnTime=0,this.pelletSpawnInterval=2,this.specialPelletChance=.2,this.frameCount=0,this.dayNightCycle=0,this.particles=[],this.snakeTrail=[],this.weatherChangeInterval=30,this.lastWeatherChange=0,this.inputManager={keys:new Set,directions:{ArrowUp:new w(0,0,-1),ArrowDown:new w(0,0,1),ArrowLeft:new w(-1,0,0),ArrowRight:new w(1,0,0)}}}forceShowGame(){console.log("Game: Force showing game");const e=document.getElementById("loading-screen"),t=document.getElementById("game-container");e?(e.classList.add("hidden"),console.log("Game: Added hidden class to loading screen")):console.warn("Game: Loading screen element not found"),t?(t.style.visibility="visible",console.log("Game: Made game container visible"),window.dispatchEvent(new Event("resize"))):console.warn("Game: Game container element not found"),this.isRunning||(console.log("Game: Starting game as it was not running"),this.start())}async initializeGame(){try{console.log("Game: Starting initialization sequence"),this.weatherSystem=new Sm(this.scene),this.updateLoadingProgress(20,"Weather system initialized..."),await this.initializeSystems(),this.updateLoadingProgress(40,"Game systems initialized..."),await this.createBasicScene(),this.updateLoadingProgress(60,"Scene created..."),await Promise.race([this.audioManager.initializeSounds(),new Promise((t,n)=>setTimeout(()=>n(new Error("Audio initialization timeout")),5e3))]).catch(t=>(console.warn("Game: Audio initialization timed out or failed:",t),null)),console.log("Game: Audio initialization complete"),this.updateLoadingProgress(80,"Audio initialized..."),this.start(),this.updateLoadingProgress(100,"Ready!"),console.log("Game: All systems initialized, showing instructions"),await this.showInstructions(),console.log("Game: Initialization sequence complete")}catch(e){console.error("Game: Failed to initialize:",e),this.forceShowGame()}}async showInstructions(){return new Promise(e=>{const t=document.getElementById("loading-progress"),n=document.getElementById("loading-text"),i=document.getElementById("instructions"),r=document.getElementById("start-button");t&&(t.style.display="none"),n&&(n.style.display="none"),i&&(i.style.display="block",console.log("Game: Showing instructions panel")),r&&(r.onclick=()=>{console.log("Game: Start button clicked"),this.forceShowGame(),e()})})}initializeCore(){this.setupScene(),this.setupRenderer(),this.setupCamera(),this.setupLights(),this.createBasicScene(),this.setupInput(),this.hud=new Mm(this),this.scoreboard=new Em(this),this.scoreboard.loadScores()}initializeSystems(){this.gameManager=new Fa(this),this.powerUpSystem=new Pt(this),this.obstacleSystem=new yc(this),this.obstacleSystem.start();const e=new w(0,.5,0);this.snake=new ls(this,e),this.cameraController&&this.cameraController.setTarget(this.snake.head),this.gameManager.start();const t=this.handleResize.bind(this);window.addEventListener("resize",t),this._boundHandleResize=t}cleanup(){this.isRunning=!1,this._boundHandleResize&&(window.removeEventListener("resize",this._boundHandleResize),this._boundHandleResize=null),this.hud&&this.hud.cleanup(),this.scoreboard&&this.scoreboard.cleanup(),this.obstacleSystem&&this.obstacleSystem.cleanup(),this.scene&&this.scene.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose())}),this.cameraController&&this.cameraController.cleanup(),this.renderer&&(this.renderer.dispose(),this.renderer.domElement.remove()),this.gameManager&&this.gameManager.cleanup(),this.audioManager&&this.audioManager.cleanup()}setupRenderer(){try{this.renderer=new Lr({antialias:!0,powerPreference:"high-performance",alpha:!1}),this.renderer.setClearColor(0),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=wr;const e=document.querySelector("canvas");e&&e.remove();const t=document.getElementById("game-container");t?t.appendChild(this.renderer.domElement):document.body.appendChild(this.renderer.domElement),console.log("Game: Renderer initialized",{width:window.innerWidth,height:window.innerHeight,pixelRatio:this.renderer.getPixelRatio(),shadowsEnabled:this.renderer.shadowMap.enabled})}catch(e){throw console.error("Error setting up renderer:",e),e}}setupScene(){this.scene=new Vp,this.scene.background=new Se(9127187),this.scene.fog=new gs(9127187,.01),console.log("Game: Scene initialized")}setupCamera(){this.camera=new Ct(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,15,20),this.camera.lookAt(0,0,0);try{this.cameraController=new gm(this)}catch(e){console.warn("Error initializing camera controller:",e),this.camera.position.set(0,30,30),this.camera.lookAt(0,0,0)}}setupLights(){this.ambientLight=new Sc(16770229,.4),this.scene.add(this.ambientLight),this.directionalLight=new Mc(16770229,1),this.directionalLight.position.set(50,50,50),this.directionalLight.castShadow=!0,this.directionalLight.shadow.mapSize.width=2048,this.directionalLight.shadow.mapSize.height=2048,this.directionalLight.shadow.camera.near=.5,this.directionalLight.shadow.camera.far=500,this.directionalLight.shadow.bias=-1e-4,this.scene.add(this.directionalLight),this.hemisphereLight=new xc(16115411,4863784,.6),this.scene.add(this.hemisphereLight),[[-80,0,-80],[80,0,-80],[-80,0,80],[80,0,80]].forEach(t=>{const n=new Ra(16770229,1);n.position.set(t[0],15,t[2]),n.target.position.set(t[0],0,t[2]),n.angle=Math.PI/6,n.penumbra=.3,n.decay=1.5,n.distance=30,n.castShadow=!0,this.scene.add(n),this.scene.add(n.target)})}setupInput(){const e=t=>{if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","w","a","s","d"].includes(t.key)){t.preventDefault();const n=this.inputManager.directions[t.key];n&&this.snake&&(console.log("Game: Key pressed",{key:t.key,direction:n.clone(),currentSnakeDirection:this.snake.direction?this.snake.direction.clone():null,snakePosition:this.snake.head.position.clone()}),this.snake.setDirection(n))}};window.addEventListener("keydown",e)}createBasicScene(){const e=new pn(100,100),t=new Aa,n=new mn({color:16777215,roughness:.7,metalness:.3,envMapIntensity:1,side:Ut,transparent:!0});this.ground=new be(e,n),this.ground.rotation.x=-Math.PI/2,this.ground.position.y=.01,this.ground.receiveShadow=!0,this.scene.add(this.ground);const i=new pn(30,30);console.log("Loading aiai texture for ground"),t.load("/pokka-snakes-gl/assets/img/aiai_header.png",o=>{console.log("Successfully loaded aiai texture"),o.flipY=!0;const a=new mn({map:o,transparent:!0,opacity:.8,depthWrite:!0,roughness:.5,metalness:.1,side:Ut}),c=new be(i,a);c.rotation.x=-Math.PI/2,c.rotation.z=-Math.PI,c.position.y=.02,c.position.z=0,c.position.x=0,c.receiveShadow=!0,this.scene.add(c),console.log("Added logo to scene")},o=>{console.log("Texture loading progress:",o.loaded/o.total*100+"%")},o=>{console.error("Error loading aiai texture:",o)});const r=new fm(100,20,14737632,15790320);r.material.opacity=.2,r.material.transparent=!0,r.position.y=.02,this.scene.add(r),this.createCoffeeShopEnvironment(),this.addDecorations()}createCoffeeShopEnvironment(){this.createWalls();const e=new pn(100,100),t=new mn({color:9127187,roughness:.8,metalness:.2}),n=new be(e,t);n.rotation.x=-Math.PI/2,n.position.y=0,this.scene.add(n),this.addFurniture(),this.addKiosk(),this.addNPCs(),this.addCoffeeShopProps(),this.createPictureFrames()}createWalls(){}async createPictureFrames(){const e=new It(8.64,11.52,.3),t=new mn({color:9127187,roughness:.3,metalness:.1,emissive:4863784,emissiveIntensity:.2}),n=[{pos:[-20,12,-70],rotation:0,image:"assets/img/frame1.png"},{pos:[20,12,-70],rotation:0,image:"assets/img/frame2.png"}],i=new Aa,r=await Promise.all(n.map(async({image:o})=>{try{return console.log("Attempting to load image:",o),await new Promise((c,l)=>{i.load(o,h=>{console.log("Successfully loaded image:",o),h.minFilter=Et,h.magFilter=Et,h.format=Ot,h.flipY=!0,h.needsUpdate=!0,c(h)},h=>{console.log(`Loading progress for ${o}:`,h.loaded/h.total*100+"%")},h=>{console.error(`Failed to load image ${o}:`,h),l(h)})})}catch(a){return console.error(`Failed to load image ${o}:`,a),null}}));n.forEach(({pos:o,rotation:a,image:c},l)=>{const h=new be(e,t);h.position.set(o[0],o[1],o[2]),h.rotation.y=a,h.castShadow=!0,h.receiveShadow=!0,this.scene.add(h);const u=new pn(8.06,10.94),f=new Ss({color:16777215,side:Ut,map:r[l]||null,transparent:!0,opacity:1,depthWrite:!1,depthTest:!1}),m=new be(u,f);m.position.set(o[0],o[1],o[2]-.1),m.rotation.y=a,m.renderOrder=1,this.scene.add(m);const g=new Ra(16770229,1.5);g.position.set(o[0],o[1]+3,o[2]+3),g.target.position.set(o[0],o[1],o[2]),g.angle=Math.PI/6,g.penumbra=.3,g.decay=1.5,g.distance=15,this.scene.add(g),this.scene.add(g.target),m.userData.isPictureFrame=!0,m.userData.frameIndex=l,console.log("Added picture frame at:",o,"with image:",c)})}addFurniture(){const e=new un(3,3,.5,16),t=new Ke({color:9127187,shininess:30}),n=new It(1.2,1.8,1.2),i=new Ke({color:16758470,shininess:30});[[-57.5,0,-57.5],[-57.5,0,-34.5],[-57.5,0,-11.5],[57.5,0,-57.5],[57.5,0,-34.5],[57.5,0,-11.5],[-57.5,0,11.5],[-57.5,0,34.5],[-57.5,0,57.5],[57.5,0,11.5],[57.5,0,34.5],[57.5,0,57.5]].forEach(o=>{const a=new be(e,t);a.position.set(o[0],o[1]+.25,o[2]),a.castShadow=!0,a.receiveShadow=!0,this.scene.add(a),[[-3.5,0,0],[3.5,0,0],[0,0,-3.5],[0,0,3.5]].forEach(l=>{const h=new be(n,i);h.position.set(o[0]+l[0],o[1]+.9,o[2]+l[2]),h.castShadow=!0,h.receiveShadow=!0,this.scene.add(h)})})}addKiosk(){const e=new It(15,6,6),t=new Ke({color:16115411,shininess:50}),n=new be(e,t);n.position.set(0,3,-70),n.castShadow=!0,n.receiveShadow=!0,this.scene.add(n);const i=new It(18,.3,7),r=new Ke({color:4863784,shininess:60}),o=new be(i,r);o.position.set(0,6,-69),o.castShadow=!0,o.receiveShadow=!0,this.scene.add(o),this.addCoffeeShopProps(),this.addPlants()}addNPCs(){const e=new Fr(.8,1.5,4,8),t=new ut(.6,16,16),n=[[-50,0,-50],[50,0,-30],[-50,0,10],[50,0,50],[-3,0,-68],[3,0,-68]];n.forEach((i,r)=>{const a=r>=n.length-2?4120753:14776794,c=new Ke({color:a,shininess:30}),l=new be(e,c);l.position.set(i[0],i[1]+2.25,i[2]),l.castShadow=!0,this.scene.add(l);const h=new Ke({color:a,shininess:30}),u=new be(t,h);u.position.set(i[0],i[1]+4,i[2]),u.castShadow=!0,this.scene.add(u);const f={body:l,head:u,initialY:i[1]+2.25};f.floatSpeed=.5+Math.random()*.5,f.floatOffset=Math.random()*Math.PI*2,this.npcs=this.npcs||[],this.npcs.push(f)})}addPlants(){[[-8,0,-68],[8,0,-68],[-50,0,-70],[50,0,-70],[-50,0,70],[50,0,70]].forEach(t=>{const n=new un(1.2,.9,1.8,16),i=new Ke({color:4863784,shininess:30}),r=new be(n,i);r.position.set(...t),r.castShadow=!0,r.receiveShadow=!0,this.scene.add(r);const o=new ut(1.5,16,16),a=new Ke({color:8299641,shininess:20}),c=new be(o,a);c.position.set(t[0],t[1]+2.25,t[2]),c.scale.set(1.5,2.25,1.5),c.castShadow=!0,this.scene.add(c)})}addCoffeeShopProps(){[-4,0,4].forEach(i=>{const r=new be(new It(1.5,1.5,1),new Ke({color:16777215,shininess:90}));r.position.set(i,4.85,-69),r.castShadow=!0,this.scene.add(r)}),[{pos:[-80,0,-80],rotation:.4},{pos:[80,0,-80],rotation:-.4},{pos:[-80,0,80],rotation:.3},{pos:[80,0,80],rotation:-.3}].forEach(({pos:i,rotation:r})=>{const o=new be(new un(4,3,8,32),new Ke({color:16777215,shininess:100}));o.position.set(i[0],i[1]+4,i[2]),o.rotation.y=r,o.castShadow=!0,this.scene.add(o);const a=new be(new Br(2,.5,16,32),new Ke({color:16777215,shininess:100}));a.position.set(i[0]+4,i[1]+4,i[2]),a.rotation.y=r+Math.PI/2,a.castShadow=!0,this.scene.add(a);const c=new be(new un(5.5,5.7,.4,32),new Ke({color:16777215,shininess:100}));c.position.set(i[0],i[1]+.2,i[2]),c.rotation.y=r,c.castShadow=!0,this.scene.add(c);const l=new be(new un(3.8,3.8,.1,32),new Ke({color:4863784,shininess:60,transparent:!0,opacity:.9}));l.position.set(i[0],i[1]+7.5,i[2]),l.rotation.y=r,this.scene.add(l);for(let h=0;h<5;h++){const u=new be(new ut(.4,8,8),new Ke({color:16777215,transparent:!0,opacity:.3}));u.position.set(i[0]+(Math.random()-.5)*3,i[1]+8+h*1,i[2]+(Math.random()-.5)*3),u.userData.initialY=u.position.y,u.userData.floatSpeed=.3+Math.random()*.2,u.userData.floatOffset=Math.random()*Math.PI*2,this.scene.add(u)}}),[[-60,8,-60],[-60,8,0],[-60,8,60],[60,8,-60],[60,8,0],[60,8,60]].forEach(i=>{const r=new be(new un(.2,.4,1,16),new Ke({color:16770229,emissive:16770229,emissiveIntensity:.5}));r.position.set(...i),this.scene.add(r);const o=new um(16770229,.8,20);o.position.set(...i),this.scene.add(o)})}addDecorations(){for(let e=0;e<30;e++){const t=.2+Math.random()*.3,n=new ut(t,16,16),i=[4120753,16426765,14776794],r=new Ke({color:i[e%3],emissive:i[e%3],emissiveIntensity:.3,transparent:!0,opacity:.7,shininess:30}),o=new be(n,r),a=20+Math.random()*20,c=e/30*Math.PI*2;o.position.x=Math.cos(c)*a,o.position.z=Math.sin(c)*a,o.position.y=2+Math.random()*8,o.userData.initialY=o.position.y,o.userData.floatSpeed=.5+Math.random()*.5,o.userData.floatOffset=Math.random()*Math.PI*2,o.castShadow=!0,this.scene.add(o)}for(let e=0;e<15;e++){const t=new zr(.5,.7,32),n=new Ke({color:4120753,emissive:4120753,emissiveIntensity:.2,side:Ut,transparent:!0,opacity:.3}),i=new be(t,n);i.rotation.x=-Math.PI/2,i.position.x=(Math.random()-.5)*80,i.position.z=(Math.random()-.5)*80,i.position.y=.01,this.scene.add(i)}}restart(){var r,o;console.log("Game: Restarting game");const e=document.getElementById("loading-screen"),t=document.getElementById("game-container");if(e&&t){e.style.display="flex",t.style.display="none";const a=document.getElementById("loading-text");a&&(a.textContent="Restarting game...")}if(this.isRunning=!1,this.isGameOver=!1,this.frameCount=0,this.snake&&(this.snake.cleanup(),this.snake=null),this.gameManager&&this.gameManager.stop(),this.powerUpSystem)try{this.powerUpSystem.stop()}catch(a){console.warn("Game: Error stopping power-up system:",a)}this.camera&&(this.camera.position.set(0,15,20),this.camera.lookAt(0,0,0));const n=[];this.scene.traverse(a=>{a!==this.scene&&n.push(a)}),n.forEach(a=>{this.scene.remove(a),a.geometry&&a.geometry.dispose(),a.material&&(Array.isArray(a.material)?a.material.forEach(c=>c.dispose()):a.material.dispose())}),this.scene.background=new Se(9127187),this.scene.fog=new gs(9127187,.01),this.setupLights(),this.updateLoadingProgress(30),this.createBasicScene(),this.updateLoadingProgress(60);const i=new w(0,.5,0);this.snake=new ls(this,i),this.updateLoadingProgress(80),this.cameraController&&this.cameraController.setTarget(this.snake.head),this.gameManager=new Fa(this),this.powerUpSystem=new Pt(this),this.gameManager.start(),this.powerUpSystem.start(),this.isRunning=!0,this.isGameOver=!1,this.updateLoadingProgress(100),setTimeout(()=>{e&&t&&(e.style.display="none",t.style.display="block")},500),this.animate(),console.log("Game: Restart complete",{isRunning:this.isRunning,isGameOver:this.isGameOver,hasSnake:!!this.snake,hasPowerUpSystem:!!this.powerUpSystem,snakePosition:(o=(r=this.snake)==null?void 0:r.head)==null?void 0:o.position,hasEnvironment:!0})}handleGameOver(){this.isGameOver||(console.log("Game: Handling game over"),this.isGameOver=!0,this.isRunning=!1,this.gameManager&&(this.gameManager.gameOver(),setTimeout(()=>{this.gameManager.showGameOverScreen(),console.log("Game: Game over screen shown",{isRunning:this.isRunning,isGameOver:this.isGameOver,hasSnake:!!this.snake,score:this.gameManager.score})},100)),this.scoreboard&&this.scoreboard.addScore(this.snake.score))}stop(){console.log("Game: Stopping game"),this.isRunning=!1,cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null;const e=document.getElementById("gameOverScreen");e&&(e.style.display="flex",console.log("Game: Game over screen displayed"))}createParticleEffect(e,t,n=10,i={}){const{scale:r=.1,lifetime:o=1,velocityScale:a=2,verticalForce:c=1,emissive:l=!1}=i;for(let h=0;h<n;h++){const u=new be(new ut(r,8,8),new Ke({color:t,transparent:!0,opacity:.8,emissive:l?t:0,emissiveIntensity:l?.5:0}));u.position.copy(e),u.velocity=new w((Math.random()-.5)*a,Math.random()*c,(Math.random()-.5)*a),u.lifetime=o,u.initialScale=r,this.particles.push(u),this.scene.add(u)}}updateParticles(e){for(let t=this.particles.length-1;t>=0;t--){const n=this.particles[t];if(n.lifetime-=e,n.lifetime<=0){this.scene.remove(n),this.particles.splice(t,1);continue}n.velocity.y-=e*2,n.position.add(n.velocity.clone().multiplyScalar(e)),n.material.opacity=n.lifetime*n.lifetime*.8;const i=n.initialScale*(.5+n.lifetime*.5);n.scale.set(i,i,i),n.rotation.x+=e*(Math.random()-.5),n.rotation.z+=e*(Math.random()-.5),n.velocity.multiplyScalar(.98)}}createSnakeTrail(){if(!this.snake||!this.snake.head)return;const e=new be(new ut(.2,8,8),new Ke({color:4120753,transparent:!0,opacity:.5}));e.position.copy(this.snake.head.position),e.lifetime=.5,this.snakeTrail.push(e),this.scene.add(e)}updateSnakeTrail(e){for(let t=this.snakeTrail.length-1;t>=0;t--){const n=this.snakeTrail[t];if(n.lifetime-=e,n.lifetime<=0){this.scene.remove(n),this.snakeTrail.splice(t,1);continue}n.material.opacity=n.lifetime,n.scale.multiplyScalar(.95)}}updateDayNightCycle(e){this.dayNightCycle+=e*.05;const t=(Math.sin(this.dayNightCycle)+1)/2,n=new Se(16770229),i=new Se(16777215),r=new Se(16752762),o=new Se(4878218);let a;t<.25?a=n.lerp(i,t*4):t<.5?a=i:t<.75?a=i.lerp(r,(t-.5)*4):a=r.lerp(o,(t-.75)*4),this.ambientLight.color=a,this.ambientLight.intensity=.2+t*.4,this.directionalLight.color=a,this.directionalLight.intensity=.4+t*.6,this.hemisphereLight.color=a,this.hemisphereLight.groundColor=o,this.hemisphereLight.intensity=.2+t*.4,this.scene.fog.color=a,this.scene.fog.density=.01+(1-t)*.02,this.scene.traverse(c=>{c.material&&c.material.opacity<.5&&(c.material.opacity=.1+t*.3)})}onSnakeTurn(e){this.createParticleEffect(e,4120753,8,{scale:.15,lifetime:.6,velocityScale:1,verticalForce:.5}),this.audioManager.play("turn")}onGameOver(e){this.createParticleEffect(e,14776794,40,{scale:.2,lifetime:2,velocityScale:4,verticalForce:3,emissive:!0}),this.audioManager.play("gameOver")}onSpeedBoost(e){this.createParticleEffect(e,16426765,20,{scale:.15,lifetime:.8,velocityScale:3,verticalForce:1,emissive:!0}),this.audioManager.play("powerUp")}addAmbientParticles(){for(let e=0;e<100;e++){const t=new be(new ut(.05,4,4),new Ke({color:16777215,transparent:!0,opacity:.2}));t.position.set((Math.random()-.5)*160,1+Math.random()*6,(Math.random()-.5)*160),t.userData.initialY=t.position.y,t.userData.floatSpeed=.2+Math.random()*.3,t.userData.floatOffset=Math.random()*Math.PI*2,t.userData.driftSpeed={x:(Math.random()-.5)*.2,z:(Math.random()-.5)*.2},this.scene.add(t)}}handleResize(){const t=this.renderer.domElement.parentElement,n=t.clientWidth,i=t.clientHeight;this.camera.aspect=n/i,this.camera.updateProjectionMatrix(),this.renderer.setSize(n,i),this.hud&&this.hud.updateSize(n,i)}start(){if(!this.isRunning){if(console.log("Game: Starting game"),this.isRunning=!0,this.isGameOver=!1,this.lastTime=performance.now(),!this.snake){const e=new w(0,.5,0);this.snake=new ls(this,e),this.cameraController&&this.cameraController.setTarget(this.snake.head)}this.animate(),console.log("Game: Started",{isRunning:this.isRunning,hasSnake:!!this.snake,hasGameManager:!!this.gameManager,cameraPosition:this.camera.position.clone(),rendererSize:{width:this.renderer.domElement.width,height:this.renderer.domElement.height}})}}animate(){if(!this.isRunning)return;const e=performance.now(),t=(e-this.lastTime)/1e3;this.lastTime=e,this.frameCount++,this.gameManager&&this.gameManager.update(t),this.snake&&(this.snake.update(t),this.obstacleSystem&&this.obstacleSystem.checkCollisions(this.snake.head)&&this.handleGameOver()),this.powerUpSystem&&this.powerUpSystem.update(t),this.obstacleSystem&&(this.obstacleSystem.update(t),this.obstacleSystem.increaseDifficulty(t)),this.cameraController&&this.cameraController.update(t),this.weatherSystem&&this.weatherSystem.update(t),this.updateParticles(t),this.updateSnakeTrail(t),this.updateDayNightCycle(t),this.renderer&&this.scene&&this.camera&&this.renderer.render(this.scene,this.camera),requestAnimationFrame(()=>this.animate())}updateLoadingProgress(e,t){typeof this._loadingProgressCallback=="function"&&this._loadingProgressCallback(e,t);const n=document.getElementById("loading-bar"),i=document.getElementById("loading-text");n?(n.style.width=`${e}%`,console.log("Game: Updated loading bar width:",n.style.width)):console.warn("Game: Loading bar element not found"),i&&t?(i.textContent=t,console.log("Game: Updated loading text:",t)):i||console.warn("Game: Loading text element not found")}updateScore(e){this.scoreboard&&this.scoreboard.updateScore(e)}}console.log("Main script starting...");function dr(s,e){console.log(`Loading progress: ${s}% - ${e}`);const t=document.querySelector("#loading-bar"),n=document.querySelector("#loading-text");t?(t.style.width=`${s}%`,console.log("Updated loading bar width:",t.style.width)):console.error("Loading bar element not found"),n?(n.textContent=e||"Loading...",console.log("Updated loading text:",n.textContent)):console.error("Loading text element not found")}function Oa(){console.log("Initializing game...");try{dr(10,"Creating game instance...");const s=new wm(dr);window.addEventListener("resize",()=>{s&&s.handleResize()}),window.addEventListener("beforeunload",()=>{s&&s.cleanup()})}catch(s){console.error("Failed to initialize game:",s),dr(0,"Error loading game. Please refresh the page.")}}document.readyState==="loading"?(console.log("Document still loading, adding DOMContentLoaded listener"),document.addEventListener("DOMContentLoaded",Oa)):(console.log("Document already loaded, initializing game immediately"),setTimeout(Oa,0));
