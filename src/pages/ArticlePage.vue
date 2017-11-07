<template>
  <div id="article-page">
    <app-nav v-on:clickHome="turnHomePage" v-on:CheckAboutMe="turnOnAboutme"></app-nav>
    <color-code></color-code>
    <app-article></app-article>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppNav from '../components/AppNav.vue'
import ColorCode from '../components/ColorCodeTranslation.vue'
import AppArticle from '../components/AppArticle.vue'
import AppFooter from '../components/AppFooter.vue'

export default {
  name: 'ArticlePage',
  components: {
    'AppNav': AppNav,
    'ColorCode': ColorCode,
    'AppArticle': AppArticle,
    'AppFooter': AppFooter
  },
  methods: {
    turnOnAboutme () {
      this.$emit('CheckAboutMe')
    },
    turnHomePage: function () {
      this.$emit('clickHome')
    }
  }
}
</script>