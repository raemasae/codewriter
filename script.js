function updateOutput() {
  $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssContainer").val() + "</style></head><body>" + $(".contentContainer").val() + "</body></html>");

  document.getElementById("outputContainer").contentWindow.eval($("#jsContainer").val());
}

$(".toggleButton").click(function() {
  $(this).toggleClass("active");

  var panelId = $(this).attr("id") + "Container";

  $("#" + panelId).toggleClass("hidden");
});

updateOutput();

$("textarea").on("change keyup paste", function() {
  updateOutput();
});
