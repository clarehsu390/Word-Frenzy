class Board {
  constructor(x) {
    this.board = this.makeBoard(x);
    this.handleClick();
  }

  makeBoard(x) {
    for (let rows=0; rows < x; rows++) {
      for (let columns=0; columns < x; columns++){
        $(".board").append("<div class='square'>A</div>");
      }
    }
  }

  handleClick() {
    let clicking = false;
    $(".square").mousedown(function(){
       clicking = true;
      $(this).toggleClass('highlight');
      return false;
    });

    $(".square").mouseover(function(){
      if (clicking) {
        $(this).toggleClass("highlight");
      }
    });

    $(document).mouseup(function(){
      $(".square").removeClass("highlight");
      clicking = false;
    });
  }

}


module.exports = Board;
