<template>
  <div id="app">
    <app-nav></app-nav>
    <main-visual></main-visual>
    <app-items></app-items>
  </div>
</template>



<script>
import MainVisual from './components/AppMainVisual.vue'
import AppNav from './components/AppNav.vue'
import AppItems from './components/AppItems.vue'

export default {
  name: 'app',
  components: {
    'MainVisual': MainVisual,
    'AppNav': AppNav,
    'AppItems': AppItems
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

img {
  width: 100%;
}
</style>
