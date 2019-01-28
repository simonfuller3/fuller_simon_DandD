(() => {
	//let theButton = document.querySelector("#buttonHolder img");

	//window.addEventListener("load", changeHeaderText);

	//window.addEventListener("load", changeParagraphText);

	//function changeHeaderText() {
	//	document.querySelector("h1").textContent = " Hey there from yo mamas house"
	
	
	//function changeParagraphText() {
	//	document.querySelector("p").textContent = "If you are reading this, run for your life!"
	

	//theButton.addEventListener("click", changeHeaderText);




	// variables always come first//
	const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	let piecesBoard = document.querySelector(".puzzle-pieces"),
		puzzleBoard = document.querySelector(".puzzle-board"),
		puzzleSelectors = document.querySelectorAll("#buttonHolder img");

		//function always go in the middle//
		function createPuzzlePieces(pictureIndex) {
			//generate puzzle pieces for the left hand side//
			pieces.forEach((piece, index) => {
				let newPuzzlePiece = `<img id="piece${index}" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt="thumbnail">`;
			
					piecesBoard.innerHTML += newPuzzlePiece;
			});

			puzzleBoard.style.backgroundImage = `url(./images/backGround${pictureIndex}.jpg)`

		}



		function resetPuzzlePieces() {
			// swap out all of the images when clocking ona bottom button//
			// emptu the thumbnail container//
			piecesBoard.innerHTML = "";
			createPuzzlePieces(this.dataset.puzzleref);
		

		}
		//event handling down here / at the bottom//
		
		puzzleSelectors.forEach(puzzle => puzzle.addEventListener("click", resetPuzzlePieces));


		createPuzzlePieces(0);

})();
