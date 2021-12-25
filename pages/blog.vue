<template>
  <div>
    <Header />
    <div class="content">
      <!-- <div class="blog-contents">
        <Card v-for="art in article" :key="art.id" :art="art"></Card>
      </div> -->
      <div class="blog-contents">
        <Card v-for="post in posts" :key="post.id" :post="post"></Card>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
  components: {
    Header,
  },
  data() {
    return {}
  },
  computed: {
    // article() {
    //   return this.$store.state.article
    // },
  },
async asyncData({ app }) {
    const [posts] = await Promise.all([
      app.$axios.get('https://textnuxtblog.microcms.io/api/v1/posts', {
        headers: {
          'X-MICROCMS-API-KEY': '5ebf93063f2a4772a4573bc16136551e3360',
        },
      }),
    ])
    return {
      posts: posts.data.contents
    }
  },
}
</script>

<style scoped>
.content {
  width: 68%;
  margin: 170px auto 20px;
}
.blog-contents {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: 45px 30px;
}
</style>
