/*global BackbonePortfolio, $*/


window.BackbonePortfolio = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
        this.Router    = new BackbonePortfolio.Routers.App();
        this.Posts     = new BackbonePortfolio.Collections.Posts();
        this.Projects  = new BackbonePortfolio.Collections.Projects();

        Backbone.history.start();
    }
};

$(document).ready(function () {
    'use strict';
    BackbonePortfolio.init();
});
