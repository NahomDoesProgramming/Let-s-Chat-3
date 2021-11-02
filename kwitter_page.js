const firebaseConfig = {
  apiKey: "AIzaSyB-FraV5gehNvqtutRONqjhFxzfxiU_Iu4",
  authDomain: "let-s-chat-2-4061c.firebaseapp.com",
  databaseURL: "https://let-s-chat-2-4061c-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-2-4061c",
  storageBucket: "let-s-chat-2-4061c.appspot.com",
  messagingSenderId: "699665805872",
  appId: "1:699665805872:web:eba2215ba7e2b2cad633f5"
};
firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("username");
room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
     firebase_message_id = childKey;
     message_data = childData;
//Start code

//End code
  } });  }); }
getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
function logout()
{
  localStorage.removeItem("room_name");
  localStorage.removeItem("username");
  window.location = "index.html"
}
function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push
  ({
        name: username,
        message: msg,
        like: 0
  });
  document.getElementById("msg").value = "";
}