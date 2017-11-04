<template>
  <div id="app">
    <app-nav></app-nav>
    <main-visual></main-visual>
  </div>
</template>



<script>
import MainVisual from './components/AppMainVisual.vue'
import AppNav from './components/AppNav.vue'

export default {
  name: 'app',
  components: {
    'MainVisual': MainVisual,
    'AppNav': AppNav
  }
}
</script>

<style>
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
</style>
