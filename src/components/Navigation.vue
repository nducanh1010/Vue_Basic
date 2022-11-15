<template>
  <el-menu
  
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    background-color="#8EBD78"
    v-if="!checkAuthen"
  >
    <a href=""><img src="@/assets/logo@2x.png" class="logo-brand" alt="" /></a>

    <div class="flex-grow" />
    <el-sub-menu index="1">
      <template style="font-size: 20px" #title> User</template>
      <el-menu-item index="1-1"><router-link to="/login">Login</router-link></el-menu-item>
    </el-sub-menu>
  </el-menu>
  <el-menu
    
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
    <el-menu-item index="4"> <router-link to="/contact">Contact</router-link></el-menu-item>

    <el-menu-item index="5"><router-link to="/about">About</router-link></el-menu-item>
    <!-- <el-sub-menu index="6">
      <template #title><router-link to="/homework" style="font-size: 20px"> Extend Homework</router-link></template>
      <el-menu-item index="6-1">Text</el-menu-item>
      <el-menu-item index="6-2">Calculate</el-menu-item>
      <el-menu-item index="6-3">Contact</el-menu-item>
    </el-sub-menu> -->
    <div class="flex-grow" />
    <el-sub-menu index="7">
      <template style="font-size: 20px" #title> User</template>
      <el-menu-item index="7-1" @click="handleProfile"> Profile</el-menu-item>
      <el-menu-item index="7-2" @click="handleLogout">Log out</el-menu-item>
    </el-sub-menu>
  </el-menu>
  <el-main><slot></slot></el-main>
</template>
<script>
import Login from '../views/Login.vue';
import { LOGOUT } from '@/constants/actions';
import { mapGetters } from 'vuex';
export default {
  name: 'Navigation',
  data() {
    return {
      isAuthen: false,
    };
  },
  computed: {
    ...mapGetters('auth', ['getUserName', 'getUserEmail', 'getUserRole', 'getUserId']),
    checkAuthen() {
      console.log(this.getUserId);
      return this.getUserId !== undefined ? true : false;
    },
  },
  methods: {
    handleLogout() {
      this.$store
        .dispatch(`auth/${LOGOUT}`)
        .then(message => {
          this.$message({
            message,
            showClose: true,
            duration: 10000,
          });

          setTimeout(() => {
            this.$router.push('/login'); // redirect
          });
        })
        .catch(error => {
          this.$message({
            message: error?.response?.message,
            type: 'error',
            showClose: true,
            duration: 10000,
          });
        });
    },
    handleProfile() {
      this.$router.push({
        path: `/userprofile/${this.getUserId}`,
      });
    },
  },
  components: { Login },
};
</script>
<style scoped>
a {
  text-decoration: none;
}
ul,
li {
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
