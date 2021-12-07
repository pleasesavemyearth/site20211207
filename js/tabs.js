//openCity함수 생성

function openCity(evt, cityName) {

  // 모든 변수 선언
  var i, tabcontent, tablinks;

  // 모든 요소와 tabcontent클래스를 얻고 그것들을 숨김
  tabcontent = document.getElementsByClassName("tabcontent"); /*document오타......나서 안됬었음 / 컨텐츠를 불러온다 */
  for ( i = 0 ; i < tabcontent.length ; i++ ) {
      tabcontent[i].style.display = "none"; //컨텐츠를 모두 숨긴다
  }

  // 모든 요소와 tabcontent클래스를 얻고 active클래스를 제거한다
  tablinks = document.getElementsByClassName("tablinks"); //탭을 불러온다
  for ( i = 0 ; i < tablinks.length ; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", ""); //탭 초기화???
  }

  // 현재의 tab보이고, 탭을 연 버튼에 active 클래스를 추가
  document.getElementById(cityName).style.display = "block"; //해당되는 컨텐츠만 보여준다
  evt.currentTarget.className += " active"; //클릭한 탭을 활성화시킨다
  /* evt.currentTarget.className = evt.currentTarget.className + " active" */
}