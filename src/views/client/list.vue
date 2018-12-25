<template>
  <div>
    <el-col :span="24" class="toolbar" style="background:#eef1f6;padding:8px">
      <el-form :inline="true">
        <el-form-item>
          <el-input placeholder="客户姓名" v-model="form.district"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="客户电话" v-model="form.community"></el-input>
        </el-form-item>
        <el-form-item style="width:120px">
          <el-select v-model="form.region" placeholder="状态" clearable>
            <el-option label="已带看" value="已带看"></el-option>
            <el-option label="未带看" value="未带看"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="searchHouseList">查询</el-button>
        </el-form-item>
        <el-form-item style="float:right;margin-right:0">
          <el-button type="primary" @click="dialogAddVisible = true">新增</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-table
      ref="listTable"
      :data="listData"
      v-loading="loading"
      border
      stripe
      :height="viewHeight - 105"
      @row-dblclick="handleClick"
      @sort-change="changeSort"
      style="width: 100%">
      <el-table-column prop="document_id" label="编号" width="60"></el-table-column>
      <el-table-column prop="customer_name" label="客户名称" width="80"></el-table-column>
      <el-table-column prop="yaoqiu" label="客户要求" width="240"></el-table-column>
      <el-table-column prop="daikan" label="带看记录"></el-table-column>
      <el-table-column prop="status" label="状态" width="60"></el-table-column>
      <el-table-column prop="genjin" label="跟进记录"></el-table-column>
      <el-table-column prop="create_time" label="提交时间" width="120"></el-table-column>
      <el-table-column prop="principal_username" label="所属人" width="80"></el-table-column>
      <el-table-column label="操作" width="140">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
          <el-button type="text" size="small" @click="del">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination :page="page" :pageSize="page_size" :total="total" @changePage="changePage"/>

    <add v-if="dialogAddVisible" @close="dialogAddVisible = false"/>
    <detail v-if="dialogFormVisibleDetail" :house_id="detail_house_id" @close="dialogFormVisibleDetail = false"/>
  </div>
</template>
<script>
  import Pagination from '@/components/Pagination'
  import Add from './components/add'
  import detail from './components/detail/index'

  import util from '@/utils/util'
  import {getClientList} from '@/api/client'

  export default {
    props: ['viewHeight'],
    components: { Pagination, Add, detail },
    data () {
      return {
        dialogAddVisible: true,
        dialogFormVisibleDetail: false,
        detail_house_id: 'aaa',

        form: {
          district: '',
          community: ''
        },
        page: 1,
        page_size: 20,
        order: null,
        order_direction: null,
        total: 0,
        loading: false,
        listData: []
      }
    },
    created () {
      searchClientList(this)
    },
    methods: {
      handleClick (row, event) {
        console.log(row)
        console.log(event)
        this.detail_house_id = row.name
        this.dialogFormVisibleDetail = true
      },
      searchHouseList () {
        this.page = 1
        this.order = null
        this.order_direction = null
        this.$refs.listTable.clearSort()
        searchClientList(this)
      },
      changePage (page) {
        this.page = page
        searchClientList(this)
      },
      changeSort (option) {
        this.order = option.prop
        if (option.order === 'ascending') {
          this.order_direction = 'asc'
        } else if (option.order === 'descending') {
          this.order_direction = 'desc'
        } else {
          this.order_direction = option.order
        }

        searchClientList(this)
      },
      aaa () {
        alert(1)
      },
      del () {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          closeOnClickModal: false,
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
    }
  }

  // 加载列表
  function searchClientList (that) {
    var param = {}
    if (that.page) {
      param.page = that.page
      param.page_size = that.page_size
    }
    if (that.order) {
      param.sort = that.order
      param.order = that.order_direction
    }

    for (var i in that.form) {
      if (that.form[i]) {
        param[i] = that.form[i]
      }
    }

    that.loading = true
    getClientList(param).then(function (res) {
      var data = res.data.data
      var count = res.data.statistic.count
      that.total = count

      for (var i in data) {
        var info = data[i]
        data[i].yaoqiu = info.type + info.purpose + ', 面积：' + info.area_min + '-' + info.area_max + '平米'
        data[i].create_time = util.formatTimestamp(data[i].create_time, 16)
      }

      that.listData = data
      that.loading = false
    })
  }
</script>
<style scoped lang="scss">
.el-form-item{
  margin-bottom:0;
}
</style>
