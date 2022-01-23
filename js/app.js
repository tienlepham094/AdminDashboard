const sidebarItem= document.querySelectorAll('.sb-item')
const sidebarArrow = document.querySelectorAll('.sb-icon-arrow')
const sidebarList= document.querySelectorAll('.sb-list-container')
const navToggleBtn= document.querySelector('.toggle-line-icon')
// sidebar
for(let i =1; i<=2; i++){
    sidebarItem[i].onclick=()=>{
        sidebarItem[i].classList.toggle('sidebar--active')
        sidebarArrow[i-1].classList.toggle('sb-icon-arrow--active')
        if(sidebarList[i-1].style.maxHeight){
            sidebarList[i-1].style.maxHeight=null;
        }else{
            sidebarList[i-1].style.maxHeight= sidebarList[i-1].scrollHeight + 'px';
            // sidebarList[i-1].style.maxHeight= 86 + 'px';
        }
    }
}
//navbar
var isOpen=false;
navToggleBtn.addEventListener('click', ()=>{

    if(!isOpen){
        console.log(12);
        navToggleBtn.classList.add('toggle-line-icon--active')
        // navToggleBtn.style.transform='rotate(360deg)'
        isOpen=true;
    }else{
        console.log(123);
        navToggleBtn.style.transform='rotate(360deg)'
        isOpen=false;
    }
})