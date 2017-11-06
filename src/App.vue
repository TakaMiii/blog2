<template>
  <div id="app">
   <!--  <index></index> -->
    <about-me></about-me>
  </div>
</template>



<script>
import index from './pages/index.vue'
import AboutMe from './pages/AboutMe.vue'

export default {
  name: 'app',
  components: {
    'index': index,
    'AboutMe': AboutMe
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

h3, h4 {
  color: #635656;
}

h3 {
  font-size: 1.3em;
  font-weight: 300;
}

h4 {
  font-size: 1em;
  font-weight: 600;
}

p {
  color: #635656;
  font-weight: 400;
  text-align: justify;
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
