<template>
  <div class="container">
    <div class="page_info">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          ><el-icon><Menu /></el-icon
        ></el-breadcrumb-item>
        <el-breadcrumb-item>规则管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-divider />
    <div class="show">
      <div class="shop_list">
        <el-tree :data="testData" :default-expand-all="true" />
      </div>
      <div class="table">
        <div class="s_opt" style="margin-bottom: 10px">
          <el-input
            placeholder="输入员工编号"
            style="width: 200px; margin-right: 10px"
            v-model="page_info.search_info"
          />
          <el-button type="primary" style="margin-right: 10px" @click="searchInfo"
          ><el-icon><Search /></el-icon>搜 索</el-button
          >
          <el-button type="success" @click="addData"
          ><el-icon><Plus /></el-icon> 添 加</el-button
          >
        </div>
        <el-table :data="form_data">
          <el-table-column label="编号" prop="id" align="center" />
          <el-table-column label="所属商店编号" prop="storeid" align="center" />
          <el-table-column label="规则说明" prop="words" align="center" />
          <el-table-column label="设置值" prop="value" align="center" />
          <el-table-column align="center" label="操作">
            <template #default="scope">
              <el-button
                type="info"
                link
                @click="changeData(scope.$index, scope.row)"
              >
                <el-icon><EditPen /></el-icon>编辑
              </el-button>
              <el-button type="danger" link @click="deleteData(scope.row.id)">
                <el-icon><Delete /></el-icon>删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          class="pagenation"
          v-model:current-page="page_info.page"
          v-model:page-size="page_info.size"
          :page-sizes="[10, 20, 30, 40]"
          layout="sizes, prev, pager, next, total"
          :total="page_info.total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>

  <!--编辑弹出框-->
  <el-dialog title="编辑规则信息" v-model="editVisible" width="30%">
    <el-form label-width="70px">
      <el-form-item label="规则编号">
        <el-input disabled v-model="rule_info.id" />
      </el-form-item>
      <el-form-item label="门店">
        <el-select
          v-model="rule_info.storeid"
          multiple
          placeholder="请选择门店"
          style="width: 240px"
        >
          <el-option
            v-for="item in testOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="描述">
        <el-input placeholder="请输入规则描述" v-model="rule_info.words" />
      </el-form-item>
      <el-form-item label="规则值">
        <el-input placeholder="请输入规则值" v-model="rule_info.value" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmAdd">确 定</el-button>
      </span>
    </template>
  </el-dialog>

  <!--添加弹出框-->
  <el-dialog title="添加员工信息" v-model="addVisible" width="30%">
    <el-form label-width="70px">
      <el-form-item label="门店">
        <el-select
          v-model="rule_info.storeid"
          multiple
          placeholder="请选择门店"
          style="width: 240px"
        >
          <el-option
            v-for="item in testOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="描述">
        <el-input placeholder="请输入规则描述" v-model="rule_info.words" />
      </el-form-item>
      <el-form-item label="规则值">
        <el-input placeholder="请输入规则值" v-model="rule_info.value" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="addVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmChange">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { useRuleApi } from "@/api/rule";
import { reactive, ref } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";

