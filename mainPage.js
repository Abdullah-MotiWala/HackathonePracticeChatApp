const userEmail = document.getElementById("userEmail").value;
auth.onAuthStateChanged((user)=>{
    if (!user) {
        location.href = "/" }
        else {
            document.getElementById("userEmail").innerHTML = user.email;
        }
    })
// const addingHotel = () ={

// }
// firestore.collection("users").doc(user.uid).get().then((snapShot) => {
//     const data = snapShot.data();
//     const userEmail = data.email;
//     console.log(userEmail);
// });
// const user = firebase.auth().currentUser;
// if(user !== null){
// let currentEmail = user.email;
// let currentEmailText = document.createTextNode(currentEmail)
// userEmail.appendChild("currentEmailText");
// }
// console.log(currentEmail)

// auth.onAuthStateChanged((user) => {
//     if (user) {
//         firestore.collection("users").doc(user.uid).get({
//             email: user.email
//         });



const signOut = () => {
    auth.signOut()
}
