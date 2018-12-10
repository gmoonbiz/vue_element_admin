<template>
  <div>
    <el-row>
      <template v-for="item in detail_list">
        <el-col class="detail_item" :span="12" style="margin-bottom:14px">{{item}}</el-col>  
      </template>
    </el-row>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        detail_list: [
          '编号：45102',
          '发布人：用户162581-默认门店',
          '类型：住宅',
          '权限：公司公盘',
          '户型：3室2厅',
          '楼层：1',
          '面积：109平',
          '装修：精装',
          '价格：155万',
          '单价：14220元',
          '小学：暂无',
          '中学：暂无',
          '房产证：未满二年',
          '产权：个人产权'
        ]
      }
    }
  }
</script>
<style scoped lang="scss">
</style>
