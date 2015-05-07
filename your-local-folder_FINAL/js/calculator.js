// Calculator JScript

var sendRequestStr = "Связаться с нами";
var ContactUsStr = "Форма обратной связи";

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$("#calcPanelHeading button, #btnCalcCollapsePanel").click(function(){
	if ($("#contactUs").text() == sendRequestStr) {
		$("#contactUs").text(ContactUsStr);
	}
	else
		{
			$("#contactUs").text(sendRequestStr);
	}
});

 // Calculate Button Click
$("#btnCalculate").click(function(){
	if ($("#contactUs").text() == sendRequestStr) {
		$("#contactUs").text(ContactUsStr);
		$("#collapseCalc").addClass('in');
	}
});

$("a:contains(Сайт Визитка)").click(function(){
    $("a:contains(Корпоративный Сайт)").removeClass("active focus");
    $("a:contains(Интернет магазин)").removeClass("active focus");
});

$("a:contains(Корпоративный Сайт)").click(function(){
    $("a:contains(Сайт Визитка)").removeClass("active focus");
    $("a:contains(Интернет магазин)").removeClass("active focus");
});

$("a:contains(Интернет магазин)").click(function(){
    $("a:contains(Корпоративный Сайт)").removeClass("active focus");
    $("a:contains(Сайт Визитка)").removeClass("active focus");
});

$("a:contains(Шаблон)").click(function(){
    $("a:contains(Уникальный)").removeClass("active focus");
    $("a:contains(Ваш вариант)").removeClass("active focus");
});

$("a:contains(Ваш вариант)").click(function(){
    $("a:contains(Шаблон)").removeClass("active focus");
    $("a:contains(Уникальный)").removeClass("active focus");
});

$("a:contains(Уникальный)").click(function(){
    $("a:contains(Ваш вариант)").removeClass("active focus");
    $("a:contains(Шаблон)").removeClass("active focus");
});
