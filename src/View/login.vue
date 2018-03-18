<template>
<div>
  <el-button type="primary" @click="offDialog">打开</el-button>
  <div>{{text}}{{mi}}</div>
  <test-dialog ref="dialogVisble"></test-dialog>
</div>
</template>
<script>
import testDialog from "./dialog.vue";
import vuex, { mapState, mapGetters } from "vuex";
export default {
  components: {
    testDialog
  },
  data() {
    return {
      dialogVisble: false
    };
  },
  created: function() {
    console.log(this.$store.getters["Default/height"], this.text);
  },
  computed: {
    ...mapState({
      text: state => {
        // console.log(vuex)
        return state.Default.clientHeight;
      }
    }),
    ...mapGetters({
      mi: "message"
    })
  },
  methods: {
    offDialog() {
      this.$refs.dialogVisble.offDialog();
    }
  }
};
</script>

