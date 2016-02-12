$('a.bookmark').click(clickBookmark);

function clickBookmark(e){
    e.preventDefault();
	$(this).find('img').attr('src', '../images/bookmark-after.png');
}