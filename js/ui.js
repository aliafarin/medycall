//open sideBar
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

// close sideBar
$("#home").on('click', function() {
  document.getElementById("mySidenav").style.width = "0";
})

//choose doctor sex
function chooseSex(e) {
  if( e.target.value ) {
    $('.selected-sex').removeClass('selected-sex');
    $(e.target).addClass('selected-sex');
  }
}

//open and close dropDown
function openDropDown(e) {
  $(".dropdown-items").toggleClass("openDropDown");
  $(".dropdown-button i").toggleClass('dropdown-icon-down');
  if(e.target.dataset.value) {
    let expName = $(e.target).text();
    $(".exp-name").text(expName);
  }
}

//display search input on click
function showSearchInput() {
  $("span.search-icon").css("display", "none");
  $(".home-top .page-header").css("display", "none");
  $(".home-top input").css("display", "inline-block");
}

//hide search input on page click
$("#home").on('click', function() {
  if($(".home-top input").css('display') !== "none") {
    $(".home-top input").css('display', 'none');
    $("span.search-icon").css("display", "block");
    $(".home-top .page-header").css("display", "block");
  } 
})