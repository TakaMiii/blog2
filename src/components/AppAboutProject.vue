<template>
  <div class="app-about-project">
    <div class="progress-bar">
      <button class="progress-bar-item">START</button>
      <button class="progress-bar-item">DO IT</button>
      <button class="progress-bar-item">REVISE</button>
    </div>
    <article class="about-project">
      <h3>ABOUT THE PROJECT</h3>
      <section>
        <h4 class="about-project-h4">01. Start</h4>
        <p>When I start a project, the more important thing is decide a clear direction of this project. Even though it is always   changed with so many reasons.</p>
        <p>Just like this blog, my original intention is get a junior engineer jobs by it.</p>
        <p>So, I make a PBI to decide my work items, and all the items should be around my goal.</p>
      </section>

      <section>
        <h4 class="pbi-h4">My goal and PBI</h4 class="pbi-h4">
        <div class="goal-container">
          <div class="job">
            <p class="goal-title">Display some frontend developer's skills</p>
            <ol>
              <li>Start to use vue.js and webpack.</li>
              <li>Get more experiences of API.</li>
              <li>Learn the good coding habits.</li>
            </ol>
          </div>
          <div class="learn">
            <p class="goal-title">Show the job I'm looking abot that</p>
            <ol>
              <li>Put the mesage of the job hunt.</li>
            </ol>
          </div>
        </div>
      </section>

      <section class="pbi-container">
        <div>
          <p class="pbi-title">My PBI</p>
          <ol>
            <li>Make a flowchart of website.</li>
            <li>Design web pages.</li>
            <li>Install webpack and Vue.js.</li>
            <li>Code HTML, CSS on the components of Vue.js.</li>
            <li>Code the JavaScript for the main functions.</li>
            <li>Ask my teacher who is backend engineer the API document.</li>
            <li>Testing</li>
            <li>Go live.</li>
            <li>Do more CSS and functions to improve the UI, UX.</li>
          </ol>
        </div>
      </section>
      <section>
        <h4 class="about-project-h4">02. Do it</h4>
      </section>
    </article>
  </div>
</template>

<script>

export default {
  name: 'AppAboutProject',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  margin: 3em 0;
}

.about-project-h4 {
  font-size: 1.5em;
  color: #09cfa3;
  font-weight: 300;
}

.app-about-project {
  padding:10%;
  padding-top: 5em;
  background: hsla(190, 0%, 99%, .8);
}

.about-project {
  background: hsla(190, 0%, 100%, 1);
  padding: 3.5em 8em;
  margin: 0px 5em;
  margin-top: 3em;
  border: 1px solid hsla(190, 0%, 98%, 1);
  line-height: 2em;
}

ul{
  list-style-type: disc;
}

ol {
  list-style-type: decimal;
  padding-left: 1.3em;
}

ol>li{
  color: #635656;
  text-align: justify;
  padding-left: 1em;
  font-weight: 300;
}

.progress-bar {
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 13em;
  right: 6em;
  top: .3em;
  z-index: 11;
}

.progress-bar-item {
  width: 4.5em;
  height: 4.5em;
  background: #ffffff;
  border: 1px solid #07dc75;
  color: #09cfa3;
  border-radius: 50%;
  z-index: 11;
}

.goal-container {
  display: flex;
  justify-content: space-between;
}

.pbi-container {
  display: flex;
  justify-content: center;
  padding: 1.5em 0;
  text-align: center;
  border: 1px solid hsla(190, 70%, 85%, 1);
  border-radius: 1.5em;
}

.pbi-h4 {
  font-weight: 300;
}

.goal-title, .pbi-title {
  font-size: 1.2em;
  font-family:  'Proxima Nova Soft','Helvetica Neue',sans-serif;
  line-height: 2rem;
  color: hsla(190, 0%, 31%, 1);
}

.goal-title {
  height: 3.2em;
}

.job, .learn {
  border: 0px solid;
  padding-bottom: 3em;
  width: 45%;
}

.job {
  border-right: 1px solid hsla(190, 80%, 90%, 1);
  padding-right: 2em;
  position: relative;
}

.job:before {
  content: '';
  width: 20px;
  height: 20px;
  transform: rotate(45deg);
  position: absolute;
  right: -.65em;
  bottom: -.4em;
  border: 1px solid hsla(190, 70%, 85%, 1);
  border-top: 0;
  border-left: 0;
}

.job:after {
  content: '';
  width: 20px;
  height: 20px;
  transform: rotate(45deg);
  position: absolute;
  right: -.65em;
  bottom: -1em;
  border: 1px solid hsla(190, 70%, 85%, 1);
  border-top: 0;
  border-left: 0;
}

@media screen and (max-width:576px){

}

@media screen and (min-width:577px) and (max-width:992px){

}

@media screen and (min-width:993px){


}
</style>
