//聯絡我們燈箱
$(function () {
  // 開啟 Modal 彈跳視窗
  $("a.contact_us").on("click", function () {
    $("div.overlay").addClass("-on");
  });

  // 關閉 Modal
  $("button.btn_modal_close").on("click", function () {
    $("div.overlay").addClass("-opacity-zero");

    // 設定隔一秒後，移除相關 class
    setTimeout(function () {
      $("div.overlay").removeClass("-on -opacity-zero");
    }, 1000);
  });
});

//導覽列漢堡
// let hamburger = document.getElementsByClassName("hamburger")[0];
// console.log(hamburger);
// hamburger.addEventListener("click", function(){
//   let ham_span = document.getElementsByClassName("ham_span");s
//   for(let i = 0; i < ham_span.length ; i++){
//     ham_span[i].classList.add("move"+(i+1));
//     console.log("move"+(i+1));
//     console.log(ham_span[i]);
//   }
// });

let hamburger = document.getElementsByClassName('hamburger')[0];

hamburger.addEventListener('click', function () {
  var span1 = document.getElementsByClassName('span1')[0];
  var span2 = document.getElementsByClassName('span2')[0];
  var span3 = document.getElementsByClassName('span3')[0];
  span1.classList.toggle('move1');
  span2.classList.toggle('move2');
  span3.classList.toggle('move3');

  //點擊漢堡出現選單
  let top_nav = document.getElementsByClassName("top_nav")[0];
  if (top_nav.classList.contains("-on")) {
    top_nav.classList.remove("-on");
  } else {
    top_nav.classList.add("-on");
  }
});

//導覽列點擊出現下拉選單
let li_mul = document.querySelectorAll("li.multiple");
let span_btn = document.querySelectorAll("span.nav_btn");
// console.log(span_btn);
for (let i = 0; i < span_btn.length; i++) {
  span_btn[i].addEventListener("click", function () {
    let ul_mul = li_mul[i].querySelector("ul.multiple");
    let li_item = document.querySelectorAll("li.multiple_item");
    if (ul_mul.classList.contains("-on")) {
      ul_mul.classList.remove("-on");
    } else {
      ul_mul.classList.add("-on");
    }
    li_item.forEach(function (value, item) {
      value.classList.add("-off");
    });
  });
}






