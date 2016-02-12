// js/blogger.js
// 2016 James Fehr

$(function(){

	var loader = function( filename ) {
		jQuery.get(filename, function(data) {
   			$('#article').html(data);
			$('.content').hide();
			$('#article').show(true);
		});

	};

	var Article = [
    	{
			'id': '1',
			'title': 'About Me',
			'articleSrc': 'assets/aboutMe.html',
			'date': 'Some date'
		}
	];

	var View = function() {
		var output;
		for ( var x = 0; x < Article.length; x++) {
			output = '<a href="#" id=' + Article[x].id + ' class="linky" target="#article">' + Article[x].title + '</a>';
			$('nav').append( output );
		}
	};

	View();

	$(".linky").on("click", function(){
		if(this.id === 'home') {
			$('.content').hide();
			$('#welcome').show(true);
		} else {
			for(var i = 0; i < Article.length; i++) {
				if (Number(Article[i].id) === Number(this.id)) {
					loader(Article[i].articleSrc);
				} else {
					$('#article').text('File not found !!!');
					$('.content').hide();
					$('#article').show(true);
				}
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
	$('#article').hide();
});
