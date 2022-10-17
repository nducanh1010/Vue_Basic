<template>
  <nav class="nav">
    <!-- params:{id:truyen vao` id cua thuoc tinh data} -->
    <router-link :to="{name:'homepage-route'}">Home</router-link> 
    <router-link to="/category">Category</router-link>
    <router-link to="/news">News</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-link to="/homework" class="dropdown">
      <button class="dropbtn">Extend Homework</button>
      <div class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div></router-link
    >
    <!-- <router-link to="/login">User</router-link> -->
  </nav>
</template>
<style scoped>
.nav {
  overflow: hidden;

  background-color: #747474;
  display: flex;
  flex-direction: row;

  justify-content: center;
}
.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 16px;
  border: none;
  outline: none;
  color: white;

  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.nav a:hover,
.dropdown:hover .dropbtn {
  background-color: #159426;
}
.nav a {
  float: left;
  font-size: 16px;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
