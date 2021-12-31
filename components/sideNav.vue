<template>
  <div class="side-nav">
    <ul class="ul">
      <li class="li">
        <NuxtLink class="link" to="/">Home</NuxtLink>
      </li>
      <li class="li">
        <NuxtLink class="link" to="/grossery">Grossery</NuxtLink>
      </li>
      <li class="li">
        <NuxtLink class="link" to="/portfolio">Portfolio</NuxtLink>
      </li>
    </ul>
    <div class="profile">
      <div class="profile__img">
        <img class="img" src="../assets/img/profile.jpeg" alt="" />
      </div>
      <div class="profile__name">Tomo</div>
      <div class="profile__txt">
        都内某所で働くフロントエンドエンジニア<br />
        現在Vue.jsをメインに使用しているが今後の主流はReactだろうな〜と密かに考えている
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.side-nav {
  background: #fff;
  color: #2f6db6;
  border-radius: 10px;
  padding: 10px;
}
.ul {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.li {
  text-align: center;
  padding: 20px 10px;
}
.link:hover {
  color: #f1c266;
}
.link {
  text-decoration: none;
  color: #2f6db6;
  display: block;
  width: 100%;
  font-weight: bold;
  font-size: 18px;
}
.profile {
  margin-top: 40px;
}
.profile__img {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  margin-bottom: 10px;
}
.img {
  width: 100%;
  border-radius: 50%;
}
.profile__name {
  color: #000;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
  text-align: center;
}
.profile__txt {
  color: #000;
  font-size: 14px;
  margin-bottom: 10px;
  line-height: 1.5;
}
</style>
