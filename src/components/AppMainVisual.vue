<template>
  <div class="main-visual js-main-visual">
    <canvas class="wave js-wave"></canvas>
    <div class="invite-container">
      <div class="invite-style">{{ msg }}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MainVisual',
  data () {
    return {
      msg: 'Welcome to Taka Miiko\'s blog ',
      // 這裡是ctx的設定值
      WaveValue: {
        poY: 300,
        poX: 1440
      }
    }
  },
  mounted: function mounted () {
    this.DrawTheWave()
  },
  methods: {
    DrawTheWave: function (e) {
      // let self = this
      let Wave = document.querySelector('.js-wave')
      Wave.width = Wave.parentElement.clientWidth
      Wave.height = Wave.parentElement.clientHeight
      let wavebottom = Wave.parentElement.clientHeight    // 畫布底部
      // 線條的x軸終點
      let pox = this.WaveValue.poX
      // 線條的y軸終點
      let poy = this.WaveValue.poY
      let ctx = Wave.getContext('2d')
      let draw1 = (changeableX, changeableY) => {
        let color = 100 - Math.floor(changeableY / 10) // 100-700
        ctx.clearRect(0, 0, 1440, 720)
        ctx.beginPath()
        ctx.moveTo(0, poy)
        ctx.fillStyle = 'hsla(180,' + color + '%, 96%, 1)'
        ctx.quadraticCurveTo(changeableX, changeableY, pox, poy)  // 第一個波
        ctx.lineTo(pox, wavebottom)
        ctx.lineTo(0, wavebottom)
        ctx.fill()
      }

      let changeableY = 500
      let changeableX = 1000
      let waveIsIncrement = true

      let moving = () => {
        if (waveIsIncrement) {
          changeableY++
          changeableX--
          if (changeableY === 700) {
            waveIsIncrement = false
          }
        } else {
          changeableY--
          changeableX++
          if (changeableY === 100) {
            waveIsIncrement = true
          }
        }

        setTimeout(function () {
          draw1(changeableX, changeableY)
          moving()
        }, 30)
      }

      moving()
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
  .main-visual {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-between;
  }

  .wave {
    width: 100%;
    height: 100%;
    position: absolute;
    display: block;
  }

/*click anywhere, please 邀請句共用樣式*/
  .invite-container{
    display: flex;
    align-items: center;
    width: 100%;
    z-index: 2;
  }

  .invite-style {
    font-family: Lato, sans-serif;
    border-bottom: .1em solid #07dc8e;
    font-size: 1.2em;
    letter-spacing: .15em;
    padding: 0 5em .6em .8em;
    text-align: center;
  }

/*網頁內容指示*/

@media screen and (max-width:576px) {
  .invite-container{
    display: flex;
    justify-content: center;
  }

  .invite-style {
    padding: .6em .5em;
  }
}

@media screen and (min-width:577px) and (max-width:992px){
  .invite-container{
    display: flex;
    justify-content:flex-end;
    height: 80%;
  }
}

@media screen and (min-width:993px){
  .invite-container{
    display: flex;
    justify-content:flex-end;
    height: 80%;
  }

  .invite-style {
    font-size: 1.2em;
  }
}

</style>
