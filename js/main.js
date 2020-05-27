/**
 * 判断手机类型
 */
window.onload = function () {
    let u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
        // todo
    } else if (u.indexOf('iPhone') > -1) {
        $(window).on('scroll.elasticity', function (e) {
            e.preventDefault();
        }).on('touchmove.elasticity', function (e) {
            e.preventDefault();
        });
    } else if (u.indexOf('Windows Phone') > -1) {
        // todo
    }
    loading();
}

//加载图片
let loadingImageUrl = [
    "./image/0001.jpg",
    "./image/0002.jpg",
    "./image/0003.jpg",
    "./image/0004.jpg",
    "./image/0005.jpg",
    "./image/0006.jpg",
    "./image/0007.jpg",
    "./image/0008.jpg",
];

//加载页面
function loading() {
    let numbers = 0;
    let length = loadingImageUrl.length;
    for (let i = 0; i < length; i++) {
        let img = new Image();
        img.src = loadingImageUrl[i];
        img.onerror = function () {
            numbers += (1 / length) * 100;
        }

        img.onload = function () {
            numbers += (1 / length) * 100;
            $('.number').html(parseInt(numbers) + "%");
            if (Math.round(numbers) == 100) {
                $(function progressbar() {
                    $('.shade').hide();

                    var tagHtml = "";
                    for (var i = 1; i <= 8; i++) {
                        if (i == 1) {
                            tagHtml += ' <div id="first">' +
                                '<img width="100%" height="100%" src="./image/0001.jpg"/>' +
                                '</div>';

                        } else if (i == 8) {
                            tagHtml += ' <div id="end">' +
                                '<img width="100%" height="100%" src="./image/0008.jpg"/>' +
                                '</div>';

                        } else if (i == 2){
                            tagHtml += '' +
                                ' <div id="page2-font" >'+
                                '<img width="100%" height="100%" src="./image/0002.jpg"/>' +
                                '<div id="page2Img" ></div>' +
                                '</div>';
                        }  else if (i == 3){
                            tagHtml += '' +
                                ' <div id="page3-font" >' +
                                '<img width="100%" height="100%" src="./image/0003.jpg"/>' +
                                '<div id="page3Img" ></div>' +
                                '</div>';
                        } else if (i == 4){
                            tagHtml += '' +
                                ' <div id="page4-font" >' +
                                '<img width="100%" height="100%" src="./image/0004.jpg"/>' +
                                '<div id="page4Img" ></div>' +
                                '</div>';
                        } else if (i == 5){
                            tagHtml += '' +
                                ' <div id="page5-font" >' +
                                '<img width="100%" height="100%" src="./image/0005.jpg"/>' +
                                '<div id="page5Img" ></div>' +
                                '</div>';
                        } else if (i == 6){
                            tagHtml += '' +
                                ' <div id="page6-font">' +
                                '<img width="100%" height="100%" src="./image/0006.jpg"/>' +
                                '<div id="page6Img" ></div>' +
                                '</div>';
                        }  else if (i == 7){
                            tagHtml += ' <div>' +
                                '<img width="100%" height="100%" src="./image/0007.jpg"/>' +
                                '</div>';
                        }
                    }
                    $(".flipbook").append(tagHtml);
                    var w = $(".graph").width();
                    $(".flipbook-viewport").show();
                });
                //配置turn.js
                function loadApp() {
                    var w = $(window).width();
                    var h = $(window).height();
                    $('.flipboox').width(w).height(h);
                    $(window).resize(function () {
                        w = $(window).width();
                        h = $(window).height();
                        $('.flipboox').width(w).height(h);
                    });
                    $('.flipbook').turn({
                        // Width
                        width: w,
                        // Height
                        height: h,
                        // Elevation
                        elevation: 50,
                        display: 'single',
                        // Enable gradients
                        gradients: true,
                        // Auto center this flipbook
                        autoCenter: true,
                        when: {
                            turning: function (e, page, view) {
                                if (page == 1) {

                                } else if (page == 2) {
                                    // let div = document.getElementById("pic");
                                    // div.classList.add("abc");
                                    // $(".pic").addClass("abc");
                                    let div = document.getElementById("page2-font");
                                    div.classList.add("inOut");
                                    $("#page2-font").addClass("inOut");

                                    let page2Img = document.getElementById("page2Img");
                                    page2Img.classList.add("font-class");
                                    $("#page2Img").addClass("font-class");
                                    $(".catalog").css("display", "block");

                                } else if (page == 3) {
                                    // let div = document.getElementById("pic");
                                    // div.classList.add("abc");
                                    // $(".pic").addClass("abc");
                                    let div = document.getElementById("page3-font");
                                    div.classList.add("inOut");
                                    $("#page2-font").addClass("inOut");

                                    let page2Img = document.getElementById("page3Img");
                                    page2Img.classList.add("font-class");
                                    $("#page2Img").addClass("font-class");
                                    $(".catalog").css("display", "block");

                                } else if (page == 4) {
                                    // let div = document.getElementById("pic");
                                    // div.classList.add("abc");
                                    // $(".pic").addClass("abc");
                                    let div = document.getElementById("page4-font");
                                    div.classList.add("inOut");
                                    $("#page2-font").addClass("inOut");

                                    let page2Img = document.getElementById("page4Img");
                                    page2Img.classList.add("font-class");
                                    $("#page2Img").addClass("font-class");
                                    $(".catalog").css("display", "block");

                                } else if (page == 5) {
                                    // let div = document.getElementById("pic");
                                    // div.classList.add("abc");
                                    // $(".pic").addClass("abc");
                                    let div = document.getElementById("page5-font");
                                    div.classList.add("inOut");
                                    $("#page2-font").addClass("inOut");

                                    let page2Img = document.getElementById("page5Img");
                                    page2Img.classList.add("font-class");
                                    $("#page2Img").addClass("font-class");
                                    $(".catalog").css("display", "block");

                                } else if (page == 6) {
                                    // let div = document.getElementById("pic");
                                    // div.classList.add("abc");
                                    // $(".pic").addClass("abc");
                                    let div = document.getElementById("page6-font");
                                    div.classList.add("inOut");
                                    $("#page2-font").addClass("inOut");

                                    let page2Img = document.getElementById("page6Img");
                                    page2Img.classList.add("font-class");
                                    $("#page2Img").addClass("font-class");
                                    $(".catalog").css("display", "block");

                                } else {
                                    $(".btnImg").css("display", "block");
                                    $(".mark").css("display", "none");
                                }
                                if (page == 41) {
                                    $(".nextPage").css("display", "none");
                                } else {
                                    $(".nextPage").css("display", "block");
                                }
                            },
                            turned: function (e, page, view) {
                                var total = $(".flipbook").turn("pages");//总页数
                                if (page == 1) {
                                    $(".return").css("display", "none");
                                    $(".btnImg").css("display", "none");
                                } else {
                                    $(".return").css("display", "block");
                                    $(".btnImg").css("display", "block");
                                }
                                if (page == 2) {
                                   // todo
                                } else if (page == 8){
                                    $("#endPage").css("display", "block");
                                } else {
                                    $(".catalog").css("display", "none");
                                }
                            },
                            start: function(e, pageObject, corner){
                                if (corner=="tl" || corner=="tr") {
                                    event.preventDefault();
                                }
                            }
                        }
                    })
                }
                yepnope({
                    test: Modernizr.csstransforms,
                    yep: ['js/turn.js'],
                    complete: loadApp
                });
            }
            ;
        }
    }
}

