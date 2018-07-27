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
    playerId: null,
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
    },
    playerId(state, payload) {
        return state.playerId = payload
    },
  },
  actions: {
    addUser(context, payload) {
      context.commit('addUser', payload)
    },
    addUserEasy(context) {
      let updatedEasyPlayers = this.state.easyPlayers;
      updatedEasyPlayers.push(this.state.playerInfo);
      if (updatedEasyPlayers.length === 1) {
        console.log('1');
        context.commit('playerId', 0)
      } else if (updatedEasyPlayers.length === 2) {
        console.log('2');
        context.commit('playerId', 1)
      }
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
    changeStatus(context, payload) {
      let updatedEasyPlayers = this.state.easyPlayers;
      console.log(payload);
      console.log(updatedEasyPlayers);
        if (payload === 1) {
          updatedEasyPlayers[0].status = true
          updatedEasyPlayers[1].status = false
        } else {
          updatedEasyPlayers[1].status = true
          updatedEasyPlayers[0].status = false
        }
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
    changeScore(context, payload) {
      let updatedEasyPlayers = this.state.easyPlayers;
      updatedEasyPlayers[payload.id].score += payload.score;
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
            // localStorage.setItem('playerId', 1);
            context.commit('playerInfo', playerInfoSkeleton);
          } else {
            let playerInfoSkeleton = {
              name: '',
              score: 0,
              status: false,
            };
            // localStorage.setItem('playerId', 2);
            context.commit('playerInfo', playerInfoSkeleton);
          }
        });
    },
  },
});
