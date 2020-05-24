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
                            tagHtml += ' <div id="first" style="background:url(image/00' + (i < 10 ? '0' + i : i) + '.jpg) center top no-repeat;background-size:100%"></div>';

                        } else if (i == 8) {
                            tagHtml += ' <div id="end" style="background:url(image/00' + (i < 10 ? '0' + i : i) + '.jpg) center top no-repeat;background-size:100%"></div>';

                        } else if (i == 2){
                            tagHtml += '' +
                                ' <div id="page2-font" style="background:url(image/00' + (i < 10 ? '0' + i : i) + '.jpg) center top no-repeat;background-size:100%">' +
                                '<div id="page2Img" ></div>' +
                                '</div>';
                        } else {
                            tagHtml += ' <div style="background:url(image/00' + (i < 10 ? '0' + i : i) + '.jpg) center top no-repeat;background-size:100%"></div>';
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
                                    let div = document.getElementById("pic");
                                    div.classList.add("abc");
                                    $(".pic").addClass("abc");

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
                                    let div = document.getElementById("page2-font");
                                    div.classList.add("inOut");
                                    $("#page2-font").addClass("inOut");

                                    let page2Img = document.getElementById("page2Img");
                                    page2Img.classList.add("font-class");
                                    $("#page2Img").addClass("font-class");
                                    $(".catalog").css("display", "block");
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
}

/**
 * 开始页面放大
 */
function zoomStartPage () {
    let div = document.getElementById("startPage");
    div.classList.add("top-layer-hover");
    $("#startPage").addClass("top-layer-hover");
    setTimeout("fadeOut()",10000)
}

