<template>
  <el-dialog title="拖动" :visible.sync="visible" v-drag></el-dialog>
</template>
<script>
  export default {
    data(){
      return {
        visible:false
      }
    },
    methods:{
      offDialog(){
        this.visible = true;
      }
    }
  }
</script>