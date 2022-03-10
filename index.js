const arr = [268, 670, 0, -111, -299, 999, 24, 56, -56]

const insertLima = (angka) => {
    if (angka >= -999 && angka <= 999) {
        const angkaStr = angka.toString();
        const pecahan = angkaStr.split("");
        let hasil;
        let pembanding = angkaStr[0] == '-' ? 'lebih dari' : 'kurang dari';

        pecahan.some((value, index) => {
            if (pembanding === "kurang dari") {
                if (value < 5) {
                    hasil = appendString(angkaStr, index, 5);
                    return true;
                }
            } else {
                if (value > 5) {
                    hasil = appendString(angkaStr, index, 5);
                    return true;
                }
            }
            
            if (index === pecahan.length - 1) hasil = appendString(angkaStr, index + 1, 5);
        })

        return hasil;
    }

    return false;
}

const appendString = (str, index, stringToAdd) => {
    return str.substring(0, index) + stringToAdd + str.substring(index, str.length);
}

const proses = insertLima(arr[8]);
console.log('hasil angkanya', proses);
