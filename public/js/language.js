(function () {
  var languageFolders = {
    de: '',
    en: 'eng/',
    it: 'ita/',
    fr: 'fra/'
  };
  var path = window.location.pathname.toLowerCase();
  var folderMatch = path.match(/\/(eng|ita|fra)(?:\/|$)/);
  var currentLanguage = folderMatch
    ? { eng: 'en', ita: 'it', fra: 'fr' }[folderMatch[1]]
    : 'de';
  var basePath = currentLanguage === 'de' ? './' : '../';
  var preferenceKey = 'nnnallrounder-language';

  if (currentLanguage === 'de') {
    try {
      var savedLanguage = window.localStorage.getItem(preferenceKey);
      if (savedLanguage && savedLanguage !== 'de' && languageFolders[savedLanguage]) {
        window.location.replace('./' + languageFolders[savedLanguage] + 'index.html');
        return;
      }
    } catch (error) {
      // Keep the German homepage usable when browser storage is unavailable.
    }
  } else {
    try {
      window.localStorage.setItem(preferenceKey, currentLanguage);
    } catch (error) {
      // Language switching still works for the current visit without storage.
    }
  }

  Array.prototype.forEach.call(document.querySelectorAll('.language-switcher'), function (select) {
    select.value = currentLanguage;
  });

  document.addEventListener('change', function (event) {
    if (!event.target.matches('.language-switcher')) {
      return;
    }

    var selectedLanguage = event.target.value;
    if (!Object.prototype.hasOwnProperty.call(languageFolders, selectedLanguage)) {
      return;
    }

    try {
      window.localStorage.setItem(preferenceKey, selectedLanguage);
    } catch (error) {
      // Continue to the selected page when browser storage is unavailable.
    }

    window.location.href = basePath + languageFolders[selectedLanguage] + 'index.html' + window.location.hash;
  });
}());