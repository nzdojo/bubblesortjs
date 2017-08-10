var Sorting = require("./sorting.js");
var should = require('should');

describe('bubblesorting Fixture tests', function () {
    var sorting;
    
    before(function () {
        sorting = new Sorting();
    });
  
    it('Sort a List of Numbers', function (done) {
      
      var list = [-2, 3, 1, -1, 0, 7, 5];
    
      sorting.BubbleSort(list);
    
      should(list).eql([-2, -1, 0, 1, 3, 5, 7]);

      done();
    });
    
    it('Sort a one item list', function (done) {
      
      var shortlist = [2];
    
      sorting.BubbleSort(shortlist);
    
      should(shortlist).eql([2]);

      done();
    });
    
    it('Sort an empty list', function (done) {
    
      var emptylist = [];
      
      sorting.BubbleSort(emptylist);
    
      should(emptylist).eql([]);
      
      done();
    });
    
});