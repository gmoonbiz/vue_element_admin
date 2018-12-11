<template>
  <div>
    <el-col :span="24" class="toolbar" style="background:#eef1f6;padding:8px">
      <el-form :inline="true">
        <el-form-item>
          <el-input placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="姓名2"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="searchHouseList">查询</el-button>
        </el-form-item>
        <el-form-item style="float:right;margin-right:0">
          <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>
        </el-form-item>
      </el-form>
    </el-col>

    <el-table
      :data="tableData"
      border
      stripe
      :height="viewHeight - 116"
      @row-dblclick="handleClick"
      style="width: 100%">
      <el-table-column prop="date" label="日期" width="180" sortable="true"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column label="操作" width="140">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
          <el-button type="text" size="small" @click="del">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination/>

    <add v-if="dialogFormVisible" @close="dialogFormVisible = false"/>
    <detail v-if="dialogFormVisibleDetail" :house_id="detail_house_id" @close="dialogFormVisibleDetail = false"/>
  </div>
</template>
<script>
  import Pagination from '@/components/Pagination'
  import Add from './components/add'
  import detail from './components/detail/index'

  import {getHouseList} from '@/api/house'

  export default {
    props: ['viewHeight'],
    components: { Pagination, Add, detail },
    methods: {
      handleClick (row, event) {
        console.log(row)
        console.log(event)
        this.detail_house_id = row.name
        this.dialogFormVisibleDetail = true
      },
      searchHouseList () {
        getHouseList({a: 1, baaaa: 2}).then(function (res) {
          console.log(res)
        })
      },
      aaa () {
        alert(1)
      },
      del () {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      }
    },
    data () {
      return {
        dialogFormVisible: false,
        dialogFormVisibleDetail: false,
        detail_house_id: 'aaa',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        tableData: [{
          date: '2016-05-02',
          name: '王小虎1',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎3',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  }
</script>
<style scoped lang="scss">
.el-form-item{
  margin-bottom:0;
}
</style>
