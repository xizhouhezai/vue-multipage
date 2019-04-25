import XLSX from 'xlsx'

export const saveExcel = (filedom) => {
  return new Promise((resolve, reject) => {
    let transformData

    let fileType = filedom.name.split('.')
    fileType = fileType[fileType.length - 1]

    if (fileType.indexOf('xls') < 0) {
      reject('请上传Excel表格')
    }

    let reader = new FileReader()
    reader.readAsBinaryString(filedom, 'UTF-8')

    reader.onload = (event) => {
      let data = event.target.result;
      let fileData = XLSX.read(data, {
        type: 'binary'
      })
      transformData = XLSX.utils.sheet_to_json(fileData.Sheets[fileData.SheetNames[0]])
      resolve(transformData)
    }
  })
}