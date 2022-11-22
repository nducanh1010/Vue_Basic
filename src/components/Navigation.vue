<template>
  <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false" background-color="#8EBD78" v-if="!checkAuthen">
    <a href="/"><img src="@/assets/logo@2x.png" class="logo-brand" alt="" /></a>

    <div class="flex-grow" />
    <el-sub-menu index="1">
      <template style="font-size: 20px" #title> User</template>
      <el-menu-item index="1-1"><router-link to="/login">Login</router-link></el-menu-item>
    </el-sub-menu>
  </el-menu>
  <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false" background-color="#8EBD78" v-else>
    <a href="/"><img src="@/assets/logo@2x.png" class="logo-brand" alt="" /></a>
    <el-menu-item index="1"><router-link :to="{ name: 'homepage-route' }">Home</router-link></el-menu-item>
    <el-sub-menu index="2">
      <template #title> <span class="sub-cat">Category</span> </template>
      <el-menu-item :index="item.index" @click="handleNavigateCategory(item.item.id)" v-for="item in categoryData">
        {{ item.item.name }}</el-menu-item
      >
    </el-sub-menu>
    <el-menu-item index="3"><router-link to="/news">News</router-link></el-menu-item>
    <el-menu-item index="4"> <router-link to="/contact">Contact</router-link></el-menu-item>

    <el-menu-item index="5"><router-link to="/category">Category Manager</router-link></el-menu-item>
    <!-- <el-sub-menu index="6">
      <template #title><router-link to="/homework" style="font-size: 20px"> Extend Homework</router-link></template>
      <el-menu-item index="6-1">Text</el-menu-item>
      <el-menu-item index="6-2">Calculate</el-menu-item>
      <el-menu-item index="6-3">Contact</el-menu-item>
    </el-sub-menu> -->
    <div class="flex-grow" />
    <el-sub-menu index="6">
      <template style="font-size: 20px" #title> User</template>
      <el-menu-item index="6-1" @click="handleProfile"> Profile</el-menu-item>
      <el-menu-item index="6-2" @click="handleLogout">Log out</el-menu-item>
    </el-sub-menu>
  </el-menu>
  <el-main>
    <slot></slot>
    </el-main>
</template>
<script>
import categoryService from '@/services/category.services';
import Login from '../views/Login.vue';
import { LOGOUT } from '@/constants/actions';
import { mapGetters } from 'vuex';
export default {
  name: 'Navigation',
  created() {
    categoryService.getList().then(res => {
      let arr = [];
      res.forEach((item, index) => {
        var nextIndex = index + 1;
        arr = [...arr, { item: item, index: `2-${nextIndex}` }];
      });
      this.categoryData = arr;
    });
  },
  data() {
    return {
      isAuthen: false,
      categoryData: [],
    };
  },
  computed: {
    ...mapGetters('auth', ['getUserName', 'getUserEmail', 'getUserRole', 'getUserId']),
    checkAuthen() {
      return this.getUserId !== undefined ? true : false;
    },
  },
  methods: {
    handleNavigateCategory(id) {
      this.$router.push(`/news/list-news-category/${id}`);
    },
    handleLogout() {
      this.$store
        .dispatch(`auth/${LOGOUT}`)
        .then(message => {
          this.$message({
            message:message,
            showClose: true,
            duration: 3000,
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
            duration: 3000,
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
div {
  text-decoration: none;
  font-size: 20px;
}
a {
  text-decoration: none;
}
ul,
li {
  text-decoration: none;
  font-size: 20px;
}
.sub-cat {
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
