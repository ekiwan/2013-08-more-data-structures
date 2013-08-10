describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree('r');
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

  // Add more tests here to test the functionality of tree.

  describe(".addChild", function() {
    it("should add a node when the tree is empty", function(){
      tree.addChild('a');
      expect(tree.children[0].value).toEqual('a');
    });
    it("should add a child node to the root when the tree is not empty", function(){
      tree.addChild('a');
      tree.addChild('b');
      tree.addChild('c');
      expect(tree.children[0].value).toEqual('a');
      expect(tree.children[1].value).toEqual('b');
      expect(tree.children[2].value).toEqual('c');
    });
    it("should add a child to other nodes besides the root", function(){
      tree.addChild('a');
      tree.addChild('b');
      tree.children[1].addChild('c');
      expect(tree.children[1].children[0].value).toEqual('c');
    });
  });

  describe(".contains", function() {
    // it("it should return true if the root contains the passed in value", function(){
    //   tree.value = 'a';
    //   expect(tree.contains('a')).toEqual(true);
    // });

    it("it should return true if a child node contains the passed in value", function(){
      tree.addChild('a');
      tree.addChild('b');
      tree.addChild('c');
      tree.addChild('d');
      tree.children[1].addChild('b1');
      expect(tree.contains('b1')).toEqual(true);
    });
  });
});