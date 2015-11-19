requirejs.config({
  urlArgs: "rev=1.0.0",
  baseUrl: 'js',
  shim: {
    'semantic-ui-transition': {
      deps: ['jquery'],
      exports: '$'
    },
    'semantic-ui-dropown': {
      deps: ['jquery'],
      exports: '$'
    },
    'semantic-ui-dimmer': {
      deps: ['jquery'],
      exports: '$'
    },
    'semantic-ui-sidebar': {
      deps: ['jquery'],
      exports: '$'
    },
    'semantic-ui-popup': {
      deps: ['jquery'],
      exports: '$'
    },
    'semantic-ui-modal': {
      deps: ['jquery'],
      exports: '$'
    },
    'semantic-ui-tab': {
      deps: ['jquery'],
      exports: '$'
    },
    'semantic-ui-api': {
      deps: ['jquery'],
      exports: '$'
    },
    'modernizr': {
      exports: 'Modernizr'
    },
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'backbone.nested-attributes': {
      deps: ['backbone'],
      exports: 'Backbone'
    }
  },
  paths: {
    'underscore': '../components/underscore/underscore',
    'backbone': '../components/backbone/backbone',
    'backbone.marionette': '../components/backbone.marionette/lib/backbone.marionette',
    'backbone.stickit': '../components/backbone.stickit/backbone.stickit',
    'backbone.localStorage': '../components/backbone.localStorage/backbone.localStorage',
    'backbone.nested-attributes': 'lib/backbone/backbone-nested-attributes',
    'jquery': '../components/jquery/dist/jquery',
    'moment': '../components/moment/moment',
    'moment.ru': '../components/moment/locale/ru',
    'jquery.inputmask': '../components/jquery.inputmask/dist/jquery.inputmask.bundle',
    'pikaday': '../components/pikaday/pikaday',
    'jquery.file.upload': '../components/blueimp-file-upload/js/jquery.fileupload',
    'jquery.ui.widget': '../components/blueimp-file-upload/js/vendor/jquery.ui.widget',
    'semantic-ui-accordion': '../components/semantic/dist/components/accordion',
    'semantic-ui-ad': '../components/semantic/dist/components/ad',
    'semantic-ui-checkbox': '../components/semantic/dist/components/checkbox',
    'semantic-ui-colorize': '../components/semantic/dist/components/colorize',
    'semantic-ui-embed': '../components/semantic/dist/components/embed',
    'semantic-ui-form': '../components/semantic/dist/components/form',
    'semantic-ui-nag': '../components/semantic/dist/components/nag',
    'semantic-ui-progress': '../components/semantic/dist/components/progress',
    'semantic-ui-rating': '../components/semantic/dist/components/rating',
    'semantic-ui-search': '../components/semantic/dist/components/search',
    'semantic-ui-shape': '../components/semantic/dist/components/shape',
    'semantic-ui-state': '../components/semantic/dist/components/state',
    'semantic-ui-sticky': '../components/semantic/dist/components/sticky',
    'semantic-ui-tab': '../components/semantic/dist/components/tab',
    'semantic-ui-visibility': '../components/semantic/dist/components/visibility',
    'semantic-ui-visit': '../components/semantic/dist/components/visit',
    'semantic-ui-video': '../components/semantic/dist/components/video',
    'semantic-ui-dropown': '../components/semantic/dist/components/dropdown',
    'semantic-ui-dimmer': '../components/semantic/dist/components/dimmer',
    'semantic-ui-sidebar': '../components/semantic/dist/components/sidebar',
    'semantic-ui-popup': '../components/semantic/dist/components/popup',
    'semantic-ui-modal': '../components/semantic/dist/components/modal',
    'semantic-ui-api': '../components/semantic/dist/components/api',
    'semantic-ui-transition': '../components/semantic/dist/components/transition',
    'bindings.uploader': 'app/base/bindings/uploader',
    'bindings.inputmask': 'app/base/bindings/inputmask',
    'bindings.datepicker': 'app/base/bindings/datepicker'
  },
  packages: [
    'base.entities', {
      name: 'base.entities',
      location: 'app/base/entities'
    }, 'base.controllers', {
      name: 'base.controllers',
      location: 'app/base/controllers'
    }, 'base.views', {
      name: 'base.views',
      location: 'app/base/views'
    }, 'entities', {
      name: 'entities',
      location: 'app/entities'
    }, 'alert', {
      name: 'alert',
      location: 'app/modules/alert'
    }, 'pages', {
      name: 'pages',
      location: 'app/modules/pages'
    }, 'nav', {
      name: 'nav',
      location: 'app/modules/nav'
    }, 'car', {
      name: 'car',
      location: 'app/modules/car'
    }
  ],
  modules: [
    {
      name: 'app/modules/pages/pages_api',
      exclude: ['app/app', 'app/vendors', 'base.entities', 'base.views', 'base.controllers']
    }, {
      name: 'app/modules/car/car_api',
      exclude: ['app/app', 'app/vendors', 'base.entities', 'base.views', 'base.controllers']
    }, {
      name: 'main',
      include: ['app/vendors', 'app/app', 'base.entities', 'base.views', 'base.controllers', 'entities', 'alert', 'nav', 'pages', 'car'],
      exclude: ['app/modules/pages/pages_api', 'app/modules/car/car_api']
    }
  ]
});

