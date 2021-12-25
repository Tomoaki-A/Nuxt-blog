<template>
  <div class="card">
    <NuxtLink class="link" to="/">
      <div class="img">
        <img class="img-item" :src="post.image.url" alt="">
      </div>
      <div class="title">{{ post.titile }}</div>
      <div class="date">{{ post.createdAt}}</div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
    },
  },
}
</script>

<style scoped>
.card {
  width: 300px;
  border-radius: 10px;
  border: solid 1px gray;
}
.link{
  text-decoration: none;

}
.img {
  height: 180px;
  background-color: gray;
  border-radius: 10px 10px 0 0;
}
.img-item{
  width: 100%;
  height: 100%;
  border-radius: 10px 10px 0 0;
}
.title {
  padding: 10px;
  font-weight: bold;
  color: #000;
  border-top: solid 1px gray;
}
.date {
  padding: 10px;
  font-size: 16px;
  color: gray;
  border-radius: 10px;
}
</style>
