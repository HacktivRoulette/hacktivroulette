<template>
  <div class="hello">

    <router-link to="/">
      <div id="cont" class="container">
        <div id="contttt" class="col s12 m12 l12 center">
          <h1  id="bisagan" style="color:white">Choose Room</h1>
        </div>

      </div>
    </router-link>

  </div>
</template>

<script>
export default {
  name: 'Hellopage',
  data() {
    return {}
  },
  methods: {
    enter() {
      console.log('bisa')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
