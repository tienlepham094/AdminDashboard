const sidebarItem= document.querySelectorAll('.sb-item')
const sidebarArrow = document.querySelectorAll('.sb-icon-arrow')
const sidebarList= document.querySelectorAll('.sb-list-container')
const navToggleBtn= document.querySelector('.toggle-line-icon')
const sidebarContainer=document.querySelector('.sidebar-container')
const sideBar= document.querySelector('.sidebar')
const sideBarIcon=document.querySelector('.sidebar-s')
const navbarLogo= document.querySelector('.navbar-logo')
const navbarLogoS=document.querySelector('.navbar-logo-s')
const main =document.querySelector('.main')
// sidebar
for(let i =1; i<=2; i++){
    sidebarItem[i].onclick=()=>{
        sidebarItem[i].classList.toggle('sidebar--active')
        sidebarArrow[i-1].classList.toggle('sb-icon-arrow--active')
        if(sidebarList[i-1].style.maxHeight){
            sidebarList[i-1].style.maxHeight=null;
        }else{
            sidebarList[i-1].style.maxHeight= sidebarList[i-1].scrollHeight + 'px';
        }
    }
}
//navbar
var isOpen=false;
navToggleBtn.addEventListener('click', ()=>{

    if(!isOpen){
        sidebarContainer.style.width='var(--sidebar-s-width)'
        navToggleBtn.classList.remove('toggle-down')
        navToggleBtn.classList.add('toggle-up')
        sideBar.classList.add('sidebar--hide')
        sideBarIcon.classList.remove('sidebar--hide')
        navbarLogo.classList.add('sidebar--hide')
        navbarLogoS.classList.remove('sidebar--hide')
        main.style.left="var(--sidebar-s-width)"
        isOpen=true;
    }else{
        sidebarContainer.style.width='var(--sidebar-width)'
        navToggleBtn.classList.remove('toggle-up')
        navToggleBtn.classList.add('toggle-down')
        sideBar.classList.remove('sidebar--hide')
        sideBarIcon.classList.add('sidebar--hide')
        navbarLogo.classList.remove('sidebar--hide')
        navbarLogoS.classList.add('sidebar--hide')
        main.style.left="var(--sidebar-width)"
        isOpen=false;
    }
})
//sidebar icon only
