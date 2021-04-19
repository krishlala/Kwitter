
 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDyC545eHD6mJbhl58f2L9u9SQRpajfgGA",
    authDomain: "kwitter-68077.firebaseapp.com",
    projectId: "kwitter-68077",
    storageBucket: "kwitter-68077.appspot.com",
    messagingSenderId: "243452173023",
    appId: "1:243452173023:web:ad761df00fa6e77c53676a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
