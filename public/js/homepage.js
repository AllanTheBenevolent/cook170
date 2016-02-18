// TRY THE UNCOMMENTED CODE FIRST TO SEE WHAT SHOULD HAPPEN (and the error that occurs mentioned below) 

//ORIGINAL PROBLEM (CURRENT UNCOMMENTED CODE): yellow submit button will only show when you click 'ADD' button with no values in the field. When I do add actual items into the field, the submit button reverts back to gray! To solve the issue, I added code (that is currently commented out) to disable the 'ADD' button until the field is nonempty in hope that the submit button will only work after the user inputs items.

//CURRENT PROBLEM (COMMENTED CODE + UNCOMMENTED CODE TOGETHER): if you uncomment everything, all the buttons are disabled until the field is nonempty (yay!) but now the click listener will not work when you click 'ADD'. when you click 'ADD', the 'SUBMIT' button should turn yellow and allow you to click on it. POSSIBLE BUG: It is not working because once you click 'ADD' when you input a value into the field, the field becomes nonempty again, which resets everything. Because of this, the click listener to enable and change the color of the 'SUBMIT' button will never work. 

//disable submit button when it is gray (default). button is enabled when it is yellow after you input values into the field
$('a#submit').bind('click', false);

//code for showing messages on clicking disabled submit button
$('a#submit').click(function (event) {
    if ($(this).hasClass('disabled')) {
        alert('Aww man! We cannot create recipes for you if you have no ingredients. Add ingredients first and try again.');
    }else {
        return true;
    }
});

/* disables 'ADD' until fields are nonempty
(function() {
    $('form > input').keyup(function() {
        var empty = false;
        $('form > input').each(function() {
            if ($(this).val() == '') {
                empty = true;
            }
        });

        if (empty) {
            $('input.solid').attr('disabled', 'disabled');
        } else {
            $('input.solid').removeAttr('disabled');
            $('input.solid').click(clickAdd); //calls function below 
        }
    });
})()*/

$('input.solid').click(clickAdd); // remove if you want to use the above code
var count = 0;

function clickAdd(e){
    console.log("HELLO IT'S ME"); //printed BUT ONLY FOR A SPLIT SECOND because field becomes empty again (reset)
    
    //code never reaches this area because field becomes empty very quickly :(
    count += 1;
    if(count == 1){
        $('img.speechbubble').attr("src", "img/yumhomepage.png");
        $('img.submit').attr("src", "img/submit.png");
        $('a#submit').unbind('click', false);
        $('a#submit').removeAttr('class');
    }
    else if(count == 2){
        count = 0;
        $('img.speechbubble').attr("src", "img/defaulthomepage.png");
        $('img.submit').attr("src", "img/submit.png");
        $('a#submit').unbind('click', false);
    } 
}