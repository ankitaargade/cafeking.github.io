document.addEventListener("DOMContentLoaded", function () {
  //   var elems = document.querySelectorAll(".modal");
  //   var instances = M.Modal.init(elems);

  $(".sidenav").sidenav();
  $(".modal").modal();
  $(".slider").slider({
    fullWidth: true,
    indicators: true,
  });
  $(".parallax").parallax();
  $(".carousel").carousel({
    numVisible: 5,
    padding: 70,
    shift: 55,
  });
});

function toggleModal() {
  var instance = M.Modal.getInstance(document.getElementById("modal1"));
  instance.open();
}
