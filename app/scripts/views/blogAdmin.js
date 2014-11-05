/*global BackbonePortfolio, Backbone, JST*/

BackbonePortfolio.Views = BackbonePortfolio.Views || {};

(function () {
    'use strict';

    BackbonePortfolio.Views.BlogAdmin = Backbone.View.extend({

        template: JST['app/scripts/templates/blogAdmin.ejs'],

        el: $('#appContainer'),

        events: {
            'submit #newPost': 'onSubmit'
        },

        onSubmit: function (event) {
            event.preventDefault();
            var title = $('#title').val();
            var body  = $('#body').val();

            var post  = new BackbonePortfolio.Models.Post({
                title: title,
                body: body
            });

            BackbonePortfolio.Posts.add(post);
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
