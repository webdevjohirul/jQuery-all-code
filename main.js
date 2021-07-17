$(document).ready(function() {

    // hide all button
    $(".hideBtn").click(function() {
        $(":button").hide();
    });
    $(".showBtn").click(function() {
        $("button").show();
    });

    // * all content hide()
    $(".btnHideAll").click(function() {
        $("*").hide();
    });

    // hide(),show(),toggle()
    $("h1").hide();
    $("h2").show();
    $(".btnHide").click(function() {
        $("h3").hide();
    });
    $(".btnShow").click(function() {
        $("h3").show();
    });
    $(".btnToggle").click(function() {
        $("h4").toggle();
    });

    // :first, :last, this, dblclick(), mouseenter(), mouseleave(), hover()
    $(".firstBtnPara").click(function() {
        $("p:first").hide();
    });

    $(".hidePara2").click(function() {
        $(this).hide();
    });
    // $("p.hidePara2").click(function() {
    //     $("p.hidePara2").hide();
    // });

    $(".hidePara3").dblclick(function() {
        $(this).hide();
    });
    $(".hidePara4").mouseenter(function() {
        $(this).hide();
    });
    $(".hidePara5").mouseleave(function() {
        $(this).hide();
    });

    $(".hidePara6").hover(function() {
        $(this).hide();
    }, function() {
        $(this).show();
    });

    $(".lastBtnPara").click(function() {
        $("p:last").hide();
    });

    // :first-child, :last-child, :nth-child
    $(".btnList1").click(function() {
        $("ul li:first-child").hide();
    });
    $(".btnList2").click(function() {
        $("ul li:nth-child(2)").hide();
    });
    $(".btnList3").click(function() {
        $("ul li:last-child").hide();
    });

    // Hiperlink hide() show()
    $(".hideLink").click(function() {
        $("[href]").hide();
    });
    $(".showLink").click(function() {
        $("[href]").show();
    });
    // $(".hideLink").click(function() {
    //     $("a[target='_blank']").hide();
    // });
    // $(".showLink").click(function() {
    //     $("a[target='_blank']").show();
    // });

    // focus()
    $(".focus").focus(function() {
        $(this).css({ "background": "dodgerblue", "color": "white" });
    });

    // multi function on()- mouseenter, click, mouseleave
    $(".multiFunction1").on({
        mouseenter: function() {
            $(this).css("background", "dodgerblue");
        },
        click: function() {
            $(this).css("background", "tomato");
        },
        dblclick: function() {
            $(this).css({ "background": "#0B85F4", "color": "white" });
        },
        mouseleave: function() {
            $(this).css({ "background": "lightgreen", "color": "black" });
        }
    });

    $(".multiFunction2").click(function() {
        $(".multiFunctionPara").css({ "background": "cyan", "color": "red" })
            .slideUp(1000)
            .slideDown(1000)
            .fadeOut(1000)
    })

    // speed parameter- slow, fast, milisecond
    $(".slowHide").click(function() {
        $(".speedParam").hide('slow');
    });
    $(".fastShow").click(function() {
        $(".speedParam").show('fast');
    });
    $(".toggleMili").click(function() {
        $(".speedParam").toggle(2000);
    });

    // fadeIn(), fadeOut()
    $(".fadeOut").click(function() {
        $(".box1").fadeOut();
        $(".box2").fadeOut('slow');
        $(".box3").fadeOut(2000);
    });
    $(".fadeIn").click(function() {
        $(".box1").fadeIn(2000);
        $(".box2").fadeIn('slow');
        $(".box3").fadeIn();
    });
    $(".fadeToggle").click(function() {
        $(".box1").fadeToggle();
        $(".box2").fadeToggle('slow');
        $(".box3").fadeToggle(2000);
    });
    $(".fadeTo").click(function() {
        $(".box1").fadeTo('fast', 0.3);
        $(".box2").fadeTo('slow', 0.4);
        $(".box3").fadeTo(2000, 0.5);
    });
    $(".fadeReset").click(function() {
        $(".box1").fadeTo(2000, 1);
        $(".box2").fadeTo('slow', 1);
        $(".box3").fadeTo('fast', 1);
    });

    // slideUp(), slideDown(), slideToggle()
    $(".slideUp").click(function() {
        $(".slidePara").slideUp('slow');
    });
    $(".slideDown").click(function() {
        $(".slidePara").slideDown('slow');
    });
    $(".slideToggle").click(function() {
        $(".slidePara").slideToggle('slow');
    });

    // animate() stop()
    $(".animate1").click(function() {
        $(".animateDiv").animate({
            left: "1000px",
            width: "+=10px",
            height: "+=10px",
            top: "-350px"
        }, 2000);
        $(".animateDiv").animate({
            left: "0px",
            top: "-400px",
            width: "50px",
            height: "50px"
        }, 'slow');
        $(".animateDiv").animate({
            left: "1100px",
            top: "50px",
            width: "70px",
            height: "70px"
        }, 2000);
        $(".animateDiv").animate({
            left: "0px",
            top: "0px",
            width: "100px",
            height: "100px"
        }, 'slow');
    });
    $(".animate2").click(function() {
        $(".animateDiv").animate({
            width: "toggle",
            height: "toggle"
        }, 2000);
    });
    $(".stopAnimate").click(function() {
        $(".animateDiv").stop();
    });

    $(".animateDiv").click(function() {
        $(this).hide(3000);
    });

    // callback function()
    $(".callBack").click(function() {
        $(".callBackPara").toggle(1000, function() {
            alert("callback function running");
        });
    });

    // getContent,getAttribute- text(),html(),val(),attr()
    $(".getBtn1").click(function() {
        alert("Text: " + $(".getText").text());
    });
    $(".getBtn2").click(function() {
        alert("Html: " + $(".getText").html());
    });
    $(".getBtn3").click(function() {
        alert($(".getValue").val());
    });
    $(".getBtn4").click(function() {
        alert($(".getAttr").attr("href"));
    });

    // setContent,setAttribute- text(),html(),val(),attr()
    $(".setBtn1").click(function() {
        $(".setText").text("Successfully change text")
    });
    $(".setBtn2").click(function() {
        $(".setText").html("<h3> Successfully change html</h3>")
    });
    $(".setBtn3").click(function() {
        $(".setValue").val("Enter your first name")
    });
    $(".setBtn4").click(function() {
        $(".setAttr").attr("href", "https://facebook.com").text("Facebook")
    });

    // append(), prepend(), before(), after()
    $(".prependBtn").click(function() {
        $(".prependText").prepend("<i>Lorem </i>");
    });
    $(".appendBtn").click(function() {
        $(".appendText").append("<i> amet</i>");
    });
    $(".beforeBtn").click(function() {
        $(".beforeAfterImg").before("<b>Lorem </b>");
    });
    $(".afterBtn").click(function() {
        $(".beforeAfterImg").after("<b> amet</b>");
    });

    // remove(), empty()
    $(".removeBtn").click(function() {
        $(".removeEmptyText").remove();
    });
    $(".emptyBtn").click(function() {
        $(".removeEmptyText").empty();
    });

    // addClass(), removeClass(), toggleClass()
    $(".addClassBtn").click(function() {
        $(".classDiv").addClass("addClass");
    });
    $(".removeClassBtn").click(function() {
        $(".classDiv").removeClass("addClass");
    });
    $(".toggleClassBtn").click(function() {
        $(".classDiv").toggleClass("addClass");
    });

    // Dimensions
    $(".dimensionBtn1").click(function() {
        $(".dimensionDiv").width("200px").height("200px").css("background", "cyan");
    });
    $(".dimensionBtn2").click(function() {
        $(".dimensionDiv").width("100px").height("100px").css("background", "violet");
    });

    // Ancestors
    $(".childSpan").parent().css({
        "border": "2px solid tomato",
        "color": "tomato"
    });
    $(".childSpan").parents("ul").css({
        "border": "2px solid cyan",
        "color": "cyan"
    });
    // $(".childSpan").parents().css({ //span er all parent style hobe
    //     "border": "2px solid green",
    //     "color": "green"
    // });
    // $(".childSpan").parentsUntil("ul").css({ //span theke ul er vitorer modde style hobe
    //     "border": "2px solid blue",
    //     "color": "blue"
    // });

    // Descendants
    $(".descendants").children().css({
        "border": "2px solid tomato",
        "color": "tomato"
    });
    $(".descendants").find("ul").css({
        "border": "2px solid cyan",
        "color": "cyan"
    });

    // siblings()-next()-nextAll()-nextUntil()-prev()-prevAll()-prevUntil(tag)
    $(".siblingText").siblings().css({
        "color": "red",
        "border": "2px solid red"
    });
    $(".siblingText").siblings("h2").css({
        "color": "red",
        "border": "2px solid red"
    });
    $(".siblingText").next().css({
        "color": "red",
        "border": "2px solid red"
    });
    $(".siblingText").nextAll().css({
        "color": "red",
        "border": "2px solid red"
    });
    $(".siblingText").nextUntil("h6").css({
        "color": "red",
        "border": "2px solid red"
    });
    $(".siblingText").prev().css({
        "color": "red",
        "border": "2px solid red"
    });
    $(".siblingText").prevAll().css({
        "color": "red",
        "border": "2px solid red"
    });
    $(".siblingText").prevUntil("div").css({
        "color": "red",
        "border": "2px solid red"
    });

    // first(), last(), eq(0), filter(class), not(class)
    $(".filtering").first().css({
        "background": "cyan",
        "color": "tomato"
    });
    $(".filtering").last().css({
        "background": "dodgerblue",
        "color": "black"
    });
    $(".filtering").eq(1).css({
        "background": "brown",
        "color": "white"
    });
    $(".filterText").filter(".filterText2").css({
        "background-color": "green",
        "color": "black"
    });
    $(".filterText").not(".filterText2").css({
        "background-color": "violet",
        "color": "black"
    });

    // ajax load()
    $(".ajaxBtn").click(function() {
        $(".ajaxText").load("demo.html");
    });

    // End jQuery code










});