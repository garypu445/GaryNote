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
        // console.log("hi");
        $("body").css({"position":"fixed","width":"100%"});
        return e = 1;
        
    }
    else if(e == 1){
        // console.log("he")
        $("body").css({ "position": "initial", "height": "auto" });
        return e = 0;
    }
}
