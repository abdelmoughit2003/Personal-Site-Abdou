/**
 * Created by abdelmoughit on 2/12/2017.
 */
(function(){
    // ------------------------------------------------------------------------------------------------------------------------------------
    var btnPressed = function () {
        var value = midbox.value;
        if (value == "") {
            box = this.innerHTML;
            leftbox.value += box
        }

        else {
            box = this.innerHTML;
            rightbox.value += box
        }
    };
// ------------------------------------------------------------------------------------------------------------------------------------
    var oppressed = function () {
        box = this.innerHTML;
        midbox.value = box
    };
// ------------------------------------------------------------------------------------------------------------------------------------
    var equal = function() {
        var num1 = parseFloat(leftbox.value);
        var num2 = parseFloat(rightbox.value);
        var result;
        var operator = midbox.value;
        switch(operator){

            case"+":
                result =(num1 + num2);
                break;
            case"-":
                result =(num1 - num2);
                break;
            case"*":
                result =(num1 * num2);
                break;
            case"/":
                result =(num1 / num2);
                break;
            case"^":
                result = Math.pow(num1,num2);
                break;

        }
        leftbox.value =result
    };
    // ------------------------------------------------------------------------------------------------------------------------------------
    var clear = function(){
        C = btnclear.value="";
        rightbox.value = C;
        leftbox.value = C;
        midbox.value = C
    };
    // ------------------------------------------------------------------------------------------------------------------------------------
    var pi = function(){
        pie = btnpi.value = Math.PI;
        var value = midbox.value;

        if (value == "") {
            leftbox.value = pie;
        }
        else {
            rightbox.value = pie
        }
    };
    // ------------------------------------------------------------------------------------------------------------------------------------
    var dot = function(){
        var value = midbox.value;
        if (value == "") {
            num= this.innerHTML;
            if (counter1 < 1) {
                leftbox.value += num;
                counter1 += 1;
            }
        }
        else  {
            num= this.innerHTML;
            if (counter2 < 1){
                rightbox.value += num;
                counter2 += 1;
            }
        }
    };
// ------------------------------------------------------------------------------------------------------------------------------------
    var pow = function(){
        powe = btnpow.innerHTML  ;
        midbox.value = powe
    };
    // ------------------------------------------------------------------------------------------------------------------------------------
    var powtwoe = function(){
        var totale;
        var num1 = parseFloat(leftbox.value);
        var num2 = 2;
        totale = Math.pow(num1,num2);
        btnpower.value = leftbox.value = totale
    };
// ------------------------------------------------------------------------------------------------------------------------------------
    var sqrt = function(){
        var result;
        var num1 = parseFloat(leftbox.value);
        result = Math.sqrt(num1);
        btnsqrt.value = leftbox.value = result
    };
    // ------------------------------------------------------------------------------------------------------------------------------------
    var percent = function(){
        var total;
        var num2 = 100;
        var num1 = parseFloat(leftbox.value);
        total = (num1 / num2);
        btnper.value = leftbox.value = total
    };
    // ------------------------------------------------------------------------------------------------------------------------------------
    var plumin = function() {
        var value2 = rightbox.value;
        var value1 = leftbox.value;
        var value = midbox.value;
        if (value == "") {
            if (value1) {
                leftbox.value  =-value1
            }
            else  {
                leftbox.value  =value1
            }
        }
        else {
            if (value2) {
                rightbox.value  = -value2
            }
            else {
                rightbox.value  = value2
            }

        }
    };
    // ------------------------------------------------------------------------------------------------------------------------------------
    var back = function(){

        var newnember;
        var value2 = rightbox.value;
        var value1 = leftbox.value;
        var value = midbox.value;
        var len1 = value1.length-1;
        var len2 = value2.length-1;

        if (value == "") {
            newnember =value1.substring(0,len1);
            leftbox.value=newnember;
        }
        else {
            newnember =value2.substring(0,len2);
            rightbox.value=newnember;
        }
    };
// ------------------------------------------------------------------------------------------------------------------------------------
    var counter1 = 0;
    var counter2 = 0;
    var powe;
    var pie;
    var C;
    var box;
    var buttons =  document.getElementsByClassName("btn");
    var operator = document.getElementsByClassName("btnop");
    var leftbox =  document.getElementById("left");
    var midbox =   document.getElementById("middle");
    var rightbox = document.getElementById("right");
    var btnequal = document.getElementById("btna");
    var btnclear = document.getElementById("btnc");
    var btnpi = document.getElementById("btnpi");
    var btndot = document.getElementById("btndot");
    var btnpow = document.getElementById("btnpow");
    var btnsqrt = document.getElementById("btnsqrt");
    var btnper = document.getElementById("btnperc");
    var btnplmi = document.getElementById("btnplmin");
    var btnpower = document.getElementById("btnpowere");
    var btnback = document.getElementById("btnbac");
// ------------------------------------------------------------------------------------------------------------------------------------
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", btnPressed)
    }
    for (var j = 0; j < operator.length; j++) {
        operator[j].addEventListener("click", oppressed)
    }
    btnequal.addEventListener("click", equal);
    btnclear.addEventListener("click", clear);
    btnpi.addEventListener("click",pi);
    btndot.addEventListener("click",dot);
    btnpow.addEventListener("click",pow);
    btnsqrt.addEventListener("click",sqrt);
    btnper.addEventListener("click",percent);
    btnplmi.addEventListener("click",plumin);
    btnpower.addEventListener("click",powtwoe);
    btnback.addEventListener("click",back)

})();
