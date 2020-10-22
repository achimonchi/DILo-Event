# Modul Javscript

## Daftar Isi
- [I. Requirements](#i-requirements)
- [II. Javascript](#ii-javascript)
    - [II.1 Dasar](#II1-Review)
        - [II.1.1 Variable Dan Tipe Data](#II11-Variable-Dan-Tipe-Data)
        - [II.1.2 Logic](#II12-Logic)
        - [II.1.3 Operator](#II13-Operator)
        - [II.1.4 Event Loop](#II14-Event-Loop)
        - [II.1.5 Array dan Object](#II15-Array-dan-Object)
        - [II.1.6 ES6 Tambahan](#II16-ES6-tambahan)
            - [II.1.6.1 Arrow Function](#II161-Arrow-Function)
            - [II.1.6.2 Default Parameter](#II162-Default-Parameter)
            - [II.1.6.3 Spread Operator](#II163-Spread-Operator)
            - [II.1.6.4 Array Methods](#II164-Array-Methods)
                - [II.1.6.4.1 Map](#II1641-Map)
                - [II.1.6.4.2 Filter](#II1642-Filter)
                - [II.1.6.4.3 Reduce](#II1643-Reduce)
    - [II.1.8 Debugging](#II18-Debugging)
        - [II.1.8.1 Console](#II181-Console)
        - [II.1.8.2 Typeof](#II182-Typeof)
---

## I. Requirements

| Nama | Versi |
| ---- | ---- |
| Visual Studio Code | - |
| Browser | Terbaru |
---
## II. Javascript

### II.1 Dasar
#### II.1.1 Variable Dan Tipe Data
Variable, adalah sebuah tempat untuk menyimpan suatu nilai. Pada Javascript, ada 3 jenis dari variable, yaitu `var`, `let`, `const`. Apa perbedaannya? 

1. `var`

`var` adalah jenis variable yang pertama kali muncul pada Javascript. contoh penggunaan:
```javascript
var nama = "NooBeeCamp"
console.log(nama) // NooBeeCamp
```
Namun, pada `var` terdapat beberapa kekurangan, yaitu :
  - Bisa di Re-Assign
    
    Dengan `var`, kita bisa melakukan Re-Assign variable. Yang mana hal ini tentu akan menyebabkan banyak sekali bug pada aplikasi yang akan kita bangun
    ``` Javascript
    var nama = "NooBeeCamp"
    var nama = "NooBeeID"
    console.log(nama) // NooBeeID
    ```
    Bisa dilihat, bahwa kita bisa melakukan re-assign terhadap variable nama tadi.

  - Hoisting

    Hoisting adalah mengangkat, yang mana dalam artian deklarasi variable akan diangkat keatas.
    ``` javascript
    nama = "NooBeeCamp"
    console.log(nama) // NooBeeID
    var nama
    ```
    Hal ini tentu menyebabkan bug pada aplikasi kita yang susah untuk di `tracing`
  - Tidak ada Scope

    ```javascript
        var nama = "NooBeeCamp"
        if(true){
            var nama = "NooBeeID"
        }
        console.log(nama) // NooBeeID
    ```
    bisa di handle menggunakan anonymus function
    ```javascript
    var nama = "NooBeeCamp"
    function myFunction(){
        var nama = "NooBeeID"
    }
    myFunction()
    console.log(nama) // NooBeeCamp
    ```
    atau bisa juga menggunakan Anonymus IIFE (Immediately Invoke Function Expression)
    ```javascript
    var nama = "NooBeeCamp";
    (function(){
        var nama = "NooBeeID"
    })()
    console.log(nama) // NooBeeCamp
    ```

  - Tanpa var, maka akan dianggap global variable
    ```javascript
    nama = "NooBeeCamp";
    console.log(nama) // NooBeeCamp
    ```
    Itu sebabnya, `var` disarankan untuk tidak digunakan.

2. `let`
    Cara kerja pada `let` sama dengan `var`, namun bedanya ialah `let` itu mempunyai `scope`. Adapun, `let` mampu menyelesaikan permasalahan yang ada pada `var` yaitu :

- Re-assign
    ```javascript
    let nama = "NooBeeCamp";
    let nama = "NooBeeID";
    console.log(nama) // SyntaxError: Identifier 'nama' has already been declared
    ```
- Hoisting
    ```javascript
    nama = "NooBeeCamp";
    console.log(nama) // ReferenceError: Cannot access 'nama' before initialization
    let nama
    ```
- Mempunyai Scope
    ```javascript
    let nama = "NooBeeCamp";
    if(true){
        let nama = "NooBeeID"
    }
    console.log(nama) // NooBeeCamp
    ```

- Untuk problem ke4, tidak bisa dikarenakan secara default, memang sudah ditetapkan untuk `var`

3. `const`
    
    `const` adalah variable statis, yang berguna untuk data yang bersifat tidak akan diubah / tidak bisa diubah. Contoh :
    ```javascript
    const nama = "NooBeeCamp";
    nama = "NoobeeID";
    console.log(nama) // TypeError: Assignment to constant variable.
    ```
    Namun, hal ini tidak berlaku untuk tipe object dan array. 
    ```javascript
        // array menggunakan method push
        const mhs = ["mhs1", "mhs2", "mhs3"];
        console.log(mhs) // [ 'mhs1', 'mhs2', 'mhs3' ]
        mhs.push("mhs5")
        console.log(mhs) // [ 'mhs1', 'mhs2', 'mhs3', 'mhs5' ]

        // object
        const people = {
            name : "NooBeeID",
            addrss : "Rumbai"
        }
        console.log(people) // { name: 'NooBeeID', addrss: 'Rumbai' }

        people.addrss = "Panam"
        console.log(people) // { name: 'NooBeeID', addrss: 'Panam' }
    ```

Adapun, untuk tipe data adalah :
- Primitive
    ```javascript
    let a = 3 // number
    let b = "tiga" // string
    let c = 3.3 // float
    let d = true; // boolean
    console.log(a,b,c,d) // 3 tiga 3.3 true
    ```
- Object
    ```javascript
    const people = {
        name : "NooBeeID",
        address : "Rumbai"
    }
    console.log(people) // { name: 'NooBeeID', address: 'Rumbai' }
    ```

#### II.1.2 Logic
Untuk AND Notation :
| | TRUE | FALSE |
| --- | --- | ---- |
|TRUE   | TRUE      | FALSE |
|FALSE  | FALSE     | FALSE |

Untuk OR Notation :
| | TRUE | FALSE |
| --- | --- | ---- |
|TRUE   | TRUE      | TRUE |
|FALSE  | TRUE      | FALSE |


#### II.1.3 Operator
- Penjumlahan
    ```javascript
    // Penjumlahan
    let a = 300;
    let b = 400;
    let c = a + b;
    console.log(c) // 700
    ```
- Pengurangan
    ```javascript
    // Pengurangan
    let x = 100;
    let y = 50;
    let z = x - y;
    console.log(z) // 50
    ```
- Perkalian
    ```javascript
    // Perkalian
    let stock = 4;
    let price = 1000;
    let total = stock * price;
    console.log(total) // 4000
    ```
- Pengurangan   
    ```javascript
    // Pembagian
    let sum = 150;
    let count = 5;
    let avg = sum / count;
    console.log(avg); // 30
    ```

#### II.1.4 Event Loop
- While 

    Pada looping `while`, akan melakukan perulangan sampai kondisi didalam `while` bernilai `false`.
    ```javascript
    // while
    let i = 10;
    while(i>0){
        console.log(i)
        i--;
    }

    // 10 9 8 7 6 5 4 3 2 1
    ```
- Do While
    ```javascript
    // do while
    let x = 10
    do{
        console.log(x)
        x--;
    } while(x>0)
    // 10 9 8 7 6 5 4 3 2 1
    ```

    Do While akan melakukan proses `do` terlebih dahulu, dan baru melakukan pengecekan terhadap `while`. 
    ```javascript
    let z = 0;
    do {
        console.log(z);
        z--;
    } while(x>0)
    // 0
    ```


- For
    
    Pada looping `for`, akan di definisikan counternya dan melakukan increament dalam tanda kurung `()`
    ```javascript
    // for
    for(let i=0; i<5; i++){
        console.log(i)
    }
    // 0 1 2 3 4
    ```

#### II.1.5 Array dan Object
- Array
    
    Array adalah suatu tempat untuk menyimpan data, yang bisa menampung banyak data. Di javascript, array mampu menyimpan data dengan banyak tipe data. Contohnya :
    ```javascript
    let arr = ["arr1", 2, "arr3"];
    console.log(arr) // [ 'arr1', 2, 'arr3' ]
    ```
    Namun meskipun begitu, disarankan untuk menggunakan tipe data yang sama dalam 1 array.
    ```javascript
    let fruits = ["Apple", "Orange", "Banana"];
    console.log(fruits); // [ 'Apple', 'Orange', 'Banana' ]
    ```
- Object

    Object adalah sebuah variable yang menyimpan berbagai macam properti dan method. Contohnya :
    ![object](./materi/image/object.png)

    Properti adalah sebuah nilai yang dipunyai oleh si object. Misal, seperti contoh diatas, ada `name`, `model`, `weight`, dan `color`. 
    
    Sedangkan Method, adalah apa yang bisa dilakukan oleh si object. Seperti contoh diatas, ada `start()`, `drive()`, `brake()`, dan `stop()`

    Adapun, contoh object adalah sebagai berikut :
    ```javascript
    let mhs = {
        name : "NooBee", // attribute / properti
        nim : "123-xxx-yyy", // attribute / properti
        belajar : function(){ // method / fungsi
            console.log(`${this.name} sedang belajar`)
        }
    }

    mhs.belajar() // NooBee sedang belajar
    console.log(mhs.name) // NooBee
    console.log(mhs.nim) // 123-xxx-yyy
    ```

    Berikut adalah beberapa cara untuk membuat object :
    - Object Literal / JSON
        ```javascript
        // object literal 
        const car = {
            color : "white",
            name : "CRV",
            year : 2000
        }

        console.log(car) // { color: 'white', name: 'CRV', year: 2000 }
        ```
        
    - Function Declaration

        Proses pembuatan object dilakukan didalam sebuah fungsi, yang mana fungsi tersebut akan me-return sebuah object.

        ```javascript
        function createObject(color, name, year){
            const car = {color:color, name:name, year:year};
            return car;
        }

        const car = createObject("white", "CRV", 2000)

        console.log(car) // { color: 'white', name: 'CRV', year: 2000 }
        ```
        Namun, coding diatas bisa kita singkat seperti ini :
        ```javascript
        function createObject(color, name, year){
            const car = {color, name, year}; 
            // jika nama attributenya sama dengan value nya, maka cukup dengan mendefinisikan variable value nya saja.
            // namun jika berbeda, harus mendefinisikan nama attribute-nya

            return car;
        }

        const car = createObject("white", "CRV", 2000)

        console.log(car) // { color: 'white', name: 'CRV', year: 2000 }
        ```
    - Constructor Function    

        Mirip dengan function declaration, namun pada Constructor Function kita akan membuat sebuah fungsi, namun diawali dengan huruf **capital**, dan keyword nya menggunakan `new`. Hal ini mirip dengan penggunaan `Class` pada paradigma OOP atau Object Oriented Programming.

        ```javascript
        function Car (color, name, year){
            this.color = color;
            this.name = name;
            this.year = year;
        }

        const car = new Car("white","CRV",2000);
        console.log(car) // Car { color: 'white', name: 'CRV', year: 2000 }
        ```  
        

#### II.1.6 ES6 Tambahan
ES adalah kepanjangan dari ECMAScript, yang mana merupakan standarisasi scripting language (javascript) yang dibuat oleh European Computer Manufacturers Association (ECMA). Jadi bisa dibilang, ECMAScript itu adalah standarisasinya, dan javascript adalah toolsnya. ES6 adalah ECMAScript yang diluncurkan pada tahun 2015. Jadi, ES6 dan ES2015 itu sama saja.
##### II.1.6.1 Arrow Function
Arrow function adalah sebuah teknik dalam menulis function. Berikut contohnya :
```javascript
// js biasa
function getData(){
    // ... process here
}

// pada ES6
const getData = () =>{
    // ...process here
}
```


##### II.1.6.2 Default Parameter
Kita bisa memasukkan nilai default pada parameter.
```javascript
const getData = (url, data={name:"default"}) => {
    // ... process here
}
```


##### II.1.6.3 Spread Operator
Spread operator berfungsi untuk memasukkan beberapa arguments kedalam array, maupun sebaliknya. Berikut contohnya :
```javascript
function getData(name, email, password){
    console.log(name, email, password)
}

let mhs = ["NooBee", "team@noobee.id", "password"];
getData(...mhs) // NooBee team@noobee.id password
```
Pada parameter di fungsi getData, membutuhkan name, email, dan password. Dan pada array mhs, kita memasukkan name email dan password secara berurutan. Spread operator tidak hanya bisa digunakan pada parameter, namun bisa juga pada memasukkan / memindahkan sebuah array. Contoh :
```javascript
let d1 = [1,2,3,4,5];
let d_copy = [...d1];
console.log(d1, d_copy); // d1 dan d_copy akan menghasilkan data yang sama

let d_new = [...d1, 6,7,8,9];
console.log(d1, d_new); // [1,2,3,4,5,6,7,8,9]
```
Pada `d_new`, akan memasukkan data `d1` dan ditambahkan dengan data yang `d_new` miliki.

##### II.1.6.4 Array Methods
Array methods, adalah method yang bisa digunakan untuk data yang bersifat Array. Adapun beberapa macam method adalah sebagai berikut :
##### II.1.6.4.1 Map
Map berfungsi untuk melakukan looping terhadap isi array. Biasanya, kita akan melakukan hal ini untuk menampilkan / looping data dari suatu array :
```javascript
const fruits = ["Apple", "Mango", "Orange"];

for(let i=0; i < fruits.length; i++){
    console.log(fruits[i]); // Apple Mongo Orange
}
```
Dengan menggunakan Map, kita bisa lebih mudah dalam melakukan perulangan. Contohnya :

```javascript
fruits.map(function(item){
    console.log(item); // Apple Mango Orange
})

```
atau bisa menggunakan `arrow function` :
```javascript
fruits.map((item)=>{
    console.log(item); // Apple Mango Orange
})
```
##### II.1.6.4.2 Filter
Filter adalah sebuah method yang berfungsi untuk menyaring / mencari data yang ada pada array. Berbeda dengan `String.search()`, yang berfungsi untuk mencari `string` di dalam `string`. `Array.filter()` berfungsi untuk mencari data didalam sebuah array. 

```javascript
const numbers = [10, 8, 3, 6, 9, 4, 7];

const odd = numbers.filter((num)=>{
    return num % 2 !== 0;
})

console.log(odd) // [ 3, 9, 7 ]
```



```javascript

```
##### II.1.6.4.3 Reduce
Method reduce, berfungsi untuk melakukan operasi di dan mereturn sebuah nilai. Misalnya, dalam mencari total transaksi, total populasi, dan lain lain.
```javascript
const transactions = [
    13, 15, 32, 9, 50, 34, 60
]

const sum = transactions.reduce((val, element)=>{
    return val + element
}, 0 /* initial value */)

console.log(sum) // 213
```
Cara kerjanya sama dengan `map()`. Pada `val` adalah nilai hasil dari penjumlahan. Karena kita initialisasi valuenya `0`, maka nilai `val` awal adalah `0`. `element` adalah variable yang menamping dari isi arraynya. Jadi, nilai awal element adalah 13. Dan bakal dilooping terus menerus sampai data di `transactions` selesai.

#### II.1.8 Debugging
Debugging, adalah hal yang wajib diketahui oleh setiap programmer. Debugging merupakan proses dalam `tracing` code program yang bermasalah, untuk mencari akar masalahnya. Adapun, beberapa yang bisa kita manfaatkan untuk debugging adalah sebagai berikut :
##### II.1.8.1 Console
Javascript selalu bermain dengan console. Seperti yang selalu kita gunakan, yaitu `console.log()`, `console.error()`, dan yang lainnya. Untuk proses debugging, kita bisa menggunakan `console.log()`. Hal ini bertujuan untuk melakukan pengecekan terhadap data yang ingin kita console.
Contohnya :

```javascript
function a(){
    return false;
}

const b = a();
if(b){
    // proses yang seharusnya
}
```
Potongan kode diatas, akan menyebabkan bug yang mana nilai b sebenarnya adalah `false` dan tidak akan pernah diproses. Hal ini bisa kita lakukan pengecekan terhadap isi dari variable b, dengan cara `console.log(b)`. Setelah mendapatkan datanya, tinggal di tracing ke asalnya. Dan akan mendapatkan sumber masalahnya.

##### II.1.8.2 Typeof
Typeof berguna untuk mencari tahu, tipe data dari suatu variable. Hal ini memudahkan kita untuk mengetahui apakah suatu variable adalah string, integer, array, object, null, atau yang lainnya. Contohnya :

```javascript
const a = "1";
const b = 1;
const c = true;
const d = [5, 6, 7];
const e = {name : "NooBee"};
const f = null;
const g = undefined;

console.log({
    a : typeof a,
    b : typeof b,
    c : typeof c,
    d : typeof d,
    e : typeof e,
    f : typeof f,
    g : typeof g,
    h : typeof h,
}) 
/*  
    {
        a: 'string',
        b: 'number',
        c: 'boolean',
        d: 'object',
        e: 'object',
        f: 'object',
        g: 'undefined',
        h: 'undefined'
    }
*/
```
Setelah kita mengetahui tipe data dari variable yang bermasalah, maka kita bisa melakukan hal selanjutnya / proses variable tersebut agar bisa mendapatkan data yang diinginkan.

---