import Ember from 'ember';
import Todo from 'todoList/models/todo';


export default Ember.Route.extend({
    model: function() {


   return this.store.findAll('todo');
    }
});
