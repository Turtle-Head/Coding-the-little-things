var model = [{
    'img': 'img/paranormal1.jpg',
    'title': 'PARANORMAL #1<br>(oil on plastic artists\' board 8"x10")',
    'desc': 'I call this technique "paranormal" for that word best fits what\'s going on here. I discovered this phenomena when I mixed black paint to the consistency of ink to see how fine a line I could produce using a pallet knife. Before the tip of the knife could touch the surface of the 8"X10" plastic artists\' board, the paint went flying off in all directions, defying gravity and, at the same time creating what appeared to be a head. Because I had cleaned the surface with a wool sock, I assumed static electricity must have something to do with it. Curious, I repeated the process with even more astounding results, showing trees, animals, faces within faces and any number of easily recognized objects, containing lines finer than I had ever seen before, much finer than I am capable of, using any other method. I am not a believer in paranormal things such as séances, ghosts and whatever, so why should this happen to me? I\'ll be including many more of these pictures, much more explicit than the one above, and I\'ll be posting a video so you can see for yourself what it looks like when it\'s occurring. If something similar has ever happened to you, please e-mail me at skeltonfred62@gmail.com.',
    'id': 15
  },{
    'img': 'img/offroadrockies.jpg',
    'title': 'OFFROAD IN THE ROCKIES<br>(oil on plastic artists\' board 8"X10")',
    'desc': 'You can find innumerable places like this by now and then taking a back road or logging trail while motoring through the rockies. You have to set up and paint quickly if you have others waiting in the car. Luckily, most of my others are beer-drinking males, who don\'t mind taking a break from driving. I\'ve come to call this style, which seems to be between semi realism and semi impressionism, "Skelism" since I appear to be the only one doing it a lot.',
    'id': 14
  },{
    'img':'img/chinwag1.jpg',
    'title': 'CHINWAG #1<br>(oil on artists\' plastic board 8"X10")',
    'desc': 'I thought it might be fun to do a series on this theme, but only created 6 or 7 then went on to something else.',
    'id': 13
  },{
    'img': 'img/DSC00088.JPG',
    'title': 'ALIEN APE WITH WOMAN IN EAR',
    'desc': 'This was the first picture from an experiment using palette knife only. With this technique I usually end up with two or three faces jutting out in different directions',
    'id': 12
  },{
    'img': 'img/DSC00100.JPG',
    'title': 'SKELISM BEAR',
    'desc': 'For want of a better descriptive word, I called this palette knife technique, which was used for the above,"SKELISM"',
    'id': 11
  },{
    'img': 'img/DSC00112.JPG',
    'title': 'LAND\'S END WARNING',
    'desc': 'Perhaps I made this one too light, because I imagine the men, and sometimes women, who at one time spent a good part of their lives aboard these lonely sentinels must have led a rather lonely existence. They probably did a lot of reading.',
    'id': 10
  },{
    'img': 'img/DSC00113.jpg',
    'title': '​PATH TO TRANQUILITY<br>(oil on plastic artists\' board 8"X10")',
    'desc': 'We all possess the need to have a place of quietness and serenity, away from the madding crowd, the noise of the world and all outside troubles.',
    'id': 9
  },{
    'img': 'img/DSC00120.JPG',
    'title': 'FAST CHIEF<br>(oil on plastic artists\' board 8"X10")',
    'desc': 'The wind is blowing this native chief\'s unrealistical blond hair as he rides determinedly into battle.',
    'id': 8
  },{
    'img': 'img/DSC00126.JPG',
    'title': 'WEATHERING THE STORM',
    'desc': 'This snow-laden muskox is painted in oil on paper. Done during one of my poverty periods',
    'id': 7
  },{
    'img': 'img/DSC00133.JPG',
    'title': 'ALIEN LADY',
    'desc': 'I did quite a number of these ladies from space (a few men too) and though the shape of the head doesn\'t vary too much, check the eyes and the lips, no two are the same.',
    'id': 6
  },{
    'img': 'img/DSC00131.JPG',
    'title': 'RED GIRL',
    'desc': 'Only did 2 or 3 in this manner. I feel like doing a few more as they seem to work well as prints on small office walls.',
    'id': 5
  },{
    'img': 'img/DSC00136.JPG',
    'title': 'WEST OF KAMLOOPS',
    'desc': 'Stopped near the road to do this while on the road to Vancouver. Because these are done quite quickly, ( anxious people are waiting in the car) I like to call this style semi-impressionism.',
    'id': 4
  },{
    'img': 'img/DSC00142.JPG',
    'title': 'PLANETS DO COLLIDE',
    'desc': 'Doing this kind of abstract stuff is fun, because you just let your imagination run rampant. The only constraint is to always use colors that compliment each other.',
    'id': 3
  },{
    'img': 'img/DSC00152.JPG',
    'title': 'DUTY',
    'desc': 'This is my dad from a photo taken in 1917, somewhere in France during the war to end all wars. He, like so many hundreds of thousands of others of his generation poured his blood down shell holes. However, he came back alive, though his lungs were seared by mustard and chlorine, and he had a scar on his back. He never received a penny from the Canadian government in compensation, even though the gas scars in his lungs turned cancerous and caused his death. A familiar scenario.',
    'id': 2
  },{
    'img': 'img/MtRundle.png',
    'title': 'MT RUNDLE 4\'x8\'',
    'desc': '',
    'id': 1
  }];
