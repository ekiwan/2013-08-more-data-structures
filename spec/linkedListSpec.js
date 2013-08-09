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
  describe(".addToTail", function(){
    it('should add a node to the head when there is no head', function(){
      expect(linkedList.head).toEqual(null);
      linkedList.addToTail('hello');
      expect(linkedList.head.value).toEqual('hello');
    });

    it('should add a node to the tail when there is no head', function(){
      expect(linkedList.head).toEqual(null);
      linkedList.addToTail('tails');
      expect(linkedList.tail.value).toEqual('tails');
    });
  });
});