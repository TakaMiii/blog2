<template>
  <div class="color-code-components">
    <div class="color-code-container">
      <div class="input-color-bng">
        <div class="row">
          <input type="text" class="input-color" placeholder="輸入色碼" v-model="hexcolor">
        </div>
        <div class="row">
          <span>RGB :</span>
          <div class="rgb-show">{{ rgbcolor.R }} {{ rgbcolor.G }} {{ rgbcolor.B }}</div>
        </div>
        <div class="row">
          <span>hsl :</span>
          <div class="rgb-show">{{ hslcolor.H }} {{ hslcolor.S }} {{ hslcolor.L }}</div>
        </div>
      </div>
      <div class="show-color js-show-color" v-bind:style="{ background: hexcolor }"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ColorCode',
  data () {
    return {
      hexcolor: '',
      rgbcolor: {
        R: '',
        G: '',
        B: ''
      },
      hslcolor: {
        H: '',
        S: '',
        L: ''
      }
    }
  },
  watch: {
    'hexcolor': function () {
      this.transformToRGB()
      this.keycap()
      this.transformTohsl(this.rgbcolor.R, this.rgbcolor.G, this.rgbcolor.B)
    }
  },
  methods: {
    transformToRGB: function () {
      let hexcolor = this.hexcolor
      if (hexcolor.length === 7) {
        for (let i = 0; i < (hexcolor.length - 1) / 2; i++) {
          let r = hexcolor.slice(1, 3)
          let g = hexcolor.slice(3, 5)
          let b = hexcolor.slice(5)
          this.rgbcolor.R = parseInt(r, 16)
          this.rgbcolor.G = parseInt(g, 16)
          this.rgbcolor.B = parseInt(b, 16)
        }
      } else {
        let backgroundColor = document.querySelector('.js-show-color').style.background
        let colorString = backgroundColor.toString().slice(4, -1) // rgb(225,225,225)
        this.rgbcolor.R = colorString.split(',')[0]
        this.rgbcolor.G = colorString.split(',')[1]
        this.rgbcolor.B = colorString.split(',')[2]
      }
    },
    transformTohsl: function (r, g, b) {
      let rgbArray = [r / 255, g / 255, b / 255]
      let maxrgb = rgbArray[0]
      let minrgb = rgbArray[0]
      let gap
      let i = 0

      // 找出RGB裡最大的數值
      for (i = 1; i < rgbArray.length; i++) {   // 65, 225 ,18
        if (maxrgb < rgbArray[i]) {
          maxrgb = rgbArray[i]
        }
      }
      // 找出RGB裡最小的數值
      for (i = 1; i < rgbArray.length; i++) {   // 65, 225 ,18
        if (minrgb > rgbArray[i]) {
          minrgb = rgbArray[i]
        }
      }

      gap = maxrgb - minrgb

      // 取hsl中的h值
      if (maxrgb === rgbArray[0]) {
        this.hslcolor.H = Math.floor(60 * ((rgbArray[1] - rgbArray[2]) / gap % 6))
      } else if (maxrgb === rgbArray[1]) {
        this.hslcolor.H = Math.floor(60 * ((rgbArray[2] - rgbArray[0]) / gap + 2))
      } else {
        this.hslcolor.H = Math.floor(60 * ((rgbArray[0] - rgbArray[1]) / gap + 4))
      }
      // 取hsl中的l值
      let exl = ((maxrgb + minrgb) / 2)
      this.hslcolor.L = Math.floor(exl * 100)
      // 取hsl中的s值
      if (exl < 0.5) {
        this.hslcolor.S = Math.floor(gap / (maxrgb + minrgb) * 100)
      } else {
        this.hslcolor.S = Math.floor(gap / (2 - maxrgb - minrgb) * 100)
      }
    },
    keycap: function () {
      if (!this.hexcolor.match('#')) {
        this.hexcolor = '#' + this.hexcolor
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.color-code-components {
  padding-top: 4em;
}

.color-code-container {
  display: flex;
  align-items: center;
}

.input-color-bng {
  display: flex;
  flex-direction: column;
}

.row {
  margin: .5em;
  width: 100%;
  display: flex;
}

.input-color, .show-color {
  width: 100%;
}

.input-color {
  font-size: 1rem;
  letter-spacing: .2em;
  padding-bottom: .2em;
  border: 0;
  border-bottom: 1px solid hsl(120, 10%, 80%);
}

.show-color {
  height: 15em;
  border: 1px solid #dededf;
  border-radius: 1%;
}

@media screen and (max-width:576px){
  .color-code-container {
    flex-direction:column;
    margin: 2.5em 0;
  }

  .input-color-bng {
    width: 90%;
  }

  .show-color {
    width: 90%;
    margin: 2em 0;
  }

  .rgb-show {
    padding-left: .8rem;
  }
}

@media screen and (min-width:577px) and (max-width:992px){
  .color-code-container {
    margin: 5em 5vw;
    justify-content: space-around;
  }

  .show-color {
    width: 50%;
  }

  .input-color-bng {
    width: 40%;
  }
}

@media screen and (min-width:993px){
  .color-code-container {
    margin: 5em 20vw;
    justify-content: space-around;
  }

  .show-color {
    width: 35%;
  }

  .row {
    justify-content: space-between;
  }
}
</style>
