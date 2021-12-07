// 사용자가 아이콘을 클릭할 때 Topnav에 반응형 클래스를 추가하거나 제거하는 함수
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}