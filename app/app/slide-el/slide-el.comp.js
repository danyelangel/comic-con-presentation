(function () {
  'use strict';

  angular
    .module('app.slideEl', [])
    .component('slideEl', slideEl());

  function slideEl() {
    return {
      bindings: {
        wcData: '<',
        slideId: '<'
      },
      templateUrl: 'app/slide-el/slide-el.tpl.html',
      replace: true
    };
  }
}());
