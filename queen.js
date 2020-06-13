let queen={
    position:{
        x:0,
        y:0
    }
};

function move(num,dir){
    let tempx;
    let tempy;
    console.log("Previous Position is -> " + board[queen.position.x][queen.position.y]);
    document.write("Previous Position is -> " + board[queen.position.x][queen.position.y] + ";" + " "); 
    switch(dir){
        case "W": 
            tempy=queen.position.y-num;
            if( (tempy<0 || tempy>=8) ){
                console.log("Queen is out of the board");
                document.write("Queen is out of the board");
            }
            else{
                queen.position.y=tempy;
                console.log("Current Position is -> " + board[queen.position.x][queen.position.y]);
                document.write("Current Position is -> " + board[queen.position.x][queen.position.y]);
            }
        break;

        case "E": 
            tempy=queen.position.y+num;
            if((tempx<0 || tempx>=8) || (tempy<0 || tempy>=8) ){
                 console.log("Queen is out of the board");
                 document.write("Queen is out of the board");
            }
            else{
                queen.position.y=tempy;
                console.log("Current Position is -> " + board[queen.position.x][queen.position.y]);
                document.write("Current Position is -> " + board[queen.position.x][queen.position.y]);
            }
        break;

        case "S": 
            tempx=queen.position.x+num;
            if((tempx<0 || tempx>=8) || (tempy<0 || tempy>=8) ){
                console.log("Queen is out of the board");
                document.write("Queen is out of the board");
            }
            else{
                queen.position.x=tempx;
                console.log("Current Position is -> " + board[queen.position.x][queen.position.y]);
                document.write("Current Position is -> " + board[queen.position.x][queen.position.y]);
            }
        break;

        case "N": 
            tempx=queen.position.x-num;
            if((tempx<0 || tempx>=8) || (tempy<0 || tempy>=8) ){
               console.log("Queen is out of the board");
               document.write("Queen is out of the board");
            }
            else{
                queen.position.x=tempx;
                console.log("Current Position is -> " + board[queen.position.x][queen.position.y]);
                document.write("Current Position is -> " + board[queen.position.x][queen.position.y]);
            }
        break;
        case "SW" : 
            tempx=queen.position.x+num;
            tempy=queen.position.y-num;
            if((tempx<0 || tempx>=8) || (tempy<0 || tempy>=8) ){
                console.log("Queen is out of the board");
                document.write("Queen is out of the board");
            }
            else{
                queen.position.y=tempy;
                queen.position.x=tempx;
                console.log("Current Position is -> " + board[queen.position.x][queen.position.y]);
                document.write("Current Position is -> " + board[queen.position.x][queen.position.y]);
            }
        break;
        
        case "NW" : 
            tempx=queen.position.x-num;
            tempy=queen.position.y-num;
            if((tempx<0 || tempx>=8) || (tempy<0 || tempy>=8) ){
                console.log("Queen is out of the board");
                document.write("Queen is out of the board");
            }
            else{
                queen.position.y=tempy;
                queen.position.x=tempx;
                console.log("Current Position is -> " + board[queen.position.x][queen.position.y]);
                document.write("Current Position is -> " + board[queen.position.x][queen.position.y]);
            }
        break;
        
        case "SE" :
            tempx=queen.position.x+num;
            tempy=queen.position.y+num;
            if((tempx<0 || tempx>=8) || (tempy<0 || tempy>=8) ){
                console.log("Queen is out of the board");
                document.write("Queen is out of the board");
            }
            else{
                queen.position.y=tempy;
                queen.position.x=tempx;
                console.log("Current Position is -> " + board[queen.position.x][queen.position.y]);
                document.write("Current Position is -> " + board[queen.position.x][queen.position.y]);
            }
        break;
        
        case "NE" : 
            tempx=queen.position.x-num;
            tempy=queen.position.y+num;
            if((tempx<0 || tempx>=8) || (tempy<0 || tempy>=8) ){
                console.log("Queen is out of the board");
                document.write("Queen is out of the board");
            }
            else{
                queen.position.y=tempy;
                queen.position.x=tempx;
                console.log("Current Position is -> " + board[queen.position.x][queen.position.y]);
                document.write("Current Position is -> " + board[queen.position.x][queen.position.y]);
            }
        break;

        default : document.write("Invalid Input");
    }

}

function go(){
    let inp = document.getElementById("n").value;
    let num = Number(inp.slice(inp.length - 1));
    let dir = inp.slice(0, inp.length - 1);
    move(num,dir);
}

var board=[["a8","b8","c8","d8","e8","f8","g8","h8"],
["a7","b7","c7","d7","e7","f7","g7","h7"],
["a6","b6","c6","d6","e6","f6","g6","h6"],
["a5","b5","c5","d5","e5","f5","g5","h5"],
["a4","b4","c4","d4","e4","f4","g4","h4"],
["a3","b3","c3","d3","e3","f3","g3","h3"],
["a2","b2","c2","d2","e2","f2","g2","h2"],
["a1","b1","c1","d1","e1","f1","g1","h1"]];
