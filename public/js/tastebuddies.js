$('img').click(function() {
	$('img').removeClass('active');
    $(this).toggleClass("active");
});

//$('a.tastebuddy').click(nameClick);

function nameClick(e) {
    e.preventDefault();
 	var friendName = dubMainBuddy($(this).find('p#tastebuddy').text());
    $(this).find('p#tastebuddy').text(friendName);   
}

function dubMainBuddy(name) {
	// Thanks, Internet Anagram Server!
	
	if (name == "Pandacake") {
		return "Main Buddy";
	} 
	else if (name == "Bearger") {
		return "Main Buddy";
	}
	else if (name == "Eggy") {
		return "Main Buddy";
	}
    else if (name == "PanPan") {
		return "Main Buddy";
	}
    else if (name == "Locked") {
        return "Locked";
    }
}