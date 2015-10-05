import Ember from 'ember';

var Todo =  Ember.Object.extend({
  description:''
});

Todo.reopenClass({
  createRandom: function() {
    return Todo.create({
      description: 'the man'
    });
  }
});

export default Todo;