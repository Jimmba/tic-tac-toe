class TicTacToe {
    constructor() {
        this.currentSymbol="x";
        this.countFreeFields=9;
        this.table=[[null,null,null],[null,null,null],[null,null,null]];
    }

    getCurrentPlayerSymbol() {
        return this.currentSymbol;
    }

    nextTurn(rowIndex, columnIndex) {

        if (!this.isFinished()){
            if (this.table[rowIndex][columnIndex] == null) {
                this.table[rowIndex][columnIndex] = this.currentSymbol;
                this.countFreeFields-=1;
                this.currentSymbol = this.currentSymbol == 'x' ? 'o' : 'x';
              }
        }
        
    }

    isFinished() {
        return !!this.getWinner()||this.noMoreTurns();
    }

    getWinner() {
        let winner=null;
        let sym;
        for (let k=0; k<2; k++){
            sym= k==0?"x":"o";
            for(let i=0; i<3; i++){
                if (this.table[i][0] == sym && this.table[i][1] == sym && this.table[i][2] == sym) {
                    winner = sym;
                }
                if (this.table[0][i] == sym && this.table[1][i] == sym && this.table[2][i] == sym) {
                    winner = sym;
                }
            }
            if ((this.table[0][0] == sym && this.table[1][1] == sym && this.table[2][2] == sym) ||
            (this.table[0][2] == sym && this.table[1][1] == sym && this.table[2][0] == sym)) winner = sym;
        }
      return winner;
    }

    noMoreTurns() {
        return this.countFreeFields==0 ? true:false;
    }

    isDraw() {
        return this.isFinished() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        if(this.table[rowIndex][colIndex]==null){
            return null;
        }else{
            return this.table[rowIndex][colIndex];
        }
    }
}

module.exports = TicTacToe;
