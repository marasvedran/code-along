let config = {
    apiKey: "AIzaSyComNsWjA4XYKSL_3TSTMz6T_xqSgcyiUU",
    authDomain: "example-461d0.firebaseapp.com",
    databaseURL: "https://example-461d0.firebaseio.com",
    projectId: "example-461d0",
    storageBucket: "example-461d0.appspot.com",
    messagingSenderId: "794950612637"
};
firebase.initializeApp(config);

$("#email-password-create").click((event) => {
    event.preventDefault();
    let email = $("#email").val();
    let password = $("#password").val();
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        console.log("Error code", errorCode);
        let errorMessage = error.message;
        console.log("Error message", errorMessage);
        // ...
    });
});