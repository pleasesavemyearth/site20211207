
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
        this.classList.toggle("active"); /*누르면 색상이 변하는 active설정*/

        var panel = this.nextElementSibling; 
        /*
        버튼에 for문을 돌려서 각각의 element에 addEvenListener("click")이벤트를
        넣어주고 function함수를 호출한다
        panel들을 this.nextElementSibling 메소드로 불러온다
        */
        if (panel.style.display === "block") { /* === 은 값과 데이터유형이 같아야 true */
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

/* 아코디언에 애니메이션 줄땐
만약 panel에 maxHeight가 있다면 null로 만들어주고
아니라면 panel의 높이를 scrollHeight()메소드를 이용해 부여함
scrollHeight()메소드는 integer를 반환하기 때문에 px문자열을 더해줘야 함 ???

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
*/