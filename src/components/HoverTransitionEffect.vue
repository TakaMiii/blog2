<template>
  <div>
    <ul class="galleries-container">
      <li v-for="gallery in galleries" class="gallery-li">
        <a href="#" class="gallery-a">
          <img :src="gallery.poto" class="gallery-img">
          <div class="hover-block"><h4>{{ gallery.title }}</h4></div>
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
          title: '測試標題一'
        },
        { poto: picture2,
          title: '測試標題二'
        },
        { poto: picture3,
          title: '測試標題三'
        },
        { poto: picture4,
          title: '測試標題四'
        },
        { poto: picture5,
          title: '測試標題五'
        },
        { poto: picture6,
          title: '測試標題六'
        },
        { poto: picture7,
          title: '測試標題七'
        },
        { poto: picture1,
          title: '測試標題八'
        },
        { poto: picture2,
          title: '測試標題九'
        },
        { poto: picture3,
          title: '測試標題十'
        },
        { poto: picture4,
          title: '測試標題十一'
        },
        { poto: picture5,
          title: '測試標題十二'
        }
      ]
    }
  },
  methods: {
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
  margin: 0em 20%;
}

.gallery-li {
  width: 24%;
  margin: 5px 0;
}

.gallery-a, .gallery-img {
  height: 100%;
}

.gallery-a {
  position: relative;
}

.hover-block {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background: hsla(23, 0%, 30%, 0);
  z-index: 3;
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

}

@media screen and (min-width:577px) and (max-width:992px){

}

@media screen and (min-width:993px){

}
</style>
