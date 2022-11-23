<template>

  <el-button @click="this.dialogFormVisible = true" type="primary" round class="btn-add">+Add</el-button>
  <el-dialog title="News information" v-model="dialogFormVisible">
    <el-form v-model="form">
      <el-form-item label="Category Id of" :label-width="formLabelWidth">
        <el-select v-model="form.category_id" placeholder="Please select your category ID" @click="handleFetchCatID">
          <el-option v-for="item in categoryDataID" :key="item.id" :label="item.name" :value="item.id"> </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Title" :label-width="formLabelWidth">
        <!-- <span>{{ form.title }}</span> -->
        <el-input v-model="form.title" autocomplete="on"></el-input>
      </el-form-item>
      <el-form-item label="Content" :label-width="formLabelWidth">
        <el-input v-model="form.content" autocomplete="on"></el-input>
      </el-form-item>
      <!-- <el-form-item :label="form.imageName" :label-width="formLabelWidth"> -->
      <input type="file" v-on:change="handleFileChange" />
     
      <!-- </el-form-item> -->
      <!-- <el-button size="small" type="primary" class="upload" @click="handleClick">Click to upload</el-button> -->
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="handleConfirmCreate()">Create</el-button>

      <el-button @click="dialogFormVisible = false">Cancel</el-button>
    </span>
  </el-dialog>
</template>
<style lang="scss" scoped>

.btn-add {
  // display: flex !important;
  margin: 10px auto;
  display:block;
  
}
.dialog-footer {
  display: flex;
  justify-content: flex-end;
}
.imageFile {
  display: none;
}
</style>
<script>
import newsService from '@/services/news.services';
import categoryService from '@/services/category.services';

export default {
  emits:['refreshList'],
  name: 'newsForm',
  data() {
    return {
      openNewsUpdate:false,
      formLabelWidth: '120px',
      dialogFormVisible: false,
      form: {
        category_id: '',
        title: '',
        content: '',
        image: null,
        imageName: '',
      },

      categoryDataID: [],
    };
  },

  methods: {
    handleClick() {
      console.log(this.$refs.inputFile);
      this.$refs.inputFile.input.click();
    },

    handleFileChange(event) {
      this.form.image = event.target.files[0];
    },

    handleConfirmCreate() {
      const formData = new FormData();
      formData.append('category_id', this.form.category_id);
      formData.append('title', this.form.title);
      formData.append('content', this.form.content);
      formData.append('image', this.form.image);
      newsService.create(formData).then(res => {
        this.$message({
          type: 'success',
          message: res,
        });
        newsService.getList().then(res=>this.$emit('refreshList',res))
        this.dialogFormVisible=false
      });
    },
    handleFetchCatID() {
      categoryService.getList().then(res => (this.categoryDataID = res));
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      this.form.image = file;
      this.dialogVisible = true;
    },
  
    beforeRemove(file, fileList) {
      return this.$confirm(`Cancel the transfer of ${file.name} ?`);
    },
  },
};
</script>
