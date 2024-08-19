// init Isotope
var $grid = $('.collection-list').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    resetfilterbtn();
    $(this).addClass('active-filter-btn');
    $grid.isotope({ filter: filterValue });
  });

let filterbtns=$(".filter-button-group").find('button');

function resetfilterbtn(){
    filterbtns.each(function(){
        $(this).removeClass('active-filter-btn');
    });
}