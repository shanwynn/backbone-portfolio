/*global BackbonePortfolio, Backbone, JST*/

BackbonePortfolio.Views = BackbonePortfolio.Views || {};

(function () {
    'use strict';

    BackbonePortfolio.Views.Portfolio = Backbone.View.extend({

        template: JST['app/scripts/templates/portfolio.ejs'],

        el: $('#appContainer'),

        events: {},

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template());
        }

    });

})();
