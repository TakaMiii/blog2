<template>
  <div class="items">
    <div class="item" v-for="item in items">
      <img class="item-img" v-bind:src="item.coverImage">
      <h3>{{ item.itemTitle }}</h3>
    </div>
  </div>
</template>

<script>
// 引入圖片
import picture1 from '../assets/item-tex1.jpg'
import picture2 from '../assets/item-tex2.jpg'
import picture3 from '../assets/item-tex3.jpg'
import picture4 from '../assets/item-tex4.jpg'
import picture5 from '../assets/item-tex5.jpg'
import picture6 from '../assets/item-tex6.jpg'
import picture7 from '../assets/item-tex7.jpg'
import picture8 from '../assets/item-tex8.jpg'

export default {
  name: 'AppItems',
  data () {
    return {
      msg: 'nav',
      items: [
        { coverImage: picture1,
          itemTitle: '標題一'
        },
        { coverImage: picture2,
          itemTitle: '標題二'
        },
        { coverImage: picture3,
          itemTitle: '標題三'
        },
        { coverImage: picture4,
          itemTitle: '標題四'
        },
        { coverImage: picture5,
          itemTitle: '標題五'
        },
        { coverImage: picture6,
          itemTitle: '標題六'
        },
        { coverImage: picture7,
          itemTitle: '標題七'
        },
        { coverImage: picture8,
          itemTitle: '標題八'
        }
      ]
    }
  }
   // mounted: function mounted () {

  // }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.item {
   width: 100%;
}

.item-img {
  width: 100%;
}

@media screen and (max-width:576px) {
  .items {
    display: flex;
    flex-direction: column;
    padding: 1em 5%;
  }
}

@media screen and (min-width:577px) and (max-width:992px){
  .item {
    margin: 1.5em 1%;
    overflow: hidden;
  }
}

@media screen and (min-width:993px){
  .items {
    padding: 2em 16vw;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  .item {
    width: 31%;
    margin: 1.5em 1%;
    overflow: hidden;
  }
}

</style>
