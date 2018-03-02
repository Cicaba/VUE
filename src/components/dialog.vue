<template>
	<div>
		<el-button @click="open">编辑</el-button>
	  	<el-dialog :title="compile?'编辑':'新增'" :visible.sync="dialogTableVisible">
	          <hr class="dialog-hr">
	          <el-form>
	            <el-row>
	              <el-col :span="12" :xs="12">
	                <el-form-item label="客户:" label-width="100px" prop="">
	                  <el-autocomplete
	                    style="width: 100%;"
	                    v-model="vehicles2"
	                    :fetch-suggestions="querySearchName"
	                    placeholder="请输入内容"
	                    :trigger-on-focus="false"
	                    @select="distributionPointName"
	                  ></el-autocomplete>
	                </el-form-item>
	              </el-col>
	              <el-col :span="24" :xs="24">
	                <span style="color: #000;font-size: 15px;">映射信息</span>
	              </el-col>
	              <hr class="dialog-hr">
	              映射信息
	              <el-col :span="12" :xs="12">
	                <el-form-item prop="Code" label="二配机构编码:" label-width="100px">
	                  <el-input v-model="NewEditData.Code" placeholder="请输入"></el-input>
	                </el-form-item>
	              </el-col>
	              <el-col :span="12" :xs="12">
	                <el-form-item prop="Organization_Name" label="二配机构名称:" label-width="100px">
	                  <el-input v-model="NewEditData.Organization_Name" placeholder="请输入"></el-input>
	                </el-form-item>
	              </el-col>
	              <el-col :span="12" :xs="12">
	                <el-form-item label="联系人:" label-width="100px">
	                  <el-input v-model="NewEditData.Contact" placeholder="请输入"></el-input>
	                </el-form-item>
	              </el-col>
	              <el-col :span="12" :xs="12">
	                <el-form-item label="联系电话:" prop="Phone" label-width="100px">
	                  <el-input v-model="NewEditData.Phone" placeholder="请输入"></el-input>
	                </el-form-item>
	              </el-col>
	              <el-col :span="12" :xs="12">
	                <el-form-item label="传真:" prop="Fax" label-width="100px">
	                  <el-input v-model="NewEditData.Fax" placeholder="请输入"></el-input>
	                </el-form-item>
	              </el-col>
	              <el-col :span="12" :xs="12">
	                <el-form-item label="地址:" label-width="100px">
	                  <el-input v-model="NewEditData.Address" placeholder="请输入"></el-input>
	                </el-form-item>
	              </el-col>
	              <el-col :span="24" :xs="24">
	                <el-form-item label="备注:" label-width="100px">
	                  <el-input type="textarea" resize="none" v-model="NewEditData.Comment" placeholder="请输入"></el-input>
	                </el-form-item>
	              </el-col>
	              <el-col :span="24">
	                <div class="float-right">
	                  <el-button type="primary" @click="saveData(NewEditData)"
	                             v-if="accessCodes.indexOf('Query')!==-1">保存
	                  </el-button>
	                  <el-button type="primary" @click="dialogTableVisible=false" style="margin-bottom: 20px;"
	                             v-if="accessCodes.indexOf('Add')!==-1">取消
	                  </el-button>
	                </div>
	              </el-col>
	            </el-row>
	          </el-form>
	  	</el-dialog>
	</div>
	
</template>
<script>
	export default{
		data(){
			return {
				compile:false,
				dialogTableVisible:false,
				accessCodes: ["Query","Add","Export","Import","Edit"],   //默认权限
				vehicles2:"",
				//新增编辑数据
		        NewEditData:{
		          Customerid:"",//客服
		          Code:"",
		          Organization_Name:"",
		          Contact:"",
		          Phone:"",
		          Fax:"",
		          Address:"",
		          Comment:""
		        }
			}
		},
		methods:{
		//客服建议数据
		      querySearchName(query, cb){
		        var resultdata;
		        if (query == null || query.trim() == "") {
		          resultdata = [];
		          cb(resultdata);
		        } else {
		          /*GetDistributorByParamLike(param)*/
		          var url = "/Plan/MappingCustomer/GetCustomerTransByLike?LikeParam" + escape(query);
		          this.axios.get(url)
		            .then((res) => {
		              if(res.data.data!=null){
		                var arr = []
		                res.data.data.map((v,i)=>{
		                  arr.push(v.value);
		                  v.value=v.label;
		                  v.label = arr[i]
		                })
		                resultdata = res.data.data;
		              }else{
		                resultdata = [];
		              }
		              cb(resultdata);
		            })
		        }
		      },
		      open(){
		      	//this.dialogTableVisible = true
		      	this.$emit("open",this)
		      },
		      //客服选中触发
		      distributionPointName(obj){
		        this.NewEditData.Customerid  = obj.label;
		        this.NewEditData.CustomerName=obj.value
		      }
		}
	}
</script>