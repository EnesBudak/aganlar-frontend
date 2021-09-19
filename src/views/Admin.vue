<template>
    <Header/>
    <el-row :gutter="10" style="margin-top:10px;" >
        <el-col :xs="5" :sm="10" :md="4" :lg="6" :xl="2" >
            <div class="grid-content bg-purple">
                <el-aside width="100%" >
                    <el-menu :default-openeds="['0']">
                        <el-menu-item index="0" @click="changeContainer(0)">Yat Ekle</el-menu-item>
                        <el-menu-item index="1" @click="changeContainer(1)">Yatlar</el-menu-item>
                        <el-menu-item index="2" @click="changeContainer(2)">Rezervasyonlar</el-menu-item>


                    </el-menu>
                </el-aside>
            </div>
        </el-col>

        <el-col :xs="16" :sm="12" :md="8" :lg="12" :xl="12">
            <el-container>

            <createYacht v-if="createYacht" />
            <admin-table v-if="readYacht" />
              
            </el-container>

        </el-col>

    </el-row>
  <Footer/>

</template>

<script>
import createYacht from '../components/CreateYacht.vue'
import adminTable from '../components/AdminTable.vue'
import Footer from '../components/AdminFooter.vue'
import Header from '../components/AdminHeader.vue'
   export default {
    components:{
        createYacht,
        Footer,
        Header,
        adminTable
    },
    data() {
      return {
      createYacht:true,
      readYacht:false,
      readReservation:false
      }
    },
    methods: {
    changeContainer(container){
       if(container == 0 ){
           this.createYacht = true;
           this.readYacht = false;
           this.readReservation = false;
           
       }
         if(container ==1 ){
           this.readYacht = true;
           this.createYacht = false;
           this.readReservation = false;
       }
        if(container ==2 ){
           this.readReservation = true;
           this.createYacht = false;
           this.readYacht = false;
       }
    },
      onSubmit() {
        console.log('submit!',this.form)
      },
    },
  }
</script>

<style>

</style>