/*global BackbonePortfolio, Backbone, JST*/

BackbonePortfolio.Views = BackbonePortfolio.Views || {};

(function () {
    'use strict';

    BackbonePortfolio.Views.About = Backbone.View.extend({

        template: JST['app/scripts/templates/about.ejs'],

        el: $('#appContainer'),

        events: {},

        initialize: function () {
            this.render();
        },

        render: function () {
            console.log('render about');
            this.$el.html(this.template());
        }

    });

})();
