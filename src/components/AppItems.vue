<template>
  <div>
    <router-link to="/article" class="items">
      <div class="item" v-for="item in items">
        <div class="img-size">
          <img class="item-img" v-bind:src="item.img">
        </div>
        <div class="item-text">
          <h3 class="item-h3">
            {{ item.title }}</h3>
          <div class="item-date">{{ item.date }}</div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
// 引入圖片
import axios from 'axios'

export default {
  name: 'AppItems',
  data () {
    return {
      msg: 'nav',
      items: [
      ]
    }
  },
  methods: {
  },
  mounted: function () {
    let self = this
    axios.get('http://blog-api.dandelion-and-cat.com/api/v1/articles')
      .then(function (response) {
        console.log(response.data.data)
        self.items = response.data.data
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
/*電腦、平板共同樣式。只有手機版不套用，故手機版樣式於media query覆寫*/
.items {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.item {
  width: 100%;
  margin: 1.5em 1%;
  margin-bottom: 0;
  border: 1px solid hsla(10, 10%, 95%, 1);
  border-radius: 2%;
  box-shadow: 2px 3px 6px 2px hsla(70, 30%, 95%, .2);
  overflow: hidden;
}

.item-text {
  padding: 1.5em 1.2em;
  padding-bottom: 2em;
}

.item-h3 {
  position: relative;
  line-height: 1.8em;
  height: 3.6em;
  font-family: SimSun, PingFang SC;
  color: hsla(35, 94%, 10%, 1);
  font-weight: 300;
  letter-spacing: .15rem;
  text-align: justify;
  margin: 0px 0px 10px 0px;
  overflow: hidden;
}

.item-img {
  width: 100%;
}

.item-date {
  color: #595757;
  font-weight: lighter;
}

/*嗰種item互動效果 ＋ 首頁文章顯圖太大會被裁切*/
.img-size {
  width: 100%;
  height: 14em;
  position: relative;
  overflow: hidden;
}

/*hover item，圖片會緩慢押上一層白色*/
.img-size:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0em;
  bottom: 0em;
  background: hsla(230, 43%, 100%, 0);
  transition-duration: .5s;
  transition-property: background;
}

.img-size:after {
  content: 'View';
  color: hsla(167, 92%, 45%, 0);
  border: 2px solid hsla(167, 92%, 41%, 0);
}

.item:hover .img-size:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0em;
  bottom: 0em;
  background: hsla(230, 10%, 30%, 0.7);
}

.item:hover .img-size:after {
  content: 'View';
  color: hsl(167, 92%, 45%);
  font-size: 1.2em;
  border: 2px solid hsl(167, 92%, 41%);
  padding: .5em .8em;
  padding-right: .4em;
  letter-spacing: 0.5em;
  position: absolute;
  top: 40%;
  left: 32%;
  transition-duration: 1.5s;
  transition-property: color, border;
}


/*hover item，裡面的h3會變顏色*/
.item:hover .item-h3 {
  font-weight: 400;
  color: hsl(172, 100%, 38%);;
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
    padding-bottom: 8em;
  }

  .item {
    width: 47%;
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
