$(document).on('ready', function() {
		var popUp = "<p class='popUp'> do re me fa so la ti do</p>"; 

	$(document).on('click', '.first', function(){
		$('body').append("yeah way");

	});

	$('.container').on('click', ".second",function(){
		$('body').append("<h1>h1 element</h1>");
	});


	$('.container').on('click', '.third',function(){
		$('body').append("<ul>" +
			"<li>good</li>" +
			"<li>best</li>" +
			"<li>superb</li>" + 
			"</ul>");
	});

	$("p").mouseover( function(){
		$(this).css('color','pink');
		$('h2').append("!");
	});

	$('a').on('click', function(o){
		if(!confirm('jump to the url?'))
			o.preventDefault();
			// return false;
			$(this).remove();
	})


	$('.big-button').click(function(){
		$('body').append(popUp);
		$(".popUp").show();
	})

});

