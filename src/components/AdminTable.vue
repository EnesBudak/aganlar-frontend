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
 
  <el-dialog  title="Bilgileri Güncelle" v-model="dialogFormVisible" center>
  <el-form :model="yacht">
      <el-form-item label="Yat Adı">
    <el-input v-model="yacht.name"></el-input>
  </el-form-item>
  <el-form-item label="Yat Tipi">
    <el-select v-model="yacht.categoryType" placeholder="Lütfen yat tipini seçiniz">
      <el-option label="Kiralık" value="rent"></el-option>
      <el-option label="Normal" value="normal"></el-option>
      <el-option label="Satılık" value="sell"></el-option>
      <el-option label="Refit" value="refit"></el-option>
    </el-select>
  </el-form-item>
   <el-form-item label="Yat Üreticisi">
    <el-input v-model="yacht.owner"></el-input>
  </el-form-item>

   <el-form-item label="Açıklama">
    <el-input
  type="textarea"
  :autosize="{ minRows: 2, maxRows: 4}"
  placeholder="Açıklamayı Giriniz"
  v-model="yacht.description"
>
</el-input>
  </el-form-item>
   <el-form-item label="Ücret">
    <el-input v-model="yacht.price"></el-input>
  </el-form-item>
   <el-form-item label="Döviz">
    <el-input v-model="yacht.currency"></el-input>
  </el-form-item>
   <el-form-item label="Dizayn">
    <el-input v-model="yacht.design"></el-input>
  </el-form-item>
   <el-form-item label="Mimar">
    <el-input v-model="yacht.architect"></el-input>
  </el-form-item>
   <el-form-item label="İç Mimar">
    <el-input v-model="yacht.interiorDesign"></el-input>
  </el-form-item>
   <el-form-item label="Sınıf">
    <el-input v-model="yacht.class"></el-input>
  </el-form-item>
   <el-form-item label="Model">
    <el-input v-model="yacht.age"></el-input>
  </el-form-item>
   <el-form-item label="Loa">
    <el-input v-model="yacht.loa"></el-input>
  </el-form-item>
   <el-form-item label="Lod">
    <el-input v-model="yacht.lod"></el-input>
  </el-form-item>
  <el-form-item label="Boa">
    <el-input v-model="yacht.boa"></el-input>
  </el-form-item>
  <el-form-item label="Draft">
    <el-input v-model="yacht.draft"></el-input>
  </el-form-item>
     <el-form-item label="Hız">
    <el-input v-model="yacht.speed"></el-input>
  </el-form-item>
  <el-form-item label="Deplasman">
    <el-input v-model="yacht.deplasman"></el-input>
  </el-form-item>
    <el-form-item label="Kabin Düzenlemesi">
    <el-input v-model="yacht.cabinArrangement"></el-input>
  </el-form-item>
    <el-form-item label="Yolcu Kapasitesi">
    <el-input v-model="yacht.passengerCapacity"></el-input>
  </el-form-item>
    <el-form-item label="Mürettebat Kapasitesi">
    <el-input v-model="yacht.crewCapacity"></el-input>
  </el-form-item>
    <el-form-item label="Mast">
    <el-input v-model="yacht.mast"></el-input>
  </el-form-item>
    <el-form-item label="Main">
    <el-input v-model="yacht.main"></el-input>
  </el-form-item>
    <el-form-item label="Genova">
    <el-input v-model="yacht.genova"></el-input>
  </el-form-item>
    <el-form-item label="Jib">
    <el-input v-model="yacht.jib"></el-input>
  </el-form-item>
   <el-form-item label="Mizzen">
    <el-input v-model="yacht.mizzen"></el-input>
  </el-form-item>
   <el-form-item label="İmalat Türü">
    <el-input v-model="yacht.manufacturingType"></el-input>
  </el-form-item>
   <el-form-item label="Makine">
    <el-input v-model="yacht.machine"></el-input>
  </el-form-item>
   <el-form-item label="Vites">
    <el-input v-model="yacht.vites"></el-input>
  </el-form-item>
   <el-form-item label="Jeneratör">
    <el-input v-model="yacht.jeneratör"></el-input>
  </el-form-item>
   <el-form-item label="A/C">
    <el-input v-model="yacht.ac"></el-input>
  </el-form-item>
   <el-form-item label="Elektrik Sistemi">
    <el-input v-model="yacht.electricSystem"></el-input>
  </el-form-item>
   <el-form-item label="Dümen İstasyonu">
    <el-input v-model="yacht.helmStation"></el-input>
  </el-form-item>
   <el-form-item label="Dümen Sistemi">
    <el-input v-model="yacht.helmSystem"></el-input>
  </el-form-item>
   <el-form-item label="Navigasyon">
    <el-input v-model="yacht.navigation"></el-input>
  </el-form-item>
   <el-form-item label="Yan Pervane">
    <el-input v-model="yacht.sidePropeller"></el-input>
  </el-form-item>
   <el-form-item label="Su Tankı">
    <el-input v-model="yacht.waterTank"></el-input>
  </el-form-item>
   <el-form-item label="Kirli Su tankı">
    <el-input v-model="yacht.wasteWater"></el-input>
  </el-form-item>
   <el-form-item label="Su Üretici">
    <el-input v-model="yacht.watermaker"></el-input>
  </el-form-item>
    <el-form-item label="Yakıt Deposu">
    <el-input v-model="yacht.fuelTank"></el-input>
  </el-form-item>
     <el-form-item label="Notlar">
    <el-input
  type="textarea"
  :autosize="{ minRows: 2, maxRows: 4}"
  placeholder="Not Giriniz"
  v-model="yacht.note"
