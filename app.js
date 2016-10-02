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

/* // lecture3 materials
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

*/
//lecture 4
const txtEmail=document.getElementById('txtEmail');
const txtPassword =document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnLogout');


btnLogin.addEventListener('click', e =>
{

  const email=txtEmail.value;
  const pass= txtPassword.value;
  const auth =firebase.auth();

  const promise=  auth.signInWithEmailAndPassword(email, pass);
  promise.catch(e=> console.log(e.message));




});


btnSignUp.addEventListener('click', e=>
{

  const email=txtEmail.value;
  const pass= txtPassword.value;
  const auth =firebase.auth();

  const promise=  auth.createUserWithEmailAndPassword(email, pass);
  promise.catch(e=> console.log(e.message));



});



btnLogout.addEventListener('click', e => {

  firebase.auth().signOut();


});

  firebase.auth().onAuthStateChanged(firebaseUser =>{

      if(firebaseUser) {
        console.log(firebaseUser);
        btnLogout.classList.remove('hide');
      }
      else {
        console.log("not logged in");
        btnLogout.classList.add('hide');
    }
  });









}());
