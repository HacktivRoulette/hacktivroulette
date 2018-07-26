<template>
  <div class="home">
    <!-- <img src="../assets/logo.png"> -->
    <Home msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Homepage.vue'

export default {
  name: 'homepage',
  components: {
    Home
  }
}
</script>
