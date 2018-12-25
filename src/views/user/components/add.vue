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
        <el-form :model="form" :rules="rules">
          <el-row>
            <el-form-item label="客户姓名" :label-width="formLabelWidth">
              <el-input v-model="form.community"></el-input>
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
            <el-form-item label="手机号码" :label-width="formLabelWidth">
              <el-input v-model="form.community"></el-input>
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item label="入职日期" :label-width="formLabelWidth">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
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
