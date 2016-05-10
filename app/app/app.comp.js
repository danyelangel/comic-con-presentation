(function () {
  'use strict';

  angular
    .module('comiccon')
    .run(['$window', 'snSkrollr', function ($window, snSkrollr) {
      // Check touch and nav is Chrome (Safari is not supported and Firefox, IE, haven't been tested)
      if (!$window.Modernizr.touchevents && $window.navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
        console.log('Non touch');
        snSkrollr.init({
          smoothScrolling: false,
          forceHeight: false
        });
      }
    }])
    .component('appEl', appEl());

  function appEl() {
    return {
      bindings: {},
      templateUrl: 'app/app.tpl.html',
      controller: ['LoadDep',
      function (LoadDep) {
        var $ctrl = this;
        $ctrl.loadDep = LoadDep.load;
        $ctrl.slides = [
          {
            title: 'Mejorar la recepcion de marca',
            description: 'Comic Con es una marca mundialmente reconocida en el campo del entretenimiento. La idea es fortalecer este nombre en Colombia para que sea sinónimo de cómics, películas, series y videojuegos.',
            imgSrc: 'images/slide1.png',
            styles: {
              background: '#ffea00',
              color: '#000'
            }
          },
          {
            title: 'Publicidad geek personalizada',
            description: 'La idea de la publicidad de Comic Con es que sea única y relevante para los asistentes al evento. Es por eso que queremos ‘geekificar’ varios aspectos visuales de nuestros patrocinadores para generar un mayor impacto en la gente.',
            imgSrc: 'images/slide2.png',
            styles: {
              background: '#f40f0f',
              color: '#fff'
            }
          },
          {
            title: 'Mas calidad = mayor poder adquisitivo',
            description: 'Si el evento es de alta calidad, tiene artistas de renombre y cuidado en los más mínimos detalles, las personas de alto poder adquisitivo notarán el valor agregado y asistirán al evento.',
            imgSrc: 'images/slide3.png',
            styles: {
              background: '#212121',
              color: '#fff'
            }
          },
          {
            title: 'Si hay buen contenido, hay free press',
            description: 'Comic Con 2015 estuvo en la primera página de Publimetro. Esto equivale a $1’500.000 aprox. Para este año la idea es llegar a más medios masivos  invitando artistas muy reconocidos en el medio.',
            imgSrc: 'images/slide5.png',
            styles: {
              background: '#0073d6',
              color: '#fff'
            }
          },
          {
            title: 'Participacion de marca en premieres',
            description: 'Comic Con estará presente en los estrenos de las últimas películas de Marvel, DC, Pixar, entre otros, haciendo cubrimiento periodístico. Para el estreno de Batman vs. Superman estaremos presentes en México.',
            imgSrc: 'images/slide4.png',
            styles: {
              background: '#f40f0f',
              color: '#fff'
            }
          },
          {
            title: 'Proyeccion de la marca Comic Con',
            description: 'La industria geek tiene mucho potencial y se ha explotado poco en Colombia. Queremos posicionar a Comic Con entre las marcas más reconocidas del mundo geek y tener un público recurrente.',
            imgSrc: 'images/slide6.png',
            styles: {
              background: '#ffea00',
              color: '#000'
            }
          }
        ];
      }]
    };
  }
}());