require(['app/vendors'], function() {
  return require(['app/app', 'base.entities', 'base.views', 'base.controllers', 'entities', 'alert', 'nav', 'pages', 'car'], function() {
    return $(document).ready(function() {
      return require('app/app').start();
    });
  });
});

//# sourceMappingURL=data:application/json;base64,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YUFGTyxFQUdQLGVBSE8sRUFJUCxZQUpPLEVBS1Asa0JBTE8sQ0FGUjtLQVZJLEVBbUJKO01BQ0QsSUFBQSxFQUFNLE1BREw7TUFFRCxPQUFBLEVBQVMsQ0FDUCxhQURPLEVBRVAsU0FGTyxFQUdQLGVBSE8sRUFJUCxZQUpPLEVBS1Asa0JBTE8sRUFNUCxVQU5PLEVBT1AsT0FQTyxFQVFQLEtBUk8sRUFTUCxPQVRPLEVBVVAsS0FWTyxDQUZSO01BY0QsT0FBQSxFQUFTLENBQ1AsNkJBRE8sRUFFUCx5QkFGTyxDQWRSO0tBbkJJO0dBdEZUO0NBREY7O0FBK0hBLE9BQUEsQ0FBUSxDQUFDLGFBQUQsQ0FBUixFQUF5QixTQUFBO1NBRXZCLE9BQUEsQ0FBUSxDQUNOLFNBRE0sRUFFTixlQUZNLEVBR04sWUFITSxFQUlOLGtCQUpNLEVBS04sVUFMTSxFQU1OLE9BTk0sRUFPTixLQVBNLEVBUU4sT0FSTSxFQVNOLEtBVE0sQ0FBUixFQVVHLFNBQUE7V0FFRCxDQUFBLENBQUUsUUFBRixDQUFXLENBQUMsS0FBWixDQUFrQixTQUFBO2FBRWhCLE9BQUEsQ0FBUSxTQUFSLENBQWtCLENBQUMsS0FBbkIsQ0FBQTtJQUZnQixDQUFsQjtFQUZDLENBVkg7QUFGdUIsQ0FBekIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmVqcy5jb25maWdcbiAgdXJsQXJnczogXCJyZXY9MS4wLjBcIlxuICBiYXNlVXJsOiAnanMnXG5cbiAgc2hpbTpcbiAgICAnc2VtYW50aWMtdWktdHJhbnNpdGlvbic6IHsgZGVwczogWydqcXVlcnknXSwgIGV4cG9ydHM6ICckJyB9XG4gICAgJ3NlbWFudGljLXVpLWRyb3Bvd24nOiB7IGRlcHM6IFsnanF1ZXJ5J10sICBleHBvcnRzOiAnJCcgfVxuICAgICdzZW1hbnRpYy11aS1kaW1tZXInOiB7IGRlcHM6IFsnanF1ZXJ5J10sICBleHBvcnRzOiAnJCcgfVxuICAgICdzZW1hbnRpYy11aS1zaWRlYmFyJzogeyBkZXBzOiBbJ2pxdWVyeSddLCAgZXhwb3J0czogJyQnIH1cbiAgICAnc2VtYW50aWMtdWktcG9wdXAnOiB7IGRlcHM6IFsnanF1ZXJ5J10sICBleHBvcnRzOiAnJCcgfVxuICAgICdzZW1hbnRpYy11aS1tb2RhbCc6IHsgZGVwczogWydqcXVlcnknXSwgIGV4cG9ydHM6ICckJyB9XG4gICAgJ3NlbWFudGljLXVpLXRhYic6IHsgZGVwczogWydqcXVlcnknXSwgIGV4cG9ydHM6ICckJyB9XG4gICAgJ3NlbWFudGljLXVpLWFwaSc6IHsgZGVwczogWydqcXVlcnknXSwgIGV4cG9ydHM6ICckJyB9XG5cbiAgICAnbW9kZXJuaXpyJzpcbiAgICAgIGV4cG9ydHM6ICdNb2Rlcm5penInXG5cbiAgICAndW5kZXJzY29yZSc6XG4gICAgICBleHBvcnRzOiAnXydcblxuICAgICdiYWNrYm9uZSc6XG4gICAgICBkZXBzOiBbJ3VuZGVyc2NvcmUnLCAnanF1ZXJ5J11cbiAgICAgIGV4cG9ydHM6ICdCYWNrYm9uZSdcblxuICAgICdiYWNrYm9uZS5uZXN0ZWQtYXR0cmlidXRlcyc6XG4gICAgICBkZXBzOiBbJ2JhY2tib25lJ11cbiAgICAgIGV4cG9ydHM6ICdCYWNrYm9uZSdcblxuICBwYXRoczpcbiAgICAndW5kZXJzY29yZSc6ICcuLi9jb21wb25lbnRzL3VuZGVyc2NvcmUvdW5kZXJzY29yZSdcbiAgICAnYmFja2JvbmUnOiAnLi4vY29tcG9uZW50cy9iYWNrYm9uZS9iYWNrYm9uZSdcbiAgICAnYmFja2JvbmUubWFyaW9uZXR0ZSc6ICcuLi9jb21wb25lbnRzL2JhY2tib25lLm1hcmlvbmV0dGUvbGliL2JhY2tib25lLm1hcmlvbmV0dGUnXG4gICAgJ2JhY2tib25lLnN0aWNraXQnOiAnLi4vY29tcG9uZW50cy9iYWNrYm9uZS5zdGlja2l0L2JhY2tib25lLnN0aWNraXQnXG4gICAgJ2JhY2tib25lLmxvY2FsU3RvcmFnZSc6ICcuLi9jb21wb25lbnRzL2JhY2tib25lLmxvY2FsU3RvcmFnZS9iYWNrYm9uZS5sb2NhbFN0b3JhZ2UnXG4gICAgJ2JhY2tib25lLm5lc3RlZC1hdHRyaWJ1dGVzJzogJ2xpYi9iYWNrYm9uZS9iYWNrYm9uZS1uZXN0ZWQtYXR0cmlidXRlcydcbiAgICAnanF1ZXJ5JzogJy4uL2NvbXBvbmVudHMvanF1ZXJ5L2Rpc3QvanF1ZXJ5J1xuXG4gICAgJ21vbWVudCc6ICcuLi9jb21wb25lbnRzL21vbWVudC9tb21lbnQnXG4gICAgJ21vbWVudC5ydSc6ICcuLi9jb21wb25lbnRzL21vbWVudC9sb2NhbGUvcnUnXG5cbiAgICAnanF1ZXJ5LmlucHV0bWFzayc6ICcuLi9jb21wb25lbnRzL2pxdWVyeS5pbnB1dG1hc2svZGlzdC9qcXVlcnkuaW5wdXRtYXNrLmJ1bmRsZSdcblxuICAgICdwaWthZGF5JzogJy4uL2NvbXBvbmVudHMvcGlrYWRheS9waWthZGF5J1xuXG4gICAgJ2pxdWVyeS5maWxlLnVwbG9hZCc6ICcuLi9jb21wb25lbnRzL2JsdWVpbXAtZmlsZS11cGxvYWQvanMvanF1ZXJ5LmZpbGV1cGxvYWQnXG4gICAgJ2pxdWVyeS51aS53aWRnZXQnOiAnLi4vY29tcG9uZW50cy9ibHVlaW1wLWZpbGUtdXBsb2FkL2pzL3ZlbmRvci9qcXVlcnkudWkud2lkZ2V0J1xuXG4gICAgJ3NlbWFudGljLXVpLWFjY29yZGlvbic6ICcuLi9jb21wb25lbnRzL3NlbWFudGljL2Rpc3QvY29tcG9uZW50cy9hY2NvcmRpb24nXG4gICAgJ3NlbWFudGljLXVpLWFkJzogJy4uL2NvbXBvbmVudHMvc2VtYW50aWMvZGlzdC9jb21wb25lbnRzL2FkJ1xuICAgICdzZW1hbnRpYy11aS1jaGVja2JveCc6ICcuLi9jb21wb25lbnRzL3NlbWFudGljL2Rpc3QvY29tcG9uZW50cy9jaGVja2JveCdcbiAgICAnc2VtYW50aWMtdWktY29sb3JpemUnOiAnLi4vY29tcG9uZW50cy9zZW1hbnRpYy9kaXN0L2NvbXBvbmVudHMvY29sb3JpemUnXG4gICAgJ3NlbWFudGljLXVpLWVtYmVkJzogJy4uL2NvbXBvbmVudHMvc2VtYW50aWMvZGlzdC9jb21wb25lbnRzL2VtYmVkJ1xuICAgICdzZW1hbnRpYy11aS1mb3JtJzogJy4uL2NvbXBvbmVudHMvc2VtYW50aWMvZGlzdC9jb21wb25lbnRzL2Zvcm0nXG4gICAgJ3NlbWFudGljLXVpLW5hZyc6ICcuLi9jb21wb25lbnRzL3NlbWFudGljL2Rpc3QvY29tcG9uZW50cy9uYWcnXG4gICAgJ3NlbWFudGljLXVpLXByb2dyZXNzJzogJy4uL2NvbXBvbmVudHMvc2VtYW50aWMvZGlzdC9jb21wb25lbnRzL3Byb2dyZXNzJ1xuICAgICdzZW1hbnRpYy11aS1yYXRpbmcnOiAnLi4vY29tcG9uZW50cy9zZW1hbnRpYy9kaXN0L2NvbXBvbmVudHMvcmF0aW5nJ1xuICAgICdzZW1hbnRpYy11aS1zZWFyY2gnOiAnLi4vY29tcG9uZW50cy9zZW1hbnRpYy9kaXN0L2NvbXBvbmVudHMvc2VhcmNoJ1xuICAgICdzZW1hbnRpYy11aS1zaGFwZSc6ICcuLi9jb21wb25lbnRzL3NlbWFudGljL2Rpc3QvY29tcG9uZW50cy9zaGFwZSdcbiAgICAnc2VtYW50aWMtdWktc3RhdGUnOiAnLi4vY29tcG9uZW50cy9zZW1hbnRpYy9kaXN0L2NvbXBvbmVudHMvc3RhdGUnXG4gICAgJ3NlbWFudGljLXVpLXN0aWNreSc6ICcuLi9jb21wb25lbnRzL3NlbWFudGljL2Rpc3QvY29tcG9uZW50cy9zdGlja3knXG4gICAgJ3NlbWFudGljLXVpLXRhYic6ICcuLi9jb21wb25lbnRzL3NlbWFudGljL2Rpc3QvY29tcG9uZW50cy90YWInXG4gICAgJ3NlbWFudGljLXVpLXZpc2liaWxpdHknOiAnLi4vY29tcG9uZW50cy9zZW1hbnRpYy9kaXN0L2NvbXBvbmVudHMvdmlzaWJpbGl0eSdcbiAgICAnc2VtYW50aWMtdWktdmlzaXQnOiAnLi4vY29tcG9uZW50cy9zZW1hbnRpYy9kaXN0L2NvbXBvbmVudHMvdmlzaXQnXG4gICAgJ3NlbWFudGljLXVpLXZpZGVvJzogJy4uL2NvbXBvbmVudHMvc2VtYW50aWMvZGlzdC9jb21wb25lbnRzL3ZpZGVvJ1xuICAgICdzZW1hbnRpYy11aS1kcm9wb3duJzogJy4uL2NvbXBvbmVudHMvc2VtYW50aWMvZGlzdC9jb21wb25lbnRzL2Ryb3Bkb3duJ1xuICAgICdzZW1hbnRpYy11aS1kaW1tZXInOiAnLi4vY29tcG9uZW50cy9zZW1hbnRpYy9kaXN0L2NvbXBvbmVudHMvZGltbWVyJ1xuICAgICdzZW1hbnRpYy11aS1zaWRlYmFyJzogJy4uL2NvbXBvbmVudHMvc2VtYW50aWMvZGlzdC9jb21wb25lbnRzL3NpZGViYXInXG4gICAgJ3NlbWFudGljLXVpLXBvcHVwJzogJy4uL2NvbXBvbmVudHMvc2VtYW50aWMvZGlzdC9jb21wb25lbnRzL3BvcHVwJ1xuICAgICdzZW1hbnRpYy11aS1tb2RhbCc6ICcuLi9jb21wb25lbnRzL3NlbWFudGljL2Rpc3QvY29tcG9uZW50cy9tb2RhbCdcbiAgICAnc2VtYW50aWMtdWktYXBpJzogJy4uL2NvbXBvbmVudHMvc2VtYW50aWMvZGlzdC9jb21wb25lbnRzL2FwaSdcbiAgICAnc2VtYW50aWMtdWktdHJhbnNpdGlvbic6ICcuLi9jb21wb25lbnRzL3NlbWFudGljL2Rpc3QvY29tcG9uZW50cy90cmFuc2l0aW9uJ1xuXG4gICAgJ2JpbmRpbmdzLnVwbG9hZGVyJzogJ2FwcC9iYXNlL2JpbmRpbmdzL3VwbG9hZGVyJ1xuICAgICdiaW5kaW5ncy5pbnB1dG1hc2snOiAnYXBwL2Jhc2UvYmluZGluZ3MvaW5wdXRtYXNrJ1xuICAgICdiaW5kaW5ncy5kYXRlcGlja2VyJzogJ2FwcC9iYXNlL2JpbmRpbmdzL2RhdGVwaWNrZXInXG5cbiAgcGFja2FnZXM6IFtcbiAgICAnYmFzZS5lbnRpdGllcycsIHsgbmFtZTogJ2Jhc2UuZW50aXRpZXMnLCBsb2NhdGlvbjogJ2FwcC9iYXNlL2VudGl0aWVzJyB9XG4gICAgJ2Jhc2UuY29udHJvbGxlcnMnLCB7IG5hbWU6ICdiYXNlLmNvbnRyb2xsZXJzJywgbG9jYXRpb246ICdhcHAvYmFzZS9jb250cm9sbGVycycgfVxuICAgICdiYXNlLnZpZXdzJywgeyBuYW1lOiAnYmFzZS52aWV3cycsIGxvY2F0aW9uOiAnYXBwL2Jhc2Uvdmlld3MnIH1cbiAgICAnZW50aXRpZXMnLCB7IG5hbWU6ICdlbnRpdGllcycsIGxvY2F0aW9uOiAnYXBwL2VudGl0aWVzJ31cbiAgICAnYWxlcnQnLCB7IG5hbWU6ICdhbGVydCcsIGxvY2F0aW9uOiAnYXBwL21vZHVsZXMvYWxlcnQnIH1cbiAgICAncGFnZXMnLCB7IG5hbWU6ICdwYWdlcycsIGxvY2F0aW9uOiAnYXBwL21vZHVsZXMvcGFnZXMnIH1cbiAgICAnbmF2JywgeyBuYW1lOiAnbmF2JywgbG9jYXRpb246ICdhcHAvbW9kdWxlcy9uYXYnIH1cbiAgICAnY2FyJywgeyBuYW1lOiAnY2FyJywgbG9jYXRpb246ICdhcHAvbW9kdWxlcy9jYXInIH1cbiAgXVxuXG4gIG1vZHVsZXM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAnYXBwL21vZHVsZXMvcGFnZXMvcGFnZXNfYXBpJ1xuICAgICAgZXhjbHVkZTogW1xuICAgICAgICAnYXBwL2FwcCdcbiAgICAgICAgJ2FwcC92ZW5kb3JzJ1xuICAgICAgICAnYmFzZS5lbnRpdGllcydcbiAgICAgICAgJ2Jhc2Uudmlld3MnXG4gICAgICAgICdiYXNlLmNvbnRyb2xsZXJzJ1xuICAgICAgXVxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdhcHAvbW9kdWxlcy9jYXIvY2FyX2FwaSdcbiAgICAgIGV4Y2x1ZGU6IFtcbiAgICAgICAgJ2FwcC9hcHAnXG4gICAgICAgICdhcHAvdmVuZG9ycydcbiAgICAgICAgJ2Jhc2UuZW50aXRpZXMnXG4gICAgICAgICdiYXNlLnZpZXdzJ1xuICAgICAgICAnYmFzZS5jb250cm9sbGVycydcbiAgICAgIF1cbiAgICB9LCB7XG4gICAgICBuYW1lOiAnbWFpbidcbiAgICAgIGluY2x1ZGU6IFtcbiAgICAgICAgJ2FwcC92ZW5kb3JzJ1xuICAgICAgICAnYXBwL2FwcCdcbiAgICAgICAgJ2Jhc2UuZW50aXRpZXMnXG4gICAgICAgICdiYXNlLnZpZXdzJ1xuICAgICAgICAnYmFzZS5jb250cm9sbGVycydcbiAgICAgICAgJ2VudGl0aWVzJ1xuICAgICAgICAnYWxlcnQnXG4gICAgICAgICduYXYnXG4gICAgICAgICdwYWdlcydcbiAgICAgICAgJ2NhcidcbiAgICAgIF1cbiAgICAgIGV4Y2x1ZGU6IFtcbiAgICAgICAgJ2FwcC9tb2R1bGVzL3BhZ2VzL3BhZ2VzX2FwaSdcbiAgICAgICAgJ2FwcC9tb2R1bGVzL2Nhci9jYXJfYXBpJ1xuICAgICAgXVxuICAgIH1cbiAgXVxuXG5yZXF1aXJlIFsnYXBwL3ZlbmRvcnMnXSwgLT5cblxuICByZXF1aXJlIFtcbiAgICAnYXBwL2FwcCdcbiAgICAnYmFzZS5lbnRpdGllcydcbiAgICAnYmFzZS52aWV3cydcbiAgICAnYmFzZS5jb250cm9sbGVycydcbiAgICAnZW50aXRpZXMnXG4gICAgJ2FsZXJ0J1xuICAgICduYXYnXG4gICAgJ3BhZ2VzJ1xuICAgICdjYXInXG4gIF0sIC0+XG5cbiAgICAkKGRvY3VtZW50KS5yZWFkeSAtPlxuICAgICAgIyBTdGFydCBtYWluIGFwcGxpY2F0aW9uXG4gICAgICByZXF1aXJlKCdhcHAvYXBwJykuc3RhcnQoKVxuIl19
