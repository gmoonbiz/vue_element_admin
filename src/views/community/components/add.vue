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
        <el-form :model="form" :rules="rules" ref="addForm">
          <el-row>
            <el-col :span="12">
              <el-form-item label="小区名称" prop="community_name" :label-width="formLabelWidth">
                <el-input v-model="form.community_name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="11">
              <el-form-item label="建造年代" :label-width="formLabelWidth">
                <el-select v-model="form.build_year" placeholder="请选择">
                  <el-option label="2018" value="shanghai"></el-option>
                  <el-option label="2017" value="beijing"></el-option>
                  <el-option label="2016" value="beijing"></el-option>
                  <el-option label="2015" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
              <el-form-item label="小区位置" prop="address" :label-width="formLabelWidth">
                <el-col :span="4">
                  <el-select v-model="form.district_name" @change="initRegionList" placeholder="请选择">
                    <el-option
                      v-for="item in district_list"
                      :key="item.value"
                      :label="item.value"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col :span="4">
                  <el-select v-model="form.biz_area_name" placeholder="请选择">
                    <el-option
                      v-for="item in region_list"
                      :key="item.value"
                      :label="item.value"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col :span="16">
                  <el-input v-model="form.address" placeholder="详细位置"></el-input>
                </el-col>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="物业费" :label-width="formLabelWidth">
                <el-input v-model="form.wuye_fee"><template slot="suffix">元/平米</template></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="11">
              <el-form-item label="绿化率" :label-width="formLabelWidth">
                <el-input v-model="form.green"><template slot="suffix">%</template></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="开发商" :label-width="formLabelWidth">
                <el-input v-model="form.developer"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="11">
              <el-form-item label="物业公司" :label-width="formLabelWidth">
                <el-input v-model="form.wuye_company"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="小学" :label-width="formLabelWidth">
                <el-input v-model="form.school"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="11">
              <el-form-item label="中学" :label-width="formLabelWidth">
                <el-input v-model="form.mid_school"></el-input>
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
  import {getDistrictList, getRegionList} from '@/api/area'
  import {addCommunity} from '@/api/community'
  import notice from '@/utils/notice'

  export default {
    props: ['initFormData'],
    methods: {
      submit (formName) {
        var that = this
        this.$refs[formName].validate((valid) => {
          if (valid) {
            addCommunity(that.form).then(function (res) {
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
      },
      initRegionList (district) {
        console.log(district)
        initRegionList(this, district)
      }
    },
    data () {
      return {
        form: {
          document_id: 0,
          community_name: '',
          district_name: '',
          biz_area_name: '',
          build_year: '',
          wuye_fee: '',
          green: '',
          developer: '',
          wuye_company: '',
          school: '',
          mid_school: ''
        },
        district_list: [],
        region_list: [],
        rules: {
          community_name: [
            { required: true, message: '请输入小区名称', trigger: 'blur' }
          ],
          address: [
            { required: true, message: '请输入小区位置', trigger: 'blur' }
          ]
        },
        formLabelWidth: '80px'
      }
    },
    created: function () {
      initDistrictList(this)

      var initFormData = this.initFormData
      for (var i in this.form) {
        if (initFormData[i]) {
          this.form[i] = initFormData[i]
        }
      }
    }
  }

  function initDistrictList (that) {
    getDistrictList().then(function (res) {
      var data = res.data.data
      var districtList = []
      for (var i in data) {
        districtList.push({
          value: data[i].district,
          label: data[i].district
        })
      }
      that.district_list = districtList
    })
  }

  function initRegionList (that, district) {
    var param = {
      district
    }
    getRegionList(param).then(function (res) {
      var data = res.data.data
      var regionList = []
      for (var i in data) {
        regionList.push({
          value: data[i].region,
          label: data[i].region
        })
      }
      that.region_list = regionList
      that.form.biz_area_name = ''
    })
  }
</script>
<style scoped lang="scss">
.form_sub_item {
  text-align:right;
  padding-right:10px
}
</style>
