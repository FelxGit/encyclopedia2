
//vanilla collapse does not go well with 'collapse in' but collapse, with extra jquery manipulation as subtitute

$('#car-collapse').hide();
  
$('#car-colsub').click(function(){
   $('#car-collapse').fadeIn(function(){
       $('#car-colsub').hide();
   }); 
});
