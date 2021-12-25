<template>
  <div class="header">
    <div class="header-contents">My Tech Blog</div>
    <div class="flex">
      <NuxtLink class="link" to="/"><div class="flex-item">Home</div></NuxtLink>
      <NuxtLink class="link" to="/blog"><div class="flex-item">Blog</div></NuxtLink>
      <NuxtLink class="link" to="/portfolio"><div class="flex-item">Portfolio</div></NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.header {
  background-color: #2f6db6;
  padding: 20px 80px 5px;
  width: 100%;
  position: fixed;
  top: 0;
}
.header-contents{
  color: #fff;
  font-size: 18px;
  font-weight: bold;
}

.flex{
  margin-top: 10px;
  display: flex;
  font-size: 14px;
  font-weight: bold;
}
.flex-item{
  padding:10px 20px ;
  text-align: center;
}
.flex-item:hover{
  color: #c6e8f4;
}

.link{
  text-decoration: none;
  color: #fff;
}
</style>
