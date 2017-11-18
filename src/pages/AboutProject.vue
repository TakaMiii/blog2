<template>
  <div id="about-project">
    <app-nav></app-nav>
    <app-about-project></app-about-project>
    <app-footer></app-footer>
  </div>
</template>



<script>
import AppNav from '../components/AppNav.vue'
import MainVisual from '../components/AppMainVisual.vue'
import AppAboutProject from '../components/AppAboutProject.vue'
import AppFooter from '../components/AppFooter.vue'

export default {
  name: 'AboutMe',
  components: {
    'MainVisual': MainVisual,
    'AppNav': AppNav,
    'AppAboutProject': AppAboutProject,
    'AppFooter': AppFooter
  },
  methods: {
  }
}
</script>