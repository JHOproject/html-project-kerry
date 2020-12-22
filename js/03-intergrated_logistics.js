let aside_btn = document.getElementsByClassName("aside_btn")[0];
// console.log(aside_btn);
aside_btn.addEventListener("click", function () {
    let aside = document.getElementsByTagName("aside")[0];
    // console.log(aside);
    if (!aside.classList.contains("-move")) {
        aside.classList.add("-move");
        aside_btn.classList.add("-move");
    } else {
        aside.classList.remove("-move");
        aside_btn.classList.remove("-move");
    }
});

// ==== 資訊收合 ====
$(document).ready(function () {
    $("div.slide_down a").next("div").hide();
    $("div.slide_down a").click(function () {
        let div_info = $(this).next("div");
        $(div_info).slideToggle(700);
    });
});
