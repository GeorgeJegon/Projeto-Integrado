describe("MiniMax", function () {
	describe("With small tree", function () {
		var NodeTree = new Node(), MiniMaxObject;

		NodeTree
			.addChild(new Node())
				.get(0)
					.addChild(new Node(3))
					.addChild(new Node(12))
					.addChild(new Node(8))
				.getParent()
			.addChild(new Node())
				.get(1)
					.addChild(new Node(2))
					.addChild(new Node(4))
					.addChild(new Node(6))
				.getParent()
			.addChild(new Node())
				.get(2)
					.addChild(new Node(14))
					.addChild(new Node(5))
					.addChild(new Node(2));

		MiniMaxObject = new MiniMax(NodeTree);

		it("validate value of root Node", function () {
			expect(MiniMaxObject.root.value).toEqual(3);
		});

		it("validate NodeTree values", function () {
			var rootNode = MiniMaxObject.root;
			expect(rootNode.value).toEqual(3);

			expect(rootNode.get(0).value).toEqual(3);
			expect(rootNode.get(0).get(0).value).toEqual(3);
			expect(rootNode.get(0).get(1).value).toEqual(12);
			expect(rootNode.get(0).get(2).value).toEqual(8);

			expect(rootNode.get(1).value).toEqual(2);
			expect(rootNode.get(1).get(0).value).toEqual(2);
			expect(rootNode.get(1).get(1).value).toEqual(4);
			expect(rootNode.get(1).get(2).value).toEqual(6);

			expect(rootNode.get(2).value).toEqual(2);
			expect(rootNode.get(2).get(0).value).toEqual(14);
			expect(rootNode.get(2).get(1).value).toEqual(5);
			expect(rootNode.get(2).get(2).value).toEqual(2);
		});
	});

	describe("With big tree", function () {
		var NodeTree = new Node(), MiniMaxObject;

		// Nivel 1
	  NodeTree.addChild(new Node());
	  NodeTree.addChild(new Node());

	  // Nivel 2
	  NodeTree.get(0).addChild(new Node());
	  NodeTree.get(0).addChild(new Node());

	  NodeTree.get(1).addChild(new Node());
	  NodeTree.get(1).addChild(new Node());

	  // Nivel 3
	  NodeTree.get(0).get(0).addChild(new Node());
	  NodeTree.get(0).get(0).addChild(new Node());

	  NodeTree.get(0).get(1).addChild(new Node());
	  NodeTree.get(0).get(1).addChild(new Node());

	  NodeTree.get(1).get(0).addChild(new Node());
	  NodeTree.get(1).get(0).addChild(new Node());

	  NodeTree.get(1).get(1).addChild(new Node());
	  NodeTree.get(1).get(1).addChild(new Node());

	  // Nivel 4
	  NodeTree.get(0).get(0).get(0).addChild(new Node(8));
	  NodeTree.get(0).get(0).get(0).addChild(new Node(23));

	  NodeTree.get(0).get(0).get(1).addChild(new Node(-47));
	  NodeTree.get(0).get(0).get(1).addChild(new Node(28));

	  NodeTree.get(0).get(1).get(0).addChild(new Node(-30));
	  NodeTree.get(0).get(1).get(0).addChild(new Node(-37));

	  NodeTree.get(0).get(1).get(1).addChild(new Node(3));
	  NodeTree.get(0).get(1).get(1).addChild(new Node(-41));

	  NodeTree.get(1).get(0).get(0).addChild(new Node(-19));
	  NodeTree.get(1).get(0).get(0).addChild(new Node(4));

	  NodeTree.get(1).get(0).get(1).addChild(new Node(-49));
	  NodeTree.get(1).get(0).get(1).addChild(new Node(4));

	  NodeTree.get(1).get(1).get(0).addChild(new Node(43));
	  NodeTree.get(1).get(1).get(0).addChild(new Node(45));

	  NodeTree.get(1).get(1).get(1).addChild(new Node(-26));
	  NodeTree.get(1).get(1).get(1).addChild(new Node(-14));

	  MiniMaxObject = new MiniMax(NodeTree);

	  it("validate value of root Node", function () {
			expect(MiniMaxObject.root.value).toEqual(-19);
		});
	});
});
