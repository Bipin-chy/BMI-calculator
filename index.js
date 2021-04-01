var btn = document.querySelector(".btn");
// var outputBox = document.createElement('DIV');
//         // var container = document.querySelector('.container');
// document.body.append(outputBox);
// outputBox.setAttribute('style','position:absolute', 'margin-top:40px');



btn.addEventListener('click', calculation);

function calculation(e){
    e.preventDefault;
    var weight = document.querySelector("#weight-input").value;
    var height = document.querySelector("#height-input").value;

    var BMI = weight/(height * height);
    
    var breakLine = "\r\n";
    message = "Your BMI is :" + BMI;
    message += breakLine;
    
    if(BMI < 19){
       
        message += "You are underweight";
        alert(message); 
    }
    if(BMI > 19 && BMI < 25){
        message += "You are normal";
        alert(message);
        
    }
    if(BMI >25){
        message += "You are overweight";
        alert(message);
        
    }
}