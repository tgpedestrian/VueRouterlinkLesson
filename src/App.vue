<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <!-- 制定義名稱 -->
  <router-link to="/VBink">li  我是連接點</router-link>
  <br>
  <router-link to="/footer">footer</router-link>
  <br>
  <router-link to="/redBox">redBox</router-link>
  <br>
  <router-link to="/blueBox">blueBox</router-link>
  <br>
  <router-link to="/props">props</router-link>
  <br>
  <router-link to="/emit">emit</router-link>
  <br>
  <router-link to="/vShow">vShow</router-link>
  <br>
  <router-link to="/routerView">routerView</router-link>
  <br>
  <router-link to="/homeView">homeView</router-link>
  <br>
  <router-link to="/modelVue">modelVue</router-link>

  </header>

  <footer>
  </footer>

  <RouterView />
</template>

<style lang="scss" scoped>

header{
  background-color: antiquewhite;
  height: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

</style>
