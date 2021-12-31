<template>
  <div class="body">
    <Header />
    <div class="contents">
      <div class="side-nav">
        <SideNav />
      </div>
      <div class="main-contents">
        <Blog class="blog" :contents="contents" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "../components/Header.vue";
import SideNav from "../components/sideNav.vue";
import Blog from "../components/blogContent.vue";

export default {
  components: {
    Header,
    SideNav,
    Blog,
  },
  async asyncData() {
    const { data } = await axios.get(
      "https://textnuxtblog.microcms.io/api/v1/posts",
      {
        headers: {
          "X-MICROCMS-API-KEY": "5ebf93063f2a4772a4573bc16136551e3360",
        },
      }
    );

    return data;
  },
};
</script>

<style scoped>
.body {
  background-color: #d1ecf7;
  min-height: 100vh;
}
.contents {
  width: 1120px;
  margin: 50px auto 0px;
  display: flex;
  justify-content: space-between;
}
.side-nav {
  width: 200px;
  height: 500px;
}
.main-contents {
  width: 875px;
}
</style>
