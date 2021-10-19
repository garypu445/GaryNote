// scrollupbtn
const btnscrolltotop = document.querySelector("#btnscrolltotop");

btnscrolltotop.addEventListener("click", function () {
    // window.scrollTo(0,0);

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });

    // $("html, body").animate({scrollTop: 0}, "slow");
});


// menu_stop_scroll
var checkbtn = document.getElementById("checkbtn");
var e = 0;
checkbtn.onclick = function(){
    console.log(e)
    if (e == 0){
        console.log("hi");
        // return e===3;
    }
    // console.log(e);
}
