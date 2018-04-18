<template>
  <div>
    123
    <el-dialog title="拖动" :visible.sync="visible" v-drag></el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  methods: {
    offDialog() {
      this.visible = true;
    }
  }
};
</script>