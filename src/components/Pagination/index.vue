<template>
  <el-row style="background:#eef1f6;padding:10px;">
    <el-col :span="10">
      &nbsp;
    </el-col>
    <el-col :span="14">
      <el-pagination style="float:right"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-size="pageSize"
        layout="total, prev, pager, next, jumper"
        background
        small
        :total="total">
      </el-pagination>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    props: ['page', 'pageSize', 'total'],
    methods: {
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange (val) {
        console.log(`当前页: ${val}`)
        this.$emit('changePage', val)
      }
    },
    data () {
      return {
        // currentPage: 2
      }
    }
  }
</script>
