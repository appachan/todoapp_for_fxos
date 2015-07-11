App.NoteDetailView = Backbone.View.extend({

    render: function() {
        var template = $('#noteDetailView-template').html();
        var html = _.template(template);
        this.$el.html(html(this.model.toJSON())); 
        return this;
    }
});