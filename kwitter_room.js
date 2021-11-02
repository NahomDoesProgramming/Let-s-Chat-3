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
document.getElementById("username").innerHTML = "Welcome " + username + "!";
function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update
  ({
       purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       room_name = childKey;
      //Start code
    console.log("Room Name: " + room_name);
    row = "<div class='room_name' id=" + room_name + "onclick='redirectToRoomName(this.id);'>#" + room_name + "</div><hr>";
    document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
