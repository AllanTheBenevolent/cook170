$('a.bookmark').click(clickBookmark);

function clickBookmark(e){
	$(this).find('img').attr('src', 'img/bookmark-after.png');
	
}