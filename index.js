 function display(num) {
     document.getElementById('view').value += num;
 }


 function solve() {
     let val1 = document.getElementById('view').value;
     let val2 = eval(val1);
     document.getElementById('view').value = val2;

 }


 function clr() {
     document.getElementById('view').value = '';
 }