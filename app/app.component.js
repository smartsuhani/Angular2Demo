/**
 * Created by Devloper30 on 01/05/17.
 */
(function(app) {
    app.AppComponent =
        ng.core.Component({
            selector: 'my-app',
            template: '<h1>Hello Angular</h1>'
        })
            .Class({
                constructor: function() {}
            });
        ng.core.Component({
            selector: 'test',
            templete: '<h2>Test page</h2>'
        })
            .Class({
                constructor: function () {
                    
                }
            });
})(window.app || (window.app = {}));