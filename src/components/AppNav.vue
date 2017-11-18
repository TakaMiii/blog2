<template>
  <div class="nav">
  <!-- 小網Nav -->
  <button type="button" v-on:click="openNav = !openNav" class="nav-btn only-small-screen">
    <div v-bind:class="{navbtnstyle: !openNav, closebtnstyle: openNav}"></div>
  </button>
   <transition name="fade">
    <ul v-if="openNav" class="list-container">
      <li><router-link to="/" class="nav-a-style js-nav-style">HOME</router-link></li>
      <li><router-link to="/about-me" class="nav-a-style js-nav-style">ABOUT ME</router-link></li>
      <li><router-link to="/about-project" class="nav-a-style js-nav-style">ABOUT THE PROJECT</router-link></li>
    </ul>
  </transition>
  <!-- 小網Nav結束 -->
  <ul class="list-container only-big-screen">
    <li><router-link to="/" class="nav-a-style js-nav-style">HOME</router-link></li>
    <li><router-link to="/about-me" class="nav-a-style js-nav-style">ABOUT ME</router-link></li>
    <li><router-link to="/about-project" class="nav-a-style js-nav-style">ABOUT THE PROJECT</router-link></li>
  </ul>

  </div>
</template>

<script>

export default {
  name: 'AppNav',
  data () {
    return {
      msg: 'nav',
      openNav: false
    }
  },
  methods: {
    toAboutMe: function () {
      this.$emit('CheckAboutMe')
      this.focusNavStyle()
    },
    backHome: function () {
      this.$emit('clickHome')
      this.focusNavStyle()
    },
    toAboutPeoject: function () {
      this.$emit('chickAboutPeoject')
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
  width: 25rem;
  padding-left: 2rem;
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
  position: relative;
}

.nav-a-style:hover {
  color: #09cfa3;
}

.nav-a-style:after {
  content: '';
  position: absolute;
  width: 0%;
  height: 66%;
  right: 50%;
  left: 50%;
  border-bottom: 3px solid #07dcac;
  transition: 0.3s;
}

.nav-a-style:hover:after {
  width: 120%;
  height: 66%;
  right: 0%;
  left: -10%;
}

@media screen and (max-width:576px) {
  .nav {
    justify-content: flex-end;
  }

  .nav-btn {
    width: 5em;
    padding-left: 1em;
    z-index: 20;
  }
  .navbtnstyle{
    position: relative;
    width: 100%;
    height: 2em;
    border: 2px solid hsla(0, 1%, 50%, 1);
    border-right: 0;
    border-left: 0;
    transition: all .8s ease;
  }

  .navbtnstyle:before {
    content: '';
    width: 0%;
    position: absolute;
    border-top: 2px solid hsla(0, 1%, 50%, 1.2);
    top: 48%;
    left: 0;
    transform: rotate(0deg);
    transition:all .8s ease;
  }

  .navbtnstyle:after {
    content: '';
    width: 100%;
    position: absolute;
    border-top: 2px solid hsla(0, 1%, 50%, 1.2);
    top: 48%;
    left: 0;
    transition:all .8s ease;
  }

/*  關閉Nav的按鈕樣式*/
  .closebtnstyle {
    position: relative;
    width: 100%;
    height: 2em;
    border: 2px solid hsla(0, 1%, 50%, 0);
    border-right: 0;
    border-left: 0;
    transition: all .8s ease;
  }

  .closebtnstyle:before {
    content: '';
    width: 110%;
    position: absolute;
    border-top: 2px solid hsla(0, 1%, 50%, 1.2);
    top: 48%;
    left: 0;
    transform: rotate(45deg);
    transition:all .8s ease;
  }

  .closebtnstyle:after {
    content: '';
    width: 110%;
    position: absolute;
    border-top: 2px solid hsla(0, 1%, 50%, 1.2);
    top: 48%;
    left: 0;
    transform: rotate(-45deg);
    transition:all .8s ease;
  }

  .list-container {
    width: 100%;
    position: absolute;
    padding: 4em 0em;
    display: flex;
    flex-direction:column;
    background: hsla(190, 0%, 99%, 1);
    box-shadow: 0px 1px 5px 2px hsla(190, 0%, 15%, .2);
  }

  .list-container li {
    width: 80%;
    margin: 0 10%;
  }

  .nav-a-style {
    height: 100%;
    padding: 1.8em 0;
    font-size: 100%;
  }

/*  小網nav icon動畫*/
  .fade-enter-active, .fade-leave-active {
    transition: all .8s ease;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
    transform: rotate(90deg);
  }

  .only-big-screen {
    display: none;
  }
}

@media screen and (min-width:577px) {
  .list-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 25rem;
    padding-left: 2rem;
  }

  .list-container li {
    height: 100%;
    padding: 0 1em;
    display: flex;
    align-items: center;
  }
}
</style>
