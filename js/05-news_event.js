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