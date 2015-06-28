Session.setDefault("searchCategory", "All");

Template.layout.events({
    'submit #searchForm': function (event) {
        event.preventDefault();
        var s = searchBox.value;
        Session.set("searchTerm", s);


        Router.go('/search/' + Session.get("searchTerm"));
    },
    // changes category in the dropdown
    'click #selectSearchType li a': function (event) {
        event.preventDefault();
        $(event.target).parents('.btn-group').find('.btn').text($(event.target).text());
        $(event.target).parents('.btn-group').find('.btn').val($(event.target).text());

        // append the caret
        $(event.target).parents('.btn-group').find('.btn').append('&nbsp;<span class="caret"></span>');

        Session.set("searchCategory", $(event.target).text());
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
    var menuwidth = '100%'; // the menu inside the slide menu itself
    var slidewidth = '80%';
    var menuneg = '-100%';
    var slideneg = '-80%';


    $("#slide-nav").on("click", toggler, function (e) {

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