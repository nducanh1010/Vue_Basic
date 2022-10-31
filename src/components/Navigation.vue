<template> 
  
  <el-menu 
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    background-color="#8EBD78"
    v-if="!isAuthenticated"
  >
    <a href=""><img src="@/assets/logo@2x.png" class="logo-brand" alt="" /></a>
    
    <div class="flex-grow"/>
    <el-sub-menu index="1"   >
      <template style="font-size:20px" #title > User</template>
      <el-menu-item index="1-1" ><router-link to="/login">Login</router-link></el-menu-item>
    </el-sub-menu>
  </el-menu>
  <el-menu 
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    background-color="#8EBD78"
    v-else
  >
    <a href=""><img src="@/assets/logo@2x.png" class="logo-brand" alt="" /></a>
    <el-menu-item index="1"><router-link :to="{ name: 'homepage-route' }">Home</router-link></el-menu-item>
    <el-menu-item index="2"> <router-link to="/category">Category</router-link></el-menu-item>
    <el-menu-item index="3"><router-link to="/news">News</router-link></el-menu-item>
    <el-menu-item index="4"><router-link to="/about">About</router-link></el-menu-item>
    <el-menu-item index="5"> <router-link to="/contact">Contact</router-link></el-menu-item>
    <el-sub-menu index="6">
      <template #title><router-link to="/homework" 
        style="font-size:20px" > Extend Homework</router-link></template>
      <el-menu-item index="6-1">Text</el-menu-item>
      <el-menu-item index="6-2">Calculate</el-menu-item>
      <el-menu-item index="6-3">Contact</el-menu-item>
    </el-sub-menu>
    <div class="flex-grow"/>
    <el-sub-menu index="7"   >
      <template style="font-size:20px" #title > User</template>
      <el-menu-item index="7-1"> Profile</el-menu-item>
      <el-menu-item index="7-2"  @click="TOGGLE_AUTH"><router-link to="/login">Log out</router-link></el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>
<script>
import Login from "../views/Login.vue"
import { mapMutations, mapGetters } from 'vuex'
export default {
    name: "Navigation",
    data() {
        return {
            activeName: "first",
            isLogged: false
        };
    },
    computed:mapGetters(['isAuthenticated']),
    methods: {
      ...mapMutations(['TOGGLE_AUTH']),
        handleClick(tab, event) {
            console.log(tab, event);
        },
        checklogin(value){
          this.isLogged=value
        }
        
    },
    components: { Login }
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
  margin-left: 12rem;
}
.flex-grow {
  flex-grow: 1;
}
</style>
