<template>
  <div id="app">
    <main-visual></main-visual>
  </div>
</template>



<script>
import MainVisual from './components/AppMainVisual.vue'

export default {
  name: 'app',
  components: {
    'MainVisual': MainVisual
  }
}
</script>

<style>
#app, body {
  width: 100vw;
  margin: 0;
}
</style>
