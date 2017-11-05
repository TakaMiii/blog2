<template>
  <div id="app">
    <app-nav></app-nav>
    <main-visual></main-visual>
    <app-items></app-items>
    <app-footer></app-footer>
  </div>
</template>



<script>
import MainVisual from './components/AppMainVisual.vue'
import AppNav from './components/AppNav.vue'
import AppItems from './components/AppItems.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'app',
  components: {
    'MainVisual': MainVisual,
    'AppNav': AppNav,
    'AppItems': AppItems,
    'AppFooter': AppFooter
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

img {
  width: 100%;
}

@media screen and (max-width:992px) {
  .only-big-screen {
    display: none;
  }
}

</style>
