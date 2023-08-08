import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
apiKey: "AIzaSyDnJ0PNH8_iN2pUortcYzye_HCk_bJeBVQ",
  authDomain: "votacao-politicamente-equipada.firebaseapp.com",
  databaseURL: "https://votacao-politicamente-equipada-default-rtdb.firebaseio.com",
  projectId: "votacao-politicamente-equipada",
  storageBucket: "votacao-politicamente-equipada.appspot.com",
  messagingSenderId: "684052381385",
  appId: "1:684052381385:web:e06877e1f511ba5d755718"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();