// 페이지 스크롤을 내리면, 실행될 함수 myFunction()
window.onscroll = function() {myFunction()};

// navbar 불러온다
var navbar = document.getElementById("navbar");

// navbar의 offset position 불러온다
var sticky =  navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky ) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
 }
