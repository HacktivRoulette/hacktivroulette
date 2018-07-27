<template>
  <div class="hello">

    <div id="cont" class="container">
      <div id="conttttt" class="col s12 m12 l12 center">
        <h1 id="bisagan" style="color:white">Join Room</h1>

        <router-link to="/about">
          <div id="bisagan2" class="col s12 m12 l12" v-on:click="addUserEasy">
            <h4 class="col s12 m12 l12" style="color:white">EASY</h4>
          </div>
        </router-link>
        <router-link to="/about">
          <div id="bisagan3" class="col s12 m12 l12">
            <h4 class="col s12 m12 l12" style="color:white">MEDIUM</h4>
          </div>
        </router-link>
        <router-link to="/about">
          <div id="bisagan4" class="col s12 m12 l12">
            <h4 class="col s12 m12 l12" style="color:white">HARD</h4>
          </div>
        </router-link>
      </div>

    </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Hellopage',
  data() {
    return {}
  },
  methods: {
    ...mapActions([
       "addUserEasy"
    ]),
    enter() {
      console.log('bisa')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