export default {
  setup() {
    //表格数据
    const form_data = ref([]);
    //添加表格ref
    const addVisible = ref(false);
    const editVisible = ref(false);

    //表格信息,主要是分页
    const page_info = reactive({
      page: 1,
      size: 10,
      total: 1,
      search_info:"",
    });

    const rule_info = reactive({
      id: "", //编号
      storeid: "", //门店ID 空时为系统规则
      words: "", //规则作用说明
      value: "", //规则值
    });


    const testData = [
      {
        label: "系统规则",
      },
      {
        label: "Level one 1",
        children: [
          {
            label: "Level two 1-1",
            children: [
              {
                label: "Level three 1-1-1",
              },
            ],
          },
        ],
      },
      {
        label: "Level one 2",
        children: [
          {
            label: "Level two 2-1",
            children: [
              {
                label: "Level three 2-1-1",
              },
            ],
          },
          {
            label: "Level two 2-2",
            children: [
              {
                label: "Level three 2-2-1",
              },
            ],
          },
        ],
      },
      {
        label: "Level one 3",
        children: [
          {
            label: "Level two 3-1",
            children: [
              {
                label: "Level three 3-1-1",
              },
            ],
          },
          {
            label: "Level two 3-2",
            children: [
              {
                label: "Level three 3-2-1",
              },
            ],
          },
        ],
      },
    ];

    const testOptions = [
      {
        value: "Option1",
        label: "Option1",
      },
      {
        value: "Option2",
        label: "Option2",
      },
      {
        value: "Option3",
        label: "Option3",
      },
      {
        value: "Option4",
        label: "Option4",
      },
      {
        value: "Option5",
        label: "Option5",
      },
    ];

    //获取数据
    const getData = () => {
      useRuleApi()
        .getRules(page_info)
        .then((rep) => {
          if (rep.code === 200) {
            form_data.value = rep.data;
            page_info.total = rep.data.length;
          } else {
            ElMessage.error("服务器错误 : " + rep.message);
          }
        });
    };
    getData();


    //分页-当前分页数据量修改事件
    const handleSizeChange = (val) => {
      page_info.size = val;
      getData();
    };

    //分页-当前页面修改事件
    const handleCurrentChange = (val) => {
      page_info.page = val;
      getData();
    };

    //初始化添加表格
    const addData = () => {
      Object.keys(rule_info).forEach((item) => {
        rule_info[item] = "";
      });
      addVisible.value = true;
    };

    //初始化编辑表格
    let idx = -1;
    const changeData = (index, row) => {
      idx = index;
      Object.keys(rule_info).forEach((item) => {
        rule_info[item] = row[item];
      });
      editVisible.value = true;
    };

    //搜索信息
    const searchInfo = () => {
      if (page_info.search_info === "") {
        getData()
      } else {
        useRuleApi().getById(page_info.search_info).then(rep => {
          if(rep.code === 200) {
            if(rep.data!=null) {
              const temp_data = []
              page_info.page=1
              page_info.size=10
              page_info.total=1
              temp_data.push(rep.data)
              form_data.value = temp_data
            }else {
              ElMessage.error("查无此人")
            }
          }else{
            ElMessage.error("查询错误:"+rep.message)
          }
        })
      }
    };

    //添加数据
    const confirmAdd = () => {
      useRuleApi().addRule(JSON.stringify(rule_info)).then(rep => {
        if(rep.code === 200){
          ElMessage.success("数据添加成功")
          addVisible.value = false;
          getData()
        } else {
          ElMessage.error("添加数据错误:"+rep.message)
        }
      })
    };

    //修改数据
    const confirmChange = () => {
      useRuleApi().updateRule(JSON.stringify(rule_info)).then(rep => {
        if(rep.code === 200){
          ElMessage.success("数据修改成功")
          editVisible.value = false;
          getData()
        } else {
          ElMessage.error("修改数据错误:"+rep.message)
        }
      })
    };

    const deleteData = (index) => {
      ElMessageBox.confirm("确认要删除该条数据吗", "提示", {
        type: "warning",
      })
        .then(() => {
          useRuleApi().deleteRule(index).then(rep => {
            if(rep.code === 200){
              ElMessage.success("数据删除成功")
              getData()
            } else {
              ElMessage.error("删除数据错误:"+rep.message)
            }
          })
        })
        .catch((info) => {});
    };

    return {
      addVisible,
      editVisible,

      form_data,
      page_info,
      rule_info,
      testData,
      testOptions,

      getData,

      addData,
      searchInfo,
      changeData,
      deleteData,
      confirmChange,
      confirmAdd,

      handleCurrentChange,
      handleSizeChange,
    };
  },
};
</script>

<style scoped lang="scss">
.show {
  .shop_list {
    display: inline-block;
    width: 20%;
    height: 100%;
    border-radius: var(--el-border-radius);
    border: 1px solid var(--el-border-color);
    vertical-align: top;
  }

  .table {
    display: inline-block;
    margin-left: 20px;
    width: 78%;
    vertical-align: top;
  }
}
</style>
