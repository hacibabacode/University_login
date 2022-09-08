document.addEventListener("DOMContentLoaded", function (event) {

  var numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  var getFirstDigit = function (number) {
      return parseInt(number / 10); // 10 LUK ALMAK İÇİN
  }

  var getLastDigit = function (number) {
      return parseInt(number % 10); // BİRLER BASAMAK İÇİN
  }

  
 // SET INTERVAL ZAMAN FONK.
  setInterval(function () { // var= sonradan değiştirilmeyecek. let= içeriği değiştirilebilir. //const bu da sabit var gibi. 
      var myDate = new Date();  //  ZAMAN İÇİN KULLANILAN HAZIR FONK. DİREK PC ÇEKER.
      var hours = myDate.getHours();
      var minutes = myDate.getMinutes();
      var seconds = myDate.getSeconds();


      let hoursFirst = document.querySelectorAll(".digit.hoursFirst")[0];// DOM OBJESİNE BAĞLI SEÇİCİ İLE CLASSI SEÇİYORUZ:)
      hoursFirst.removeAttribute('class'); // 0 İSE CLASIN İLK ELEMANI ALMAK İÇİN 
      hoursFirst.classList.add('digit'); // YENİ CLASS EKLER.
      hoursFirst.classList.add('hoursFirst');
      hoursFirst.classList.add(numbers[getFirstDigit(hours)]);

      let hoursLast = document.querySelectorAll(".digit.hoursLast")[0];
      hoursLast.removeAttribute('class'); // CLASSI AİT SINIF ÖZ NİTELİĞİ KALDIRIP BÖYLECE BU ÖĞEYE EKLENEN BÜTÜN STİLLER VE SINIFLAR KALDIRILACAKTIR.
      hoursLast.classList.add('digit');
      hoursLast.classList.add('hoursLast');
      hoursLast.classList.add(numbers[getLastDigit(hours)]);


      
      let minutesFirst = document.querySelectorAll(".digit.minutesFirst")[0];
      minutesFirst.removeAttribute('class');
      minutesFirst.classList.add('digit');
      minutesFirst.classList.add('minutesFirst');
      minutesFirst.classList.add(numbers[getFirstDigit(minutes)]);

      let minutesLast = document.querySelectorAll(".digit.minutesLast")[0];
      minutesLast.removeAttribute('class');
      minutesLast.classList.add('digit');
      minutesLast.classList.add('minutesLast');
      minutesLast.classList.add(numbers[getLastDigit(minutes)]);

     
      let secondsFirst = document.querySelectorAll(".digit.secondsFirst")[0];
      secondsFirst.removeAttribute('class');
      secondsFirst.classList.add('digit');
      secondsFirst.classList.add('secondsFirst');
      secondsFirst.classList.add(numbers[getFirstDigit(seconds)]);

      let secondsLast = document.querySelectorAll(".digit.secondsLast")[0];
      secondsLast.removeAttribute('class');
      secondsLast.classList.add('digit');
      secondsLast.classList.add('secondsLast');
      secondsLast.classList.add(numbers[getLastDigit(seconds)]);
  }, 1000); // BİR SANİYE


});

