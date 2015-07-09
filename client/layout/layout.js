Session.setDefault("searchCategory", "All");

Template.layout.events({
    'submit #searchForm': function (event) {
        event.preventDefault();
        var s = document.getElementById("searchBox").value;
        Session.set("searchTerm", s);

        Router.go('/search');
     },
     'mouseenter #searchGlass': function(event) {
         var s = document.getElementById("searchBox");
         s.value = '';
     },
     'focus #searchBox': function(event) {
         Router.go('/search');
     },
     'click #searchGlass':function(event) {
         event.preventDefault();
         
         if ($(window).width() > 768) {
             $("#searchBox").toggle(450);
             $("#searchBox").focus();
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
     }
});

// Adapted from http://jsbin.com/eHAfIhI/1/edit?html,css,js,output
Template.layout.rendered = function () {
    //stick in the fixed 100% height behind the navbar but don't wrap it
    $('#slide-nav.navbar .container').append($('<div id="navbar-height-col"></div>'));

    // Enter your ids or classes
    var toggler = '.navbar-toggle';
    var pagewrapper = '#page-content';
    var navigationwrapper = '.navbar-header';
    var slidewidth = '60%';
    var menuneg = '-100%';
    var slideneg = '-60%';


    $("#slide-nav").on("click", toggler, function (e) {

        $("#searchGlass").toggle("searchGlass");
        $("#searchForm").toggle("searchForm");
        
        var selected = $(this).hasClass('slide-active');

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


    });


    var selected = '#slidemenu, #page-content, body, .navbar, .navbar-header';


    $(window).on("resize", function () {

        if ($(window).width() > 767 && $('.navbar-toggle').is(':hidden')) {
            $(selected).removeClass('slide-active');
        }


    });
}

