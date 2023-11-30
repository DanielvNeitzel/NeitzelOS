// ------------------------------------- //
// ------------ MEUS SCRIPTS ----------- //
// ------------------------------------- //

init();

function init() {
  setTimeout(
    function() {
      var loadScreen = document.getElementById("loadScreen");
      loadScreen.style.transition = "opacity " + .6 + "s";
      loadScreen.style.opacity = 0;
      loadScreen.addEventListener("transitionend", function() {
        console.log("loading complete");
        loadScreen.style.display = "none";
      });
    }, 6000
  );
}