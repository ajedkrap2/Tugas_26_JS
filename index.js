var deret = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]

function tugas26(x){
  for (var i = 0; i < x.length; i++) {
    if (isFinite(x[i])){
      console.log("Angka "+ x[i] +" NOT Infinity");
    }
    else{
      console.log("Angka "+ x[i] +" Infinity Banget");
    }
  }
}

tugas26(deret);
