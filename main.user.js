// ==UserScript==
// @name         OPSkins List Display
// @namespace    http://andrebaltazar.com/
// @version      0.2
// @description  Changes the listing of the items to appear as a list.
// @author       MAT4DOR
// @match        https://opskins.com/index.php?loc=shop_browse
// @match        https://opskins.com/index.php?loc=shop_search*
// @match        https://opskins.com/?loc=shop_browse
// @match        https://opskins.com/?loc=shop_search*
// @grant        none
// ==/UserScript==

function transform() {
  $('.featured-item').parent().attr('class', 'very-lg medium-lg col-lg-3 col-md-4 col-sm-6 col-xs-12');
  $('.featured-item').attr('style', 'height:150px; width: 267px; margin: 0.3em auto !important');
  $('.featured-item').children('img').css('width', '64px').css('height', '64px').css('margin', '0');
  $('.featured-item').each(function() {
    var nameDiv = $('<div>', { 'style': 'width: 172px;'}).append($(this).children('a,br,small')).insertAfter($(this).children('img'));
    var pricesDiv = $(this).children('.item-add').css('width', '260px').removeClass('item-add');
    $(this).find('.btn-orange').attr('style', '');
    $(this).find('.btn-orange,.btn-primary').insertAfter(nameDiv);
    $(this).find('.item-buttons').remove();
    $('<br>').insertBefore(pricesDiv);
    $('<br>').insertAfter(nameDiv);
    pricesDiv.children().css('display', 'inline-block').css('width', '110px');
    var suggestedPrice = pricesDiv.find('a');
    suggestedPrice.parent().parent().css('width', '140px');
    pricesDiv.find('a').html(pricesDiv.find('a').html().replace('Suggested Price:', 'Suggested:'));
  });
  $('.featured-item>*').css('vertical-align', 'middle').css('margin-right', '4px').css('display', 'inline-block');
  $('.row').css('display', 'inherit');
}

document.getElementsByTagName('head')[0].innerHTML += '<style>.row { display: none; } @media (min-width: 1600px) { .medium-lg { width: 20%; } } @media (min-width: 1740px) { .very-lg { width: 16.6%; } }</style>';

if (document.readyState === 'complete') {
  transform();
} else {
  window.addEventListener('load', transform);
}
