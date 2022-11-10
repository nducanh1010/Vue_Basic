<template>
  <NavigationVue>
    <span @click="handlePushDetail">>> Details</span>
    <h2 class="intro">Let us know about <span>yourself</span></h2>
    <div style="text-align: center">Whether you have questions or you would just like to say hello, contact us.</div>
    <el-form
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

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">Submit</el-button>
        <el-button @click="resetForm('ruleForm')">Reset</el-button>
      </el-form-item>
    </el-form>
  </NavigationVue>
</template>

<script>
import contactService from '@/services/contact.services';
import NavigationVue from '@/components/Navigation.vue';
import { isEmail, isPhoneNumber } from '@/utils/validate';
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
        name: [{ required: true, message: 'Please input Activity name', trigger: 'blur' }],
        email: [{ required: true, message: 'Please select Activity zone', trigger: 'change' }],
        phone: [{ required: true, message: 'Please fill in this field', trigger: 'change' }],
        subject: [{ required: true, message: 'Please fill the subject', trigger: 'change' }],
        // resource: [{ required: true, message: 'Please select activity resource', trigger: 'change' }],
        // desc: [{ required: true, message: 'Please input activity form', trigger: 'blur' }],
      },
    };
  },
  methods: {
    handlePushDetail() {
      this.$router.push('/contactList');
    },
    submitForm(formName) {
      if (!isEmail(this.ruleForm.email)) {
        this.$notify.error({
          title: 'Error',
          message: 'Invalid Email, please re-enter !!',
        });
        return;
      }
      console.log(isPhoneNumber(this.ruleForm.phone));
      if (!isPhoneNumber(this.ruleForm.phone)) {
        this.$notify.error({
          title: 'Error',
          message: 'Your phone number must be betwenn 10-11 digits numeric',
        });
        return;
      }

      this.$refs[formName].validate(valid => {
        if (valid) {
          // alert('submit!');

          contactService.create(this.ruleForm).then(res => {
            this.$notify({
              title: 'Success',
              message: res,
              type: 'success',
            }),
            contactService.getList()
              this.$router.push('/contactlist');
          });
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
span:hover {
  color: #377dff;
}
.intro {
  text-align: center;
  color: #377dff;
  margin-top: 6rem;
}

.form-contact {
  width: 30%;
  margin: 2.5rem auto;
}
</style>
