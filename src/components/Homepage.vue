<template>
  <div class="hello">

    <router-link to="/">
      <div id="cont" class="container">
        <div id="contttt" class="col s12 m12 l12 center">
          <h2 class="col s12 m12 l12"  style="color:white">Choose Room</h2>
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
