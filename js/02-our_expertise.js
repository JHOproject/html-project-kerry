// ------------ art2 -----------
//======== 視窗大於等於768時 ===========
function up() {
    //========== btn按鈕 ============
    //所有btn開啟
    let item_btn = document.querySelectorAll("button.item_btn");
    item_btn.forEach(function (value, item) {
        value.classList.remove("-look");
        value.classList.remove("-on");
        value.classList.remove("-off");
        value.classList.add("-on");
    });
    //第一個btn改顏色
    item_btn[0].classList.add("-on");
    item_btn[0].classList.add("-look");

    // //============ 內文 ===============
    // 所有先關閉
    let div_p = document.querySelectorAll("div.p");
    div_p.forEach(function (value, item) {
        value.classList.remove("-on");
        value.classList.remove("-block");
        value.classList.add("-off");
        value.classList.add("-none");
    });
    //第一個開啟
    div_p[0].classList.remove("-off");
    div_p[0].classList.remove("-none");
    div_p[0].classList.add("-block");
    div_p[0].classList.add("-on");

    //綁定按鈕點擊
    for (let i = 0; i < item_btn.length; i++) {
        item_btn[i].addEventListener("click", function () {
            // 先初始化
            item_btn.forEach(function (value, item) {
                value.classList.remove("-look");
            });

            div_p.forEach(function (value, item) {
                value.classList.remove("-on");
                value.classList.remove("-block");
                value.classList.add("-off");
                value.classList.add("-none");
            });

            if (item_btn[i].classList.contains("-on")) {
                //該按鈕換背景色TODO:
                item_btn[i].classList.add("-look");
                //相對應p出現
                div_p[i].classList.remove("-off");
                div_p[i].classList.remove("none");
                div_p[i].classList.add("-on");
                div_p[i].classList.add("-block");
            }
        });
    }
}

//======== 視窗小於768時 ===========
function down() {
    // ======== AOCI按鈕 ===========
    //所有先關閉(加入-off)
    let international_btn = document.querySelectorAll("span.btn");
    international_btn.forEach(function (value, item) {
        value.classList.add("-off");
    });

    //第一個開啟
    international_btn[0].classList.remove("-off");
    international_btn[0].classList.add("-on");

    //========== btn按鈕 ============
    //所有先關閉(加入-off)
    let item_btn = document.querySelectorAll("button.item_btn");
    item_btn.forEach(function (value, item) {
        value.classList.remove("-look");
        value.classList.remove("-on");
        value.classList.remove("-off");
        value.classList.add("-off");
    });

    //第一個開啟
    item_btn[0].classList.remove("-off");
    item_btn[0].classList.add("-on");

    // //============ 內文 ===============
    // 所有先關閉
    let div_p = document.querySelectorAll("div.p");
    div_p.forEach(function (value, item) {
        value.classList.remove("-on");
        value.classList.remove("-block");
        value.classList.add("-off");
        value.classList.add("-none");
    });
    //第一個開啟
    div_p[0].classList.remove("-off");
    div_p[0].classList.remove("-none");
    div_p[0].classList.add("-block");
    div_p[0].classList.add("-on");

    //綁定AOCI按鈕點擊
    for (let i = 0; i < international_btn.length; i++) {
        international_btn[i].addEventListener("click", function () {
            // 先初始化
            international_btn.forEach(function (value, item) {
                value.classList.remove("-on");
                value.classList.add("-off");
            });

            item_btn.forEach(function (value, item) {
                value.classList.remove("-on");
                value.classList.add("-off");
            });

            div_p.forEach(function (value, item) {
                value.classList.remove("-on");
                value.classList.remove("-block");
                value.classList.add("-off");
                value.classList.add("-none");
            });

            if (international_btn[i].classList.contains("-on")) {
                //該按鈕換背景色
                international_btn[i].classList.remove("-on");
                international_btn[i].classList.add("-off");
                //相對應btn出現
                item_btn[i].classList.remove("-on");
                item_btn[i].classList.add("-off");
                //相對應p出現
                div_p[i].classList.remove("-on");
                div_p[i].classList.remove("-block");
                div_p[i].classList.add("-off");
                div_p[i].classList.add("-none");
            } else {
                international_btn[i].classList.remove("-off");
                international_btn[i].classList.add("-on");
                item_btn[i].classList.remove("-off");
                item_btn[i].classList.add("-on");
                div_p[i].classList.remove("-off");
                div_p[i].classList.remove("-none");
                div_p[i].classList.add("-on");
                div_p[i].classList.add("-block");
            }
        });
    }
}


//========= 判斷視窗大小 ===========
let screenWidth = window.innerWidth;
if (screenWidth >= 768) {
    up();
} else if (screenWidth < 768) {
    down();
}



//========== 視窗改變時 ============
window.addEventListener("resize", function () {
    let screenWidth = window.innerWidth;
    if (screenWidth < 768) {
        down();
    } else {
        up();
    }
});


//------------ art4_btn --------------
let art4_btn = document.getElementsByClassName("art4_btn")[0];
console.log(art4_btn);
art4_btn.addEventListener("click", function () {
    let art4_left = document.getElementsByClassName("art4_left")[0];
    console.log(art4_left);
    if (!art4_left.classList.contains("-move")) {
        art4_left.classList.add("-move");
        art4_btn.classList.add("-move");
    } else {
        art4_left.classList.remove("-move");
        art4_btn.classList.remove("-move");
    }
});


