const navbarNoti= document.querySelector('.navbar-noti')
const notiBtn= document.querySelector('.navbar-noti-btn')
const toggleBtn=document.querySelector('.navbar-toggle-mobile')
const sideBarContainer=document.querySelector('.sidebar-container')

//navbar noti
notiBtn.onclick= ()=>{
    navbarNoti.classList.toggle('navbar-noti--active')
}
//sidebar
toggleBtn.onclick= ()=>{
    sideBarContainer.classList.toggle('sidebar-container--active')
}