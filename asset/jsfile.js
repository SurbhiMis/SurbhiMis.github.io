function resume(){
    window.location.href = "./resume.html";
}

function projects(){
    window.location.href = "./project.html";
}

function add(){
    
    const num1 = document.querySelector('#num1').value;
    const num2 = document.querySelector('#num2').value;
    const res = document.querySelector('#res');
    res.innerHTML = (parseFloat(num1) + parseFloat(num2)).toFixed(2);
   // alert(res.innerHTML);
}

function sub(){
    
    const num1 = document.querySelector('#num1').value;
    const num2 = document.querySelector('#num2').value;
    const res = document.querySelector('#res');
    res.innerHTML = (parseFloat(num1) - parseFloat(num2)).toFixed(2);
    //alert(res.innerHTML);
}

function mul(){
    
    const num1 = document.querySelector('#num1').value;
    const num2 = document.querySelector('#num2').value;
    const res = document.querySelector('#res');
    res.innerHTML =(parseFloat(num1) * parseFloat(num2)).toFixed(2);
   // alert(res.innerHTML);
}

function div(){
    
    const num1 = document.querySelector('#num1').value;
    const num2 = document.querySelector('#num2').value;
    const res = document.querySelector('#res');
    res.innerHTML =(parseFloat(num1) / parseFloat(num2)).toFixed(2) ;
    //alert(res.innerHTML);
}
function del(){
    document.querySelector('#num1').value='';
    document.querySelector('#num2').value ='';
     document.querySelector('#res').innerHTML = '';
}
function fun1(){
    let inp = document.querySelector('#num');
    let num = document.querySelector('#btn1').value;
    inp.value += num;
}
function fun2(){
    let inp = document.querySelector('#num');
    let num = document.querySelector('#btn2').value;
    inp.value += num;
}
function fun3(){
    let inp = document.querySelector('#num');
    let num = document.querySelector('#btn3').value;
    inp.value += num;
}
function fun4(){
    let inp = document.querySelector('#num');
    let num = document.querySelector('#btn4').value;
    inp.value += num;
}
function fun5(){
    let inp = document.querySelector('#num');
    let num = document.querySelector('#btn5').value;
    inp.value += num;
}
function fun6(){
    let inp = document.querySelector('#num');
    let num = document.querySelector('#btn6').value;
    inp.value += num;
}

function fun7(){
    let inp = document.querySelector('#num');
    let num = document.querySelector('#btn7').value;
    inp.value += num;
}
function fun8(){
    let inp = document.querySelector('#num');
    let num = document.querySelector('#btn8').value;
    inp.value += num;
}
function fun9(){
    let inp = document.querySelector('#num');
    let num = document.querySelector('#btn9').value;
    inp.value += num;
}
function fun0(){
    let inp = document.querySelector('#num');
    let num = document.querySelector('#btn0').value;
    inp.value += num;
}
function funsub(){ 
    let inp = document.querySelector('#num');
    if(inp.value !==""){
        let num = document.querySelector('#btnsub').value;
        inp.value += num;
    }
    
}
function funmul(){
    let inp = document.querySelector('#num');
    if(inp.value !==""){
        let num = document.querySelector('#btnmul').value;
    inp.value += num;
    }
    
}
function fundiv(){
    let inp = document.querySelector('#num');
    if(inp.value !==""){
        let num = document.querySelector('#btndiv').value;
    inp.value += num;
    }
    
}
function fundot(){
    let inp = document.querySelector('#num');
    let num = document.querySelector('#btndot').value;
    inp.value += num;
}
function funadd(){
    let inp = document.querySelector('#num');
    if(inp.value !==""){
        let num = document.querySelector('#btnadd').value;
    inp.value += num;
    }
    
}
function equal(){
    let inp = document.querySelector('#num');
    let res = eval(inp.value);
    inp.value=res;

}
function reset(){
    document.querySelector('#num').value='';
}








