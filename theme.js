// Applies the saved appearance before the page paints (no flash). Not sensitive, so stored unencrypted.
(function(){try{var t=localStorage.getItem('dayflow-theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t)}catch(e){}})();
