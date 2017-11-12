<template>
  <div class="app-about-me">
    <div>
      <div class="about-me about-miiko">
        <div class="miiko-img-container"></div>
        <div class="about-miiko-contect">
          <h3>ABOUT MIIKO</h3>
          <div class="depiction">
            <p>Hi, I am Taka Miiko. I was a marcom, copy writer of an app.</p>
            <p><span class="underline"> But I really hope I can be a good developer of website,</span> so I star to look for junior engineer jobs.</p>
            <p>My  work-related skills include: <span class="bold">RWD, jQuery, basic JavaScript,  photoshop.</span></p>
          </div>
        </div>
      </div>
      <!-- <div class="about-me about-mike">
        <div class="mike-img-container">
          <img src="../assets/mike.jpg">
        </div>
        <div class="about-mike-contect">
           <h3>ABOUT MIKE</h3>
          <div class="depiction">
            <h4>Mike，php工程師6年，交大99級</h4>
            <p>Mike是工作很久的php工程師，也是教Miiko coding的人。他也快換工作了，不過他對工作自有一份期許和標準。</p>
          </div>
        </div>
      </div> -->
    </div>

    <div class="our-story-container">
      <div class="our-story">
        <img class="adornment" src="../assets/decorative.png">
          <div class="about-me-2">
            <h3>MORE MIIKO</h3>
            <p>I got my first job in 2014, before that I had studied Art history in the school. </p>
            <p>When I'm not working, I always watch old movies, coding my personal project (like this blog).
            <p>Although I make the visual display for my personal project, be a visual designer is not my objective.</p>
          </div>
        <img class="under-adornment" src="../assets/decorative.png">
        <!-- <p>
          Mike和Miiko是2014年在時間軸認識的，可能都有一點工作狂傾向，每天都在聊專案、軟體開發。
        </p>
        <p>
          MiiKo畢業於藝術系，兩人一起做東西時，會包辦規劃、視覺、切版；技術方向或後端架構則由Mike指導、開發。
        </p> -->
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
}
/*大、中、小網共用樣式結束*/

/*大、中網共用樣式（主要是about-miiko這段）*/
.about-miiko {
  flex-direction: row-reverse;
}

.miiko-img-container {
  background: url('../assets/bette.png') no-repeat;
  background-size: auto 100%;
  background-position: 20% 50%;
}

.our-story-container {
  background: url('../assets/about-bng.jpg') no-repeat 50% 30%;
  height: 35em;
  border: 1px solid #FFFFFF;
  border-right: 0px;
  border-left: 0px;
  background-attachment: fixed;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
}

.our-story {
  width: 43%;
  padding: 3em 8% 3em 15%;
  background: hsla(20, 30%, 10%, 0.3);
}

.about-me-2 {
  padding: 1.1em 0;
}

.our-story h3, .our-story p{
  color: hsla( 21, 10%, 80%, 1);
}

.our-story h3 {
  text-align: center;
}

.our-story p{
   font-weight: 300;
   font-size: 1em;
   line-height: 1.8em;
}
/*分隔線樣式*/
.adornment, .under-adornment {
  opacity: 0.7;
  width: 100%;
  text-align: center;
}
.under-adornment {
  transform: rotate(180deg);
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
    height: 25em;
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
    padding-bottom: 2.5em;
  }

  .about-mike-contect {
    width: 60%;
    padding-left: 10%;
  }

  .miiko-img-container {
    width: 60%;
    height: 100%;
  }

  .mike-img-container {
    width: 30%;
    display: flex;
    align-items: flex-end;
  }
}
</style>
