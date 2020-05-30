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
                                    $("#page2Img").css("display", "block");
                                    let div = document.getElementById("page2-font");
                                    div.classList.add("inOut");
                                    $("#page2-font").addClass("inOut");

                                    let page2Img = document.getElementById("page2Img");
                                    page2Img.classList.add("font-class");
                                    $("#page2Img").addClass("font-class");
                                    setTimeout("bkclose()",4000);

                                } else if (page == 3) {
                                    $("#page3Img").css("display", "block");
                                    let div = document.getElementById("page3-font");
                                    div.classList.add("inOut");
                                    $("#page3-font").addClass("inOut");

                                    let page2Img = document.getElementById("page3Img");
                                    page2Img.classList.add("font-class");
                                    $("#page3Img").addClass("font-class");
                                    setTimeout("bkclose()",4000);

                                } else if (page == 4) {
                                    $("#page4Img").css("display", "block");
                                    let div = document.getElementById("page4-font");
                                    div.classList.add("inOut");
                                    $("#page4-font").addClass("inOut");

                                    let page2Img = document.getElementById("page4Img");
                                    page2Img.classList.add("font-class");
                                    $("#page4Img").addClass("font-class");
                                    setTimeout("bkclose()",4000);
                                } else if (page == 5) {
                                    $("#page5Img").css("display", "block");
                                    let div = document.getElementById("page5-font");
                                    div.classList.add("inOut");
                                    $("#page5-font").addClass("inOut");

                                    let page2Img = document.getElementById("page5Img");
                                    page2Img.classList.add("font-class");
                                    $("#page5Img").addClass("font-class");
                                    setTimeout("bkclose()",4000);

                                } else if (page == 6) {
                                    $("#page6Img").css("display", "block");
                                    let div = document.getElementById("page6-font");
                                    div.classList.add("inOut");
                                    $("#page6-font").addClass("inOut");

                                    let page2Img = document.getElementById("page6Img");
                                    page2Img.classList.add("font-class");
                                    $("#page6Img").addClass("font-class");
                                    setTimeout("bkclose()",4000);

                                } else {
                                    $(".btnImg").css("display", "block");
                                    $(".mark").css("display", "none");
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
    // 模拟方法，后台注释调
    // todo
    setUserName('12321312312313123123132')

}
function bkclose() {
    $("#page5Img").css("display", "none");
    $("#page2Img").css("display", "none");
    $("#page3Img").css("display", "none");
    $("#page4Img").css("display", "none");
    $("#page6Img").css("display", "none");
}

/**
 * 0,没开始，1抽中，2没中
 * @type {number}
 */
var receivedTex = 0;
var isLogin = false;
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
 * 关闭没抽到奖品
 */
function close0nAsk(){
    $("#noAskFriend").css("display", "none");
    $("#endPage").css("display", "block");
    $("#receivedTextId").css("display", "block");
    $("#startReceivedId").css("display", "none");
    receivedTex = 2;
}

/**
 * 关闭获奖后邀请用户提示
 */

function doCloseAskG() {
    $("#askFriend").css("display", "none");
    $("#endPage").css("display", "block");
    receivedTex = 2;
    $("#changeReceivedAddId").css("display", "block");
    $("#startReceivedId").css("display", "none");
}

/**
 * 修改地址触发
 */
function changeAddr() {
    $("#endPage").css("display", "none");
    $("#userInfoPage").css("display", "block");
}

/**
 * 关闭用户信息
 */
function doCloseUserInfo() {
    $("#userInfoPage").css("display", "none");
    $("#endPage").css("display", "block");
}

/**
 * 设置用户信息
 */

function setUserName(val) {
    $("#textNameId").html(val)
}

/**
 * 关闭选择分享
 */
function closeSelectShare(){
    $("#selectChannel").css("display", "none");
    $("#endPage").css("display", "block");
    $("#startReceivedId").css("display", "none");
    if(receivedTex==2){
        $("#receivedTextId").css("display", "block");
    } else if (receivedTex==1){
        $("#changeReceivedAddId").css("display", "block");
    } else {
        $("#startReceivedId").css("display", "block");
    }
}

