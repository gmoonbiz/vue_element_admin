<template>
  <el-row>
    <el-col class="detail_item" :span="24" style="margin-bottom:14px;padding-left:10px;height:430px;overflow:auto;padding-right:10px">
      <el-upload
        v-loading="imgLoading"
        class="upload-demo"
        :action="uploadUrl"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        :on-success="handleSuccess"
        :data="{community_id:document_id}"
        :file-list="fileList"
        :show-file-list="true"
        list-type="picture-card"
        multiple
      >
        <el-button type="primary">上传图片</el-button>
      </el-upload>
    </el-col>  
    <ImageViewer v-if="imageViewerShow" 
      :current="imageViewerCurrent" 
      :list="imageViewerList" 
      @close="imageViewerShow = false"
    />
  </el-row>
</template>

<script>
  import config from '@/config/index'
  import ImageViewer from '@/components/ImageViewer'
  import {getCommunityImage, delCommunityImage} from '@/api/community'

  export default {
    props: ['document_id'],
    components: {ImageViewer},
    data () {
      return {
        imageViewerShow: false,
        imageViewerCurrent: '',
        imageViewerList: [],
        imgLoading: true,
        uploadUrl: config.host + '/community/uploadImage',
        fileList: []
      }
    },
    created () {
      var that = this

      var communityImageList = []
      getCommunityImage({community_id: this.document_id}).then((res) => {
        for (var i in res.data.data) {
          var info = res.data.data[i]
          communityImageList.push({
            document_id: info.document_id,
            name: info.name,
            url: info.url
          })
        }

        that.fileList = JSON.parse(JSON.stringify(communityImageList))
        that.imageViewerList = JSON.parse(JSON.stringify(communityImageList))
        that.imgLoading = false
      })
    },
    methods: {
      handleRemove (file, fileList) {
        console.log(file, fileList)
        delCommunityImage({document_id: file.document_id}).then((res) => {
          console.log(res)
        })
      },
      handlePreview (file) {
        this.imageViewerShow = true
        this.imageViewerCurrent = file.url
      },
      handleSuccess (res, file, fileList) {
        this.imageViewerList.push({
          name: res.data.name,
          url: res.data.url
        })
      },
      handleExceed (files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
      },
      beforeRemove (file, fileList) {
        return this.$confirm(`确定移除该图片吗？`)
      }
    }
  }
</script>
