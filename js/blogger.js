// js/blogger.js
// 2016 James Fehr

$(function(){

	var loader = function( filename ) {
		jQuery.get(filename, function(data) {
   			$('#article').html(data);
		});
	};

	var Article = [
    	{
        	'id': '1',
			'title': 'Test Text',
        	'articleSrc': 'assets/textTest.txt',
        	'date': 'Some Date'
    	},
		{
        	'id': '2',
			'title': 'Test 2',
        	'articleSrc': 'assets/test2.txt',
        	'date': 'Some Date'
    	}
	];

	var View = function() {
		var output;
		for ( var x = 0; x < Article.length; x++) {
			output = '<a href="#" id=' + Article[x].id + ' class="linky">' + Article[x].title + '</a>';
			$('nav').append( output );
		}

	};

	View();

	$(".linky").on("click", function(){
		for(var i = 0; i < Article.length; i++) {
			if (Number(Article[i].id) === Number(this.id)) {
				loader(Article[i].articleSrc);
			} else {
				$('content').text('File not found !!!');
			}
		}
	});

	var stickyNavTop = $('nav').offset().top;
	var stickyNav = function(){
		var scrollTop = $(window).scrollTop();
		if (scrollTop > stickyNavTop) {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
	};
	stickyNav();
	$(window).scroll(function() {
		stickyNav();
	});

});
