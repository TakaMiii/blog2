<template>
  <div id="index">
    <app-nav></app-nav>
    <main-visual></main-visual>
    <app-items></app-items>
    <app-footer></app-footer>
  </div>
</template>

<script>
import MainVisual from '../components/AppMainVisual.vue'
import AppNav from '../components/AppNav.vue'
import AppItems from '../components/AppItems.vue'
import AppFooter from '../components/AppFooter.vue'

export default {
  name: 'app',
  props: ['homepage'],
  components: {
    'MainVisual': MainVisual,
    'AppNav': AppNav,
    'AppItems': AppItems,
    'AppFooter': AppFooter
  },
  methods: {
  }
}
</script>