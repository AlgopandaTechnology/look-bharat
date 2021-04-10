$(document).ready(function() {

    //Check to see if the window is top if not then display button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

});


$(document).ready(function() {

    $(".hamburger").click(function() {
        $(".main-menu").slideToggle("slow", function() {
            $(".hamburger").hide();
            $(".cross").show();
            $(".list-your-business").show();

        });
    });

    $(".cross").click(function() {
        $(".main-menu").slideToggle("slow", function() {
            $(".cross").hide();
            $(".list-your-business").hide();
            $(".hamburger").show();
        });
    });

});

$(document).ready(function() {
    $(".category-name-list:nth-child(odd)").css("background-color", "#eeeeee");

});

function openName(evt, profileDetails) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(profileDetails).style.display = "block";
    evt.currentTarget.className += " active";
}