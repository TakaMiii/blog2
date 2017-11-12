<template>
  <div class="nav">
    <ul class="list-container">
      <li><a href="#" class="nav-a-style js-nav-style" v-on:click="backHome">HOME</a></li>
      <li><a href="#" class="nav-a-style js-nav-style" v-on:click="toAboutMe">ABOUT ME</a></li>
      <li><a href="#" class="nav-a-style js-nav-style" v-on:click="toAboutProject">ABOUT THIS PORJECT</a></li>
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
  },
  methods: {
    toAboutMe: function () {
      this.$emit('CheckAboutMe')
      this.focusNavStyle()
    },
    toAboutProject: function () {
      this.$emit('AboutProject')
      this.focusNavStyle()
    },
    backHome: function () {
      this.$emit('clickHome')
      this.focusNavStyle()
    },
    focusNavStyle: function () {
      let navItem = document.querySelectorAll('.js-nav-style')
      console.log(navItem)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.nav {
  width: 100vw;
  height: 4em;
  background: hsla(230, 43%, 100%, .95);
  border-bottom: 1px solid hsla(230, 43%, 100%, 1);
  position: fixed;
  display: flex;
  align-items: stretch;
  z-index: 10;
}

.list-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 25rem;
  padding-left: 2rem;
}

.list-container li {
  height: 100%;
  display: flex;
  align-items: center;
}

.list-container a {
  padding-left: .6em;
  padding-right: .6em;
}

.nav-a-style {
  width: 100%;
  height: 66%;
  padding-top: 1.8em;
  color: #595757;
  font-size: .7em;
  font-weight: 100;
  font-family: system-ui, sans-serif;
  text-align: center;
}

.nav-a-style:hover {
  color: #09cfa3;
  border-bottom: 3px solid #07dcac;
}

@media screen and (max-width:576px) {
  .list-container {
    width: 100%;
    padding-left: 0;
  }
}

@media screen and (min-width:577px) and (max-width:992px) {
  .list-container {
    width: 100%;
    padding-left: 0;
    display: flex;
    justify-content: space-around;
  }
  .list-container li {
    width: 30%;
  }
}

</style>
