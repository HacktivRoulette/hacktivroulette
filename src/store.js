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
const settings = {
  timestampsInSnapshots: true
};
firestore.settings(settings);

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    playerInfo: null,
    easyPlayers: null,
  },
  mutations: {
    addUser(state, payload) {
      return state.playerInfo.name = payload
    },
    easyPlayers(state, payload) {
      if (payload === undefined) {
        return state.easyPlayers = [];
      } else {
        return state.easyPlayers = payload;
      }
    },
    playerInfo(state, payload) {
      return state.playerInfo = payload
    }
  },
  actions: {
    addUser(context, payload) {
      context.commit('addUser', payload)
    },
    addUserEasy() {
      let updatedEasyPlayers = this.state.easyPlayers;
      updatedEasyPlayers.push(this.state.playerInfo);
      let docRef = firebase.firestore().collection('rooms').doc('easy');
      docRef.set({
          players: updatedEasyPlayers
        })
        .then(function (data) {
          console.log(data)
        })
        .catch(function (err) {
          console.log(err)
        })
    },
    testCreated(context) {
      firebase.firestore().collection("rooms").doc("easy")
        .onSnapshot(function (doc) {
          // let fsEasyPlayers = doc.data().players
          // context.commit('easy', fseasyplayers)
          context.commit('easyPlayers', doc.data().players)
          if (doc.data().players.length === 0 || doc.data().players === undefined) {
            let playerInfoSkeleton = {
              name: '',
              score: 0,
              status: true,
            };
            context.commit('playerInfo', playerInfoSkeleton);
          } else {
            let playerInfoSkeleton = {
              name: '',
              score: 0,
              status: false,
            };
            context.commit('playerInfo', playerInfoSkeleton);
          }
        });
    },
  },
});
