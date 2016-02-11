var count = 0;

$('input.solid').click(clickAdd);

function clickAdd(e){
    count += 1;
    
    $('img.submit').attr("src", "../images/submit.png");
    
    if(count == 1){
        $('img.speechbubble').attr("src", "../images/yumhomepage.png");
    }
    if(count == 2){
         $('img.speechbubble').attr("src", "../images/defaulthomepage.png");
    } 
}
