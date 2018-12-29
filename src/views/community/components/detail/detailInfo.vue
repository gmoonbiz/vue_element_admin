<template>
  <div v-loading="pageLoading" style="padding-left:40px;padding-right:20px">
    <el-row style="border-bottom:1px solid #efefef">
      <el-col :span="24" style="font-size:18px;color:#409EFF">{{info.community_name}}</el-col>  
      <el-col :span="24"><span class="label">地址：</span>{{info.district_name}}-{{info.biz_area_name}}-{{info.address}}</el-col>  
    </el-row>
    <el-row style="margin-top:20px">
      <el-col :span="12"><span class="label">编号：</span>{{info.document_id}}</el-col>  
      <el-col :span="12"><span class="label">建造年代：</span>{{info.build_year}}</el-col>  
      <el-col :span="12"><span class="label">物业费：</span>{{info.wuye_fee}}</el-col>  
      <el-col :span="12"><span class="label">绿化率：</span>{{info.green}}</el-col> 
      <el-col :span="12"><span class="label">开发商：</span>{{info.developer}}</el-col>  
      <el-col :span="12"><span class="label">物业公司：</span>{{info.wuye_company}}</el-col> 
      <el-col :span="12"><span class="label">小学：</span>{{info.school}}</el-col>  
      <el-col :span="12"><span class="label">中学：</span>{{info.mid_school}}</el-col>  
    </el-row>
  </div>
</template>
<script>
  import {getCommunityDetail} from '@/api/community'

  export default {
    props: ['document_id'],
    data () {
      return {
        pageLoading: true,
        info: {}
      }
    },
    created () {
      var that = this

      getCommunityDetail({document_id: this.document_id}).then((res) => {
        that.info = res.data
        that.pageLoading = false
      })
    }
  }
</script>
<style scoped lang="scss">
.el-col{
  margin-bottom:14px
}
</style>
