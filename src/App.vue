<template>
  <div id="app">
    <index v-if="homepage" v-on:CheckAboutMe="openAboutme" v-on:goToArticle="checkArticle" v-on:chickAboutPeoject="openAboutProject"></index>
    <about-me v-if="aboutMePage" v-on:clickHome="backHome"></about-me>
    <about-project v-if="aboutProject"></about-project>
    <article-page v-if="articlePage" v-on:clickHome="backHome" v-on:CheckAboutMe="openAboutme"></article-page>
  </div>
</template>

<script>
import index from './pages/index.vue'
import AboutMe from './pages/AboutMe.vue'
import ArticlePage from './pages/ArticlePage.vue'
import AboutProject from './pages/AboutProject.vue'

export default {
  name: 'app',
  components: {
    'index': index,
    'AboutMe': AboutMe,
    'AboutProject': AboutProject,
    'ArticlePage': ArticlePage
  },
  data () {
    return {
      // 換頁機制
      homepage: true,
      aboutMePage: false,
      articlePage: false,
      aboutProject: false
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
    },
    openAboutProject () {
      this.aboutProject = true
      this.homepage = false
      this.aboutMePage = false
      this.articlePage = false
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

input, textarea, button {
  outline:none;
  display: block;
}

img {
  width: 100%;
}

@media screen and (max-width: 576px) {
  .only-big-screen {
    display: none;
  }
}

@media screen and (min-width: 577px) and (max-width: 992px) {
  .only-small-screen {
    display: none;
  }
}

@media screen and (min-width: 993px) {
  .only-small-screen {
    display: none;
  }
}

</style>
