<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
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

h2 {
  color: #4a5267;
  font-weight: 600;
  letter-spacing: .2em;
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

input, textarea, button {
  outline:none;
  display: block;
}

img {
  width: 100%;
}

@media screen and (max-width: 576px) {
  .only-big-screen {
    display: none;
  }
}

@media screen and (min-width: 577px) and (max-width: 992px) {
  .only-small-screen {
    display: none;
  }
}

@media screen and (min-width: 993px) {
  .only-small-screen {
    display: none;
  }
}

</style>
