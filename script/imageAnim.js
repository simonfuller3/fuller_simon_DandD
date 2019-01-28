(() => {
	//let theButton = document.querySelector("#buttonHolder img");

	//window.addEventListener("load", changeHeaderText);

	//window.addEventListener("load", changeParagraphText);

	//function changeHeaderText() {
	//	document.querySelector("h1").textContent = " Hey there from yo mamas house"
	}
	
	//function changeParagraphText() {
	//	document.querySelector("p").textContent = "If you are reading this, run for your life!"
	}

	//theButton.addEventListener("click", changeHeaderText);

})();

(() => {
	// variables always come first//
	const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	let piecesBoard = document.querySelector(".puzzle-pieces"),
		puzzleBoard = document.querySelector(".puzzle-board"),
		puzzleSelectors = document.querySelectorAll("#buttonHolder img");

		//function always go in the middle//
		function createPuzzlePieces() {
			//generate puzzle pieces for the left hand side//
			debugger;
		}

		function resetPuzzlePieces() {
			// swap out all of the images when clocking ona bottom button//
			debugger;

		}
		//event handling down here / at the bottom//
		
		puzzleSelectors.forEach(puzzle =>.addEventListener("click", resetPuzzlePieces));


		createPuzzlePieces();

})();
