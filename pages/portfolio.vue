<template>
  <div>
    <Header />
    <div class="contents">
      <div class="side-nav">
        <SideNav />
      </div>
      <div class="main-contents"></div>
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
};
</script>

<style scoped>
.contents {
  width: 1120px;
  margin: 50px auto 0px;
  display: flex;
  justify-content: space-between;
  border: solid 1px lightgray;
}
.side-nav {
  width: 150px;
  height: 500px;
  border: solid 1px lightgray;
}
.main-contents {
  width: 800px;
  border: solid 1px lightgray;
}
</style>
