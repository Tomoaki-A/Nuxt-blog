<template>
  <div>
    {{ posts }}
  </div>

  <!-- <Tutorial /> -->
</template>

<script>
import axios from "axios"
export default {
  async asyncData() {
    const [posts] = await Promise.all([
      axios.get(
        // your-service-id部分は自分のサービスidに置き換えてください
        'https://textnuxtblog.microcms.io/api/v1/test',
        {
          // your-api-key部分は自分のapi-keyに置き換えてください
          headers: {
            'X-MICROCMS-API-KEY': '5ebf93063f2a4772a4573bc16136551e3360',
          },
        }
      ),
    ])

    return {
      posts: posts.data
    }
   
  },
}

</script>

<style scoped>
.content {
  width: 60%;
  margin: 170px auto 20px;
  height: 1000px;
}
</style>
