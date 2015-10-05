import Ember from 'ember';
import Todo from './todo';

export default Ember.Object.extend({


    Todo: Ember.computed( function(){
    return [Todo.createRandom()];
  })



});
