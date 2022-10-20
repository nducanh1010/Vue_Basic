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
    <button class="btn-register">Register</button>
    
    <div class="foot-link"> Already have account ? <router-link :to="{name:'login'}">Sign in</router-link></div>
  </div>

  </template>
  <script>
  export default {
    name: "Register",
  };
  </script>
  <style scoped lang="scss">
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
      
      .btn-register{
        
        border-radius: 10px;
        text-align   : center !important;
        background-color: rgb(24, 207, 79);
      }
      .foot-link{
        text-align: left;
      }
  }</style>
