<template>
  <el-button @click="this.dialogFormVisible = true">Open</el-button>
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
      <el-upload
        class="upload-demo"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="form.image"
      >
        <el-button size="small" type="primary" class="upload">Click to upload</el-button>
        <!-- <div slot="tip" class="el-upload__tip">jpg/png files with a size less than 500kb</div> -->
      </el-upload>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="handleConfirmCreate()">Create</el-button>

      <el-button @click="dialogFormVisible = false">Cancel</el-button>
    </span>
  </el-dialog>
</template>
<style lang="scss" scoped>
.upload-demo {
  width: 30%;
  .upload {
    margin-left: 10rem;
  }
  .dialog-footer {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
<script>
import newsService from '@/services/news.services';
import categoryService from '@/services/category.services';

export default {
  name: 'newsForm',
  data() {
    return {
      formLabelWidth: '120px',
      dialogFormVisible: false,
      form: 
        {
          category_id: '',
          title: '',
          content: '',
          image: '',
        },
      
      categoryDataID: [],
      fileList: [
        {
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
        {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
      ],
    };
  },
  methods: {
    handleConfirmCreate() {
      newsService.create(this.form).then(res => {
        this.$message({
          type: 'success',
          message: res,
        });
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
    handleExceed(files, fileList) {
      this.$message.warning(
        `The limit is 3, you selected ${files.length} files this time, add up to ${
          files.length + fileList.length
        } totally`,
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`Cancel the transfer of ${file.name} ?`);
    },
  },
};
</script>
