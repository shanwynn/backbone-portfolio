/*global BackbonePortfolio, Backbone*/

BackbonePortfolio.Collections = BackbonePortfolio.Collections || {};

(function () {
    'use strict';

    BackbonePortfolio.Collections.Projects = Backbone.Collection.extend({

        model: BackbonePortfolio.Models.Projects

    });

})();
