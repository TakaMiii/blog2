<template>
  <div class="color-code-components">
    <div class="color-code-container">
      <div class="input-block">
        <div class="row">
          <input type="text" class="input-color" placeholder="輸入色碼" v-model="bngcolor.hexcolor">
        </div>
        <div class="row">
          <span>RGB :</span>
          <div class="rgb-show">{{ bngcolor.RGB }}</div>
        </div>
        <div class="row">
          <span>HSL :</span>
          <div class="rgb-show">{{ bngcolor.HSL }}</div>
        </div>
        <div class="row add-text">
          <button type="butten" v-on:click="addText" v-if="textSwitch.addTextBtn" class="add-text-btn">+ text</button>
        </div>
        <input type="text" v-if="textSwitch.textReady" v-model="texts.text"  maxlength="6" class="row input-text" placeholder="輸入文字">
        <input type="text" v-if="textSwitch.textReady" v-model="texts.hexcolor" class="row input-text" placeholder="輸入文字的色碼">
      </div>
      <div class="show-block">
        <div v-bind:style="{ background: bngcolor.hexcolor }" class="show-color js-show-color">
          <div v-bind:style="{ color: texts.RGB }" class="text-style">{{ texts.text }}</div>
        </div>
        <div v-if="textSwitch.textReady">
          <input type="text" class="text-color input-color" v-model="texts.RGB">
          <div class="text-color">{{ texts.HSL }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ColorCode',
  data () {
    return {
      textSwitch: {
        addTextBtn: true,
        textReady: false
      },
      bngcolor: {
        hexcolor: '',
        rgbcolor: {
          R: '',
          G: '',
          B: ''
        },
        RGB: '',
        hslcolor: {
          H: '',
          S: '',
          L: ''
        },
        HSL: ''
      },
      texts: {
        text: '',
        hexcolor: '',
        rgbcolor: {
          R: '',
          G: '',
          B: ''
        },
        RGB: '',
        hslcolor: {
          H: '',
          S: '',
          L: ''
        },
        HSL: ''
      }
    }
  },
  watch: {
    'bngcolor.hexcolor': function () {
      this.keycap(this.bngcolor)
      this.transformToRGB(this.bngcolor)
      this.transformTohsl(this.bngcolor)
    },
    'texts.hexcolor': function () {
      this.keycap(this.texts)
      this.transformToRGB(this.texts)
      this.transformTohsl(this.texts)
    }
  },
  methods: {
    addText: function () {
      this.textSwitch.addTextBtn = false
      this.textSwitch.textReady = true
    },
    transformToRGB: function (rawcolor) {
      let hex = rawcolor.hexcolor
      if (hex.length === 7) {
        for (let i = 0; i < (hex.length - 1) / 2; i++) {
          let r = hex.slice(1, 3)
          let g = hex.slice(3, 5)
          let b = hex.slice(5)
          rawcolor.rgbcolor.R = parseInt(r, 16)
          rawcolor.rgbcolor.G = parseInt(g, 16)
          rawcolor.rgbcolor.B = parseInt(b, 16)
        }
      } else {
        let backgroundColor = document.querySelector('.js-show-color').style.background
        let colorString = backgroundColor.toString().slice(4, -1)
        rawcolor.rgbcolor.R = colorString.split(',')[0]
        rawcolor.rgbcolor.G = colorString.split(',')[1]
        rawcolor.rgbcolor.B = colorString.split(',')[2]
      }
      rawcolor.RGB = 'rgb(' + rawcolor.rgbcolor.R + ' ,' + rawcolor.rgbcolor.G + ' ,' + rawcolor.rgbcolor.B + ')'
    },
    transformTohsl: function (rowcolor) {
      let rowR = parseFloat((rowcolor.rgbcolor.R / 255).toFixed(2))
      let rowG = parseFloat((rowcolor.rgbcolor.G / 255).toFixed(2))
      let rowB = parseFloat((rowcolor.rgbcolor.B / 255).toFixed(2))
      let rgbArray = [rowR, rowG, rowB]
      let maxrgb = rgbArray[0]
      let minrgb = rgbArray[0]
      let gap
      let i = 0

      // 找出RGB裡最大的數值
      for (i = 1; i < rgbArray.length; i++) {
        if (maxrgb < rgbArray[i]) {
          maxrgb = rgbArray[i]
        }
      }
      // 找出RGB裡最小的數值
      for (i = 1; i < rgbArray.length; i++) {
        if (minrgb > rgbArray[i]) {
          minrgb = rgbArray[i]
        }
      }

      gap = maxrgb - minrgb

      // 取hsl中的h值
      if (maxrgb === rgbArray[0]) {
        rowcolor.hslcolor.H = Math.floor(60 * ((rgbArray[1] - rgbArray[2]) / gap % 6))
      } else if (maxrgb === rgbArray[1]) {
        rowcolor.hslcolor.H = Math.floor(60 * ((rgbArray[2] - rgbArray[0]) / gap + 2))
      } else {
        rowcolor.hslcolor.H = Math.floor(60 * ((rgbArray[0] - rgbArray[1]) / gap + 4))
      }
      // 取hsl中的l值
      let exl = (maxrgb + minrgb) / 2
      rowcolor.hslcolor.L = Math.floor(exl * 100)

      // 取hsl中的s值
      if (exl < 0.5) {
        rowcolor.hslcolor.S = Math.floor(gap / (maxrgb + minrgb) * 100)
      } else {
        rowcolor.hslcolor.S = Math.floor(gap / (2 - maxrgb - minrgb) * 100)
      }
      rowcolor.HSL = 'hsl(' + rowcolor.hslcolor.H + ' ,' + rowcolor.hslcolor.S + '%, ' + rowcolor.hslcolor.L + '%)'
    },
    keycap: function (inputhex) {
      if (!inputhex.hexcolor.match('#')) {
        inputhex.hexcolor = '#' + inputhex.hexcolor
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

.input-block {
  display: flex;
  flex-direction: column;
}

.row {
  margin: .5em 0;
  display: flex;
}

.input-color {
  width: 100%;
}

.input-color, .input-text, .text-rgb, .text-color {
  font-size: 1rem;
  letter-spacing: .2em;
  padding-bottom: .2em;
  border: 0;
}

.input-color, .input-text, .text-rgb {
  border-bottom: 1px solid hsl(120, 10%, 80%);
}

.show-block {
  display: flex;
  flex-direction:column;
}

.show-color {
  height: 16.3em;
  border: 1px solid #dededf;
  border-radius: 1%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 99%;
}

.text-style {
  font-size: 2em;
}

.add-text {
  margin-top: 1.5em;
}

.add-text-btn {
  width: 100%;
  height: 2.5em;
  background: #FFFFFF;
  color: hsl(120, 0%, 70%);
  border: 1px solid hsl(120, 10%, 80%);
  border-radius: .2em;
  font-size: 15px;
  font-weight: 300;
}

@media screen and (max-width:576px){
  .color-code-container {
    flex-direction:column;
    margin: 2.5em 0;
  }

  .input-block {
    width: 90%;
  }

  .show-block {
    width: 90%;
    margin: 2em 0;
  }

  .rgb-show {
    padding-left: .8rem;
  }

  .text-color, .input-text, .input-color {
    padding-top: 2em;
    padding-bottom: .5em;
  }
}

@media screen and (min-width:577px) and (max-width:992px){
  .color-code-container {
    margin: 5em 5vw;
    justify-content: space-around;
  }

  .show-block {
    width: 50%;
  }

  .input-block {
    width: 40%;
  }

  .text-color, .input-text, .input-color {
    padding-top: 1.5em;
    padding-bottom: .5em;
  }
}

@media screen and (min-width:993px){
  .color-code-container {
    margin: 5em 20vw;
    justify-content: space-around;
  }

  .show-block {
    width: 35%;
  }

  .row {
    justify-content: space-between;
  }

/*新增文字輸入欄位按鈕需靠右，故需把row原本的space-between複寫掉*/
  .add-text {
    justify-content: flex-end;
  }
/*複寫完畢*/

  .add-text-btn {
    width: 4em;
  }
  .text-color {
    padding-top: 1em;
    padding-bottom: .5em;
  }
}
</style>
