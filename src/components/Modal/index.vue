<template>
  <div>
    <el-dialog 
      :title="title" 
      :width="width" 
      visible="true" 
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    >
      <slot></slot>
      <div slot="footer">
        <slot name="footer"></slot>
        <!-- <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button> -->
      </div>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    props: ['title', 'width'],
    methods: {
      submit (row) {
        this.$emit('submit')
      },
      cancel () {
        this.$emit('cancle')
      }
    },
    data () {
      return {
      }
    }
  }
</script>
