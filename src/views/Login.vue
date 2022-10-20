<template>
   
  <div class="login-container">
    <div class="signIn">Sign in</div>
    <div class="input-user">
      <label for="">Username: </label>
      <input type="text" v-model.lazy="username" />
    </div>
    <div class="input-user">
      <label>Password: </label>
      <input type="text" v-model.lazy="password" />
    </div>
    <button class="btn-register"> <router-link :to="{name:'register'}">Register</router-link></button>
    <button class="btn-login" @click="changeLogin">Login</button>
 
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'Login',
  data() {
    return {
      users: [],
      username: '',
      password: '',
      isLogged:false
    };
  },
  async created() {
    let res = await axios.get('https://6348bcf4a59874146b0fdadc.mockapi.io/user/username');
    let data = res && res.data ? res.data : [];
    if (data && data.length > 0) {
      let reverseData = data.slice(0, 10);
      this.users = reverseData;
      reverseData.map(item => {
        console.log(item.username, '------', item.password);
      });
    } else {
      this.users = [];
    }
  },
  methods:{
    changeLogin(){ 
      this.$emit('change-login',!this.isLogged)
    }
  }
};
</script>
<style scoped lang="scss">
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
    .login-container {
      justify-content: center;
      align-items: center;
        max-width    : 400px;
      
        border-radius: 3px;
        padding      : 15px;
        margin       : 0 auto;
        
        ;

        .signIn{
            margin-top: 15px ;
            text-align: center;
            font-weight: bold;
            font-size: 2rem;
        }

        .input-user {
          text-align: left !important;
          border-radius: 100px;
            padding: 5px;
            margin : 5px;
            display       : flex;
            flex-direction: column;
        }

        button {
          text-align: center !important;
            margin: 20px;
            width: 7rem;
            color: white;
            height: 2rem;
            border: none;
        }
        .btn-login{
          border-radius: 10px;
          text-align   : center !important;
          background-color: rgb(67, 166, 245);
        }
        .btn-register{
          a{color: white;}
          border-radius: 10px;
          text-align   : center !important;
          background-color: rgb(24, 207, 79);
        }
    }</style>
