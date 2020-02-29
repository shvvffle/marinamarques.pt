/*
Please do not claim this website as your own. You don't have to give me credit but DON'T claim it's your code. 
When you use this as a base for your website please remove all tracking (Google Analytics, Heap).
*/

// Scroll to Top
jQuery.noConflict();
(function($) {
    $('body').scroll(function() {
        if ($(this).scrollTop() >= 50) {
            // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200); // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200); // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function() {
        // When arrow is clicked
        $('body,html').animate(
            {
                scrollTop: 0 // Scroll to top of body
            },
            500
        );
    });
})(jQuery);

// jQuery for page scrolling feature - requires jQuery Easing plugin
jQuery.noConflict();
(function($) {
    $(function() {
        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body')
                .stop()
                .animate(
                    {
                        scrollTop: $($anchor.attr('href')).offset().top
                    },
                    1500,
                    'easeInOutExpo'
                );
            event.preventDefault();
        });
    });
})(jQuery);

// typer for hello
var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 1) || 1000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 200;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

// number count for stats
jQuery.noConflict();
(function($) {
    $('.counter').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({
            countNum: $this.text()
        }).animate(
            {
                countNum: countTo
            },

            {
                duration: 7000,
                easing: 'linear',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            }
        );
    });
})(jQuery);

// stop youtube video on mouseout
var appearances_item_flag = document.querySelector('.js-flag');
appearances_item_flag.addEventListener('mouseout', function(evt) {
    var youtube_vid_flag = document.getElementById('youtube').src;
    var cleaned_flag = youtube_vid_flag.replace('&autoplay=1', '');
    document.getElementById('youtube').src = cleaned_flag;
});

// stop youtube video on mouseout
var appearances_item_sherpany = document.querySelector('.js-sherpany');
appearances_item_sherpany.addEventListener('mouseout', function(evt) {
    var youtube_vid_sherpany = document.getElementById('youtubeSherpany').src;
    var cleaned_sherpany = youtube_vid_sherpany.replace('&autoplay=1', '');
    document.getElementById('youtubeSherpany').src = cleaned_sherpany;
});

// copy email to clipboard
const emailElm = document.querySelector('.js-email');
const emailText = document.querySelector('.js-email span');
const original = emailElm.innerHTML;

emailElm.addEventListener('click', function() {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(emailText);
    selection.removeAllRanges();
    selection.addRange(range);
    try {
        document.execCommand('copy');
        selection.removeAllRanges();
        emailElm.textContent = 'Copied!';
        emailElm.classList.add('success');

        setTimeout(() => {
            emailElm.innerHTML = original;
            emailElm.classList.remove('success');
        }, 1200);
    } catch (e) {
        emailElm.classList.add('error');
        emailElm.textContent = 'Failed to copy. Please try again.';
        setTimeout(() => {
            emailElm.classList.remove('error');
            emailElm.innerHTML = original;
        }, 1000);
    }
});

// update footer copyright year
var today = new Date();
var year = today.getFullYear();

var copyright = document.getElementById('copyright');
copyright.innerHTML = '© Marina Marques ' + year;
