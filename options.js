function save_options() {
  var rogel = document.querySelector('#rogel').checked
  var gidon = document.querySelector('#gidon').checked  
  chrome.storage.sync.set({
    haaretz_cleaner_rogel: rogel,
    haaretz_cleaner_gidon: gidon
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
  var code = 'window.location.reload();';
  chrome.tabs.executeScript(tab.id, {code: code});
}

function restore_options() {
  chrome.storage.sync.get({
    haaretz_cleaner_rogel: 'rogel',
    haaretz_cleaner_gidon: 'gidon'
  }, function(items) {
    document.querySelector('#rogel').checked = items.haaretz_cleaner_rogel;
    document.querySelector('#gidon').checked = items.haaretz_cleaner_gidon; 
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
