/**
 * Created by Devloper30 on 01/05/17.
 */
(function(app) {
    app.AppModule =
        ng.core.NgModule({
            imports: [ ng.platformBrowser.BrowserModule ],
            declarations: [ app.AppComponent ],
            bootstrap: [ app.AppComponent ]
        })
            .Class({
                constructor: function() {}
            });
})(window.app || (window.app = {}));