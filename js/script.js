var date1 = document.getElementById('date1');
var checkage = document.getElementById('checkage');
let res = document.getElementById('res');
checkage.addEventListener('click',()=>{
    let currentDate = new Date().getFullYear();
    let birthDate = new Date(date1.value).getFullYear();
    let age = currentDate-birthDate;
    let currentMonth = new Date().getMonth();
    let birthMonth = new Date(date1.value).getMonth();
    let month = currentMonth-birthMonth;
    if(month<0||(month==0)&&new Date().getDate()<new Date(date1.value).getDate())
    {
        age--;
    }
    res.innerHTML = `You are ${age.toString().padStart(2,'0')} ${age>1? "years":"year"} old`;
});