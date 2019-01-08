<template>
  <div>
    <el-dialog 
      title="写带看" 
      width="400px" 
      :visible="true" 
      @close="close"
      append-to-body
      :close-on-click-modal="false"
      :close-on-press-escape="true"
    >
      <div style="max-height:400px;overflow:auto;">
        <el-form :model="form" :rules="rules" ref="addForm">
            <el-form-item label="带看时间" prop="guiding_date" :label-width="formLabelWidth">
              <el-date-picker
                v-model="form.guiding_date"
                type="datetime"
                :editable="false"
                format="yyyy-MM-dd HH:mm"
                value-format="yyyy-MM-dd HH:mm"
                :default-value="form.guiding_date"
                placeholder="选择日期时间">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="选择房源" prop="house_id" :label-width="formLabelWidth">
              <el-select
                v-model="form.house_id"
                filterable
                remote
                placeholder="请输入关键词"
                :remote-method="searchHouse"
                :loading="houseLoading">
                <el-option
                  v-for="item in searchedHouseList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="带看备注" prop="content" :label-width="formLabelWidth">
              <el-input
                type="textarea"
                :rows="5"
                placeholder="请输入内容"
                v-model="form.content">
              </el-input>
            </el-form-item>
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
  import {addClientVisit} from '@/api/client'
  import {queryHouseList} from '@/api/house'
  import notice from '@/utils/notice'

  export default {
    props: ['initFormData'],
    data () {
      return {
        form: {
          document_id: 0,
          client_id: 0,
          house_id: '',
          guiding_date: '',
          content: ''
        },
        rules: {
          content: [
            { required: true, message: '请输入带看备注', trigger: 'blur' }
          ],
          house_id: [
            { required: true, message: '请选择房源', trigger: 'blur' }
          ],
          guiding_date: [
            { required: true, message: '请输入带看时间', trigger: 'blur' }
          ]
        },
        houseLoading: false,
        searchedHouseList: [],
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
            addClientVisit(that.form).then(function (res) {
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
      searchHouse (query) {
        var that = this
        if (query !== '') {
          that.houseLoading = true
          queryHouseList({query: query}).then((res) => {
            console.log(res)
            that.houseLoading = false
            that.searchedHouseList = res.data
          })
        } else {
          that.searchedHouseList = []
        }
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
