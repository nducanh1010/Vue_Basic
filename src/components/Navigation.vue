<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    background-color="#8EBD78"
    font-size="--el-font-size-large"
  >
    <a href=""><img src="@/assets/logo@2x.png" class="logo-brand" alt="" /></a>
    <el-menu-item index="1"><router-link :to="{ name: 'homepage-route' }">Home</router-link></el-menu-item>
    <el-menu-item index="2"> <router-link to="/category">Category</router-link></el-menu-item>
    <el-menu-item index="3"><router-link to="/news">News</router-link></el-menu-item>
    <el-menu-item index="4"><router-link to="/about">About</router-link></el-menu-item>
    <el-menu-item index="5"> <router-link to="/contact">Contact</router-link></el-menu-item>
    <el-sub-menu index="6">
      <template #title><router-link to="/homework" 
        > Extend Homework</router-link></template>
      <el-menu-item index="6-1">Text</el-menu-item>
      <el-menu-item index="6-2">Calculate</el-menu-item>
      <el-menu-item index="6-3">Contact</el-menu-item>
    </el-sub-menu>
    <div class="flex-grow" />

    <el-sub-menu index="7">
      <template #title> User</template>
      <el-menu-item index="7-1"> Profile</el-menu-item>
      <el-menu-item index="7-2">Log out</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>
<script>
export default {
  name: 'Navigation',
  data() {
    return {
      activeName: 'first',
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
<style scoped>
a{text-decoration: none;}
ul,li{
  text-decoration: none;
  font-size: 20px;
}
.logo-brand {
  /* display: inline-block; */
  /* padding-top: 0.3125rem; */
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
  width: 9.375rem;
}
.flex-grow {
  flex-grow: 1;
}
</style>
