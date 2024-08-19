let boxes = []

let p = 0 ;

let player_boxes_played_1 = []; 
let player_boxes_played_2 = []; 

const win_conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
] 

let to_win_O = 0
let to_win_X = 0



for (let i = 0 ; i <= 8 ; i++ ){
    item = { box :document.getElementsByClassName("box")[i] , played : false};
    boxes.push(item);
}

function restart() {
        p = 0 ;
        player_boxes_played_1 = []
        player_boxes_played_2 = []
        boxes.forEach(function(box,i){
            box.played = false;
        });
        let test1 = document.querySelectorAll(".player1_box")
        console.log(test1)
        for (let i = 0 ; i < test1.length ; i++){
            test1[i].classList.remove("player1_box");
        }
    
        let test2 = document.querySelectorAll(".player2_box")
        console.log(test2)
        for (let i = 0 ; i < test2.length ; i++){
            test2[i].classList.remove("player2_box");
        }
};

document.querySelector("button").addEventListener("click", restart);

let x_points = 0
let o_points = 0

boxes.forEach(function(item, index) {
    item.box.addEventListener("click" , function(e){
        if(item.played === false){
            item.played = true;
            console.log("warkti 3la " + (index + 1));

            if (p === 0){
                player_boxes_played_1.push(index)
                let x = document.createElement("div");
                x.classList.add("player1_box");
                x.classList.remove("player2_box");
                item.box.append(x);
                p = 1;
                for (let k = 0 ; k < win_conditions.length ; k++){
                    to_win_X = 0
                    for (let j = 0 ; j < win_conditions[k].length ; j++){
                        if (player_boxes_played_1.includes(win_conditions[k][j])){
                            to_win_X += 1
                            if (to_win_X === 3){ 
                                console.log("GG")
                                x_points += 1
                                console.log(x_points)
                                document.getElementById("score-points-X").innerHTML = x_points
                                setTimeout(restart,150)
                                break
                            }
                        }
                    }
                }
                
            }

            else if (p === 1){
                player_boxes_played_2.push(index);
                let x = document.createElement("div");
                x.classList.remove("player1_box");
                x.classList.add("player2_box");
                item.box.append(x);
                p = 0;
                for (let k = 0 ; k < win_conditions.length ; k++){
                    to_win_O  = 0
                    for (let j = 0 ; j < win_conditions[k].length ; j++){
                        if (player_boxes_played_2.includes(win_conditions[k][j])){
                            to_win_O += 1
                            if (to_win_O === 3){      
                                console.log("GG")
                                o_points += 1
                                document.getElementById("score-points-O").innerHTML = o_points
                                setTimeout(restart,150)
                                break
                            }
                        }
                    }
                }
            }
        }
        else{
            console.log("ml3oba had " + (index + 1));
        }
    });
});

// win methods 


