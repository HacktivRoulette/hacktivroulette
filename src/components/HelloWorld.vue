<template>
  <div class="hello">
    <div id="cont" class="container">

        <div id="contt" class="col s12 m12 l12 center">
          <div class="row col s12 m6 l6">
            <div class="col s12 m12 l12">
              <i style="color:white" class="material-icons prefix">account_circle</i>
              <input style="color:white" placeholder="Nickname..." id="icon_prefix" type="text" class="validate" v-model="nickname">

            </div>
            <router-link to="/about">
              <div id="conttt" class="col s12 m12 l12">
                <h6 @click="submit">
                  <b style="color:white">Submit</b>
                </h6>

              </div>
            </router-link>

          </div>

        </div>


    </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  data() {
    return {
      nickname: ''
    }
  },
  methods: {
    ...mapActions([
       "addUser"
    ]),
    submit: function () {
        this.addUser(this.nickname)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
