<template>
  <div class="upload">
    <div>
      <input type="file" name="upload" id="upload" @change="change">
    </div>
    <div class="upload-box">
      <div class="excel-header">
        <p v-for="(item, index) in tableHeader" :key="index">{{ item }}</p>
      </div>
      <div class="excel-body">
        <div class="excel-tr" v-for="(item, index) in transformData" :key="index">
          <p class="excel-td" v-for="(item1, index1) in tableHeader" :key="index1">{{ item[item1] }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { saveExcel } from '@/utils/upload.js'

export default {
  data() {
    return {
      transformData: [],
      tableHeader: []
    }
  },
  methods: {
    change(e) {
      saveExcel(e.target.files[0]).then((data) => {
        this.transformData = data;
        
        this.tableHeader = Object.keys(this.transformData[0]);
        window.console.log(this.tableHeader)
      }, (err) => {
        window.console.log(err)
      })
    }
  },  
}
</script>

<style>
.upload-box {
  margin-top: 20px;
}
.excel-header, .excel-body .excel-tr {
  display: flex;
  flex-direction: row;
}
.excel-header p, .excel-body .excel-tr p {
  overflow: hidden;
  width: 150px;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
</style>
