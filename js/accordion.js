
var acc = document.getElementsByClassName("accordion");
/*
document객체란 웹페이지 그 자체를 의미, 
웹페이지의 html요소에 접근하기 위해서는 반드시 document객체로 시작하고
이 객체의 메소드 중 getElementsByClassName을 살펴본다
즉, class이름을 통해 elements를 가져온다 라는 뜻
*/

var i;

for ( i = 0 ; i < acc.length ; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}