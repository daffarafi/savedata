let penumpang = []; // Penumpang berupa Array

function tambahPenumpang(namaPenumpang, arrayPenumpang) { // Function ketika penumpang naik
    if(arrayPenumpang.length == 0) {
        arrayPenumpang.push(namaPenumpang);
        return arrayPenumpang;
    } else {
        for(let i = 0; i < arrayPenumpang.length; i++) {
            if(arrayPenumpang.some((e) => e == namaPenumpang)) {
                alert("Penumpang sudah ada!")
                return arrayPenumpang
            } else if(arrayPenumpang[i] == undefined) {
                arrayPenumpang.splice(i, 1, namaPenumpang)
                return arrayPenumpang
            } else if(i == (arrayPenumpang.length - 1)) {
                arrayPenumpang.push(namaPenumpang);
                return arrayPenumpang
            }
        }
    }
}


function hapusPenumpang(namaPenumpang, arrayPenumpang) { // Function ketika penumpang turun
    if(arrayPenumpang.length == 0 || arrayPenumpang.every((e) => e == undefined)) {
        alert("Angkot kosong!")
        return arrayPenumpang
    } else {
        for(let i = 0; i < arrayPenumpang.length; i++) {
            if(arrayPenumpang.some((e) => e == namaPenumpang)) {
                for(let j = 0; j < arrayPenumpang.length; j++) {
                    if(namaPenumpang == arrayPenumpang[j]) {
                        arrayPenumpang.splice(j, 1, undefined);
                        return arrayPenumpang
                    }
                }            
            } else {
                alert("Tidak ada yang bernama " + namaPenumpang + " di dalam angkot!")
                return arrayPenumpang            
            }
        }
        
    }
}