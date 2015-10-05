import Ember from 'ember';
import Todo from '../models/todo';

export default Ember.Controller.extend({
  list: Ember.computed.alias('model'),


  actions: {
      addTodo: function() {
      var listItem = Todo.createRandom();

      this.get('model.todos').pushObject(listItem);
    }

}


});
