// Copy buttons for the "Cite" boxes in the publications list.
document.addEventListener("click", function (e) {
  var btn = e.target.closest("button.copy");
  if (!btn) return;
  var pre = document.getElementById(btn.getAttribute("data-target"));
  if (!pre) return;
  var done = btn.getAttribute("data-done") || "Copied";
  var label = btn.textContent;
  navigator.clipboard.writeText(pre.textContent).then(function () {
    btn.textContent = done;
    setTimeout(function () { btn.textContent = label; }, 1500);
  });
});
