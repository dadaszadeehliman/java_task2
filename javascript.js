function bank(emekHaqqi, istediyinizMebleg, istediyinizMuddet) {
    if (istediyinizMuddet > 36 || istediyinizMebleg > (emekHaqqi * 10)) {
        return "Size bu sertle kridet dusmur!"
    }
    let y = (((istediyinizMebleg * 13) / 100) + istediyinizMebleg) / istediyinizMuddet;
    let z = (((istediyinizMebleg * 15) / 100) + istediyinizMebleg) / istediyinizMuddet;
    let f = (((istediyinizMebleg * 17) / 100) + istediyinizMebleg) / istediyinizMuddet;
    let x = ((emekHaqqi * 45) / 100)
    if (y > x || z > x || f > x) {
        return "Size bu sertle kridet dusmur!"
    } else if (istediyinizMuddet <= 12) {
        return istediyinizMebleg + " " + "azn mebleg size 13%le" + " " + istediyinizMuddet + " " + "ay muddetinde ayliq" + " " + Math.round(y) + " " + "manat odenisle verilir"
    } else if (istediyinizMuddet > 12 && istediyinizMuddet <= 24) {
        return istediyinizMebleg + " " + "azn mebleg size 15%le" + " " + istediyinizMuddet + " " + "ay muddetinde ayliq" + " " + Math.round(z) + " " + "manat odenisle verilir"
    } else if (istediyinizMuddet > 24 && istediyinizMuddet <= 36) {
        return istediyinizMebleg + " " + "azn mebleg size 17%le" + " " + istediyinizMuddet + " " + "ay muddetinde ayliq" + " " + Math.round(f) + " " + "manat odenisle verilir"
    }
}
let qiymet =bank(5000, 2500, 36) 
console.log(qiymet);