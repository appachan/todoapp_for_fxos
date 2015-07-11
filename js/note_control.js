App.NoteControlView = Backbone.View.extend({

    events: {
        'submit .js-search-form': 'onSubmit'
    },
    
    render: function() {
        var template = $('#noteControlView-template').html();
        var html = _.template(template);
        this.$el.html(html);
        return this;
    },
    
    onSubmit: function (e) {
        e.preventDefault();
        var query = this.$('.js-search-query').val();
        this.trigger('submit:form', query);
    }
});