$(document).ready(function(){$(".brands-adaptive-slider").on("init",function(){setTimeout(function(){$(".brands").slideUp(0),console.log("4")},1500),$(".slider-for").slick({slidesToShow:1,arrows:!1,fade:!0,asNavFor:".slider-nav"}),$(".search-result-slider").slick({infinite:!0,slidesToShow:2,slidesToScroll:2,dots:!0,arrows:!1,responsive:[{breakpoint:768,settings:{infinite:!0,slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!1}}]}),$(".staff-slider").slick({infinite:!0,slidesToShow:2,slidesToScroll:2,dots:!0,arrows:!1,responsive:[{breakpoint:768,settings:{infinite:!0,slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!1}}]}),$(".managment-slider").slick({infinite:!0,slidesToShow:3,slidesToScroll:1,dots:!0,arrows:!1,responsive:[{breakpoint:768,settings:{infinite:!0,slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!1}}]}),$(".news-block-slider").slick({infinite:!0,slidesToShow:2,slidesToScroll:2,dots:!0,arrows:!1,responsive:[{breakpoint:768,settings:{infinite:!0,slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!1}}]}),$(".slider-nav").slick({slidesToShow:4,slidesToScroll:1,asNavFor:".slider-for",dots:!1,focusOnSelect:!0,vertical:!0,verticalSwiping:!0,responsive:[{breakpoint:768,settings:{slidesToShow:4,slidesToScroll:1,asNavFor:".slider-for",dots:!1,focusOnSelect:!0,vertical:!1,verticalSwiping:!0}}]})}),$(".brands-adaptive-slider").slick({infinite:!0,slidesToShow:3,slidesToScroll:3,dots:!0,arrows:!1,responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!1}}]}),$("#brands-list, #brands-list-mm").click(function(s){s.preventDefault(),$(".brands").slideToggle()}),$("#catalog-list").click(function(s){s.preventDefault(),$(".catalog-div").slideToggle()}),$("#news-cat").click(function(s){s.preventDefault(),$(".news-cat").fadeToggle()}),$(".tabs-nav-link").on("click",function(s){s.preventDefault();var i=$(this);if(i.hasClass("active"))return!1;var e=i.data("target");console.log(e),$(".tabs-nav-link").removeClass("active"),i.addClass("active"),$(".tabs-tab-body").fadeOut(0),$(e).fadeIn()}),$("#my-menu").mmenu({extensions:["pagedim-black","position-right","theme-black","position-front"]});var s=$("#my-menu").data("mmenu");s.bind("open:start",function(){$(".hamburger").addClass("is-active")}),s.bind("close:finish",function(){$(".hamburger").removeClass("is-active")}),$("#close-menu, #brands-list-mm").on("click",function(){s.close()})});