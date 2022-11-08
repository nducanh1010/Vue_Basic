<template>
  <NavigationVue
    ><el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="120px"
      class="form-contact"
      label-position="top"
    >
      <el-form-item label="NAME" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="EMAIL" prop="email">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item label="PHONE" prop="phone">
        <el-input v-model="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item label=" SUBJECT" prop="subject">
        <el-input v-model="ruleForm.subject"></el-input>
      </el-form-item>

      <el-form-item label="Activity form" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">Create</el-button>
        <el-button @click="resetForm('ruleForm')">Reset</el-button>
      </el-form-item>
    </el-form>
  </NavigationVue>
</template>

<script>
import NavigationVue from '@/components/Navigation.vue';
export default {
  name: 'ContactForm',
  components: { NavigationVue },
  data() {
    return {
      ruleForm: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        
      },
      rules: {
        name: [
          { required: true, message: 'Please input Activity name', trigger: 'blur' },
        ],
        email: [{ required: true, message: 'Please select Activity zone', trigger: 'change' }],
        phone: [{  required: true, message: 'Please fill in this field', trigger: 'change' }],
        subject: [{  required: true, message: 'Please fill the subject', trigger: 'change' }],
        // resource: [{ required: true, message: 'Please select activity resource', trigger: 'change' }],
        desc: [{ required: true, message: 'Please input activity form', trigger: 'blur' }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      console.log(this.ruleForm)
      console.log(this.$refs[formName].email);
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style scoped lang="scss">
.form-contact{
  width: 30%;
  margin: auto;
}
</style>
