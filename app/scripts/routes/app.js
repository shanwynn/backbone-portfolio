/*global BackbonePortfolio, Backbone*/

BackbonePortfolio.Routers = BackbonePortfolio.Routers || {};

(function () {
    'use strict';

    BackbonePortfolio.Routers.App = Backbone.Router.extend({
        routes: {
          'about'     : 'about',
          'blog'      : 'blog',
          'blog_admin': 'admin',
          'portfolio' : 'work',
          'portfolio_admin' : 'portfolioadmin',
        },

        about: function () {
           console.log('about');
           new BackbonePortfolio.Views.About();
        },

        blog: function () {
           console.log('blog');
           new BackbonePortfolio.Views.Blog();
        },

        admin: function () {
           console.log('blog-admin');
           new BackbonePortfolio.Views.BlogAdmin();
        },

        work: function () {
           console.log('work');
           new BackbonePortfolio.Views.Portfolio();
        },

        portfolioadmin: function () {
           console.log('portfolio-admin');
           new BackbonePortfolio.Views.PortfolioAdmin();
        }
    });
})();
