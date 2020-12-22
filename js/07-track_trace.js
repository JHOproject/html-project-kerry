//form表單，先隱藏
var div_form = document.querySelectorAll("div.form");
// console.log(div_form);
div_form.forEach(function (value, item) {
  var div_step = value.querySelectorAll("div");
  div_step.forEach(function (value, item) {
    // console.log(value);
    if (!value.classList.contains("-step_off")) {
      value.classList.add("-step_off");
    }
  });
});

//選取功能，改變功能位置+出現form表單
var track_ul = document.getElementsByClassName("track_ul")[0];
var track_li = track_ul.querySelectorAll("li");

//li點擊事件
track_li.forEach(function (value, item) {
  value.addEventListener("click", function () {
    //改變ul寬度
    if (!track_ul.classList.contains("-on")) {
      track_ul.classList.add("-on");
    }

    //所有a作改變(高度)
    let trace_a = track_ul.querySelectorAll("a");
    trace_a.forEach(function (value, item) {
      if (!value.classList.contains("-on")) {
        value.classList.add("-on");
      }
    });

    //限制只有一個li能改變color
    let trace_a_color = value.querySelector("a");
    for (let i = 0; i < trace_a.length; i++) {
      if (trace_a[i].classList.contains("-color")) {
        trace_a[i].classList.remove("-color");
        track_li[i].classList.remove("-opacity");
        trace_a_color.classList.remove("-color");
      }
    }

    //被選取的a、li作改變
    if (!trace_a_color.classList.contains("-color")) {
      trace_a_color.classList.add("-color");
      value.classList.add("-opacity");
    }

    //form表單出現
    //最外層藍框顯現
    let div_right = document.getElementById("right");
    if (!div_right.classList.contains("-on")) {
      div_right.classList.add("-on");
    }

    //重設form內層所有div
    let div_form = div_right.querySelectorAll("div.form");
    // console.log(div_form);
    div_form.forEach(function (value, item) {
      let inner_div = value.querySelectorAll("div.step");
      // console.log(inner_div);
      inner_div.forEach(function (value, item) {
        let inner_step = value.querySelectorAll("div");
        // console.log(inner_step);
        if (value.classList.contains("-step_on")) {
          value.classList.remove("-step_on");
          value.classList.add("-step_off");
        }
      });
    });

    //限制6種選擇只有一個div能出現
    for (let i = 0; i < div_form.length; i++) {
      if (div_form[i].classList.contains("-on")) {
        div_form[i].classList.add("-off");
        div_form[i].classList.remove("-on");
      }
    }

    //相對應div出現
    if (!div_form[item].classList.contains("-on")) {
      div_form[item].classList.add("-on");
      div_form[item].classList.remove("-off");
      //相對應form表單出現
      //step1
      let first = div_form[item].querySelector("div.first");
      let step1 = first.querySelectorAll("div");
      // console.log(first);
      first.classList.remove("-step_off");
      first.classList.add("-step_on");
      step1.forEach(function (value, item) {
        value.classList.remove("-step_off");
        value.classList.add("-step_on");
      });
    }
  });
});

//設定視窗移動到哪
let a = 0;
let b = 0;
function scrollWindow(a, b) {
  window.scrollTo(a, b);
}


//next按鈕
var btn_next = document.getElementsByClassName("btn_next");
for (let i = 0; i < btn_next.length; i++) {
  btn_next[i].addEventListener("click", function (e) {
    //設定checkbox必須點擊
    let checkbox_length = document.querySelectorAll("input.checkbox").length;
    // console.log(checkbox_length);
    let checked_length = document.querySelectorAll("input.checkbox:checked").length;
    // console.log(checked_length);
    let input_checkbox = document.querySelectorAll("input.checkbox");
    let alert = document.querySelectorAll("span.alert");
    alert.forEach(function (value, item) {
      if (!value.checked) {
        value.classList.add("-error");
        setTimeout(function () {
          value.classList.remove("-error");
        }, 1000);
      }
    });
    if (checkbox_length == checked_length) {
      // console.log(btn_next);
      let step_div = document.querySelectorAll("div.step");
      // console.log(step_div);
      let this_div = step_div[i];
      let next_div = step_div[i + 1];
      let next_div_inner = next_div.querySelectorAll("div");
      // console.log(next_div_inner);
      this_div.classList.add("-step_off");
      this_div.classList.remove("-step_on");
      next_div.classList.remove("-step_off");
      next_div.classList.add("-step_on");
      next_div_inner.forEach(function (value, item) {
        value.classList.remove("-step_off");
        value.classList.add("-step_on");
      });
      scrollWindow(0, 150);
      // alert.forEach(function(value, item){
      //   if(value.checked){
      //     value.classList.remove("-error");
      //   }
      // });
    } else {
      scrollWindow(0, 750);
      // console.log(alert);
    }
  });
}

//back按鈕
var btn_back = document.getElementsByClassName("btn_back");
for (let i = 0; i < btn_back.length; i++) {
  btn_back[i].addEventListener("click", function (e) {
    // console.log(btn_back);
    // console.log(btn_next);
    let step_div = document.querySelectorAll("div.step");
    // console.log(step_div);
    let this_div = step_div[i + 1];
    let last_div = step_div[i];
    let last_div_inner = last_div.querySelectorAll("div");
    // console.log(next_div_inner);
    this_div.classList.add("-step_off");
    this_div.classList.remove("-step_on");
    last_div.classList.remove("-step_off");
    last_div.classList.add("-step_on");
    last_div_inner.forEach(function (value, item) {
      value.classList.remove("-step_off");
      value.classList.add("-step_on");
    });
    scrollWindow(0, 200);
  });
}


//執行背景aos動畫
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

