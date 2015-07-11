window.App = {};

var initializeNotes = function () {
    var noteCollection = new App.NoteCollection();
    /*
    [{
        title: 'memo1',
        body: 'this is memo1'
    }, {
        title: 'memo2',
        body: 'this is memo2'
    }, {
        title: 'memo3',
        body: 'this is memo3'
    }]
     */

    noteCollection.each(function (note) {
        note.save();
    });

    return noteCollection.models;
};

$(function () {
    App.noteCollection = new App.NoteCollection();

    App.mainContainer = new App.Container({
        el: '#main-container'
    });

    App.headerContainer = new App.Container({
        el: '#header-container'
    });

    App.noteCollection.fetch().then(function (notes) {
        if (notes.length === 0) {
            var models = initializeNotes();
            App.noteCollection.reset(models);
        }

        // ルータの初期化と履歴管理の開始
        App.router = new App.Router();
        Backbone.history.start();
    });
});
