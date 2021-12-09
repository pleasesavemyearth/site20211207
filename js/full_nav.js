// span 눌렀을 때 nav바 오픈, 즉 openNav함수를 만들어 아이디 myNav의 class overlay를 불러온다, 폭 100%로
function openNav() {
    document.getElementById("myNav").style.width="100%";
}

// closeNav함수를 만들어 실행시키면 폭 0% 나오도록 한다
function closeNav() {
    document.getElementById("myNav").style.width="0%"
}