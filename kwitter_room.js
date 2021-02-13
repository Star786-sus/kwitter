var firebaseConfig = 
{
    apiKey: "AIzaSyAgopYK6vYAtbARSblT73JyKuIxdx-MhZA",
    authDomain: "kwitter-project-93.firebaseapp.com",
    databaseURL: "https://kwitter-project-93-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-93",
    storageBucket: "kwitter-project-93.appspot.com",
    messagingSenderId: "294551444478",
    appId: "1:294551444478:web:5f54e6bada28e3bc8dbeaf"
  };

firebase.intializeApp(firebaseConfig);
username = localStorage.getItem("username")
document.getElementById("username").innerHTML = "welcome "+ username;