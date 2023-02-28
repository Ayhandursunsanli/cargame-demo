
const selectOperations = document.querySelector('.operation_type');
const start_game_btn = document.querySelector(".start_game");

const player_options = document.querySelector('.player_options');
const race_section = document.querySelector('.race');
const play_ground_section = document.querySelector('.play_ground');

let  number_one_html = document.querySelector(".number_one"); 
let  number_two_html = document.querySelector(".number_two");
let  operation_html = document.querySelector(".operation");



let numberOne = [];
let numberTwo = [];
let operator;

start_game_btn.addEventListener("click", ()=> {
    const selectDigits1 = document.querySelector('.number_of_digits_1').value;
    if (selectDigits1 === "1") {
        for (let i = 0; i < 10; i++) {
            let randomNum = Math.floor(Math.random() * 10);
            numberOne.push(randomNum);
        }
    } 
    else if (selectDigits1 === "2") {
        for (let i = 0; i < 10; i++) {
            let randomNum = Math.floor(Math.random() * 90) + 10;
            numberOne.push(randomNum);
        }
    } 
    else if (selectDigits1 === "3") {
        for (let i = 0; i < 10; i++) {
            let randomNum = Math.floor(Math.random() * 900) + 100;
            numberOne.push(randomNum);
        }
    }



    const selectDigits2 = document.querySelector('.number_of_digits_2').value;

    if (selectDigits2 === "1") {
        for (let i = 0; i < 10; i++) {
            let randomNum = Math.floor(Math.random() * 10);
            numberTwo.push(randomNum);
        }
    } 
    else if (selectDigits2 === "2") {
        for (let i = 0; i < 10; i++) {
            let randomNum = Math.floor(Math.random() * 90) + 10;
            numberTwo.push(randomNum);
        }
    } 
    else if (selectDigits2 === "3") {
        for (let i = 0; i < 10; i++) {
            let randomNum = Math.floor(Math.random() * 900) + 100;
            numberTwo.push(randomNum);
        }
    }
    
    const operationType = selectOperations.value;
    
    if (operationType === "+") {
        operator = "+";
    }
    else if (operationType === "-") {
        operator = "-";
    } 
    else if (operationType === "*") {
        operator = "*";
    }   
    else if (operationType === "/") {
        operator = "/";
    }

    var randomIndex1 = Math.floor(Math.random() * numberOne.length);
    var selectedNumber1 = numberOne[randomIndex1];
    
    var randomIndex2 = Math.floor(Math.random() * numberTwo.length);
    var selectedNumber2 = numberTwo[randomIndex2];

    number_one_html.innerHTML = selectedNumber1;
    number_two_html.innerHTML = selectedNumber2;
    operation_html.innerHTML = operator;

    if(operator == "+"){
        sonuc = selectedNumber1 + selectedNumber2
      
        
    }

    else if(operator == "-"){
        sonuc = selectedNumber1 - selectedNumber2
    }

    else if(operator == "*"){
        sonuc = selectedNumber1 * selectedNumber2
    }

    else if(operator == "/"){
        sonuc = selectedNumber1 / selectedNumber2
    }
    

    player_options.style.transition = "opacity 0.5s ease-in-out";
    player_options.style.opacity = 0;
    
    setTimeout(() => {
      player_options.style.display = "none";
      play_ground_section.style.transition = "opacity 0.5s ease-in-out";
      play_ground_section.style.opacity = 1;
      play_ground_section.style.display = "block";
    }, 750);
    

    console.log(numberOne);
    console.log(numberTwo);
    console.log(operator);
    const gameData = {
        numberOne,
        numberTwo,
        operator,
    };
    
    // const gameDataJSON = JSON.stringify(gameData);
    // localStorage.setItem('gameData', gameDataJSON);

});



cevap_btn = document.querySelector(".cevap_btn");
let car = document.querySelector(".car");
let carLeft = 0;
let timeLeft = 60;

const timer = setInterval(() => {
    timeLeft--;
    document.querySelector('#timeLeft').textContent = timeLeft;
    if (timeLeft <= 0) {
        clearInterval(timer);
        
    }
}, 1000);


function checkAnswer(event) {
    if (event.keyCode === 13 || event.keyCode === 9) {
      // Enter veya Tab tuşuna basıldığında çalışacak kodlar
      event.preventDefault();
      answer = document.querySelector(".answer").value;
      uyariTrue = document.querySelector(".alert-success");
      uyariFalse = document.querySelector(".alert-danger");
      
      if(answer == sonuc){
        if (carLeft >= 90) {
            alert("Oyunu kazandınız!");
            clearInterval(timer);
            carLeft = 0;
            car.style.left = carLeft + "%";
            window.location.href = "index.html";
          }
          
          carLeft += 10;
          car.style.left = carLeft + "%";
          uyariTrue.style.display = "block";
          uyariFalse.style.display ="none";
          document.querySelector(".answer").value = "";
  
          var randomIndex1 = Math.floor(Math.random() * numberOne.length);
          var selectedNumber1 = numberOne[randomIndex1];
          
          var randomIndex2 = Math.floor(Math.random() * numberTwo.length);
          var selectedNumber2 = numberTwo[randomIndex2];
      
          number_one_html.innerHTML = selectedNumber1;
          number_two_html.innerHTML = selectedNumber2;
          operation_html.innerHTML = operator;
      
          if(operator == "+"){
              sonuc = selectedNumber1 + selectedNumber2
              genel_sonuc.push(sonuc);
              
          }
      
          else if(operator == "-"){
              sonuc = selectedNumber1 - selectedNumber2
          }
      
          else if(operator == "*"){
              sonuc = selectedNumber1 * selectedNumber2
          }
      
          else if(operator == "/"){
              sonuc = selectedNumber1 / selectedNumber2
          }
      
          const gameData = {
              numberOne,
              numberTwo,
              operator,
          };
      }
      else{
          uyariTrue.style.display = "none";
          uyariFalse.style.display ="block";
          document.querySelector(".answer").value = "";
      }
    }
  }
  
  document.addEventListener('keydown', checkAnswer);
  

































