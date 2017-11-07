<template>
  <div id="app">
    <index v-if="homepage" v-on:CheckAboutMe="openAboutme" v-on:goToArticle="checkArticle"></index>
    <about-me v-if="aboutMePage" v-on:clickHome="backHome"></about-me>
    <article-page v-if="articlePage" v-on:clickHome="backHome" v-on:CheckAboutMe="openAboutme"></article-page>
  </div>
</template>

<script>
import index from './pages/index.vue'
import AboutMe from './pages/AboutMe.vue'
import ArticlePage from './pages/ArticlePage.vue'

export default {
  name: 'app',
  components: {
    'index': index,
    'AboutMe': AboutMe,
    'ArticlePage': ArticlePage
  },
  data () {
    return {
      // 換頁機制
      homepage: true,
      aboutMePage: false,
      articlePage: false
    }
  },
  methods: {
    openAboutme: function () {
      this.homepage = false
      this.aboutMePage = true
      this.articlePage = false
    },
    backHome: function () {
      this.homepage = true
      this.aboutMePage = false
      this.articlePage = false
    },
    checkArticle () {
      this.homepage = false
      this.articlePage = true
    }
  }
}
</script>

<style>
html {
  height: 100%;
}

#app, body {
  width: 100vw;
  margin: 0;
}

a {
  text-decoration: none;
  display: inline-block;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

h3, h4 {
  color: #635656;
}

h2 {
  color: #4a5267;
  font-weight: 600;
  letter-spacing: .2em;
}

h3 {
  font-size: 1.3em;
  font-weight: 300;
}

h4 {
  font-size: 1em;
  font-weight: 600;
}

p {
  color: #635656;
  font-weight: 400;
  text-align: justify;
}

input, textarea {
  outline:none;
}

img {
  width: 100%;
}

.underline {
  border-bottom: 2px solid #07dc8e;
}

@media screen and (max-width:992px) {
  .only-big-screen {
    display: none;
  }
}

</style>
