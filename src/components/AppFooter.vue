<template>
  <div>
    <div class="footer">
      <div class="contact-me">
        <h3>CONTACT ME</h3>
        <input class="input-style" type="text"  v-model="visitorsMeg.name" placeholder="name">
        <input class="input-style" type="email"  v-model="visitorsMeg.email" placeholder="email address">
        <textarea class="input-msg-style" type="text"  v-model="visitorsMeg.message" placeholder="Your message"></textarea>
        <div class="btn-container"><button class="send-letter" type="submit">SENT</button></div>
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
      }
    }
  }
   // mounted: function mounted () {

  // }
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
  outline:none;
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
  background: #FFFFFF;
  border: 1px solid #07dc9d;
  border-radius: 3px;
  color: #333;
  outline: none;
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
    padding: 1.5em 0;
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
