

// Conditinal statements if - else  if-else
// Switch case

let a = 10;

switch (a > 5) {
    case false:
        console.log(a + " 5 ten büyük degil.");
        break; // break yazmazsak yazgimiz üc seyde consolda gözüküyor
    case true:
        console.log(a + " 5 ten büyük.");
        break;
    default:  // default = varsayilan
        console.log("default");
        break;
}

let newDate = new Date();
console.log("new date: " + newDate.getDay());

switch (newDate.getDay()) { //0,1,2....6
    case 0:
        console.log("sunday");
        break;

    case 1:
        console.log("monday");
        break;

    case 2:
        console.log("tuesday");
        break;

    case 3:
        console.log("wednesday");
        break;

    case 4:
        console.log("thursday");
        break;

    case 5:
        console.log("friday");
        break;

    case 6:
        console.log("saturday");
    // en sona break yazmaya gerek yok 
}


switch (newDate.getDay()) {
    case 4: // 4 ve 5 ayni kodu paylasir DONT REPEAT YOURSELF DRY
    case 5:
        console.log("haftasonuna yaklastin");
        break;
    case 0:
    case 6:
        console.log("haftasonu");
        break;

    default:
        console.log("haftasonu gelmek üzere");
}


//loops
//while , do && while , for

let i = 0, n = 5;

while (i <= n) {
    console.log("while loop: " + i)
    i++;
}


/*let number = prompt("Enter a number: ");
console.log ("type: " + (typeof number));
console.log("type: " + (typeof parseInt(number))); //parseInt tipini sayiya cevirir. */

//   let number = parsInt(prompt("Enter a number: ")); seklinde de direk bastan belirleyebilirsin.



let sum = 0;
let number = parseInt(prompt("Enter a number: "));

while (number >= 0) {
    sum += number; //1.döngü sum = 0 + 20 + 5;
    number = parseInt(prompt("Enter a number: "));
}
console.log("toplam: " + (sum));









let i2 = 6, n2 = 5;  // do önce yazildigi icin "6" output olarak cikar.ama loop olmaz sadece while ile loop yapsaydin "6" yi bile yazmazdik.

let sum2 = 0, number2 =0;

do {
    console.log("do while loop: " + (i2));
    i2++;
}
while (i2 <= n2);



do{
    sum2 += number2 ; // 0 + 20 sum2 =20
    number2= parseInt (prompt("enter an amount: "));

}
while(number2>=0);
console.log("sum2: " + sum2);







// for loop

for( let i3=1; i3<=5; ++i3){
    console.log("For loop: " + i3);
}


for(let sum3 =0 , number3 =0; number3 >= 0; sum3+=number3){
    number3 = parseInt(prompt("enter a amount (for): "));

    if(number3 < 0){
        console.log("Sum3: " + sum3 );
        break;
    }
}

// 1-50 arasindaki cift sayilari consolda listeleyen js kodunu yaz (for döngüsü ile yap)

for (let a = 1; a<=50; a++){
    if( a % 2 == 0){
        console.log("a: " + a);
    }
}


let cars = ["mazda", "opel", "tofas", "bmw"];

for( let index = 0; index < cars.length; index++){
    const element = cars[index];
    console.log("Car: " + element);
} 

// 1-40 arasi sayilardan 3'e ve 5'e völünen sayilari konsola yazdir

for( let b = 1; b<=40; b++){
    if( b %15 == 0){
        console.log("B: " + b);
    }
}

// bilgisayar 1-100 arasinda bir sayi üretecek ve biim tahminde bulunmamizi isteyecek
// üretilen sayidan kücükse "kücük sayi girdiniz" ,büyükse "büyük sayi girdiniz" yazdir, bildiyse "tebrikler" yazdir.

let hedef  =  Math.floor(Math.random()*100+1); // 0-99
console.log("hedef: " + hedef);
let tahmin;

while(true){
    tahmin = parseInt(prompt("bir tahmin giriniz"));
    if(tahmin > hedef){
        alert("Büyük sayi girdiniz");
    }
    else if(tahmin < hedef ){
        alert("kücük sayi girdiniz");
    }
    else if (tahmin == hedef){
        alert("tebrikler");
        break;  //break demezsen bilsen bile tahmin etmeni bekler ,döngü bitmez
    }


}










