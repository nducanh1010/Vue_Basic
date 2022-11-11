<template>
  <NavigationVue
    ><div class="table_cart">
      <el-table
        :data="tableData"
        style="width: 70%; margin: auto; text-align: center"
        stripe
        @row-click="handleRowClick"
      >
        <!-- <el-table-column prop="id" label="Id" width="50"> </el-table-column> -->
        <el-table-column prop="id" label="ID" width="50"> </el-table-column>
        <el-table-column prop="name" label="Name" width="100"> </el-table-column>
        <el-table-column prop="created_at" label="Created"> </el-table-column>
        <el-table-column prop="updated_at" label="Updated"> </el-table-column>
        <el-table-column label="Operations">
          <template v-slot="scope">
            <el-button slot="reference" type="primary" @click="handledialogForm(scope.row)">Edit</el-button>

            <el-button type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="Category information" v-model="dialogFormVisible">
        <el-form v-model="form">
          <el-form-item label="ID" :label-width="formLabelWidth">
            <span>{{ form.id }}</span>
            <!-- <el-input v-model="form.id" autocomplete="on"></el-input> -->
          </el-form-item>
          <el-form-item label="Name" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="on"></el-input>
          </el-form-item>
          <el-form-item label="Created at" :label-width="formLabelWidth">
            <span>{{ form.created_at }}</span>
            <!-- <el-input v-model="form.created_at" autocomplete="on"></el-input> -->
          </el-form-item>
          <el-form-item label="Updated at" :label-width="formLabelWidth">
            <span>{{ form.updated_at }}</span>
            <!-- <el-input v-model="form.updated_at" autocomplete="on"></el-input> -->
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">Cancel</el-button>
          <el-button type="primary" @click="handleConfirmUpdate()">Confirm</el-button>
        </span>
      </el-dialog>
      <el-dialog title="CREATE NEW CAT" v-model="dialogFormCreate">
        <el-form v-model="form">
          <el-form-item label="Name" label-width="60px">
            <el-input v-model="params.name" autocomplete="on"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogFormCreate = false">Cancel</el-button>
          <el-button type="primary" @click="handleConfirmCreate">Confirm</el-button>
        </span>
      </el-dialog>
      <div style="display: flex; justify-content: flex-end; padding-right: 200px; padding-top: 30px">
        <el-button type="primary" class="btn-back" round @click="handleCreate">Create</el-button>
      </div>
    </div>
  </NavigationVue>
</template>
<style scoped lang="scss">
.category-container {
  width: 70%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
}
</style>
<script>
import categoryService from '@/services/category.services';
import NavigationVue from '@/components/Navigation.vue';

// import contactService from '@/services/contact.services';
export default {
  components: { NavigationVue },
  name: 'CategoryList',
  created() {
    categoryService.getList().then(res => (this.tableData = res));
  },
  data() {
    return {
      tableData: [{}],
      form: {
        id: '',
        name: '',
        created_at: '',
        updated_at: '',
      },
      params: {
        name: '',
      },
      formLabelWidth: '120px',
      dialogFormVisible: false,
      dialogFormCreate: false,
    };
  },
  methods: {
    handleCreate() {
      this.dialogFormCreate = true;
    },
    handleConfirmCreate() {
      categoryService.create(this.params).then(res => {
        this.$message({
          type: 'success',
          message: res,
        }),
          categoryService.getList().then(res => (this.tableData = res));
      });
      this.dialogFormCreate = false;
    },
    handleDelete(index, row) {
      this.$confirm('Are you sure ?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      })
        .then(() => {
          this.tableData = this.tableData.filter(item => item.id != row.id);
          categoryService.delete(row.id).then(res => {
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
          this.tableData[objIndex].created_at = this.form.created_at;
          this.tableData[objIndex].updated_at = this.form.updated_at;
          categoryService.update(this.form).then(res =>
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
      this.form.created_at = row.created_at;
      this.form.name = row.name;
      this.form.updated_at = row.updated_at;
      this.dialogFormVisible = !this.dialogFormVisible;
    },
  },
  //   created() {
  //     contactService.getList();
  //   },
};
</script>
