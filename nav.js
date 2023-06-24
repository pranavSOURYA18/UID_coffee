const header = document.querySelector("header");

function stickyNav(){
    header.classList.toggle("scrolled",window.pageYOffset>0);

}
stickyNav();
window.addEventListener("scroll",stickyNav);

function ls()
{
    alert("SignUp/Login required");
}