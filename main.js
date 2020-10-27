//per essere caricato alla fine
$(document).ready(function(){

//click left
  $('.prev').click(function(){
    move('prev')

  });

//click right
  $('.next').click(function(){
    move('next')

  });





//function da inserire nei click

function move(direction) {
  var selectimage = $('.images img.active');
  var selectround = $('.nav i.active');
//reset per togliere l'immagine o il pallino precedente
  selectimage.removeClass('active');
  selectround.removeClass('active');
//cambio di immagine selezionata e pallino
  if( direction === 'next' ) {
    if (selectimage.hasClass('last'))
    {
      $('.images img.first').addClass('active');
      $('.nav i.first').addClass('active');

   } else
   {
     selectimage.next('img').addClass('active');
     selectround.next('i').addClass('active');
  }
  }
  else if (direction === 'prev') {
    if (selectimage.hasClass('first'))
    {
      $('.images img.last').addClass('active');
      $('.nav i.last').addClass('active');

   } else
   {
     selectimage.prev('img').addClass('active');
     selectround.prev('i').addClass('active');
  }
  }

}











































})
