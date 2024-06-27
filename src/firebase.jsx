import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDZytsINVMTyPEs2VCkX1WqCjmmYCalqNA",
  authDomain: "virtua-feria.firebaseapp.com",
  databaseURL: "https://virtua-feria-default-rtdb.firebaseio.com",
  projectId: "virtua-feria",
  storageBucket: "virtua-feria.appspot.com",
  messagingSenderId: "730472869715",
  appId: "1:730472869715:web:30a7af802079604b233ba6",
  measurementId: "G-PWSQCTP3Q5",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
