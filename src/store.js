import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase';
// import 'firebase/firestore';

var config = {
  apiKey: "AIzaSyAX26CHnUIlYn9GH0-hp4ii08F-5PGSD_o",
  authDomain: "hacktivroulette.firebaseapp.com",
  databaseURL: "https://hacktivroulette.firebaseio.com",
  projectId: "hacktivroulette",
  storageBucket: "hacktivroulette.appspot.com",
  messagingSenderId: "692499164625"
};

firebase.initializeApp(config);
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    createUser(context, payload) {
      // console.log(payload);
      let docRef = firebase.firestore().collection('test');
      docRef.add({
        player1: payload,
      })
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.log(err);
      });
    },
  },
});
