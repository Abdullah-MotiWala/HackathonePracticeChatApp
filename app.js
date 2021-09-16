//Firebase Integeration
const firebaseConfig = {
    apiKey: "AIzaSyD5eyZ05Zi3x7P_pKrfW9L4Ghg0F0suSqQ",
    authDomain: "practice-chatapp-b93f1.firebaseapp.com",
    projectId: "practice-chatapp-b93f1",
    storageBucket: "practice-chatapp-b93f1.appspot.com",
    messagingSenderId: "273905711893",
    appId: "1:273905711893:web:143eff760ebb4c6de6071c",
    measurementId: "G-42QVG5WD55"
  };
firebase.initializeApp(firebaseConfig);
function googleLogin(){
let provider = new firebase.auth.GoogleAuthProvider();
console.log("loginGoogle");
firebase.auth().signInWithPopup(provider).then(alert("Login Successfully")).catch(res=>alert(res))
}

function logOut(){

}