<template>
  <div id="article-page">
    <app-nav></app-nav>
    <!-- <color-code></color-code> -->
    <hover-effect></hover-effect>
    <app-article></app-article>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppNav from '../components/AppNav.vue'
import ColorCode from '../components/ColorCodeTranslation.vue'
import HoverEffect from '../components/HoverTransitionEffect.vue'
import AppArticle from '../components/AppArticle.vue'
import AppFooter from '../components/AppFooter.vue'

export default {
  name: 'ArticlePage',
  components: {
    'AppNav': AppNav,
    'ColorCode': ColorCode,
    'HoverEffect': HoverEffect,
    'AppArticle': AppArticle,
    'AppFooter': AppFooter
  },
  methods: {
  }
}
</script>