<template>
  <NavigationVue>
    <div ref="userForm" class="login-container" v-if="checkAuthen === false">
      <div class="signIn">Sign in</div>
      <div ref="userForm" class="input-user">
        <label for="">Username: </label>
        <input type="text" v-model.lazy="userForm.email" />
      </div>
      <div class="input-user">
        <label>Password: </label>
        <input type="password" v-model.lazy="userForm.password" />
      </div>
      <!-- <button class="btn-register"><router-link :to="{ name: 'register' }">Register</router-link></button> -->
      <el-button type="success" round @click="handleRegister" >Register</el-button>
      <!-- <button class="btn-login" @click="handleLogin">Login</button> -->
      <el-button type="primary" :loading="this.loading" @click="handleLogin" round>Login</el-button>
    </div>
  </NavigationVue>
</template>
<script>
import NavigationVue from '@/components/Navigation.vue';
// import loading from '@/components/Loading.vue'
import { LOGIN } from '@/constants/actions';
import { mapGetters } from 'vuex';
export default {
  name: 'Login',
  data() {
    return {
      loading: false,
      userForm: {
        email: '',
        password: '',
      },
    };
  },
  components: { NavigationVue },
  computed: {
    ...mapGetters('auth', ['getUserId']),
    validForm() {
      this.userForm.email = this.userForm.email.trim();
      this.userForm.password = this.userForm.password.trim();
    },
    checkAuthen() {
      return this.getUserId !== undefined ? true : false;
    },
  },
  methods: {
    // ...mapMutations(['TOGGLE_AUTH']),
    handleRegister(){
      this.$router.push('/register')
    },
    handleLogin() {
      this.loading = true;
      this.validForm;
      this.$store
        .dispatch(`auth/${LOGIN}`, { ...this.userForm })

        .then(() => {
          if (this.checkAuthen) {
            setTimeout(() => {
              this.$router.push('/');
            });
          } else {
            this.$notify.error({
              title: 'Error',
              message: 'User không tồn tại',
            });

            setTimeout(() => {
              this.$router.push('/login');
            });
          }
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
<style scoped lang="scss">
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
.login-container {
  justify-content: center;
  align-items: center;
  max-width: 400px;

  border-radius: 3px;
  padding: 15px;
  margin: 0 auto;

  .signIn {
    margin-top: 15px;
    text-align: center;
    font-weight: bold;
    font-size: 2rem;
  }

  .input-user {
    text-align: left !important;
    border-radius: 100px;
    padding: 5px;
    margin: 5px;
    display: flex;
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
  .btn-login {
    border-radius: 10px;
    text-align: center !important;
    background-color: rgb(67, 166, 245);
  }
  .btn-register {
    a {
      color: white;
    }
    border-radius: 10px;
    text-align: center !important;
    background-color: rgb(24, 207, 79);
  }
}
</style>
