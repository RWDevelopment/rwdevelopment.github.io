$(document).ready(function(){var s=function(s,o,t){var i=s.outerHeight(),c=o.offset().top;t.scrollTop()>=c?(o.height(i),s.addClass("is-sticky")):(s.removeClass("is-sticky"),o.height("auto"))};$('[data-toggle="sticky-onscroll"]').each(function(){var o=$(this),t=$("<div>").addClass("sticky-wrapper");o.before(t),o.addClass("sticky"),$(window).on("scroll.sticky-onscroll resize.sticky-onscroll",function(){s(o,t,$(this))}),s(o,t,$(window))})});
