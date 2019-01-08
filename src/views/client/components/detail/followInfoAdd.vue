<template>
  <div>
    <el-dialog 
      title="写跟进" 
      width="400px" 
      :visible="true" 
      @close="close"
      append-to-body
      :close-on-click-modal="false"
      :close-on-press-escape="true"
    >
      <div style="max-height:400px;overflow:auto;">
        <el-form :model="form" :rules="rules" ref="addForm">
          <el-row>
            <el-col :span="24">
              <el-form-item label="跟进内容" prop="content" :label-width="formLabelWidth">
                <el-input
                  type="textarea"
                  :rows="5"
                  placeholder="请输入内容"
                  v-model="form.content">
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div slot="footer">
        <el-button @click="close">取 消</el-button>
        <el-button type="primary" @click="submit('addForm')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import {addClientFollow} from '@/api/client'
  import notice from '@/utils/notice'

  export default {
    props: ['initFormData'],
    data () {
      return {
        form: {
          document_id: 0,
          client_id: 0,
          content: ''
        },
        rules: {
          content: [
            { required: true, message: '请输入跟进内容', trigger: 'blur' }
          ]
        },
        formLabelWidth: '80px'
      }
    },
    created: function () {
      var initFormData = this.initFormData
      for (var i in this.form) {
        if (initFormData[i]) {
          this.form[i] = initFormData[i]
        }
      }
      console.log(this.form.client_id)
    },
    methods: {
      submit (formName) {
        var that = this
        this.$refs[formName].validate((valid) => {
          if (valid) {
            addClientFollow(that.form).then(function (res) {
              if (res.code === 0) {
                notice.success('保存成功！')
                if (that.form.document_id > 0) {
                  that.$emit('editSuccess')
                } else {
                  that.$emit('addSuccess')
                }
              }
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      close () {
        this.$emit('close')
      }
    }
  }
</script>
<style scoped lang="scss">
.form_sub_item {
  text-align:right;
  padding-right:10px
}
</style>
