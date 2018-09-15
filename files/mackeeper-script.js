function getParameterByName(t, e) {
  e || (e = window.location.href), t = t.replace(/[\[\]]/g, "\\$&");
  var n = RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)"), o = n.exec(e);
  return o ? o[2] ? " " + decodeURIComponent(o[2].replace(/\+/g, " ")) : "" : "Windows"
}
function PopIt(){return "WARNING! YOU NEED TO SCAN YOUR SYSTEM!"}
function UnPopIt(){}
function countdown() {
  var t = parseInt($("#mins").text()), e = parseInt($("#secs").text());
  0 != t && 0 == e ? (nmins = t - 1, nsecs = 59) : 0 != t || 0 != e ? (nmins = t, nsecs = e - 1) : 0 == t && 0 == e && (nmins = t, nsecs = e), $("#mins").text(nmins), $("#secs").text(nsecs)
}
var td=0,h=!1,cl=!1,cl2=!0,ns=!1;
$(document).ready(function () {
  function t() {
    e < values.length - 1 ? (e++, $(".progress-bar-color").css({width: parseInt(values[e].percent) + "%"}),
      $(".status-percent").html(values[e].percent + "%"), $(".status-text").html(values[e].text)) : (clearInterval(n), $(".status-percent").css("visibility", "hidden"), $(".status-text").html(virfoundtext1).addClass("align").fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500, function () {
      $(".status-text").html(virfoundtext2).addClass("searching"), $(".status-text").fadeIn(500, function () {
        window.setTimeout(function () {$(".outer1").fadeOut(500, function () {$(".outer1").remove(), $(".outer2").fadeIn(500)})}, 5e3)
      })
    }), $(".progress-bar").addClass("progress-bar-red"))
  }
  window.scrollTo(0, 1), values = [{percent: "0", text: loadingtext1}, {percent: "11", text: loadingtext2}, {percent: "35", text: loadingtext3}, {percent: "63", text: loadingtext4}, {percent: "81", text: loadingtext5}, {percent: "100", text: loadingtext6}];
  var e = 0, n = null;
  $(".orange").click(function () {$.when($(".outer0").fadeOut(500)).done(function () {$(".outer0").remove(), $(".outer1").show(), n = setInterval(t, 1e3)})})
});

$(function () {
  setTimeout(function () {alert(alertwindow)}, 2e3);
  setInterval(function () {countdown()}, 1e3);
  window.onbeforeunload = PopIt, $("a").click(function () {window.onbeforeunload = UnPopIt});
  $("#ostype").text(getParameterByName("os"));
  $(".app").text(getUrlParameter("app"));
  $(".btn").mouseover(function () {h = !0, setTimeout(function () {cl2 = !1}, 5e3)});
});
