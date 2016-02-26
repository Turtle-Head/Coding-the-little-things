// js/blogger.js
// 2016 James Fehr

$(function(){

	var loader = function( filename, title, type ) {
		if (type) {
			$('#article').html('<iframe id="if1" style="visibility:visible" src=' + filename + '></iframe>');
			$('.content').hide();
			$('#loc').html('<h2>' + title + '</h2><hr width="50%" color="white">');
			$('#article').show(true);
		}
	};

	var Article = [
		{
			'id': '3',
			'title': 'Portfolio',
			'articleSrc': 'http://turtle-head.github.io/Portfolio',
			'date': '',
			'local': true
		},
		{
			'id': '2',
			'title': 'A Simple Map',
			'articleSrc': 'assets/googleAPI.html',
			'date': '2016-2-17 16:30:00',
			'local': true
		},{
			'id': '1',
			'title': 'About Me',
			'articleSrc': 'assets/aboutMe.html',
			'date': '2016-2-10 20:42:23',
			'local': true
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
		if(this.id === 'home') {
			$('.content').hide();
			$('#loc').html('<h2>Coding the little things...</h2><hr width="50%">');
			$('#welcome').show(true);
		} else {
			for(var i = 0; i < Article.length; i++) {
				if (Number(Article[i].id) === Number(this.id)) {
						if (Article[i].local) {
								loader(Article[i].articleSrc, Article[i].title, Article[i].type);
						}
				} else {
					console.log(this.id);
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
