<template>
  <div>
    <el-col :span="24" class="toolbar" style="background:#eef1f6;padding:8px">
      <el-form :inline="true" :model="form" ref="searchForm">
        <el-form-item prop="username">
          <el-input placeholder="姓名" v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item prop="tel">
          <el-input placeholder="电话" v-model="form.tel"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="searchUserList">查询</el-button>
          <el-button type="primary" @click="resetForm('searchForm')">清空</el-button>
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
      @sort-change="changeSort"
      style="width: 100%">
      <el-table-column prop="document_id" label="编号" width="60"></el-table-column>
      <el-table-column prop="username" label="姓名"></el-table-column>
      <el-table-column prop="gender" label="性别"></el-table-column>
      <el-table-column prop="tel" label="电话"></el-table-column>
      <el-table-column prop="join_time" label="入职日期"></el-table-column>
      <el-table-column label="操作" width="140">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="edit(scope.row)">编辑</el-button>
          <el-button type="text" size="small" @click="del(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination :page="page" :pageSize="page_size" :total="total" @changePage="changePage"/>

    <add v-if="dialogAddVisible" :initFormData="initFormDataAdd" @close="dialogAddVisible = false" @addSuccess="addSuccess" @editSuccess="editSuccess"/>
  </div>
</template>
<script>
  import Pagination from '@/components/Pagination'
  import Add from './components/add'

  import util from '@/utils/util'
  import notice from '@/utils/notice'
  import {getUserList, delUser} from '@/api/user'

  export default {
    props: ['viewHeight'],
    components: { Pagination, Add },
    data () {
      return {
        dialogAddVisible: false,

        form: {
          username: '',
          tel: ''
        },
        initFormDataAdd: {},
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
      searchUserList(this)
    },
    methods: {
      resetForm (formName) {
        this.$refs[formName].resetFields()
        this.searchUserList()
      },
      searchUserList () {
        this.page = 1
        this.order = null
        this.order_direction = null
        this.$refs.listTable.clearSort()
        searchUserList(this)
      },
      addSuccess () {
        this.dialogAddVisible = false
        this.page = 1
        this.order = 'document_id'
        this.order_direction = 'desc'
        this.$refs.listTable.clearSort()
        searchUserList(this)
      },
      editSuccess () {
        this.dialogAddVisible = false
        searchUserList(this)
      },
      changePage (page) {
        this.page = page
        searchUserList(this)
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

        searchUserList(this)
      },
      edit (row) {
        this.initFormDataAdd = row
        this.dialogAddVisible = true
      },
      del (row) {
        var that = this

        notice.confirm('确定要删除该数据吗？', () => {
          delUser({document_id: row.document_id}).then(function (res) {
            notice.success('删除成功')
            searchUserList(that)
          })
        })
      }
    }
  }

  // 加载列表
  function searchUserList (that) {
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
    getUserList(param).then(function (res) {
      var data = res.data.data
      var count = res.data.statistic.count
      that.total = count

      for (var i in data) {
        var info = data[i]
        data[i].join_time = util.formatTimestamp(info.join_time, 10)
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
