Drupal.behaviors.spamspan=function(_1){$("span."+Drupal.settings.spamspan.m,_1).each(function(_2){var _3=($("span."+Drupal.settings.spamspan.u,this).text()+"@"+$("span."+Drupal.settings.spamspan.d,this).text()).replace(/\s+/g,"").replace(/\[dot\]/g,".");var _4=$("span."+Drupal.settings.spamspan.t,this).text().replace(/^ \((.*)\)$/,"$1");$(this).after($("<a></a>").attr("href","mailto:"+_3).html(_4?_4:_3).addClass("spamspan")).remove();});};