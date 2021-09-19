<template>
    <el-form ref="form" :model="yacht" label-width="120px">
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
   <el-form-item label="Yat Adı">
    <el-input v-model="yacht.owner"></el-input>
  </el-form-item>
   <el-form-item label="Ücret">
    <el-input v-model="yacht.price"></el-input>
  </el-form-item>
   <el-form-item label="Dizayn">
    <el-input v-model="yacht.design"></el-input>
  </el-form-item>
   <el-form-item label="Mimar">
    <el-input v-model="yacht.interiorDesign"></el-input>
  </el-form-item>
   <el-form-item label="Sınıf">
    <el-input v-model="yacht.class"></el-input>
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
    
  
  <el-form-item label="Aktif mi ?">
    <el-switch v-model="yacht.active"></el-switch>
  </el-form-item>
   <ul>
    <li v-for="file in files" :key="file">{{file.name}} - Error: {{file.error}}, Success: {{file.success}}</li>
  </ul>
  <el-form-item>
    Resim Seçiniz
    <input type="file" @change="imageChange" name="image" ref="files" multiple>
  </el-form-item>
  <div>
    <p v-for="(image,index) in images" :key="index">{{image.name}}</p>
  </div>
   <!-- <el-form-item>
         <el-upload
  class="upload-demo"
  ref="upload"
  :action="url"
  :auto-upload="false"
  multiple
>
  <template #trigger>
    <el-button size="small" type="primary">select file</el-button>
  </template>
  <el-button
  
    size="small"
    type="success"
    @click="submitUpload"
    >upload to server</el-button
  >
  <template #tip>
    <div class="el-upload__tip">jpg/png files with a size less than 500kb</div>
  </template>
</el-upload>
   </el-form-item> -->
  <el-form-item>
    <el-button type="primary" @click="onSubmit">Yat Oluştur</el-button>
    <el-button>İptal</el-button>
  </el-form-item>
 
</el-form>

</template>

<script>
import axios from 'axios'
export default {
 data() {
      return {
        files: [],
        images:[],
        url:'https://aganlar-backend.herokuapp.com/api/v1/?id=613a9af594b27000158b91f7',
        id:'',
        yacht: {
          name: '',
          owner: '',
          categoryType: '',
          price: '',
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
          resource:''
        },
      }
    },
    methods: {
      imageChange(){
        for (let index = 0; index < this.$refs.files.files.length; index++) {
        
        this.images.push(this.$refs.files.files[index])
          console.log(this.images);
        }
      },
  
      onSubmit() {
        let formData = new FormData();
        for (let index = 0; index < this.images.length; index++) {
        let file = this.images[index];
        formData.append('photo',file)
        }
       let result = Object.keys(this.yacht).map((key) => [key, this.yacht[key]]);
        for (let index = 0; index <result.length; index++) {
          console.log(result[index]);
          formData.append(result[index][0],result[index][1])
          
        }
        axios.post('/yacht',formData).then((response) => {
            if(response.data.success){
               console.log("başarıyla yüklendi");
               location.reload();
            }
            console.log(response);
        }).catch((err) => {
            console.log(err);
        })
      },
      submitUpload() {
        // console.log(this.$refs.upload);
       
      },
    },
}
</script>

<style>

</style>