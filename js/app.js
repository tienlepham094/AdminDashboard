const sidebarItem= document.querySelectorAll('.sb-item')
const sidebarArrow = document.querySelectorAll('.sb-icon-arrow')
const sidebarList= document.querySelectorAll('.sb-list-container')
const navToggleBtn= document.querySelector('.toggle-line-icon')
const sidebarContainer=document.querySelector('.sidebar-container')
const navbarLogo= document.querySelector('.navbar-logo')
const navbarLogoS=document.querySelector('.navbar-logo-s')
const selectHeader= document.querySelector('.select-header')
const optionContainer= document.querySelector('.option-container')
// sidebar
for(let i =1; i<=2; i++){
    sidebarItem[i].onclick=()=>{
        for(let k=1; k<=2;k++){
            if(sidebarList[k].classList.contains('showList') && k!==i){
                sidebarList[k].classList.remove('showList')
                sidebarItem[k].classList.remove('sidebar--active')
                sidebarArrow[k-1].classList.remove('sb-icon-arrow--active')
            }
        }
        sidebarArrow[i-1].classList.toggle('sb-icon-arrow--active')
        sidebarItem[i].classList.toggle('sidebar--active')
        sidebarList[i].classList.toggle('showList')
    }
}
//navbar
var isOpen=false;
navToggleBtn.addEventListener('click', ()=>{
    //sidebar icon only
    if(!isOpen){
        navToggleBtn.classList.remove('toggle-down')
        navToggleBtn.classList.add('toggle-up')
        navbarLogo.classList.add('sidebar--hide')
        navbarLogoS.classList.remove('sidebar--hide')
        sidebarContainer.classList.add('active')
        isOpen=true;
    }else{
        navToggleBtn.classList.remove('toggle-up')
        navToggleBtn.classList.add('toggle-down')
        navbarLogo.classList.remove('sidebar--hide')
        navbarLogoS.classList.add('sidebar--hide')
        sidebarContainer.classList.remove('active')
        isOpen=false;
    }
})
/**Select click action */
var isSelected=false
selectHeader.addEventListener('click',()=>{
    if(!isSelected){
        optionContainer.style.display='block';
        isSelected=true;
        selectHeader.style='box-shadow: 0 0 0 0.2rem rgb(216 217 219 / 50%)'
    }else{
        optionContainer.style.display='none';
        selectHeader.style='box-shadow:0'
        isSelected=false;
    }
})
window.addEventListener('click',(e)=>{
    if(e.target.className !=='select-header'){
        optionContainer.style.display='none';
    }
})
//responsive sidebar
