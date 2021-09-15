//Firebase Integeration
var firebaseConfig = {
    apiKey: "AIzaSyAh1AJq7NJHXbX1xq5Uf4g5p0HhkFVN31o",
    authDomain: "firstproject-7a126.firebaseapp.com",
    databaseURL: "https://firstproject-7a126-default-rtdb.firebaseio.com",
    projectId: "firstproject-7a126",
    storageBucket: "firstproject-7a126.appspot.com",
    messagingSenderId: "827727726100",
    appId: "1:827727726100:web:2c4e7762d63d75814d4901",
    measurementId: "G-3X18KJDFFE"
};
firebase.initializeApp(firebaseConfig);

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})