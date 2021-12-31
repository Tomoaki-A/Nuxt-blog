<template>
  <div>
    <div class="content">
      <Card
        v-for="content in contents"
        :key="content.id"
        :content="content"
      ></Card>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  props: {
    contents: {
      type: Object,
    },
  },
  components: {
    Card,
  },
};
</script>

<style scoped>
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px 0px;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
}
</style>
