// js/blogger.js
// 2016 James Fehr

$(function(){

	var loader = function( filename, title ) {
		jQuery.get(filename, function(data) {
   			$('#article').html(data);
				$('.content').hide();
				$('#loc').html('<h2>' + title + '</h2><hr width="50%" color="white">');
				$('#article').show(true);
			});
	};

	var Article = [
		{
			'id': '3',
			'title': 'Portfolio',
			'articleSrc': 'http://turtle-head.github.io/Portfolio',
			'local': false
		},
		{
			'id': '2',
			'title': 'A Simple Map',
			'articleSrc': 'assets/googleAPI.html',
			'local': true
		},{
			'id': '1',
			'title': 'About Me',
			'articleSrc': 'assets/aboutMe.html',
			'local': true
		}
	];

	var View = function() {
		var output;
		for ( var x = 0; x < Article.length; x++) {
			if (Article[x].local){
				output = '<a href="#" id=' + Article[x].id + ' class="linky">' + Article[x].title + '</a>';
			}
			else if (!Article[x].local) {
				output = '<a href=' + Article[x].articleSrc + ' target="_blank" class="linky" id="nl">' + Article[x].title + '</a>';
			}
			$('nav').append( output );
		}
	};

	View();

	$(".linky").on("click", function(){
		if(this.id === 'home') {
			$('.content').hide();
			$('#loc').html('<h2>Coding the little things...</h2><hr width="50%">');
			$('#welcome').show(true);
		} else if(this.id === 'nl') {
			// Outside site reference...redirected
		}	else {
			for(var i = 0; i < Article.length; i++) {
				if (Number(Article[i].id) === Number(this.id)) {
					loader(Article[i].articleSrc, Article[i].title);
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
