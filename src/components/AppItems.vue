<template>
  <div class="items">
    <div class="item" v-for="item in items">
      <div class="img-size"><img class="item-img" v-bind:src="item.coverImage"></div>
      <h3 class="item-h3">
        {{ item.itemTitle }}</h3>
      <div class="item-date">{{ item.date }}</div>
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
          itemTitle: '紅色龍是部好小說',
          date: '2017/5/20'
        },
        { coverImage: picture2,
          itemTitle: '不過我比較喜歡另一本',
          date: '2017/8/20'
        },
        { coverImage: picture3,
          itemTitle: '比如索涅奇卡就很好看',
          date: '2017/9/20'
        },
        { coverImage: picture4,
          itemTitle: '火狐狸雖然好看，但文學含量不高',
          date: '2017/10/20'
        },
        { coverImage: picture5,
          itemTitle: '可是現在都沒有時間看小說了，很多書雖買了但都看不了',
          date: '2017/11/1'
        },
        { coverImage: picture6,
          itemTitle: '標題六',
          date: '2017/11/5'
        },
        { coverImage: picture7,
          itemTitle: '標題七',
          date: '2017/11/8'
        },
        { coverImage: picture8,
          itemTitle: '標題八',
          date: '2017/12/3'
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
  margin-bottom: 2.8rem;
}

/*嗰種item互動效果 ＋ 首頁文章顯圖太大會被裁切*/
.img-size {
  width: 100%;
  height: 14em;
  overflow: hidden;
  position: relative;
}
.img-size:before {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  top: 0em;
  bottom: 0em;
  background: hsla(230, 43%, 100%, 0);
  transition-duration: .4s;
  transition-property: background;
}

/*hover item，圖片會緩慢押上一層白色*/
.item:hover .img-size:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0em;
  bottom: 0em;
  background: hsla(230, 43%, 100%, .7);
}

/*hover item，裡面的h3會變顏色*/
.item:hover .item-h3 {
  font-weight: 600;
  margin-left: 20px;
  color: #02b490;
}

.item-h3 {
  position: relative;
  line-height: 1.8em;
  font-family: SimSun, PingFang SC;
  color: hsla(35, 94%, 10%, 1);
  font-weight: 300;
  letter-spacing: .15rem;
  text-align: justify;
}

.item-h3:before {
  content: '';
  position: absolute;
  width: 0px;
  margin-right: .8em;
  background: #0bc4a3;
}

.item:hover .item-h3:before {
  content: '';
  position: absolute;
  width: 4px;
  height: 100%;
  left: -20px;
  top: 2px;
  margin-right: .8em;
  background: #0bc4a3;
}

.item-img {
  width: 100%;
}

.item-date {
  color: #595757;
  font-weight: lighter;
}

/*電腦、平板共同樣式。只有手機版不套用，故手機版樣式於media query覆寫*/
.items {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.item {
  margin: 1.5em 1%;
}

@media screen and (max-width:576px) {
  .items {
    display: flex;
    flex-direction: column;
    padding: 1em 5%;
  }

  .item {
    width: 100%;
    margin: 1.5em 0;
  }
}

@media screen and (min-width:577px) and (max-width:992px){
  .items {
    justify-content: space-between;
    padding: 2em 5vw;
  }

  .item {
    width: 45%;
  }
}

@media screen and (min-width:993px){
  .items {
    padding: 2em 16vw;
  }

  .item {
    width: 31%;
  }

}

</style>
