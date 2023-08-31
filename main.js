/*codigo movimenta as peças como eu gostaria só que também na transversal

const cells = document.querySelectorAll(".cell");
  const pieces = document.querySelectorAll(".piece");
  let selectedPiece = null;

  pieces.forEach(piece => {
    piece.addEventListener("click", function(event) {
      event.stopPropagation();
      selectedPiece = piece;
    });
  });

  cells.forEach(cell => {
    cell.addEventListener("click", function() {
      if (selectedPiece && !cell.firstElementChild) {
        cell.appendChild(selectedPiece);
        selectedPiece = null;
      }
    });
  });*/

  /*
  também funcionou mais movimenta na transversal
  
  const pieces = document.querySelectorAll(".piece");
  let selectedPiece = null;

  pieces.forEach(piece => {
    piece.addEventListener("click", function(event) {
      event.stopPropagation();
      if (selectedPiece) {
        selectedPiece.classList.remove("selected");
      }
      selectedPiece = piece;
      selectedPiece.classList.add("selected");
    });
  });

  const cells = document.querySelectorAll(".cell");
  cells.forEach(cell => {
    cell.addEventListener("click", function() {
      if (selectedPiece && !cell.querySelector(".piece")) {
        cell.appendChild(selectedPiece);
        selectedPiece.classList.remove("selected");
        selectedPiece = null;
      }
    });
  });*/

  /* 
  Perfeito só vou trabalha a transição
  const pieces = document.querySelectorAll(".piece");
  let selectedPiece = null;

  pieces.forEach(piece => {
    piece.addEventListener("click", function(event) {
      event.stopPropagation();
      if (selectedPiece) {
        selectedPiece.classList.remove("selected");
      }
      selectedPiece = piece;
      selectedPiece.classList.add("selected");
    });
  });

  const cells = document.querySelectorAll(".cell");
  cells.forEach(cell => {
    cell.addEventListener("click", function() {
      if (selectedPiece && !cell.querySelector(".piece")) {
        const selectedCell = selectedPiece.parentElement;
        const selectedRow = parseInt(selectedCell.getAttribute("data-row"));
        const selectedCol = parseInt(selectedCell.getAttribute("data-col"));

        const targetRow = parseInt(cell.getAttribute("data-row"));
        const targetCol = parseInt(cell.getAttribute("data-col"));

        const rowDiff = Math.abs(targetRow - selectedRow);
        const colDiff = Math.abs(targetCol - selectedCol);

        if ((rowDiff === 0 && colDiff === 1) || (rowDiff === 1 && colDiff === 0)) {
          cell.appendChild(selectedPiece);
          selectedPiece.classList.remove("selected");
          selectedPiece = null;
        }
      }
    });
  });*/

  /*
  Ficou otimo só preciso embaralhar as peças
  const pieces = document.querySelectorAll(".piece");
  let selectedPiece = null;

  pieces.forEach(piece => {
    piece.addEventListener("click", function(event) {
      event.stopPropagation();
      if (selectedPiece) {
        selectedPiece.classList.remove("selected");
      }
      selectedPiece = piece;
      selectedPiece.classList.add("selected");
    });
  });

  const cells = document.querySelectorAll(".cell");
  cells.forEach(cell => {
    cell.addEventListener("click", function() {
      if (selectedPiece && !cell.querySelector(".piece")) {
        const selectedCell = selectedPiece.parentElement;
        const selectedRow = parseInt(selectedCell.getAttribute("data-row"));
        const selectedCol = parseInt(selectedCell.getAttribute("data-col"));

        const targetRow = parseInt(cell.getAttribute("data-row"));
        const targetCol = parseInt(cell.getAttribute("data-col"));

        const rowDiff = Math.abs(targetRow - selectedRow);
        const colDiff = Math.abs(targetCol - selectedCol);

        if ((rowDiff === 0 && colDiff === 1) || (rowDiff === 1 && colDiff === 0)) {
          selectedPiece.style.transition = "transform 0.3s";
          selectedPiece.style.transform = `translate(${(targetCol - selectedCol) * 100}px, ${(targetRow - selectedRow) * 100}px)`;
          setTimeout(() => {
            cell.appendChild(selectedPiece);
            selectedPiece.classList.remove("selected");
            selectedPiece.style.transition = "none";
            selectedPiece.style.transform = "translate(0, 0)";
            selectedPiece = null;
          }, 300);
        }
      }
    });
  });*/
  const pieces = document.querySelectorAll(".piece");
  let selectedPiece = null;

  pieces.forEach(piece => {
    piece.addEventListener("click", function(event) {
      event.stopPropagation();
      if (selectedPiece) {
        selectedPiece.classList.remove("selected");
      }
      selectedPiece = piece;
      selectedPiece.classList.add("selected");
    });
  });

  const cells = document.querySelectorAll(".cell");
  cells.forEach(cell => {
    cell.addEventListener("click", function() {
      if (selectedPiece && !cell.querySelector(".piece")) {
        const selectedCell = selectedPiece.parentElement;
        const selectedRow = parseInt(selectedCell.getAttribute("data-row"));
        const selectedCol = parseInt(selectedCell.getAttribute("data-col"));

        const targetRow = parseInt(cell.getAttribute("data-row"));
        const targetCol = parseInt(cell.getAttribute("data-col"));

        const rowDiff = Math.abs(targetRow - selectedRow);
        const colDiff = Math.abs(targetCol - selectedCol);

        if ((rowDiff === 0 && colDiff === 1) || (rowDiff === 1 && colDiff === 0)) {
          selectedPiece.style.transition = "transform 0.3s";
          selectedPiece.style.transform = `translate(${(targetCol - selectedCol) * 100}px, ${(targetRow - selectedRow) * 100}px)`;
          setTimeout(() => {
            cell.appendChild(selectedPiece);
            selectedPiece.classList.remove("selected");
            selectedPiece.style.transition = "none";
            selectedPiece.style.transform = "translate(0, 0)";
            selectedPiece = null;
          }, 300);
        }
      }
    });
  });

  function shufflePieces() {
    const shuffledPieces = Array.from(pieces).sort(() => Math.random() - 0.5);
    const cells = document.querySelectorAll(".cell");

    cells.forEach((cell, index) => {
      cell.innerHTML = '';
      cell.appendChild(shuffledPieces[index]);
    });
  }