App.NoteListView = Backbone.View.extend({

    tagName: 'table',

    className: 'table',

    initialize: function(options) {
        this.collection = options.collection;
        this.listenTo(this.collection, 'reset', this.render);
    },

    render: function() {
        this.removeItemView();
        
        var template = $('#noteListView-template').html();
        this.$el.html(template);    //$elにルートDOM保存してる？
    
        this.renderItemView();
        return this;
    },

    renderItemView: function() {
        var $insertionPoint = this.$('.js-noteListItemView-container');
        
        this.itemViews = this.collection.map(function (note) {
            var itemView = new App.NoteListItemView({
                model: note
            });
            $insertionPoint.append(itemView.render().$el);
            return itemView;
        }, this);
    },
    
    removeItemView: function () {
        _.invoke(this.itemViews, 'remove')
    }
});