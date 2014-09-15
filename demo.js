$(function() {
    
    var speed = '50';
    var animate = 1200;
    
    $('.speed').click(function() {
        $('.speed').prop('checked', false);
        $(this).prop('checked', true);
        speed = $(this).attr('id');
        if(speed == '50'){
            animate = 1200;
        } else if (speed == '100') {
            animate = 600;
        } else {
            animate = 200;
        }
    });
    
    var car = '';
    
    $('.car').click(function() {
        $('.car').removeClass('active');
        $(this).addClass('active');
        car = $(this).attr('id');
    });
    
    $('#up').click(function() {
        $( '#'+car ).animate({
            top: "-="+parseInt(speed),
          }, animate);
    });
    
    $('#down').click(function() {
        $( '#'+car ).animate({
            top: "+="+parseInt(speed),
          }, animate);
    });
    
    $('#paint').click(function() {
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        $( '#'+car ).css('background', "#" + randomColor);
    });
    
    $('#pilot').click(function() {
        var autocar = car;
        var autospeed = speed;
        var autoanimate = animate;
        if (autocar === 'car1' || autocar === 'car2') {
            setInterval(function() {
                if($('#'+autocar).position().top > 800) {
                    $('#'+autocar).css('top', '20px');
                } else {
                    $( '#'+autocar ).animate({
                         top: "+="+parseInt(autospeed),
                       }, autoanimate);
                }
            }, autoanimate);
        } else {
            setInterval(function() {
                if($('#'+autocar).position().top < 40) {
                    $('#'+autocar).css('top', '720px');
                } else {
                    $( '#'+autocar ).animate({
                         top: "-="+parseInt(autospeed),
                       }, autoanimate);
                }
            }, autoanimate);
        }
    });
    
})
    