const XLSX = require('xlsx')
const data = [
    ['col1','col2','col3','col4'],
    [1,2,3,'data'],
    [3,2,1,'row 2']
]
const workbook = XLSX.utils.book_new()
const sheetName = 'test'
const sheet = XLSX.utils.aoa_to_sheet(data)
XLSX.utils.book_append_sheet(workbook, sheet, sheetName)
XLSX.writeFile(workbook, 'miexcel.xlsx')