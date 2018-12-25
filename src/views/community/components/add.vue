<template>
  <div>
    <el-dialog 
      title="新增小区" 
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
              <el-form-item label="小区名称" prop="community" :label-width="formLabelWidth">
                <el-input v-model="form.community"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="11">
              <el-form-item label="建造年代" prop="community" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择">
                  <el-option label="2018" value="shanghai"></el-option>
                  <el-option label="2017" value="beijing"></el-option>
                  <el-option label="2016" value="beijing"></el-option>
                  <el-option label="2015" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
              <el-form-item label="小区位置" prop="community" :label-width="formLabelWidth">
                <el-col :span="4">
                  <el-select v-model="form.region" placeholder="请选择">
                    <el-option label="南开" value="shanghai"></el-option>
                    <el-option label="红桥" value="beijing"></el-option>
                  </el-select>
                </el-col>
                <el-col :span="4">
                  <el-select v-model="form.region" placeholder="请选择">
                    <el-option label="王顶堤" value="shanghai"></el-option>
                    <el-option label="华苑" value="beijing"></el-option>
                  </el-select>
                </el-col>
                <el-col :span="16">
                  <el-input v-model="form.community" placeholder="详细位置"></el-input>
                </el-col>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="物业费" prop="community" :label-width="formLabelWidth">
                <el-input v-model="form.community"><template slot="suffix">元/平米</template></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="11">
              <el-form-item label="绿化率" prop="commaunity" :label-width="formLabelWidth">
                <el-input v-model="form.community"><template slot="suffix">%</template></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="开发商" prop="community" :label-width="formLabelWidth">
                <el-input v-model="form.community"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="11">
              <el-form-item label="物业公司" prop="commaunity" :label-width="formLabelWidth">
                <el-input v-model="form.community"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="小学" prop="community" :label-width="formLabelWidth">
                <el-input v-model="form.community"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="11">
              <el-form-item label="中学" prop="commaunity" :label-width="formLabelWidth">
                <el-input v-model="form.community"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
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
