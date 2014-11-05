/*global BackbonePortfolio, Backbone*/

BackbonePortfolio.Collections = BackbonePortfolio.Collections || {};

(function () {
    'use strict';

    BackbonePortfolio.Collections.Posts = Backbone.Collection.extend({

        model: BackbonePortfolio.Models.Posts

    });

})();
