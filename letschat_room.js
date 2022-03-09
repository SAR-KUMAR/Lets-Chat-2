const firebaseConfig = {
    apiKey: "AIzaSyBjQ5uvQ3LOwCXVAEeruIzJo_R4rmG6feY",
    authDomain: "deductive-wares-310407.firebaseapp.com",
    projectId: "deductive-wares-310407",
    storageBucket: "deductive-wares-310407.appspot.com",
    messagingSenderId: "1244603439",
    appId: "1:1244603439:web:f8ceebf5f1e297801ad2da"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          pupose:"adding user"
      })
  }