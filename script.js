const handleSearch = () => {
  const input = document.getElementById("searchInput").value.trim();

  if (input !== "") {
    gtag("event", "search_button_clicked", {
      event_category: "engagement",
      event_label: input, //이벤트를 설명하기 위한 목적적
      search_term: input, //검색어
    });

    alert(`검색어 ${input}에 대한 검색을 실행하였습니다.`); //' ' 는 문자열 내에 변수를 삽입하기 위해 사용
  } else {
    alert("검색어를 입력하세요");
  }
};
