<template>
  <div>
    <el-col :span="24" class="toolbar" style="background:#eef1f6;padding:8px">
      <el-form :inline="true" :model="form" ref="searchForm">
        <el-form-item prop="community_name">
          <el-input placeholder="小区名称" v-model="form.community_name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="searchList">查询</el-button>
          <el-button type="primary" @click="resetForm('searchForm')">清空</el-button>
        </el-form-item>
        <el-form-item style="float:right;margin-right:0">
          <el-button type="primary" @click="dialogAddVisible = true; initFormDataAdd = {}">新增</el-button>
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
      :height="viewHeight - 105"
      @row-dblclick="handleClick"
      @sort-change="changeSort"
      style="width: 100%"
    >
      <el-table-column prop="document_id" label="编号" width="80"></el-table-column>
      <el-table-column prop="community_name" label="小区名称"></el-table-column>
      <el-table-column prop="district_name" label="行政区"></el-table-column>
      <el-table-column prop="biz_area_name" label="商圈"></el-table-column>
      <el-table-column prop="address" label="地址" width="240"></el-table-column>
      <!-- <el-table-column prop="wuye_fee" label="物业费"></el-table-column> -->
      <!-- <el-table-column prop="green" label="绿化率"></el-table-column> -->
      <!-- <el-table-column prop="developer" label="开发商"></el-table-column> -->
      <!-- <el-table-column prop="wuye_company" label="物业公司"></el-table-column> -->
      <el-table-column prop="school" label="小学"></el-table-column>
      <el-table-column prop="mid_school" label="中学"></el-table-column>
      <!-- <el-table-column prop="build_year" label="建造年代"></el-table-column> -->
      <el-table-column label="操作" width="140">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small" @click="edit(scope.row)">编辑</el-button>
          <el-button type="text" size="small" @click="del(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination :page="page" :pageSize="page_size" :total="total" @changePage="changePage"/>

    <add v-if="dialogAddVisible" :initFormData="initFormDataAdd" @close="dialogAddVisible = false" @addSuccess="addSuccess" @editSuccess="editSuccess"/>
    <detail v-if="dialogDetailVisible" :document_id="detail_document_id" @close="dialogDetailVisible = false"/>
  </div>
</template>
<script>
  import Pagination from '@/components/Pagination'
  import Add from './components/add'
  import detail from './components/detail/index'

  import notice from '@/utils/notice'
  import util from '@/utils/util'
  import {getCommunityList, delCommunity} from '@/api/community'

  export default {
    props: ['viewHeight'],
    components: { Pagination, Add, detail },
    data () {
      return {
        dialogAddVisible: false,
        dialogDetailVisible: false,
        detail_document_id: 0,

        form: {
          district_name: '',
          community_name: ''
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
      handleClick (row, event) {
        this.detail_document_id = row.document_id
        this.dialogDetailVisible = true
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

        notice.confirm('确定要删除该小区吗？', () => {
          delCommunity({document_id: row.document_id}).then(function (res) {
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
    getCommunityList(param).then(function (res) {
      var data = res.data.data
      var count = res.data.statistic.count
      that.total = count

      for (var i in data) {
        var info = data[i]
        data[i].create_time = util.formatTimestamp(info.create_time, 16)
        data[i].address_str = info.district_name + '-' + info.biz_area_name + '-' + info.address
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
