<!-- <template> -->
<!--<my_dialog @open="openEvent" v-test></my_dialog>-->
<!--</template>-->
<!--<script>-->
<!--import my_dialog from "./dialog.vue"-->
<!--export default{-->
<!--components:{-->
<!--my_dialog-->
<!--},-->
<!--methods:{-->
<!--openEvent(a){-->
<!--a.dialogTableVisible = true-->
<!--}-->
<!--}-->
<!--}-->
<!-- </script> -->
<template>
  <div class="box">
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="日期" width="180">
    </el-table-column>
    <el-table-column prop="name" label="姓名" width="180">
    </el-table-column>
    <el-table-column prop="address" label="地址">
    </el-table-column>      
    </el-table>
    <div>
    <table border="1" cellpadding="5" cellspacing="0">
      <tr>
        <th>日期</th>
        <th>姓名</th>
        <th>地址</th>
      </tr>
      <tr v-for="(itme,i) in tableData" :key="i">
        <td>{{itme.date}}</td>
        <td>{{itme.name}}</td>
        <td>{{itme.address}}</td>
      </tr>
    </table>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test:[],
      tableData: [
        {
          //tableData后台数据
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  created() {
    (()=>{ alert(); })()
    console.log("发送ajax");
    Object.defineProperty(()=>{
      
    })
  }
};
</script>
<style scoped>
.box {
  background: #ff6600;
}
</style>
