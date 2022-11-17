<template>
  <NavigationVue>
    <div class="greeting">Greeting user {{ title }} !!</div>
    <el-row :gutter="20">
      <el-col :span="6" :offset="8"
        ><div class="grid-content bg-purple">
          <el-form label-position="right" label-width="100px" :model="userProfile" size="mini">
            <el-form-item label="User Id :">
              <span>{{ userProfile.id }}</span>
            </el-form-item>

            <el-form-item label="User Name :">
              <span v-if="!shouldUpdate">{{ userProfile.name }}</span>
              <el-input v-model="userProfile.name" v-else></el-input>
            </el-form-item>
            <el-form-item label="User Email :">
              <span v-if="!shouldUpdate">{{ userProfile.email }}</span>
              <el-input v-else v-model="userProfile.email"></el-input>
            </el-form-item>
          </el-form></div
      ></el-col>
    </el-row>
    <div class="btn_user">
      <el-button plain @click="handleUpdate" v-if="!shouldUpdate" class="btn-update"> Update User </el-button>
      <el-button plain @click="handleSave" v-else class="btn-save"> Save </el-button>
      <el-button plain @click="handleDeleteUser" class="btn-delete"> Delete </el-button>
    </div>
  </NavigationVue>
</template>
<script>
import NavigationVue from '@/components/Navigation.vue';
import userService from '@/services/user.services';
import { LOGOUT } from '@/constants/actions';
// import authService from '@/services/auth.services';
import { isEmail } from '@/utils/validate';

export default {
  created() {
    // console.log(this.$route.params.id);
    userService.detail(this.$route.params.id).then(res => {
      this.userProfile = res;
      this.title = res?.name;
    });
  },
  components: { NavigationVue },
  data() {
    return {
      shouldUpdate: false,
      userProfile: '',
      title: '',
      params: {
        emailUpdate: '',
        nameUpdate: '',
      },
    };
  },
  methods: {
    handleSave() {
      const currentUser = { ...this.userProfile };
      if (!isEmail(currentUser.email)) {
        this.$notify({
          title: 'Warning',
          message: `Something's wrong with your Email ... Please re-enter !!`,
          type: 'warning',
        });
        return;
      } else {
        this.$confirm('This will permanently change the User profile information. Continue?', 'Warning', {
          confirmButtonText: 'OK',
          // cancelButtonText: 'Cancel',
          type: 'warning',
        })
          .then(userService.update(currentUser))
          .then(() => {
            this.$message({
              type: 'success',
              message: 'Update completed',
            });
            userService.detail(this.$route.params.id).then(res => {
              this.userProfile = res; 
              this.title = res?.name;
            });
            this.shouldUpdate = !this.shouldUpdate;
            return;
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: 'Update canceled',
            });
            return;
          });
      }
      // userService.update(this.userProfile).then()
    },
    handleUpdate() {
      this.shouldUpdate = !this.shouldUpdate;
    },
    handleDeleteUser() {
      this.$confirm('This will permanently delete the User. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      })
        .then(userService.delete(this.$route.params.id))
        .then(message => console.log('Message :', message))
        .then(() => {
          this.$message({
            type: 'success',
            message: 'Delete completed',
          });
        })
        .then(
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
            }),
        )
        .catch(() => {
          this.$message({
            type: 'info',
            message: 'Delete canceled',
          });
        });
    },
  },
};
</script>
<style scoped lang="scss">
.greeting {
  text-align: center;
  margin-right: 5rem;
  margin-top: 2rem;
  max-width: 88%;
  font-size: 21px;
  font-weight: 200;
}
.el-row {
  margin-top: 1rem;
}
.uid {
  border: none !important;
  max-width: 50%;
}
.btn_user {
  width: 90%;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  text-align: center !important;
  .btn-update {
    margin-right: 2rem;
    border-color: #409eff;
  }
  .btn-save {
    margin-
    : 2rem;
    border-color: #409eff;
  }
  .btn-update:hover {
    background-color: #409eff;
    color: whitesmoke;
  }
  .btn-save:hover {
    background-color: #409eff;
    color: whitesmoke;
  }
  .btn-delete {
    border-color: #f56c6c;
  }
  .btn-delete:hover {
    background-color: #f56c6c;
    color: whitesmoke;
    border-color: #ffffff;
  }
  // background-color: rgb(67, 166, 245);
}
</style>
