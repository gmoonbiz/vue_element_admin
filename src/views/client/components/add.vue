<template>
  <div>
    <el-dialog 
      title="新增客户" 
      width="800px" 
      :visible="true" 
      @close="close"
      :close-on-click-modal="false"
      :close-on-press-escape="true"
    >
      <div style="max-height:400px;overflow:auto;padding-right:20px">
        <el-form :model="form" :rules="rules" ref="addForm">
          <el-row>
            <el-col :span="12">
              <el-col :span="14">
                <el-form-item label="客户姓名" prop="customer_name" :label-width="formLabelWidth">
                  <el-input v-model="form.customer_name"></el-input>
                </el-form-item>  
              </el-col>
              <el-col :span="1">&nbsp;</el-col>
              <el-col :span="9">
                <el-form-item prop="gender">
                  <el-radio-group v-model="form.gender">
                    <el-radio label="男">先生</el-radio>
                    <el-radio label="女">女士</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
            </el-col>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="11">
              <el-form-item label="手机号码" prop="common_telephone" :label-width="formLabelWidth">
                <el-input v-model="form.common_telephone"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="需求区域" prop="prefer_region" :label-width="formLabelWidth">
                <el-input v-model="form.prefer_region"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="11">
              <el-form-item label="需求面积" prop="area_min" :label-width="formLabelWidth">
                <el-col :span="11">
                  <el-input v-model="form.area_min"><template slot="suffix">平米</template></el-input>
                </el-col>
                <el-col :span="2" style="text-align:center">-</el-col>
                <el-col :span="11">
                  <el-input v-model="form.area_max"><template slot="suffix">平米</template></el-input>
                </el-col>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="需求总价" prop="pay_min" :label-width="formLabelWidth">
                <el-col :span="11">
                  <el-input v-model="form.pay_min"><template slot="suffix">万</template></el-input>
                </el-col>
                <el-col :span="2" style="text-align:center">-</el-col>
                <el-col :span="11">
                  <el-input v-model="form.pay_max"><template slot="suffix">万</template></el-input>
                </el-col>
              </el-form-item>
            </el-col>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="11">
              <el-form-item label="需求楼层" prop="floor_min" :label-width="formLabelWidth">
                <el-col :span="11">
                  <el-input v-model="form.floor_min"><template slot="suffix">层</template></el-input>
                </el-col>
                <el-col :span="2" style="text-align:center">-</el-col>
                <el-col :span="11">
                  <el-input v-model="form.floor_max"><template slot="suffix">层</template></el-input>
                </el-col>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="备注" :label-width="formLabelWidth">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="form.remark">
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
  import {addClient} from '@/api/client'

  export default {
    props: ['initFormData'],
    data () {
      return {
        form: {
          customer_name: '',
          gender: '男',
          common_telephone: '',
          prefer_region: '',
          area_min: '',
          area_max: '',
          pay_min: '',
          pay_max: '',
          floor_min: '',
          floor_max: '',
          remark: ''
        },
        rules: {
          customer_name: [
            { required: true, message: '请输入客户姓名', trigger: 'blur' }
          ],
          common_telephone: [
            { required: true, message: '请输入客户手机号', trigger: 'blur' }
          ]
        },
        zhuangxiu_options: [{
          value: '毛坯',
          label: '毛坯'
        }, {
          value: '简装',
          label: '简装'
        }, {
          value: '精装',
          label: '精装'
        }, {
          value: '豪华',
          label: '豪华'
        }, {
          value: '中装',
          label: '中装'
        }],
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
            addClient(that.form).then(function (res) {
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
<style scoped lang="scss">
.form_sub_item {
  text-align:right;
  padding-right:10px
}
</style>
