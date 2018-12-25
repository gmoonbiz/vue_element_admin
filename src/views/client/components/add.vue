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
        <el-form :model="form" :rules="rules">
          <el-row>
            <el-col :span="12">
              <el-col :span="14">
                <el-form-item label="客户姓名" :label-width="formLabelWidth">
                  <el-input v-model="form.community"></el-input>
                </el-form-item>  
              </el-col>
              <el-col :span="1">&nbsp;</el-col>
              <el-col :span="9">
                <el-form-item>
                  <el-radio-group v-model="form.gender">
                    <el-radio label="男">先生</el-radio>
                    <el-radio label="女">女士</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
            </el-col>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="11">
              <el-form-item label="手机号码" :label-width="formLabelWidth">
                <el-input v-model="form.community"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="需求区域" prop="community" :label-width="formLabelWidth">
                <el-input v-model="form.community"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="11">
              <el-form-item label="需求面积" prop="community" :label-width="formLabelWidth">
                <el-col :span="11">
                  <el-input v-model="form.community"><template slot="suffix">平米</template></el-input>
                </el-col>
                <el-col :span="2" style="text-align:center">-</el-col>
                <el-col :span="11">
                  <el-input v-model="form.community"><template slot="suffix">平米</template></el-input>
                </el-col>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="需求总价" prop="community" :label-width="formLabelWidth">
                <el-col :span="11">
                  <el-input v-model="form.community"><template slot="suffix">万</template></el-input>
                </el-col>
                <el-col :span="2" style="text-align:center">-</el-col>
                <el-col :span="11">
                  <el-input v-model="form.community"><template slot="suffix">万</template></el-input>
                </el-col>
              </el-form-item>
            </el-col>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="11">
              <el-form-item label="需求楼层" prop="community" :label-width="formLabelWidth">
                <el-col :span="11">
                  <el-input v-model="form.community"><template slot="suffix">层</template></el-input>
                </el-col>
                <el-col :span="2" style="text-align:center">-</el-col>
                <el-col :span="11">
                  <el-input v-model="form.community"><template slot="suffix">层</template></el-input>
                </el-col>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="备注" :label-width="formLabelWidth">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="form.region">
            </el-input>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer">
        <el-button @click="close">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    methods: {
      submit () {
        this.$emit('close')
      },
      close () {
        this.$emit('close')
      }
    },
    data () {
      return {
        form: {
          name: '',
          gender: '男',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          zhuangxiu: ''
        },
        rules: {
          community: [
            { required: true, message: '请输入小区名称', trigger: 'blur' }
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
    }
  }
</script>
<style scoped lang="scss">
.form_sub_item {
  text-align:right;
  padding-right:10px
}
</style>
