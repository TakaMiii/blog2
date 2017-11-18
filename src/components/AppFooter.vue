<template>
  <div>
    <div class="footer">
      <div class="contact-me">
        <h3>CONTACT ME</h3>
        <input class="input-style" type="text"  v-model="visitorsMeg.name" placeholder="name">
        <input class="input-style" type="email"  v-model="visitorsMeg.email" placeholder="email address">
        <textarea class="input-msg-style" type="text"  v-model="visitorsMeg.message" placeholder="Your message"></textarea>
        <div class="btn-container">
          <button v-on:click="sending" v-bind:class="{ readybtn : readySent, sendingbtn : sendingNow }" class="send-letter" type="submit">{{ sentMeg }}
            <div v-bind:class="{ sendingstyle : sendingNow, sendicon : sentSuccess }" class="js-sendingstyle">
            </div>
          </button>
        </div>
      </div>
    </div>
    <div class="footer-bottom"><p>© 2017, Taka Miiko & Mike</p></div>
  </div>
</template>

<script>

export default {
  name: 'AppFooter',
  data () {
    return {
      visitorsMeg: {
        name: '',
        email: '',
        message: ''
      },
      sentMeg: 'SENT',
      readySent: true,
      sendingNow: false,
      sentSuccess: false
    }
  },
  methods: {
    sending () {
      this.sentMeg = ''
      this.readySent = false
      this.sendingNow = true

      setTimeout(() => {
        this.sendingNow = false
        this.readySent = true
        this.sentSuccess = true
        setTimeout(() => {
          this.sentMeg = 'SENT'
          this.sentSuccess = false
        }, 800)
      }, 3000)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.footer {
  background: hsla(190, 60%, 96%, 1);
}

.footer-bottom {
  background: #333;
  border-top: 2px solid #FFFFFF;
  height: 2rem;
  font-weight: 200;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 5rem;
}

.footer-bottom p{
  color: hsla(226, 25%, 100%, .5);
  font-weight: 300;
  letter-spacing: .15em;
}

.contact-me {
  display: flex;
  flex-direction: column;
}

.btn-container {
  display: flex;
  justify-content: flex-end;
}

.input-style, .input-msg-style {
  background-color: hsla(190, 60%, 96%, 1);
  border: 0;
  border-bottom: 1px solid #07dc8e;
  margin-top: 1em;
}

.input-style {
  height: 3em;
}

.input-msg-style {
  height: 10em;
}

.send-letter {
  margin-top: 2rem;
  padding: .8em 0;
  width: 50%;
  height: 3.45rem;
  border-radius: 3px;
  color: #333;
  outline: none;
  transition: all .5s ease;
}

.sendingbtn {
  background: #07dc9d;
  height: 3.45rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #07dc9d;
}

.readybtn {
  background: #FFFFFF;
  border: 1px solid #07dc9d;
  display: flex;
  justify-content: center;
}

.sendingstyle {
  width: 30px;
  height: 30px;
  border: 2px solid hsl(190, 0%, 100%);
  border-radius: 50%;
  position: relative;
  animation-name: whirling;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

.sendingstyle:before {
  content: '';
  position: absolute;
  width: 15px;
  height: 10px;
  background: #07dc9d;
  transform: rotate(45deg);
  right: 0px;
}

.sendingstyle:after {
  content: '';
  position: absolute;
  width: 0px;
  height: 0px;
  border: 6px solid;
  border-color: transparent transparent transparent hsl(190, 0%, 100%);
  left: 17px;
  top: -6px;
}

/*讓寄送icon選轉的動畫*/
@keyframes whirling {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/*message寄送成功的動畫*/
.sendicon {
  width: 30px;
  height: 30px;
  border: 1px solid #07dc9d;
  border-radius: 50%;
  position: relative;
}

.sendicon:before {
  content: '';
  position: absolute;
  width: 0px;
  height: 7px;
  border: 2px solid;
  top: 12px;
  left: 9px;
  border-color: transparent transparent transparent #07dc9d;
  transform: rotate(-45deg);
}

.sendicon:after {
  content: '';
  position: absolute;
  width: 14px;
  height: 10px;
  border: 2px solid;
  border-color: transparent transparent #07dc9d transparent;
  top: 4.5px;
  left: 5.5px;
  transform: rotate(-47deg);
}


@media screen and (max-width:992px){
  .contact-me {
    width: 90%;
    padding: 3em 5%;
  }

  .input-style, .input-msg-style {
    font-size: .8em;
  }

  .send-letter {
    margin-top: 2.5rem;
    width: 100%;
  }
}

@media screen and (min-width:993px){
  .footer {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0;
    padding-left: 17%;
  }

  .contact-me {
    width: 28%;
    padding: 3em 0;
  }
}
</style>
