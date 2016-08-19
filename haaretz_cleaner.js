function remove_article(name) {
	$('article').find("address:contains('"+name+"')").closest('article').remove()
	$('.teaser').find(".t-address:contains('"+name+"')").closest('article').remove()			
}
	
chrome.storage.sync.get({
    haaretz_cleaner_rogel: 'rogel',
    haaretz_cleaner_gidon: 'gidon'
  }, function(items) {
    if (items.haaretz_cleaner_rogel == true) {
    	remove_article('רוגל אלפר')
    }
    if (items.haaretz_cleaner_gidon == true) {
    	remove_article('גדעון לוי')
    }
  });	