describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).toEqual(jasmine.any(Function));
    expect(set.contains).toEqual(jasmine.any(Function));
    expect(set.remove).toEqual(jasmine.any(Function));
  });

  describe(".add", function() {
    it("should add the passed in value to the set", function() {
      set.add('a');
      set.add('b');
      expect(set._storage['a']).toEqual(true);
      expect(set._storage['b']).toEqual(true);
    });
  });
});