<template>
  <div id="about-me">
    <app-nav></app-nav>
    <main-visual></main-visual>
    <app-footer></app-footer>
  </div>
</template>



<script>
import MainVisual from '../components/AppMainVisual.vue'
import AppNav from '../components/AppNav.vue'
import AppFooter from '../components/AppFooter.vue'

export default {
  name: 'AboutMe',
  components: {
    'MainVisual': MainVisual,
    'AppNav': AppNav,
    'AppFooter': AppFooter
  }
}
</script>