<template>
  <div class="nav">
    <ul class="list-container">
      <li class="nav-divider"><a href="#" class="nav-a-style">home</a></li>
      <li><a href="#" class="nav-a-style">about me</a></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'AppNav',
  data () {
    return {
      msg: 'nav'
    }
  }
   // mounted: function mounted () {

  // }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.nav {
  width: 100vw;
  height: 3em;
  background: hsla(230, 43%, 100%, .5);
  position: fixed;
  display: flex;
  align-items: stretch;
  z-index: 10;
}

.list-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 15rem;
  padding-left: 2rem;
}

.list-container li {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
}

.nav-a-style {
  width: 100%;
  height: 82%;
  padding-top: 1.8em;
  color: hsl(230, 43%, 87%);
  font-size: .95em;
  font-weight: 100;
  font-family: system-ui, sans-serif;
  text-align: center;
}

.nav-a-style:hover {
  color: #07d4a6;
  border-bottom: 3px solid #07dcac;
}

.nav-divider {
  border-right: 1px solid hsl(230, 43%, 87%);
}

@media screen and (max-width:576px) {
  .list-container {
    width: 100%;
    padding-left: 0;
  }
}
</style>
