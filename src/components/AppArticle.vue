<template>
  <div class="app-article-container">
      <div class="blog-article">
        <h2>色碼轉RGB</h2>
        <section class="article-text">
          <p>把色碼轉成RGB功能，之後會嘗試擴充hsl。</p>
          <p>把hex色票（共6碼）分成RR、BB、GG三組，再分別將這三組數字轉成十進位。</p>
          <p>考慮到輸入的色碼不足六碼的情況，外面加寫了一個判斷式，不足六碼直接抓瀏覽器呈現出的顏色色碼，再拆分成成十進位。
          </p>
        </section>
      </div>
  </div>
</template>

<script>

export default {
  name: 'AppArticle',
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  border-left: 5px solid #07dcac;
  padding-left: .5em;
}

.app-article-container {
  border-top: 1px solid hsla(120, 10%, 95%, .5);
}

.blog-article {
  margin-bottom: 5em;
}

.article-text {
  font-size: 18px;
  line-height: 2rem;
}

@media screen and (max-width:576px) {
  .app-article-container {
    padding: 1em 5vw;
  }
}

@media screen and (min-width:577px) {
  .app-article-container {
    padding: 1em 16vw;
  }
}
</style>
