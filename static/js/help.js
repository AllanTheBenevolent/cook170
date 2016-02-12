$('li#1').click(clickHelp1);
$('li#2').click(clickHelp2);
$('li#3').click(clickHelp3);


function clickHelp1(e) {
    $('img.speechbubble').attr('src', 'img/help.buddystep1.png');
}

function clickHelp2(e) {
    $('img.speechbubble').attr('src', 'img/help.buddystep2.png');
}

function clickHelp3(e) {
    $('img.speechbubble').attr('src', 'img/help.buddystep3.png');
}


