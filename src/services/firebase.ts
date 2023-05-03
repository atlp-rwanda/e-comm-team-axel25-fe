import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { checkEnv } from '../utils';
import { config } from '../data';

const apiKey = checkEnv({ param: config.REACT_APP_FIREBASE_API_KEY });
const firebaseConfig = {
  apiKey,
  authDomain: 'cypher-549ac.firebaseapp.com',
  projectId: 'cypher-549ac',
  storageBucket: 'cypher-549ac.appspot.com',
  messagingSenderId: '589160880524',
  appId: '1:589160880524:web:e28730de849a4c8c30dea9',
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
