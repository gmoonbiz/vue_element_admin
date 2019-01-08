<template>
  <div>
    <el-dialog 
      title="新增用户" 
      width="500px" 
      :visible="true" 
      @close="close"
      :close-on-click-modal="false"
      :close-on-press-escape="true"
    >
      <div style="max-height:400px;overflow:auto;padding-right:20px">
        <el-form :model="form" ref="addForm" :rules="rules">
          <el-row>
            <el-form-item label="姓名" prop="username" :label-width="formLabelWidth">
              <el-input v-model="form.username"></el-input>
            </el-form-item>  
          </el-row>
          <el-row>
            <el-form-item label="性别" :label-width="formLabelWidth">
              <el-radio-group v-model="form.gender">
                <el-radio label="男">先生</el-radio>
                <el-radio label="女">女士</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item label="手机号码" prop="tel" :label-width="formLabelWidth">
              <el-input v-model="form.tel"></el-input>
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item label="入职日期" :label-width="formLabelWidth">
              <el-date-picker 
                type="date" 
                placeholder="选择日期" 
                v-model="form.join_time" 
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd"
                style="width: 100%;">
              </el-date-picker>
            </el-form-item>
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
  import {addUser} from '@/api/user'

  export default {
    props: ['initFormData'],
    data () {
      return {
        form: {
          document_id: 0,
          username: '',
          gender: '男',
          tel: '',
          join_time: ''
        },
        rules: {
          username: [
            { required: true, message: '请输入姓名', trigger: 'blur' }
          ],
          tel: [
            { required: true, message: '请输入手机号', trigger: 'blur' }
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
    },
    methods: {
      submit (formName) {
        var that = this
        this.$refs[formName].validate((valid) => {
          if (valid) {
            addUser(that.form).then(function (res) {
              if (res.code === 0) {
                that.$message.success('保存成功！')
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
