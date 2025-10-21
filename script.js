// 검색 이벤트 함수수
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
// 상품상세보기 이벤트 함수
const viewItem = () => {
  gtag("event", "view_item", {
    category: "IT",
    labels: "promotion_item",
    currency: "KRW",
    value: 129000,
    items: [
      {
        item_id: "EP1001",
        item_name: "무선 이어폰",
        currency: "KRW",
        price: 129000,
        quantity: 1,
      },
    ],
  });
  alert("view_item 이벤트 발생!");
};
// 장바구니 이벤트 함수
const addToCart = () => {
  gtag("event", "add_to_cart", {
    category: "IT", // category, labelss 비필수 값
    labels: "promotion_item",
    currency: "KRW", // currency, value, items 필수값
    value: 129000,
    items: [
      {
        item_id: "EP1001",
        item_name: "무선 이어폰",
        currency: "KRW",
        price: 129000,
        quantity: 1,
      },
    ],
  });
  alert("add_to_cart 이벤트 발생!");
};

// 상품구매하기 이벤트 함수
const purchase = () => {
  gtag("event", "purchase", {
    transaction_id: "T1234",
    affiliation: "온라인몰",
    category: "IT",
    currency: "KRW",
    value: 129000,
    labels: "promotion_item",
    tax: 12900,
    shipping: 3000,
    items: [
      {
        item_id: "EP1001",
        item_name: "무선 이어폰",
        currency: "KRW",
        price: 129000,
        quantity: 1,
      },
    ],
  });
  alert("purchase 이벤트 발생!");
};
