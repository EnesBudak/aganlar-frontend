<template>
  <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%"
  >
   <el-table-column prop="imageUrl" label="Resim">
   <template v-slot="scope">
      <img :src="scope.row.imageUrl[0]" alt="" width="90" height="90">
   </template>
</el-table-column>
    <el-table-column label="Yat Adı" prop="name"> </el-table-column>
    <el-table-column label="Tip" prop="categoryType"> </el-table-column>
    <el-table-column align="right">
      <template #header>
        <el-input v-model="search" size="mini" placeholder="Aramak için Yazınız" />
      </template>
      <template #default="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
          >Düzenle</el-button
        >
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >Sil</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import axios from 'axios'
  export default {
    data() {
      return {
        tableData: [
        ],
        search: '',
        imageUrl:''
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row)
      },
      handleDelete(index, row) {
          axios.delete(`/yacht/${row._id}`).then((response) => {
            console.log(response);
            this.tableData = response.data.result;
        }).then((res) => {
          if(res.data.success){
            location.reload();
          }
        }).catch(() => {
            this.$notify.error({
          title: 'Hata',
          message: 'Yat Silinemedi',
        })
        })
      },
    },
    created(){
        axios.get('/yacht/all').then((response) => {
            console.log(response);
            this.tableData = response.data.result;
        })

    }
  }
</script>