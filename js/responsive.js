const navbarNoti= document.querySelector('.navbar-noti')
const notiBtn= document.querySelector('.navbar-noti-btn')
console.log(navbarNoti);
//navbar noti
notiBtn.onclick= ()=>{
    navbarNoti.classList.toggle('navbar-noti--active')
}
