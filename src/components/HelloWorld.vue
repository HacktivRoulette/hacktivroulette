<template>
  <div class="hello">
    <div id="cont" class="container">
      <div id="cont" class="row center">
        <div id="contt" class="col s12 m6 l6 center">
          <div class="row">
            <div class="col s12 m12 l12">
              <i style="color:white" class="material-icons prefix">account_circle</i>
              <input style="color:white" value="Nickname..." id="icon_prefix" type="text" class="validate">

            </div>
            <router-link to="/about">
              <div id="conttt" class="col s12 m12 l12">
                <h6>
                  <b style="color:white">Submit</b>
                </h6>

              </div>
            </router-link>

          </div>

        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