var modelGuest = [];

var mail = 'skeltonfred62@gmail.com';

var loadImages = function(){
  var image_out;
  for(var i = 0; i < model.length; i++) {
    image_out = '<div class="title displayPopup" id=' + model[i].id + ' align="center"><img align="center" width="100%" src=' + model[i].img + ' alt=' + model[i].desc + ' ><br>' + model[i].title + '<br><span class="description">' + model[i].desc + '</span></div>';
    $('#slides').prepend(image_out);
  }
  for(i = 0; i < modelGuest.length; i++) {
    image_out = '<div class="title" align="center"><img align="center" width="100%" src=' + modelGuest[i].img + ' alt=' + modelGuest[i].desc + ' ><br>' + modelGuest[i].title + '<br><span class="description">' + modelGuest[i].desc + '</span></div>';
    $('#slides2').prepend(image_out);
  }
};
$(document).on('click','.loadI', function(){
  $('.slides').hide();
  $('.welcome').hide();
  $('#slides').show(true);
  $('#header').text('Skel\'s Gallery');
});
$(document).on('click','.loadG', function(){
  $('.slides').hide();
  $('.welcome').hide();
  if(modelGuest.length >= 1) {
    $('#slides2').show(true);
  } else {
    $('#under_construction').show(true);
  }
  $('#header').text('Guest Gallery');
});
$(document).on('click','.loadM', function(){
  $('.slides').hide();
  $('.welcome').hide();
  $('#under_construction').show(true);
  $('#header').text('Miscelaneous');
});
$(document).on('click','.loadH', function(){
  $('.slides').hide();
  $('#welcome').show(true);
  $('#header').text('Skel\'s Art Studio');
});
loadImages();

$(document).ready(function() {
  var stickyNavTop = $('.navh').offset().top;

  var stickyNav = function(){
    var scrollTop = $(window).scrollTop();

    if (scrollTop > stickyNavTop) {
      $('.navh').addClass('sticky');
    } else {
      $('.navh').removeClass('sticky');
    }
  };

  stickyNav();

  $(window).scroll(function() {
    stickyNav();
  });

  $(".displayPopup").on("click", function() { //click event of the button
      var id = this.id;
      var pic = 0;
      console.log(id);
      for(var i = 0; i < model.length; i++) {
        if (Number(model[i].id) === Number(id)) {
          $(".cover").text(" ");
          $(".cover").append('<img src=' + model[i].img + ' >');
          $("#overlay").fadeTo(100, 0.3); //this will show the overlay awith a crossbrowser transparency
          $("#popup1").show();
        }
      }
      return false; //disable event propogation (avoid addition of "#" to url)
  });

  $(".popup .close").on("click", function() { //click event of the close button in popup
      $("#overlay").hide(); //hide overlay
      $(".popup").hide(); //hide popup
      return false; //disable event propogation (avoid addition of "#" to url)
  });
});
