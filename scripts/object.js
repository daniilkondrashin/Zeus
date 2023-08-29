    $('#ol').click(function(e) {
    var $message = $('#dc');
    
    if ($message.css('display') != 'block') {
        $message.show();
        e.preventDefault();
        $(this).find('span.icon_list').toggleClass('active');

        var firstClick = true;
        $(document).bind('click.myEvent', function(e) {
            if (!firstClick && $(e.target).closest('#dc').length == 0) {
                $message.hide();
                $(document).unbind('click.myEvent');               
                $(this).find('span.icon_list').toggleClass('active');
                
            }
            firstClick = false;
        });
    }
    
    e.preventDefault();
});