>
</el-input>
  </el-form-item>
  
  <el-form-item label="Aktif mi ?">
    <el-switch v-model="yacht.active"></el-switch>
  </el-form-item>
  </el-form>
  <template #footer>
    <span class="dialog-footer">
      <el-button @click="dialogFormVisible = false">İptal</el-button>
      <el-button type="primary" @click="updateYachtInfo(yacht)"
        >Güncelle</el-button
      >
    </span>
  </template>
</el-dialog>

</template>

<script>
import axios from 'axios'
  export default {
    data() {
      return {
        tableData: [
        ],
        dialogFormVisible: false,
        search: '',
           yacht: {
             _id:'',
             architect:'',
          name: '',
          owner: '',
          categoryType: '',
          price: '',
          currency:'',
          description:'',
          design: '',
          interiorDesign: '',
          class: '',
          age: '',
          loa: '',
          lod: '',
          boa: '',
          draft: '',
          deplasman: '',
          speed: '',
          cabinArrangement: '',
          passengerCapacity: '',
          crewCapacity: '',
          mast: '',
          main: '',
          genova: '',
          jib: '',
          mizzen: '',
          machine:'',
          manufacturingType: '',
          vites: '',
          jeneratör: '',
          ac: '',
          electricSystem: '',
          helmStation: '',
          helmSystem: '',
          navigation: '',
          sidePropeller: '',
          waterTank: '',
          wasteWater: '',
          wasteWaterTank: '',
          watermaker: '',
          fuelTank: '',
          active:true,
          desc:'',
          resource:'',
          note:''
        },
        imageUrl:''
      }
    },
    methods: {
      updateYachtInfo(yacht){
         axios.patch(`/yacht/${yacht._id}`,yacht).then((response) => {
          console.log(response);
          if(response.data.success){
            this.$notify({
          title: 'Başarılı',
          message: 'Yat başarıyla güncellendi!',
          type: 'success',
        })
         this.dialogFormVisible = false
          }else{
               this.$notify({
          title: 'Hata',
          message: 'Yat güncellenirken hata!',
          type: 'warning',
        })
          }
        })
       
      },
      handleEdit(index, row) {
        axios.get(`/yacht/${row._id}`).then((response) => {
          console.log(response);
          if(response.data.success){
            this.yacht = response.data.result;
           this.dialogFormVisible = true
          }
        })
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

<style >
.el-dialog--center {
      margin-left: 25% !important;
}
</style>