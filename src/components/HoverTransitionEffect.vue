<template>
  <div>
    <ul class="galleries-container js-galleries-container">
      <li v-for="gallery in galleries" v-on:mouseover="getGallery(gallery.coordinate)" class="gallery-li">
        <a href="#" class="gallery-a">
          <img :src="gallery.poto" class="gallery-img">
          <div v-bind:class="{'from-left': hoverAnimate.fromLeft, 'from-right': hoverAnimate.fromRight, 'from-top': hoverAnimate.fromTop, 'from-bottom': hoverAnimate.fromBottom}" class="hover-block"><h4>{{ gallery.title }}</h4></div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import picture1 from '../assets/item-tex8.jpg'
import picture2 from '../assets/item-tex2.jpg'
import picture3 from '../assets/item-tex3.jpg'
import picture4 from '../assets/item-tex4.jpg'
import picture5 from '../assets/item-tex5.jpg'
import picture6 from '../assets/item-tex6.jpg'
import picture7 from '../assets/item-tex7.jpg'

export default {
  name: 'HoverEffect',
  data () {
    return {
      galleries: [
        { poto: picture1,
          title: '測試標題一',
          id: 1,
          coordinate: [0, 0]
        },
        { poto: picture2,
          title: '測試標題二',
          id: 2,
          coordinate: [1, 0]
        },
        { poto: picture3,
          title: '測試標題三',
          id: 3,
          coordinate: [2, 0]
        },
        { poto: picture4,
          title: '測試標題四',
          id: 4,
          coordinate: [3, 0]
        },
        { poto: picture5,
          title: '測試標題五',
          id: 5,
          coordinate: [0, 1]
        },
        { poto: picture6,
          title: '測試標題六',
          id: 6,
          coordinate: [1, 1]
        },
        { poto: picture7,
          title: '測試標題七',
          id: 7,
          coordinate: [2, 1]
        },
        { poto: picture1,
          title: '測試標題八',
          id: 8,
          coordinate: [3, 1]
        },
        { poto: picture2,
          title: '測試標題九',
          id: 9,
          coordinate: [0, 2]
        },
        { poto: picture3,
          title: '測試標題十',
          id: 10,
          coordinate: [1, 2]
        },
        { poto: picture4,
          title: '測試標題十一',
          id: 11,
          coordinate: [2, 2]
        },
        { poto: picture5,
          title: '測試標題十二',
          id: 12,
          coordinate: [3, 2]
        }
      ],

      mousePosition: {
        mosuseEvent: '',
        x: '',
        y: '',
        id: '',
        coordinate: ''
      },

      hoverAnimate: {
        fromLeft: false,
        fromRight: false,
        fromTop: false,
        fromBottom: false
      }
    }
  },
  mounted: function () {
  },
  watch: {
    'mousePosition.coordinate': function (Val, oldVal) { // 2.如果hover的物件id變了，回傳新舊作標值
      this.putAnimation(Val, oldVal)
    }
  },
  methods: {
    getGallery: function (coordinate) {
      this.mousePosition.coordinate = coordinate      // 1. 取得被選取物件的座標值
    },

    putAnimation: function (Val, oldVal) {
      this.hoverAnimate.fromBottom = false
      this.hoverAnimate.fromTop = false
      this.hoverAnimate.fromRight = false
      this.hoverAnimate.fromLeft = false

      let row = Val[0]
      let column = Val[1]
      let oldRow = oldVal[0]
      let oldColumn = oldVal[1]

      if (column > oldColumn) {
        this.hoverAnimate.fromBottom = true
      } else if (column < oldColumn) {
        this.hoverAnimate.fromTop = true
      } else {
        if (row > oldRow) {
          this.hoverAnimate.fromRight = true
        } else {
          this.hoverAnimate.fromLeft = true
        }
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.galleries-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10em 0;
}

.gallery-a, .gallery-img {
  height: 100%;
}

.gallery-a {
  position: relative;
  overflow: hidden;
}

.hover-block {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background: hsla(23, 0%, 30%, 0);
  z-index: 3;
  overflow: hidden;
}
.hover-block h4{
  color: hsla(23, 0%, 100%, 0);
  font-weight: 300;
  font-size: 1.3em;
  letter-spacing: 3px;
  text-align: center;
  padding: 1em 0;
  margin: 15% 10%;
}

.gallery-li:hover .hover-block {
  background: hsla(23, 0%, 30%, .6);
}

.gallery-li:hover .hover-block h4 {
  color: hsla(23, 0%, 100%, 1);
  border: 1px solid hsla(23, 0%, 100%, .8);
  border-left: 0;
  border-right: 0;
}

@media screen and (max-width:576px){
  .galleries-container {
    margin: 0em 5%;
  }
  .gallery-li {
    width: 100%;
    margin: 5px 0;
  }
}

@media screen and (min-width:577px) and (max-width:992px){
  .galleries-container {
    margin: 0em 5%;
  }
  .gallery-li {
    width: 32%;
    margin: 5px 0;
  }
}

@media screen and (min-width:993px){
  .galleries-container {
    margin: 0em 20%;
  }
  .gallery-li {
    width: 24%;
    margin: 5px 0;
  }

  /*hover css 動畫設定開始*/
  .from-left {
    animation-duration: 0.3s;
    animation-name: leftslide;
  }

  @keyframes leftslide {
    from {
      margin-left: 100%;
    }

    to {
      margin-left: 0%;
    }
  }

  .from-right {
    animation-duration: 0.3s;
    animation-name: rightslide;
  }

  @keyframes rightslide {
    from {
      margin-left: -100%;
    }
    to {
      margin-left: 0%;
    }
  }

  .from-top {
    animation-duration: 0.3s;
    animation-name: topslide;
  }

  @keyframes topslide {
    from {
      margin-top: 100%;
    }
    to {
      margin-top: 0%;
    }
  }

  .from-bottom {
    animation-duration: 0.3s;
    animation-name: bottomslide;
  }

  @keyframes bottomslide {
    from {
      margin-top: -100%;
    }
    to {
      margin-top: 0%;
    }
  }


  /*hover css 動畫設定結束*/
}
</style>
