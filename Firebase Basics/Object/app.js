(function(){


//bootstrap



//bootstrap end


var config = {
  apiKey: "AIzaSyAFrC-Ttf60KzRrJgVK-IW9CSfJvNAb2gY",
  authDomain: "test-ae13a.firebaseapp.com",
  databaseURL: "https://test-ae13a.firebaseio.com",
  storageBucket: "test-ae13a.appspot.com",
  messagingSenderId: "725309228587"
};
firebase.initializeApp(config);

 // lecture3 materials
const dbRefObject= firebase.database().ref().child('object');
const dbRefList=dbRefObject.child('hobbies');


const preobject=document.getElementById('object');

const ulist=document.getElementById('hlist');

dbRefObject.on('value', snap => console.log(snap.val()));
dbRefObject.on('value', snap => preobject.innerText = snap.val());
dbRefObject.on('value', snap => {

  preobject.innerText = JSON.stringify(snap.val(),null,3);
    });
//lecture 2
dbRefList.on('child_added', snap =>{

      const li= document.createElement('li');
      li.innerText=snap.val();
      li.id= snap.key;
      ulist.appendChild(li);


    });
//lecture 3
    dbRefList.on('child_changed', snap => {

        const liChanged = document.getElementById(snap.key);
        liChanged.innerText=snap.val();

    });

    dbRefList.on('child_removed', snap => {

        const liChanged = document.getElementById(snap.key);
        liChanged.innerText=snap.val();

    });


}());