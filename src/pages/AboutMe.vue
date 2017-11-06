<template>
  <div id="about-me">
    <app-nav v-on:clickHome="turnHomePage"></app-nav>
    <app-about-me></app-about-me>
    <app-footer></app-footer>
  </div>
</template>



<script>
import AppNav from '../components/AppNav.vue'
import MainVisual from '../components/AppMainVisual.vue'
import AppAboutMe from '../components/AppAboutMe.vue'
import AppFooter from '../components/AppFooter.vue'

export default {
  name: 'AboutMe',
  components: {
    'MainVisual': MainVisual,
    'AppNav': AppNav,
    'AppAboutMe': AppAboutMe,
    'AppFooter': AppFooter
  },
  methods: {
    turnHomePage: function () {
      this.$emit('clickHome')
    }
  }
}
</script>