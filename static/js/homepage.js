var count = 0;

$('input.solid').click(clickAdd);

function clickAdd(e){
    count += 1;
    
    $('img.submit').attr("src", "img/submit.png");
    
    if(count == 1){
        $('img.speechbubble').attr("src", "img/yumhomepage.png");
    }
    if(count == 2){
         $('img.speechbubble').attr("src", "img/defaulthomepage.png");
    } 
}
