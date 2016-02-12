$('a.bookmark').click(clickBookmark);

function clickBookmark(e){
    e.preventDefault();
	$(this).find('img').attr('src', 'img/bookmark-after.png');
	
}