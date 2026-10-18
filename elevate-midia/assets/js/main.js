(function () {
  var buttons = document.querySelectorAll('.copy[data-target]');
  buttons.forEach(function (btn) {
    var original = btn.textContent;
    btn.addEventListener('click', function () {
      var el = document.getElementById(btn.getAttribute('data-target'));
      if (!el) return;
      var text = el.textContent.trim();
      function done(msg) {
        btn.textContent = msg;
        clearTimeout(btn._t);
        btn._t = setTimeout(function () { btn.textContent = original; }, 1800);
      }
      function fallback() {
        try {
          var range = document.createRange();
          range.selectNodeContents(el);
          var sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
          done('Selecionado');
        } catch (e) {
          done('Copie à mão');
        }
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () { done('Copiado'); }, fallback);
      } else {
        fallback();
      }
    });
  });
})();
