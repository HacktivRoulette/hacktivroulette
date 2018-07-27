<template>
  <div class="hello">
    <div class="row">

      <div id="inibisa" class="col s5 m5 l5">
        <h1 style="color:white">Player 1</h1>
        <div id="total" class="col s3 m3 l3 right">
          <h1>{{numSum}}</h1>
        </div>
        <div id="totalagain" class="col s6 m6 l6 left">

        </div>
      </div>
      <div class="col s2 m2 l2">
      </div>
      <div id="inibisa" class="col s5 m5 l5">
        <h1 style="color:white">Player 2</h1>
        <div id="total" class="col s3 m3 l3 left">
          <h1>{{numSum}}</h1>
        </div>
        <div id="totalagain" class="col s6 m6 l6 right">

        </div>

      </div>

    </div>
    <div class="row">
      <div class="col s4 m4 l4">
        <h1 style="color:white">{{diceRandom}}</h1>
      </div>
      <div id="roulette" class="col s4 m24 l4">
        <router-link to="">
          <img @click="dice()" src="http://www.selzer-mckenzie.com/bilder/RouletteRun.gif">
        </router-link>
      </div>
      <div class="col s4 m4 l4">
        <h1 style="color:white">{{diceRandom}}</h1>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Hellopage',
  data() {
    return {
      diceRandom: '',
      numSum: 0
    }
  },
  methods: {
    dice() {
      // console.log('bisa')
      var num = [1, 2, 3, 4, 5, 6]

      var random = num[Math.floor(Math.random() * num.length)]
      // console.log(random)

      this.diceRandom = random
      this.numSum += parseInt(random)
      console.log(this.numSum)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#inibisa {
  /* border: 2px solid white; */
  /* margin: 5px; */
  height: 400px;
}

#roulette {
  /* border: 2px solid white; */
}

img {
  width: 100%;
  /* border: 2px solid rgb(3, 0, 0); */
  border-radius: 20px;
  height: 100%;
  background-color: black;
}

#total {
  border: 2px solid rgb(245, 237, 237);
  margin-top: 30px;
  border-radius: 20px;
  background-color: white;
}

#totalagain {
  /* border: 2px solid rgb(245, 237, 237); */
  margin-top: 0px;
  border-radius: 20px;
  background-image: url('http://images6.fanpop.com/image/photos/40600000/One-Punch-Man-one-punch-man-40614093-500-250.gif');
  margin-right: 50px;
  height: 200px;
}
</style>
