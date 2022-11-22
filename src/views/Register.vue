<template>
  <NavigationVue
    ><div ref="user-form" class="login-container">
      <div class="signIn">Sign in</div>
      <div class="input-user">
        <label for="">Username: </label>
        <input type="text" v-model.lazy="userForm.email" />
      </div>
      <div class="input-user">
        <label for="">Name: </label>
        <input type="text" v-model.lazy="userForm.name" />
      </div>
      <div class="input-user">
        <label>Password: </label>
        <div class="input-password">
          <input v-if="!showPassword" type="password" class="pwd" v-model.lazy="userForm.password" />
          <input v-else type="text" class="pwd" v-model.lazy="userForm.password" />
          <i class="fa-solid fa-eye-low-vision icon-password" @click="showHidePassword"></i>
        </div>
      </div>
      <div class="input-user">
        <label>Confirm password: </label>

        <div class="input-password">
          <input v-if="!showPassword" type="password" class="pwd" v-model.lazy="userForm.c_password" />
          <input v-else type="text" class="pwd" v-model.lazy="userForm.c_password" />
          <i class="fa-solid fa-eye-low-vision icon-password" @click="showHidePassword"></i>
        </div>
      </div>

      <el-button type="success" :loading="this.loading" @click="openNotify" round>Register</el-button>


      <div class="foot-link">Already have account ? <router-link :to="{ name: 'login' }">Sign in</router-link></div>
    </div></NavigationVue
  >
</template>
<script>
import NavigationVue from '@/components/Navigation.vue';
import { REGISTER } from '@/constants/actions';
export default {
  name: 'Register',
  components: { NavigationVue },
  data() {
    return {
      loading:false,
      userForm: {
        email: '',
        name: '',
        c_password: '',
        password: '',
      },
      showPassword: false,
      validate: {
        email: false,
        name: false,
        password: false,
        c_password: false,
      },
    };
  },
  computed: {
    validateForm() {
      // this.validate.email=this.isEmail(this.userForm.email)
      this.userForm.email = this.userForm.email.trim();
      this.userForm.password = this.userForm.password.trim();
      this.userForm.c_password = this.userForm.c_password.trim();
      console.log(this.userForm);
    },
  },

  methods: {
    isEmail(emailAdress) {
      let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (emailAdress.match(regex)) return true;
      else return false;
    },
    isUpper(str) {
      return /[a-z]/.test(str) && /[A-Z]/.test(str);
    },
    hasNumber(password) {
      return /\d/.test(password);
    },
    validatePassword(password) {
      const checklengthPwd = password.length <= 8 ? false : true;
      const checkContainUpperCase = this.isUpper(password);
      const checkContainNumber = this.hasNumber(password);
      console.log(checklengthPwd, checkContainUpperCase, checkContainNumber);
      if (checklengthPwd && checkContainNumber && checkContainUpperCase) {
        return true;
      }
      return false;
    },
    openNotify() {
      this.loading=true
      if (!this.isEmail(this.userForm.email)) {
        this.$notify.error({
          title: 'Error',
          message: 'Email không phù hợp, vui lòng nhập lại',
        });
        return;
      }
      console.log(this.validatePassword(this.userForm.password));
      if (!this.validatePassword(this.userForm.password)) {
        this.$notify({
          title: 'Warning',
          message: 'Mật khẩu yêu cầu độ dài trên 8 kí tự, chữ viết hoa & kí tự đặc biệt',
          type: 'warning',
        });
        return;
      }
      if (this.userForm.c_password !== this.userForm.password) {
        this.$notify({
          title: 'Warning',
          message: 'Password yêu cầu trùng khớp !',
          type: 'warning',
        });
        return;
      }
      this.handleRegister();
      // this.loading=true
    },
    handleRegister() {
      this.validateForm;
      console.log({ ...this.userForm });
      this.$store
        .dispatch(`auth/${REGISTER}`, { ...this.userForm })
        .then(this.$router.push('/login'))
        .catch(error => {
          console.log(error);
        })
        
    },
    showHidePassword() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>
<style scoped lang="scss">
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
  i {
    text-align: left;
  }
  button {
    text-align: center !important;
    margin: 20px;
    width: 7rem;
    color: white;
    height: 2rem;
    border: none;
  }

  .btn-register {
    border-radius: 10px;
    text-align: center !important;
    background-color: rgb(24, 207, 79);
  }
  .regis {
    border-radius: 10px;
    text-align: center !important;
    background-color: rgb(24, 207, 79);
  }
  .foot-link {
    text-align: left;
  }

  .input-password {
    position: relative;
    width: 100%;
  }
  .input-password input {
    width: 100%;
  }

  .input-password .icon-password {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
