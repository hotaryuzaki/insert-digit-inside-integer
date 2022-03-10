# insert-digit-inside-integer
the task is we have to returns the maximum possible value obtained by inserting one "5" digit inside the decimal of integer.
integer within the range -8000 to 8000 (actually -999 to 999 because we have to insert 1 digit)

### FUNCTION
you can copy this or download from index.js

```
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
```

### DEMO
just copy this to HTML file

```
<!DOCTYPE html>
<html>
<body>

<h2>Insert Digit Inside Integer</h2>

<button type="button" onclick="lari(document.getElementById('demo').innerHTML)">
  Insert 5 maximum possible
</button>

<p id="demo">result here</p>

<script>
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

const test = arr[0];
const proses = insertLima(test);

function lari(text) {
    document.getElementById('demo').innerHTML = "hasil angka dari " + test + " adalah " + proses;
}
</script>
</body>
</html> 
```
