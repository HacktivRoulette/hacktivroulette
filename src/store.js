import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase';


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
    playerName: '',
    easy: [],
    medium: [],
    hard: []
  },
  mutations: {
    addUser (state, payload) {
        return state.playerName = payload
    }
  },
  actions: {
    addUser(context, payload) {
      context.commit('addUser', payload)
      // console.log(payload);

      // let docRef = firebase.firestore().collection('test');
      // docRef.add({
      //   player1: payload,
      // })
      // .then((data) => {
      //   console.log(data)
      // })
      // .catch((err) => {
      //   console.log(err);
      // });
    },
    addUserEasy () {
      let docRef = firebase.firestore().collection('rooms/easy/players')
      console.log(this.state.playerName)
      docRef.add({
          playerName: this.state.playerName
      })
      .then(function (data) {
          console.log(data)
      })
      .catch(function(err) {
          console.log(err)
      })
    }
  }
});
