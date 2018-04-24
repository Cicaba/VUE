<template>
  <div>
    <el-button type="primary" @click="offDialog">打开</el-button>
    <div class="vue">
      Vue单元测试
    </div>
    <div>{{text}}{{mi}}</div>
    <test-dialog ref="dialogVisble"></test-dialog>
  </div>
</template>
<script>
import testDialog from './dialog.vue';
import vuex, { mapState, mapGetters } from 'vuex';
export default {
  components: {
    testDialog
  },
  props: ['id', 'name', 'query'],
  data() {
    return {
      dialogVisble: false
    };
  },
  created: function() {
    console.log(this.$route.params, this.$props);
    console.log(this.formatDate(new Date(), 'yyyy-MM-dd'));
    console.log(this.point('+')(123, 3));
    console.log(this.$store.getters['Default/height'], this.text);
  },
  computed: {
    ...mapState({
      text: state => {
        return state.Default.clientHeight;
      }
    }),
    ...mapGetters({
      mi: 'message'
    })
  },
  methods: {
    offDialog() {
      this.$refs.dialogVisble.offDialog();
    }
  }
};
</script>

