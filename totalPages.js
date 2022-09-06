const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  if((rowsPerPage == null || undefined) || rowsPerPage == 0){
    return 1
  }else if(arrayItems == null || undefined){
    return undefined
  }else{
    let ans = Math.ceil(arrayItems.length / rowsPerPage)
    return ans
  }
}
module.exports = totalPages
