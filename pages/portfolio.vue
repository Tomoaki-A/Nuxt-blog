<template>
  <div>
    <Header />
    <div class="content">Portfolio</div>
  </div>

  <!-- <Tutorial /> -->
</template>

<script>
import Header from '../components/Header.vue'
export default {
  components: {
    Header,
  },
}
</script>

<style scoped>
.content {
  width: 60%;
  margin: 170px auto 20px;

}
</style>
