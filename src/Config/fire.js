import firebase from 'firebase'
// Initialize Firebase

var firebaseConfig = {
  apiKey: 'AIzaSyB1Zp9NF1njtqEbxYOhoFeMWCuygeXEz-E',
  authDomain: 'disney-planner-2020.firebaseapp.com',
  databaseURL: 'https://disney-planner-2020.firebaseio.com',
  projectId: 'disney-planner-2020',
  storageBucket: 'disney-planner-2020.appspot.com',
  messagingSenderId: '1096569479344',
  appId: '1:1096569479344:web:c86af7050319cac2965b75',
  measurementId: 'G-TGRK1L0B3V',
}
const fire = firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()
export default fire
