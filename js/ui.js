function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function chooseSex(e) {
  if( e.target.value ) {
    $('.selected-sex').removeClass('selected-sex');
    $(e.target).addClass('selected-sex');
  }
}

function selectExp(e) {
  let expertism = $(e.target).text();
  $("#dropdownMenuButton").text(expertism);
}