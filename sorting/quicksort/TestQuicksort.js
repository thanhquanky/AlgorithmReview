
describe('Quicksort', function(){
  describe('sort ascending', function(){
    it('should not throw error with the empty array', function(){
      var arr = [];
      var copy = arr;
      Quicksort(arr, 0, arr.length - 1);
      expect(arr).to.equal(copy.sort());
    })
    
    it('should sort the array of 1', function(){
      var arr = [3];
      var copy = arr;
      Quicksort(arr, 0, arr.length - 1);
      expect(arr).to.equal(copy.sort());
    })
    
    it('should sort the array of 4', function(){
      var arr = [3,2,1,4];
      var copy = arr;
      Quicksort(arr, 0, arr.length - 1);
      expect(arr).to.equal(copy.sort());
    })
  })
  
  describe('sort descending', function() {
    it('should not throw error with the empty array', function(){
      var arr = [];
      var copy = arr;
      Quicksort(arr, 0, arr.length - 1, true);
      expect(arr).to.equal(copy)  ;
    })
    
    it('should sort the array of 1', function(){
      var arr = [3];
      var copy = arr;
      Quicksort(arr, 0, arr.length - 1);
      expect(arr).to.equal(copy);
    })
    
    it('should sort the array of 4', function(){
      var arr = [3,2,1,4];
      var copy = arr;
      Quicksort(arr, 0, arr.length - 1);
      expect(arr).to.equal(copy.sort().reverse());
    })
  })
  
  describe('sort with comparator ascendingly', function() {
    var Person = function(name, age) {
      return { name: name, age: age };
    }
    it('should should the array of 2', function() {
      var tofu = new Person("Tofu", 22);
      var chicken = new Person("Chicken", 21);
      var arr = [tofu, chicken];
      var comparator = function(personA, personB) {
        return personA.age - personB.age;
      }
      Quicksort(arr, 0, arr.length-1, false, comparator);
      expect(arr[0]).to.equal(chicken);
      expect(arr[1]).to.equal(tofu);
    })
    
    it('should should the array of 4', function() {
      var tofu = new Person("Tofu", 22);
      var chicken = new Person("Chicken", 21);
      var pig = new Person("Pig", 18);
      var rabbit = new Person("Rabbit", 19);
      var arr = [tofu, chicken, rabbit, pig];
      var comparator = function(personA, personB) {
        return personA.age - personB.age;
      }
      Quicksort(arr, 0, arr.length-1, false, comparator);
      expect(arr[0]).to.equal(pig);
      expect(arr[1]).to.equal(rabbit);
      expect(arr[2]).to.equal(chicken);
      expect(arr[3]).to.equal(tofu);
    })
  })
  
  describe('sort with comparator descendingly', function() {
    var Person = function(name, age) {
      return { name: name, age: age };
    }
    it('should should the array of 2', function() {
      var tofu = new Person("Tofu", 22);
      var chicken = new Person("Chicken", 21);
      var arr = [tofu, chicken];
      var comparator = function(personA, personB) {
        return personA.age - personB.age;
      }
      Quicksort(arr, 0, arr.length-1, true, comparator);
      expect(arr[0]).to.equal(tofu);
      expect(arr[1]).to.equal(chicken);
    })
    
    it('should should the array of 4', function() {
      var tofu = new Person("Tofu", 22);
      var chicken = new Person("Chicken", 21);
      var pig = new Person("Pig", 18);
      var rabbit = new Person("Rabbit", 19);
      var arr = [tofu, chicken, rabbit, pig];
      var comparator = function(personA, personB) {
        return personA.age - personB.age;
      }
      Quicksort(arr, 0, arr.length-1, true, comparator);
      expect(arr[3]).to.equal(pig);
      expect(arr[2]).to.equal(rabbit);
      expect(arr[1]).to.equal(chicken);
      expect(arr[0]).to.equal(tofu);
    })
  })
})