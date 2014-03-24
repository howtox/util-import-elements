/*global document*/
(function (window, document) {
  var components = [
    '//dl.dropboxusercontent.com/u/4994325/gs-toolbar/gs-toolbar.html',
    '//dl.dropboxusercontent.com/u/4994325/gs-howto-toolbar/gs-howto-toolbar.html',
    '//dl.dropboxusercontent.com/u/4994325/gs-mailchimp/gs-mailchimp.html'
  ];

  var link, fragment = document.createDocumentFragment();
  for (var i = 0; i < components.length; i++) {
    link = document.createElement('link');
    link.setAttribute('rel', 'import');
    link.setAttribute('href', components[i]);
    fragment.appendChild(link);
  }

  var firstScript = document.getElementsByTagName('script')[0];
  firstScript.parentNode.appendChild(fragment);
})(window, document);