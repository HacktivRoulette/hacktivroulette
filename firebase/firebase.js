import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAX26CHnUIlYn9GH0-hp4ii08F-5PGSD_o",
    authDomain: "hacktivroulette.firebaseapp.com",
    databaseURL: "https://hacktivroulette.firebaseio.com",
    projectId: "hacktivroulette",
    storageBucket: "hacktivroulette.appspot.com",
    messagingSenderId: "692499164625"
  }
  
  firebase.initializeApp(config)

  let database = firebase.database()

  export default database