/**
 * 登陆游戏
 */
function lotteryDraw() {
    // todo 判断是否登陆了游戏，如果登陆了直接进行抽奖
    isLogin = true
    if (isLogin == false) {
        $("#sharePage").css("display", "none");
        $("#loginGamePage").css("display", "block");
    } else {
        // 直接进入抽奖
        $("#pannelId").css("display", "block");
        // 调用后台函数进行抽奖
        // todo
        window.setTimeout(" dolotteryDraw()", 3000);
    }

}
/**
 * 提交信息
 */

function dolotteryDraw() {
    receivedTex = 1
    // 获得抽奖结果 receivedTex
    $("#pannelId").css("display", "none");
    $("#sharePage").css("display", "none");
    if (receivedTex == 1) {
        alert("模拟抽奖结果，抽中")
        $("#userInfoPage").css("display", "block");
    } else if (receivedTex == 2){
        alert("模拟抽奖结果，没抽中")
        $("#noAskFriend").css("display", "block");
    }
}

/**
 * 提交抽奖信息
 */
function submitInfo() {
    if (receivedTex == 2) {
        // todo 后台处理更新
        $("#userInfoPage").css("display", "none");
        $("#endPage").css("display", "block");
    } else {
        // todo 后台新增 temp 是模拟的数据,后台根据抽奖结果进行对接
        $("#userInfoPage").css("display", "none");
        $("#askFriend").css("display", "block");
    }

}

function shareInroFunc() {
    $("#sharePage").css("display", "none");
    $("#shareIntro").css("display", "block");
}

/**
 * 关闭登陆页面
 */
function closeLoginGame() {
    $("#loginGamePage").css("display", "none");
    $("#endPage").css("display", "block");
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
    receivedTex = true
    $("#noAskFriend").css("display", "none");
    $("#askFriend").css("display", "none");
    $("#selectChannel").css("display", "block");
}

/**
 * 显示回到桌面按钮
 */
function showBtnToHome() {
    $("#backToHomeId").css("display", "block");
}

/**
 * 影藏回到桌面按钮
 */
function hiddenBtnToHome() {
    $("#backToHomeId").css("display", "none");
}


/**
 * 回到桌面
 */
function doBackHomePage() {
    $(".flipbook").turn('page', 8);
    $("#endPage").css("display", "block");
    hiddenBtnToHome();
}
/**
 * 关闭领取抽奖也没
 */
function doCloseShareAndAcquire() {
    $("#sharePage").css("display", "none");
    $("#endPage").css("display", "block");
}

/**
 * 关闭创建角色
 */
function closeCreateRole() {
    $("#createRoleId").css("display", "none");
    $("#endPage").css("display", "block");
}

/**
 * 创建角色
 */
function doCreateRole() {
    $("#createRoleId").css("display", "none");
    $("#endPage").css("display", "block");
}

function showCreateRole () {
    $("#createRoleId").css("display", "block");
    $("#endPage").css("display", "none");
}

/**
 * qq分享平台
 */
function closeShareQQ() {
    $("#shareQQId").css("display", "none");
    $("#endPage").css("display", "block");
}
function showShareQQ() {
    $("#shareQQId").css("display", "block");
    $("#endPage").css("display", "none");
}
function doShareQQ() {
    $("#shareQQId").css("display", "none");
    $("#endPage").css("display", "block");
}
function doShareQQFriend() {
    $("#shareQQId").css("display", "none");
    $("#endPage").css("display", "block");
}

/**
 * 表单验证框
 * @param msg
 */
function showVefiy(msg) {
    $("#formVerifyId").html(msg);
    $("#formVerifyId").css("display", "block");
    setTimeout("hiddenVefity()", 5000);
}
function hiddenVefity() {
    $("#formVerifyId").css("display", "none");
}
