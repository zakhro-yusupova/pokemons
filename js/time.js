function dateFormat (format){

var dates = new Date (format);
  var day = String(dates.getDate()).padStart(2, 0);
var month = String(dates.getMonth() + 1).padStart(2, 0);
var year = dates.getFullYear();
var minutes = String(dates.getMinutes()).padStart(2, 0);
var seconds = String(dates.getSeconds()).padStart(2, 0);

return `${minutes}: ${seconds}`;
}

console.log(dateFormat());