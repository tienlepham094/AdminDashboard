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
for(let i =1; i<=7; i++){
    sidebarItem[i].onclick=()=>{
        for(let k=1; k<=7;k++){
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
//advanced table
tableControlBtn= document.querySelectorAll('.table-control-icon')
tableCollapse = document.querySelectorAll('.table-collapse')
tableRow = document.querySelectorAll('.table-view')
tableCheckbox= document.querySelectorAll('.table-checkbox')
//table collapse
tableControlBtn.forEach((btn, index) => {
    btn.addEventListener('click',() => {
        btn.classList.toggle('table-control-icon--active')
        tableCollapse[index].classList.toggle('table-collapse--active')
    })
})
//table check
tableCheckbox.forEach((btn, index) => {
    btn.addEventListener('change', () => {
        tableRow[index].classList.toggle('table-view--checked')
    })
})
//right side bar tab
const sidebarTitle = document.querySelectorAll('.right-sb-title');
const sidebarTab = document.querySelectorAll('.sb-tab-content');
sidebarTitle.forEach((title, index) => {
    const tab = sidebarTab[index];
    title.onclick = function() {
        document.querySelector('.right-sb-title.active').classList.remove('active')
        document.querySelector('.sb-tab-content.active').classList.remove('active');
        this.classList.add('active');
        tab.classList.add('active');
    }
})
/**right sidebar click  */
const sbToggleBtn = document.querySelector('.navbar-toggle-dots');
const rightSideBar = document.querySelector('.right-sb-container')
const sidebarCloseBtn = document.querySelector('.right-sb-close');

sbToggleBtn.addEventListener('click', () => {
    rightSideBar.classList.toggle('active')
})
sidebarCloseBtn.onclick = () => {
    rightSideBar.classList.remove('active');
}


//slider
$(document).ready(function(){
    $('.slider-container').slick({
        arrows:true,
        slidesToShow:1,
        infinite:true,
        autoplay:true,
        autoplaySpeed:3000,
        draggable:true,
        prevArrow:$('.sales-slider__arrow-left'),
        nextArrow:$('.sales-slider__arrow-right')
    });
  });
//navbar noti
const navbarNoti= document.querySelector('.navbar-noti')
const notiBtn= document.querySelector('.navbar-noti-btn')
const toggleBtn=document.querySelector('.navbar-toggle-mobile')
const sideBarContainer=document.querySelector('.sidebar-container')

  //navbar noti
notiBtn.onclick= ()=>{
    navbarNoti.classList.toggle('active')
}
  //sidebar responsive
toggleBtn.onclick= ()=>{
    sideBarContainer.classList.toggle('sidebar-container--active')
}