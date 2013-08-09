describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  // add more tests here to test the functionality of linkedList
  describe(".addTail", function() {
    it('should add a node to the head when there is no head', function() {
      expect(linkedList.head).toEqual(null);
      linkedList.addToTail('hello');
      expect(linkedList.head.value).toEqual('hello');
    });

    it('should add a node to the tail when there is no head', function() {
      expect(linkedList.head).toEqual(null);
      linkedList.addToTail('tails');
      expect(linkedList.tail.value).toEqual('tails');
    });

    it('should add a second node to the tail when there is already a tail', function() {
      linkedList.addToTail('here is a tail');
      linkedList.addToTail('more tails');
      expect(linkedList.tail.value).toEqual('more tails');
    });
  });
  describe(".contains", function() {
    it('should return true if the linked list contains the passed in value', function() {
      linkedList.addToTail('a');
      expect(linkedList.contains('a')).toEqual(true);
    });
    it('should return false if the linked list does not contain the passed in value', function() {
      linkedList.addToTail('a');
      expect(linkedList.contains('b')).toEqual(false);
    });
    it('should return true when found in the middle', function(){
      linkedList.addToTail('a');
      linkedList.addToTail('b');
      linkedList.addToTail('c');
      linkedList.addToTail('d');
      expect(linkedList.contains('c')).toEqual(true);
    });
  });
  describe(".removeHead",function(){
    it ('it should it should make the next node the new head', function(){
      linkedList.addToTail('a');
      linkedList.addToTail('b');
      linkedList.addToTail('c');
      linkedList.removeHead();
      expect(linkedList.head.value).toEqual('b');
    });  

    it ('it should assign new head correctly if multiple nodes are removed', function(){
      linkedList.addToTail('a');
      linkedList.addToTail('b');
      linkedList.addToTail('c');
      linkedList.removeHead();
      linkedList.removeHead();
      expect(linkedList.head.value).toEqual('c');
    });

    it ('it should not contain the removed value', function(){
      linkedList.addToTail('a');
      linkedList.addToTail('b');
      linkedList.addToTail('c');
      linkedList.removeHead();
      expect(linkedList.contains('a')).toEqual(false);
    });
  });
});