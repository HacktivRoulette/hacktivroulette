<template>
  <div class="room">
    <!-- <img src="../assets/logo.png"> -->
    <List msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import List from '@/components/ListPage.vue'

export default {
  name: 'listpage',
  components: {
    List
  }
}
</script>
