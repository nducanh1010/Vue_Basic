<template>
  <div class="greeting">Greeting user {{ userProfile.name }} !!</div>
  <el-row :gutter="20">
    <el-col :span="6" :offset="8"
      ><div class="grid-content bg-purple">
        <el-form :label-position="right" label-width="100px" :model="userProfile" size="mini">
          <el-form-item label="User Id">
            <span>{{ userProfile.id }}</span>
          </el-form-item>

          <el-form-item label="User Name">
            <el-input v-model="userProfile.name"></el-input>
          </el-form-item>
          <el-form-item label="User Email">
            <el-input v-model="userProfile.email"></el-input>
          </el-form-item>
        </el-form></div
    ></el-col>
  </el-row>
  <div class="btn_user">
    <el-button plain @click="handleUpdate" class="btn-update"> Update User </el-button>
    <el-button plain @click="handleDelete" class="btn-delete"> Delete </el-button>
  </div>
</template>
<script>
import userService from '@/services/user.services';
export default {
  created() {
    console.log(this.$route.params.id);

    userService.detail(this.$route.params.id).then(res => (this.userProfile = res), console.log(this.userProfile));
  },
  data() {
    return {
      userProfile:
        // name: '',
        // id: this.$route.params.id,
        // email: '',
        '',
    };
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
  .btn-update{
    margin-right: 2rem;
    border-color:#409EFF ;
  }
  .btn-update:hover{
    background-color: #409EFF;
    color: whitesmoke;
  }
  .btn-delete{
    
    border-color: #F56C6C;
  }
  .btn-delete:hover{
    background-color: #F56C6C;
    color: whitesmoke;
    border-color: #FFFFFF;
  }
  // background-color: rgb(67, 166, 245);
}
</style>
