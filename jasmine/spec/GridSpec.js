describe("Grid", function () {
	var grid, maxPlayer, minPlayer;

	beforeEach(function () {
		grid = new Grid();
		minPlayer = new Player("Jegon", "o");
		maxPlayer = new Player("George", "x");
		maxPlayer.setType("Max");
	});


	describe("setMove", function () {
		it("should be true", function () {
			expect(grid.setMove(0, "x")).toBe(true);
		});

		it("when player want to fill a not empty field", function () {
			grid.setMove(0, "x");
			expect(grid.setMove(0, "o")).toBe(false);
		});
	});

	describe("calculate value", function () {
		it("with grid empty", function () {
			expect(grid.calculate(maxPlayer, minPlayer)).toEqual(0);
		});

		it("with 1 field filled", function () {
			grid.setMove(0, "x");
			expect(grid.calculate(maxPlayer, minPlayer)).toEqual(3);
		});

		it("with 2 fields filled", function () {
			grid.setMove(0, "o");
			grid.setMove(4, "x");
			expect(grid.calculate(maxPlayer, minPlayer)).toEqual(1);
		});
	});
});