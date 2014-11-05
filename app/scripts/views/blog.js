/*global BackbonePortfolio, Backbone, JST*/

BackbonePortfolio.Views = BackbonePortfolio.Views || {};

(function () {
    'use strict';

    BackbonePortfolio.Views.Blog = Backbone.View.extend({

        template: JST['app/scripts/templates/blog.ejs'],

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
