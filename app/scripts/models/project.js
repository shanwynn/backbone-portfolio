/*global BackbonePortfolio, Backbone*/

BackbonePortfolio.Models = BackbonePortfolio.Models || {};

(function () {
    'use strict';

    BackbonePortfolio.Models.Project = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
