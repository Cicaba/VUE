<template>
<div>
  <el-button type="primary" @click="offDialog">打开</el-button>
  <test-dialog ref="dialogVisble"></test-dialog>
</div>
</template>
<script>
import testDialog from './dialog.vue'
export default {
  components:{
    testDialog
  },
  data(){
    return {
      dialogVisble:false
    }
  },
  created:function(){
    console.log(axios)
  },
  methods:{
    offDialog(){
      this.$refs.dialogVisble.offDialog()
    }
  }
}
</script>

