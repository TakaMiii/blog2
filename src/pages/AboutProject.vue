<template>
  <div id="about-project">
    <app-nav v-on:clickHome="turnHomePage" v-on:CheckAboutMe="turnOnAboutme"></app-nav>
    <app-about-project></app-about-project>
    <app-footer></app-footer>
  </div>
</template>



<script>
import AppNav from '../components/AppNav.vue'
import AppAboutProject from '../components/AppAboutProject.vue'
import AppFooter from '../components/AppFooter.vue'

export default {
  name: 'AboutProduct',
  components: {
    'AppNav': AppNav,
    'AppAboutProject': AppAboutProject,
    'AppFooter': AppFooter
  },
  methods: {
    turnHomePage: function () {
      this.$emit('clickHome')
    },
    turnOnAboutme () {
      this.$emit('CheckAboutMe')
      console.log('傳出去aboutMe')
    }
  }
}
</script>