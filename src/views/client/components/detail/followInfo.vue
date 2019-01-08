<template>
  <div>
    <el-col :span="24" class="toolbar" style="padding-bottom:4px">
      <el-form :inline="true" :model="form" ref="searchForm">
        <el-form-item style="float:right;margin-right:0">
          <el-button type="primary" @click="dialogAddVisible = true; initFormDataAdd = {client_id: client_id}">写跟进</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-table
      ref="listTable"
      :data="listData"
      v-loading="loading"
      border
      stripe
      highlight-current-row
      :height="360"
      @sort-change="changeSort"
      style="width: 100%"
    >
      <el-table-column prop="document_id" label="编号" width="80"></el-table-column>
      <el-table-column prop="content" label="跟进内容"></el-table-column>
      <el-table-column prop="create_time" label="跟进时间" width="140"></el-table-column>
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
  import Add from './followInfoAdd'

  import notice from '@/utils/notice'
  import util from '@/utils/util'
  import {getFollowList, delFollow} from '@/api/client'

  export default {
    props: ['client_id'],
    components: { Pagination, Add },
    data () {
      return {
        dialogAddVisible: false,
        dialogDetailVisible: false,
        detail_document_id: 0,

        form: {
          client_id: this.client_id
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
      searchList(this)
    },
    methods: {
      resetForm (formName) {
        this.$refs[formName].resetFields()
        this.searchList()
      },
      searchList () {
        this.page = 1
        this.order = null
        this.order_direction = null
        this.$refs.listTable.clearSort()
        searchList(this)
      },
      addSuccess () {
        this.dialogAddVisible = false
        this.page = 1
        this.order = 'document_id'
        this.order_direction = 'desc'
        this.$refs.listTable.clearSort()
        searchList(this)
      },
      editSuccess () {
        this.dialogAddVisible = false
        searchList(this)
      },
      changePage (page) {
        this.page = page
        searchList(this)
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

        searchList(this)
      },
      edit (row) {
        // console.log(JSON.stringify(row))
        this.initFormDataAdd = row
        this.dialogAddVisible = true
      },
      del (row) {
        var that = this

        notice.confirm('确定要删除该记录吗？', () => {
          delFollow({document_id: row.document_id}).then(function (res) {
            notice.success('删除成功')
            searchList(that)
          })
        })
      }
    }
  }

  // 加载列表
  function searchList (that) {
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
    getFollowList(param).then(function (res) {
      var data = res.data.data
      var count = res.data.statistic.count
      that.total = count

      for (var i in data) {
        var info = data[i]
        data[i].create_time = util.formatTimestamp(info.create_time, 16)
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
