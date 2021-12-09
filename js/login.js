// modal 불러오기
var modal = document.getElementById('id01');

// modal 바깥을 클릭하면 모달창 닫히게함
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}