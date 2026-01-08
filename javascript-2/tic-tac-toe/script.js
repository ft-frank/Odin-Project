const gameBoard = (() => {
        const positions = new Array(9)

        const setMark = (index, mark) => {
            positions[index] = mark
        }


        const checkWin = (mark) => {
            won = false


            if (!positions.includes(null)) {
                
            }
            winPos.forEach((combo) => {
                if ( (positions[combo[0]] === positions[combo[1]]) && (positions[combo[0]] === positions[combo[2]]) && (positions[combo[0]] !== undefined)) {
                    won = true
                }   
        
            
            })

            if (won === true) {
                    reset()
                    won = false
                    positions.splice(0, 9)
                    if (mark == "x") {
                        player1_score++;
                        player1score.textContent = player1_score
            }
                    if (mark == "o") {
                        player2_score++
                        player2score.textContent = player2_score

            }
                    


                } 
            
        }




        let player1_score = 0
        let player2_score = 0




        const winPos = [[0,1,2], [0,3,6],[6,7,8],[2,5,8], [0,4,8], [2,4,6], [1,4,7], [3,4,5]]
        return {setMark, checkWin}
    
})


const players = (() =>{

    let i = 0
    const choice = () => {
        if (i % 2 == 0) {
            return "x";
        }
        else {
            return "o";
        }
    }

    const changePlayer = () => i++;

    const getTurn = () => {
        if (i % 2 == 0) {
            return "Player 1 (x)";
        }
        else {
            return "Player 2 (o)";
        }
    }
    


    return {choice, changePlayer, getTurn} 


})

const Player = players()
const Board = gameBoard()
const screenBoard = document.getElementById("screenboard")
const playerBoard = document.getElementById("playerboard")
const player1score = document.getElementById("player1score")
const player2score = document.getElementById("player2score")
playerBoard.textContent = "Turn : Player 1 (x)"



screenBoard.childNodes.forEach(node => {
    if (node.nodeType == Node.ELEMENT_NODE) {
        node.addEventListener("click", () =>
        {if (node.textContent === "")
        {
            node.textContent = Player.choice();
            Board.setMark(parseInt(node.id), Player.choice())
            
            Board.checkWin(Player.choice())
            Player.changePlayer()
            playerBoard.textContent = `Turn : ${Player.getTurn()}`


        }
        }
        )
    }
    

} )

const resetButton = document.getElementById("reset-button")

function reset() {
    screenBoard.childNodes.forEach(node =>  {
        node.textContent = ""
    })
    
}
resetButton.addEventListener('click', () => {
        reset() })


