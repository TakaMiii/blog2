<template>
  <div class="app-about-me">
    <div>
      <div class="about-me about-miiko">
        <div class="miiko-img-container">
          <img src="../assets/bette.png">
        </div>
        <div class="about-miiko-contect">
          <h3>ABOUT MIIKO</h3>
          <div class="depiction">
            <h4>Miiko，工作時間3年，曾任網頁企劃、行銷PM</h4>
            <p>Hi, 我是Miiko。我為了找前端工程師（junior engineer）的工作開始製作這個網頁，結果還沒有完成上線，就先找到工作了。</p>
          </div>
        </div>
      </div>
      <div class="about-me about-mike">
        <div class="mike-img-container">
          <img src="../assets/mike.jpg">
        </div>
        <div class="about-mike-contect">
           <h3>ABOUT MIKE</h3>
          <div class="depiction">
            <h4>Mike，php工程師</h4>
            <p>Mike是教Miiko寫程式的人，是工作很久很久的php工程師，但他大部分的時間都在做全端的工作。喜歡玩英雄聯盟。</p>
          </div>
        </div>
      </div>
    </div>

    <div class="our-story-container">
      <div class="our-story">
        <p>
          Mike和Miiko是2014年在時間軸認識的，可能都有一點工作狂傾向，每天都在聊專案、軟體開發。
        </p>
        <p>
          MiiKo畢業於藝術系，兩人一起做東西時，會包辦規劃、視覺、切版；技術方向或後端架構則由Mike指導、開發。
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AppAboutMe',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*大、中、小網共用樣式*/
.app-about-me {
  padding-top: 4em;
}

.about-me {
  display: flex;
}

.depiction {
  line-height: 2em;
  letter-spacing: .02em;
}
/*大、中、小網共用樣式結束*/

/*大、中網共用樣式（主要是about-miiko這段）*/
.about-miiko {
  flex-direction: row-reverse;
}

.miiko-img-container {
  display: flex;
  align-items: center;
}

.our-story-container {
  background: url('../assets/about-bng.jpg') no-repeat 50% 30%;
  height: 30em;
  border: 1px solid #FFFFFF;
  border-right: 0px;
  border-left: 0px;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
}

.our-story {
  width: 60%;
}

.our-story p{
   color: hsla( 21, 10%, 78%, 1);
   font-weight: 300;
   font-size: 1.1em;
   letter-spacing: .2em;
   line-height: 1.8em;
}

@media screen and (max-width:576px){
  .about-miiko, .about-mike {
    flex-direction: column;
    border-top: 1px solid #FFFFFF;
  }
  .about-miiko-contect, .about-mike-contect {
    margin: .5em 5%;
  }
  .our-story-container {
    background-position: 30% 60%;
  }
}

@media screen and (min-width:577px) and (max-width:992px){
  .about-miiko {
    flex-direction: column;
    border-top: 1px solid #FFFFFF;
    margin-bottom: 2em;
  }

  .about-mike {
    margin-left: 2em;
    margin-bottom: 1em;
  }

  .about-miiko-contect, .about-mike-contect {
    margin: .5em 5%;
  }

  .mike-img-container {
    width: 50%;
  }
}

@media screen and (min-width:993px){
  .about-me {
    align-items: center;
  }

  .about-miiko {
    padding-left: 17%;
    justify-content: space-between;
  }

  .about-mike {
    padding-right: 17%;
    justify-content: flex-start;
  }

  .about-miiko-contect {
    width: 30%;
  }

  .about-mike-contect {
    width: 60%;
    padding-left: 10%;
  }

  .miiko-img-container {
    width: 60%;
  }

  .mike-img-container {
    width: 30%;
    display: flex;
    align-items: flex-end;
  }
}
</style>
