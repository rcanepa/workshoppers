var argv_num = process.argv.length;
var total = 0;

if( argv_num > 2 ){
  for(var i = 2; i < argv_num; i++){
    total = total + Number(process.argv[i]);
  }
}

console.log(total);