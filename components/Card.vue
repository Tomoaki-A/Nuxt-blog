<template>
  <div class="card">
    <NuxtLink class="link" :to="`/${content.id}`">
      <div class="flex">
        <div class="img">
          <img class="img-item" :src="content.image.url" alt="" />
        </div>
        <div class="txt">
          <div class="title">{{ content.title }}</div>
          <div class="date">{{ content.createdAt }}</div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.card {
}
.link {
  text-decoration: none;
}
.img {
  height: 100px;
  width: 100px;
  border: solid 1px lightgray;
  border-radius: 10px;
}
.img-item {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
.txt{
  width: 300px;
}
.title {
  margin-top: 20px;
  padding: 10px;
  font-weight: bold;
  color: #000;
}
.date {
  padding: 10px;
  font-size: 12px;
  color: gray;
}
.flex{
  display: flex;
  gap: 10px;
}
</style>
