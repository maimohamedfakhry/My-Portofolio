/*************************************************************************/
$(document).ready(function () {
  setTimeout(function () {
    $(".forloading").fadeOut();
    $("body").css("overflow", "auto");
  }, 2000);
});
var navhight = $("nav").outerHeight(true); // heightof navbar
var mkanelabout = $("#about").offset().top; // offset of about
var mkanelservices = $("#services").offset().top; //offset of services
var mkanelskills = $("#skills").offset().top; // offset of skills

$(window).scroll(function () {
  /****************arrow-up*************************************/
  if ($(window).scrollTop() > mkanelabout - navhight) {
    $(".arrowfont").fadeIn(1000);
  } else {
    $(".arrowfont").fadeOut(1000);
  }
  /****************************************** */
  /******************Navbar************************ */
  if ($(window).scrollTop() > navhight) {
    $("nav").addClass("nav-change");
  } else {
    $("nav").removeClass("nav-change");
  }
  /************************************************ */
  /********************Animation-services*************************** */
  if ($(window).scrollTop() == mkanelservices) {
    $("#div-services").attr("data-aos", "fade-up");
  } else {
    $("#div-services").attr("data-aos", "fade-down");
  }
  /********************************************************** */
  /********************Animation-skills*************************** */
  if ($(window).scrollTop() == mkanelskills) {
    $("#div-skills").attr("data-aos", "fade-up");
  } else {
    $("#div-skills").attr("data-aos", "fade-down");
  }
  /**************************************************************** */
});
/************************Arrow-up************************** */
$(".arrowfont").click(function () {
  $("html,body").animate({ scrollTop: 0 }, 1000);
});
/**************************************************************** */
/*************************Navbar******************************* */
$(".nav-link").click(function () {
  var sectionID = $(this).attr("href");
  var sectionplace = $(sectionID).offset().top;
  $("html,body").animate({ scrollTop: sectionplace }, 800);
});
/*********************************************************** */
