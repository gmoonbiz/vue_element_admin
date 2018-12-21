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
              <el-form-item label="小区名称" prop="community" :label-width="formLabelWidth">
                <el-input v-model="form.community"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="11">
              <el-col :span="8">
                <el-form-item><el-input v-model="form.community"><template slot="suffix">栋</template></el-input></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item><el-input v-model="form.community"><template slot="suffix">单元</template></el-input></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item><el-input v-model="form.community"><template slot="suffix">室</template></el-input></el-form-item>
              </el-col>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="房屋类型" :label-width="formLabelWidth" required>
                <el-select v-model="form.region" placeholder="请选择">
                  <el-option label="住宅" value="shanghai"></el-option>
                  <el-option label="公寓" value="beijing"></el-option>
                  <el-option label="写字楼" value="beijing"></el-option>
                  <el-option label="商铺" value="beijing"></el-option>
                  <el-option label="别墅" value="beijing"></el-option>
                  <el-option label="自建房" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="11">
              <el-col :span="8">
                <el-form-item>
                  <el-input v-model="form.community"><template slot="suffix">室</template></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item>
                  <el-input v-model="form.community"><template slot="suffix">厅</template></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item>
                  <el-input v-model="form.community"><template slot="suffix">卫</template></el-input>
                </el-form-item>
              </el-col>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-col :span="12">
                <el-form-item label="楼层" :label-width="formLabelWidth">
                  <el-input v-model="form.community"><template slot="suffix">楼</template></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="总楼层" label-width="60px">
                  <el-input v-model="form.community"><template slot="suffix">楼</template></el-input>
                </el-form-item>
              </el-col>
            </el-col>
            <el-col :span="12">
              <el-col :span="12">
                <el-form-item label="面积" :label-width="formLabelWidth">
                  <el-input v-model="form.community"><template slot="suffix">平米</template></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="价格" label-width="60px">
                  <el-input v-model="form.community"><template slot="suffix">万</template></el-input>
                </el-form-item>
              </el-col>
            </el-col>
          </el-row>
          
          <el-row>
            <el-col :span="12">
              <el-col :span="18">
                <el-form-item label="联系人" :label-width="formLabelWidth">
                  <el-input v-model="form.community"></el-input>
                </el-form-item>  
              </el-col>
              <el-col :span="6">
                <el-form-item>
                <el-select v-model="form.region" placeholder="请选择">
                  <el-option label="先生" value="shanghai"></el-option>
                  <el-option label="女士" value="beijing"></el-option>
                </el-select>
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
              <el-col :span="12">
                <el-form-item label="房产证" :label-width="formLabelWidth">
                  <el-select v-model="form.region" placeholder="请选择">
                    <el-option label="未满两年" value="shanghai"></el-option>
                    <el-option label="满两年" value="beijing"></el-option>
                    <el-option label="满五唯一" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="装修" :label-width="formLabelWidth">
                  <el-select v-model="form.zhuangxiu" placeholder="请选择">
                    <el-option
                      v-for="item in zhuangxiu_options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-col>
            <el-col :span="12">
              <el-col :span="12">
                <el-form-item label="产权" :label-width="formLabelWidth">
                  <el-select v-model="form.region" placeholder="请选择">
                    <el-option label="个人产权" value="shanghai"></el-option>
                    <el-option label="家庭共有" value="beijing"></el-option>
                    <el-option label="小产权" value="beijing"></el-option>
                    <el-option label="协议房" value="beijing"></el-option>
                    <el-option label="共同发票" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="朝向" :label-width="formLabelWidth">
                  <el-select v-model="form.region" placeholder="请选择">
                    <el-option label="东" value="shanghai"></el-option>
                    <el-option label="南" value="beijing"></el-option>
                    <el-option label="西" value="beijing"></el-option>
                    <el-option label="北" value="beijing"></el-option>
                    <el-option label="东西" value="beijing"></el-option>
                    <el-option label="南北" value="beijing"></el-option>
                    <el-option label="东南" value="beijing"></el-option>
                    <el-option label="东北" value="beijing"></el-option>
                    <el-option label="其他" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-col>
          </el-row>
          <el-form-item label="钥匙" :label-width="formLabelWidth">
            <el-col :span="10">
              <el-input v-model="form.community"></el-input>
            </el-col>
            <el-col :span="4" class="form_sub_item">车库</el-col>
            <el-col :span="10">
              <el-input v-model="form.community"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="看房时间" :label-width="formLabelWidth">
            <el-col :span="10">
              <el-select v-model="form.region" placeholder="请选择">
                <el-option label="随时" value="shanghai"></el-option>
                <el-option label="有钥匙" value="beijing"></el-option>
                <el-option label="预约" value="beijing"></el-option>
              </el-select>
            </el-col>
            <el-col :span="4" class="form_sub_item">来源</el-col>
            <el-col :span="10">
              <el-select v-model="form.region" placeholder="请选择">
                <el-option label="来电" value="shanghai"></el-option>
                <el-option label="来访" value="beijing"></el-option>
                <el-option label="中介" value="beijing"></el-option>
                <el-option label="朋友" value="beijing"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
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
