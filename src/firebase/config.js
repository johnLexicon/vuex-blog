import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: 'vuex-blog-c5241.firebaseapp.com',
  projectId: 'vuex-blog-c5241',
  storageBucket: 'vuex-blog-c5241.appspot.com',
  messagingSenderId: '681910815206',
  appId: '1:681910815206:web:0734b6e687f81fc2e72e27'
};

// Init firebase
initializeApp(firebaseConfig);

// Init firebase auth
const auth = getAuth();

export { auth };
