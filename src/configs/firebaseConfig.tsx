// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDokmGyqp5xdbEHYBmgYtN9jJQ9RQBpEIE",
    authDomain: "evaluacion1-amii.firebaseapp.com",
    projectId: "evaluacion1-amii",
    storageBucket: "evaluacion1-amii.appspot.com",
    messagingSenderId: "663538706941",
    appId: "1:663538706941:web:afa5bdc470321af926d194"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
// constante para obtener servicio de autenticacion
//export const auth = getAuth(firebase);
export const auth = initializeAuth(firebase,
    {
        persistence: getReactNativePersistence(ReactNativeAsyncStorage)
    }
)