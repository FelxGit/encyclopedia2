

$('#nav-list > .dropdown').hide();

$('#content').mouseenter(function(){
    $(this).fadeOut(1000, function(){
        $('#nav-list > .dropdown').fadeIn(1000, function(){
           $('#content').show(1000);
            $('#content').unbind();
        });
    });
});

$('#content').mouseenter(function(){
   $('#glyhd').hide(1000); 
});
