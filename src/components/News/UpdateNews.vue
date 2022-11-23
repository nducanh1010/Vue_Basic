<template>
  <el-button type="primary" class="clear-left" @click="handleUpdate()">Update</el-button>
  <el-dialog title="News information" v-model="dialogFormVisible" width="30%">
    <el-form v-model="form">
      <el-form-item label="ID" :label-width="formLabelWidth">
        <span>{{ form.id }}</span>
      </el-form-item>
      <el-form-item label="Title" :label-width="formLabelWidth">
        <el-input v-model="form.title" autocomplete="on"></el-input>
      </el-form-item>
      <el-form-item label="Content" :label-width="formLabelWidth">
        <!-- <el-input v-model="form.content" autocomplete="on"></el-input> -->
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4 }"
          placeholder="Please input"
          v-model="form.content"
        >
        </el-input>
      </el-form-item>

      <input type="file" value="" v-on:change="handleFileChange" />
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" class="mt-3" @click="handleConfirmUpdate()">Update</el-button>

      <el-button class="mt-3" @click="dialogFormVisible = false">Cancel</el-button>
    </span>
  </el-dialog>
</template>
<script>
import newsService from '@/services/news.services';

export default {
  emits: ['refreshListFromUpdate'],
  name: 'UpdateNews',
  props: {
    detailNews: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      formLabelWidth: '120px',
      dialogFormVisible: false,
      imageChoose: null,
      form: {},
    };
  },

  methods: {
    //update detail
    handleUpdate() {
      this.dialogFormVisible = true;
      this.form = this.detailNews;
    },
    //choose image file
    handleFileChange(event) {
      this.imageChoose = event.target.files[0];
    },
    //confirm update again
    handleConfirmUpdate() {
      const formData = new FormData();
      formData.append('category_id', this.form.category_id);
      formData.append('id', this.form.id);
      formData.append('title', this.form.title);
      formData.append('content', this.form.content);
      formData.append('image', this.imageChoose);
      newsService.update(formData).then(res => {
        this.$message({
          type: 'success',
          message: res,
        });
        newsService.getList().then(res => this.$emit('refreshListFromUpdate', res));
        this.dialogFormVisible = false;
      });
    },

    handlePreview(file) {
      this.imageChoose = file;
      this.dialogVisible = true;
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `The limit is 3, you selected ${files.length} files this time, add up to ${
          files.length + fileList.length
        } totally`,
      );
    },
  },
};
</script>
<style></style>
