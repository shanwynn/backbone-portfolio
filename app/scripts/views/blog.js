/*global BackbonePortfolio, Backbone, JST*/

BackbonePortfolio.Views = BackbonePortfolio.Views || {};

(function () {
    'use strict';

    BackbonePortfolio.Views.Blog = Backbone.View.extend({

        template: JST['app/scripts/templates/blog.ejs'],

        el: $('#appContainer'),

        events: {},

        initialize: function () {
            this.listenTo(BackbonePortfolio.Posts, 'add',   this.addOne);
            this.listenTo(BackbonePortfolio.Posts, 'reset', this.addAll);

            this.render();
            // If this is before render it will have nothing on the page to grab
            this.postsContainer = this.$el.find('#posts-container');
            this.addAll(BackbonePortfolio.Posts.models);
        },

        addOne: function (post) {
            var postView = new BackbonePortfolio.Views.Post(post);
            this.postsContainer.append(postView.render().el);
        },

        addAll: function (posts) {
            var that = this;
            _.each(posts, function (post) {
                that.addOne(post);
            });
        },

        render: function () {
            this.$el.html(this.template());
        }

    });

})();
