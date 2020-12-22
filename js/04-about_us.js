//---------- header -----------
let header_btn = document.getElementsByClassName("header_btn")[0];
// console.log(header_btn);
header_btn.addEventListener("click", function () {
    let header_a = document.getElementsByClassName("header_a")[0];
    // console.log(header_a);
    if (!header_a.classList.contains("-move")) {
        header_a.classList.add("-move");
        header_btn.classList.add("-move");
    } else {
        header_a.classList.remove("-move");
        header_btn.classList.remove("-move");
    }
});

//==== 手機板自動動畫 ====
//滾動時加上class
//---- article1 ----
function scroll(i) {
    let core_topic = document.getElementsByClassName("core_topic")[i];
    let core_item = document.getElementsByClassName("core_item")[i];
    core_topic.classList.add("-on");
    core_item.classList.add("-on");
}

//---- article5 ----
function show(a) {
    let company = document.getElementsByClassName("company")[a];
    let company_ul = company.querySelector("ul");
    company_ul.classList.add("-on");
}

//初始化
//---- article1 ----
function ini() {
    let core_topic = document.getElementsByClassName("core_topic");
    let core_item = document.getElementsByClassName("core_item");
    for (let i = 0; i < core_topic.length; i++) {
        core_topic[i].classList.remove("-on");
        core_item[i].classList.remove("-on");
    }
}
//---- article5 ----
function hide() {
    let company = document.getElementsByClassName("company");
    for (let i = 0; i < company.length; i++) {
        let company_ul = company[i].querySelector("ul");
        company_ul.classList.remove("-on");
    }
}

//改變
//---- article1 ----
function change() {
    window.addEventListener("scroll", function (e) {
        console.log(window.scrollY);
        if (8500 > window.scrollY) {
            hide();
        } else if (8900 > window.scrollY && window.scrollY >= 8500) {
            hide();
            show(0);
        } else if (9300 > window.scrollY && window.scrollY >= 8900) {
            hide();
            show(1);
        } else if (10000 > window.scrollY && window.scrollY >= 9300) {
            hide();
        }
    });
}
//---- article5 ----
function display() {
    window.addEventListener("scroll", function (e) {
        if (1050 > window.scrollY) {
            ini();
        } else if (1270 > window.scrollY && window.scrollY >= 1050) {
            ini();
            scroll(0);
        } else if (1490 > window.scrollY && window.scrollY >= 1270) {
            ini();
            scroll(1);
        } else if (1710 > window.scrollY && window.scrollY >= 1490) {
            ini();
            scroll(2);
        }
    });
}

//==== 判斷視窗大小 ====
let screenWidth = window.innerWidth;
if (screenWidth < 576 && screenWidth >= 320) {
    change();
} else if (screenWidth > 576) {
    ini();
}

//==== 當視窗改變時 ====
window.addEventListener("resize", function () {
    let screenWidth = window.innerWidth;
    if (screenWidth < 576 && screenWidth >= 320) {
        change();
    } else if (screenWidth >= 576) {
        ini();
    }
});

//article2輪播
$(document).ready(function () {
    let liWidth = $('li.art3_link').width();
    $('#art3_button1').click(function () {
        $('ul#art3_link').animate({
            left: liWidth * -1,
        }, 700);
    });
    $('#art3_button2').click(function () {
        $('ul#art3_link').animate({
            left: 0,
        }, 700);
    });
});