<template>
  <div class="body">
    <Header />
    <div class="title">
      {{ title }}
    </div>
    <div class="sub-title">
      {{ updatedAt }}
    </div>
    <div class="content">
      {{ body }}
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://textnuxtblog.microcms.io/api/v1/posts/${params.slug}`,
      {
        headers: {
          "X-MICROCMS-API-KEY": "5ebf93063f2a4772a4573bc16136551e3360",
        },
      }
    );
    console.log(data);
    return data;
  },
};
</script>

<style scoped>
.body {
  background-color: #d1ecf7;
  min-height: 100vh;
  padding-bottom: 50px;
}
.title {
  margin:100px 0  20px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
}
.sub-title {
  text-align: center;
  color: gray;
  margin-bottom: 40px;
}
.content {
  background-color: #fff;
  border-radius: 10px;
  width: 750px;
  min-height: 500px;
  margin: 0 auto 30px;
  padding: 30px;
}
</style>
