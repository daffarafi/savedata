function Angkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek[0] + " - " + trayek[1];
    this.penumpang = [];
    this.kas = 0
    
    this.penumpangNaik = function(namaPenumpang) {
        if(this.penumpang.length == 0) {
            this.penumpang.push(namaPenumpang)
            return this.penumpang;
        } else {
            if(this.penumpang.some((e) => e == namaPenumpang)) {
                console.log("Penumpang sudah ada!")
                return this.penumpang;
            } else {
                for(let i = 0; i < this.penumpang.length; i++) {
                    if(this.penumpang[i] == undefined) {
                        this.penumpang.splice(i, 1, namaPenumpang);
                        return this.penumpang;
                    } else if(i == (this.penumpang.length - 1)) {
                        this.penumpang.push(namaPenumpang);
                        return this.penumpang
                    }
                }
            }
            
        }
    }
    
    this.penumpangTurun = function(namaPenumpang, biaya) {
        if(this.penumpang.length == 0 || this.penumpang.every((e) => e == undefined)){
            console.log("Angkot kosong!")
            return this.penumpang;
        } else {
            if(this.penumpang.some((e) => e == namaPenumpang)) {
                for(let i = 0; i < this.penumpang.length; i++) {
                    if(namaPenumpang == this.penumpang[i]) {
                        this.penumpang.splice(i, 1, undefined)
                        this.kas += biaya;
                        return this.penumpang
                    }
                }
            } else {
                console.log("Tidak ada penumpang yang bernama " + namaPenumpang)
                return this.penumpang;
            }
        }
    }
}

let angkot1 = new Angkot("Udil", ["Pondok Gede", "Taman Mini"], [], 0)
