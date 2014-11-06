/*global BackbonePortfolio, Backbone, JST*/

BackbonePortfolio.Views = BackbonePortfolio.Views || {};

(function () {
    'use strict';

    BackbonePortfolio.Views.PortfolioAdmin = Backbone.View.extend({

        template: JST['app/scripts/templates/portfolioAdmin.ejs'],

        el: $('#appContainer'),

        events: {
          'submit #newPortfolio': 'onSubmit'
        },

        onSubmit: function (event) {
          event.preventDefault();
          var title = $('#pfTitle').val();
          var description = $('#pfDescription').val();
          var image = $('#pfImage').val();

          var project = new BackbonePortfolio.Models.Project({
            pfTitle: title,
            pfDescription: description,
            pfImage: image
          });

          BackbonePortfolio.Projects.add(project);
          $('input, textarea').val('');
        },

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template());
        }

    });

})();
