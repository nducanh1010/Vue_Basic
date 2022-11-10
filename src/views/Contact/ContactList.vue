<template>
  <NavigationVue>
    <div class="table_contact">
      <el-table
        :data="tableData"
        style="width: 70%; margin: auto; text-align: center"
        stripe
        @row-click="handleRowClick"
      >
        <!-- <el-table-column prop="id" label="Id" width="50"> </el-table-column> -->
        <el-table-column prop="name" label="Name" width="100"> </el-table-column>
        <el-table-column prop="phone" label="Phone" width="100"> </el-table-column>
        <el-table-column prop="email" label="Email" width="180"> </el-table-column>
        <el-table-column prop="subject" label="Subject"> </el-table-column>
        <el-table-column label="Operations">
          <template v-slot="scope">
            <el-button slot="reference" @click="handledialogForm(scope.row)">Edit</el-button>

            <el-button type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="Contact information" v-model="dialogFormVisible">
        <el-form v-model="form">
          <el-form-item label="Promotion Name" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="on"></el-input>
          </el-form-item>
          <el-form-item label="Phone" :label-width="formLabelWidth">
            <el-input v-model="form.phone" autocomplete="on"></el-input>
          </el-form-item>
          <el-form-item label="Email" :label-width="formLabelWidth">
            <el-input v-model="form.email" autocomplete="on"></el-input>
          </el-form-item>
          <el-form-item label="Subject" :label-width="formLabelWidth">
            <el-input v-model="form.subject" autocomplete="on"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">Cancel</el-button>
          <el-button type="primary" @click="handleConfirmUpdate()">Confirm</el-button>
        </span>
      </el-dialog>
      <div style="display: flex; justify-content: flex-end; padding-right: 200px; padding-top: 30px">
        <el-button type="primary" class="btn-back" round @click="handleBack">Back</el-button>
      </div>
    </div>
  </NavigationVue>
</template>
<script>
import NavigationVue from '@/components/Navigation.vue';
import contactService from '@/services/contact.services';
// import { findIndex } from 'lodash';
export default {
  components: { NavigationVue },
  name: 'ContactList',
  created() {
    contactService.getList().then(res => (this.tableData = res));
  },

  data() {
    return {
      tableData: [{}],
      form: {
        id: '',
        name: '',
        phone: '',
        email: '',
        subject: '',
      },
      formLabelWidth: '120px',
      dialogFormVisible: false,
    };
  },
  methods: {
    handleBack() {
      this.$router.push('/contact');
    },
    
    handleDelete(index, row) {
      this.$confirm('Are you sure ?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      })
        .then(() => {
          this.tableData = this.tableData.filter(item => item.id != row.id);
          contactService.delete(row.id).then(res => {
            this.$message({
              type: 'success',
              message: res,
            });
          });
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: 'Delete canceled',
          });
        });
    },
    // handleRowClick(currentRow) {
    //   this.$router.push(`/contactList/${currentRow.id}`);
    // },
    handleConfirmUpdate() {
      this.$confirm('This information will be updated, are you sure?')
        .then(() => {
          let objIndex = this.tableData.findIndex(item => item.id === this.form.id);
          console.log(objIndex);
          this.tableData[objIndex].id = this.form.id;
          this.tableData[objIndex].name = this.form.name;
          this.tableData[objIndex].phone = this.form.phone;
          this.tableData[objIndex].email = this.form.email;
          this.tableData[objIndex].subject = this.form.subject;
          contactService.update(this.form).then(res =>
            this.$message({
              type: 'success',
              message: res,
            }),
          );
          this.dialogFormVisible = false;
        })

        .catch(() => {
          this.dialogFormVisible = false;
        });
    },
    handledialogForm(row) {
      this.form.id = row.id;
      this.form.email = row.email;
      this.form.name = row.name;
      this.form.phone = row.phone;
      this.form.subject = row.subject;
      this.dialogFormVisible = !this.dialogFormVisible;
    },
  },
};
</script>
<style lang="scss" scoped>
// .tbl-content{
//   width: 100%;
// }
// .el-table{
//   margin: auto;
// }
.table_contact {
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
    .el-col {
      border-radius: 4px;
      text-align: center;
    }
    .bg-purple {
      background: #d3dce6;
    }
    .bg-purple-light {
      background: #e5e9f2;
    }
    .grid-content {
      border-radius: 4px;
      min-height: 36px;
    }
    .row-bg {
      padding: 10px 0;
      background-color: #f9fafc;
    }
  }
}
</style>