/**
 * 放大后翻页
 */
function fadeOut() {
    $("#startPage").css("display", "none");
    $(".flipbook").turn("next");
    $("#startPage").removeClass("top-layer-hover");
}

function reWatch() {
    $(".flipbook").turn('page', 1);
    $("#endPage").css("display", "none");
    $("#startPage").css("display", "block");
}

/**
 * 开始页面放大
 */
function zoomStartPage () {
    let div = document.getElementById("startPage");
    div.classList.add("top-layer-hover");
    $("#startPage").addClass("top-layer-hover");
    setTimeout("fadeOut()",4000)
}

/**
 * 获取守护至礼物
 */
function getGift() {
    $("#endPage").css("display", "none");
    $("#sharePage").css("display", "block");
}

/**
 * 登陆游戏
 */
function loginGame() {
    $("#sharePage").css("display", "none");
    $("#loginGamePage").css("display", "block");
}
function shareInroFunc() {
    $("#sharePage").css("display", "none");
    $("#shareIntro").css("display", "block");
}

/**
 * 用户信息
 */
function showUserInfo() {
    $("#loginGamePage").css("display", "none");
    $("#loginSelect").css("display", "block");
}
function closeLoin() {
    $("#loginGamePage").css("display", "block");
    $("#loginSelect").css("display", "none");
}
function skipStepLogin(){
    alert("此处应该时调用登陆接口，返回后继续")
    $("#loginSelect").css("display", "none");
    $("#userInfoPage").css("display", "block");
}
/**
 * 提交信息
 */
var tmp = 0
function submitInfo() {
    tmp = tmp + 1;
    $("#userInfoPage").css("display", "none");
    if (tmp % 2 == 0){
        alert("模拟抽奖结果，抽中")
        $("#askFriend").css("display", "block");
    }else {
        alert("模拟抽奖结果，没抽中")
        $("#noAskFriend").css("display", "block");
    }
}
function selectWx() {
    alert("选择分享方式");
}
function showRules() {
    $("#ruleDetaul").css("display", "block");
}
function closeRule(){
    $("#ruleDetaul").css("display", "none");
}
function showShare() {
    $("#shareIntro").css("display", "block");
}
function closeShareInfo(){
    $("#shareIntro").css("display", "none");
}

/**
 * ask
 */
function doAsk() {
    $("#noAskFriend").css("display", "none");
    $("#askFriend").css("display", "none");
    $("#selectChannel").css("display", "block");
}

