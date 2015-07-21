Session.setDefault("searchTerm","");
Template.layout.events({
    'submit #searchForm': function (event) {
        event.preventDefault();
        var s = document.getElementById("searchBox").value;
        Session.setPersistent("searchTerm", s);

        Router.go('/search');
     },
     'focus #searchBox': function (event) {
        event.preventDefault();
        var s = document.getElementById("searchBox").value;
        Session.setPersistent("searchTerm", s);

        Router.go('/search');
     },
     'click #searchGlass':function(event) {
         event.preventDefault();
         
         if ($(window).width() > 768) {
             $("#searchBox").toggle(450).focus();
         }
         else {
             if ($("#searchBox").css("display") == "none") {
                 $("#searchBox").slideDown();
                 $("#searchBox").focus();
             }
             else {
                 $("#searchBox").slideUp();
             }
         }
     },
     'click #back':function(event) {
         event.preventDefault();
         history.back();
     },
     'click .nav-link':function(event) {
         slideNav();
     }
});

Template.layout.rendered = function() {
   slide();
   
   document.getElementById("searchBox").value = Session.get("searchTerm");
};

// Adapted from http://jsbin.com/eHAfIhI/1/edit?html,css,js,output
function slide() {
    //stick in the fixed 100% height behind the navbar but don't wrap it
    $('#slide-nav.navbar .container').append($('<div id="navbar-height-col"></div>'));


    var toggler = '.navbar-toggle';
    $("#slide-nav").on("click", toggler, function (e) {
        slideNav();   
  
    });


    var selected = '#slidemenu, #page-content, body, .navbar, .navbar-header';


    $(window).on("resize", function () {

        if ($(window).width() > 768 && $('.navbar-toggle').is(':hidden')) {
            $(selected).removeClass('slide-active');
        }


    });
}

function slideNav() {
    var pagewrapper = '#page-content';
    var navigationwrapper = '.navbar-header';
    var slidewidth = '60%';
    var menuneg = '-100%';
    var slideneg = '-60%';
    
    var selected = $(".navbar-header").hasClass('slide-active');
    
    if ($(window).width() < 768) {
        $("#searchGlass").toggle("searchGlass");
        $("#searchForm").toggle("searchForm");
    }

    $('#navbar-hamburger').stop().animate({
        left: selected ? menuneg : '0px'
    });

    $('#navbar-height-col').stop().animate({
        left: selected ? slideneg : '0px'
    });

    $(pagewrapper).stop().animate({
        left: selected ? '0px' : slidewidth
    });

    $(navigationwrapper).stop().animate({
        left: selected ? '0px' : slidewidth
    });


    $(this).toggleClass('slide-active', !selected);
    $('#navbar-hamburger').toggleClass('slide-active');


    $('#page-content, .navbar, body, .navbar-header').toggleClass('slide-active');
}