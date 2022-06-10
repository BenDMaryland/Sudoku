import React, { useEffect, useState } from "react";
import Square from "./Square";
import styled from "styled-components";

//Easiest way to understand this is to follow the useEffect at the bottom of the page :)

function Board() {
    // Here we keep the board -- this gets passed down as props to the squares component and then to the cells component
    const [squares, setSquares] = useState([]);
    const [showTheSolutions, setshowTheSolutions] = useState(false)
    const [activeNumber, setactiveNumber] = useState({})

    // these are just used for validating the WinCon 
    const [currentBoard, setcurrentBoard] = useState([[], [], [], [], [], [], [], [], []])
    const [FinalBoard, setFinalBoard] = useState([[], [], [], [], [], [], [], [], []])

    function validHandler(array) {

        let row1 = [];
        let row2 = [];
        let row3 = [];
        let row4 = [];
        let row5 = [];
        let row6 = [];
        let row7 = [];
        let row8 = [];
        let row9 = [];

        let col1 = [];
        let col2 = [];
        let col3 = [];
        let col4 = [];
        let col5 = [];
        let col6 = [];
        let col7 = [];
        let col8 = [];
        let col9 = [];

        let result = true



        for (let i = 0; i != 9; i++) {

            ///checking squares
            // console.log(array[0], i)
            hasDuplicates(array[i]) && (result = false)

            for (let e = 0; e != 9; e++) {

                /// to check Rows we want to check every row3
                i < 3 ?
                    e < 3 ? (row1 = [...row1, array[i][e]])
                        : e < 6 ? (row2 = [...row2, array[i][e]])
                            : (row3 = [...row3, array[i][e]])
                    : i < 6 ?
                        e < 3 ? (row4 = [...row4, array[i][e]])
                            : e < 6 ? (row5 = [...row5, array[i][e]])
                                : (row6 = [...row6, array[i][e]])
                        :
                        e < 3 ? (row7 = [...row7, array[i][e]])
                            : e < 6 ? (row8 = [...row8, array[i][e]])
                                : (row9 = [...row9, array[i][e]]);

                ///to check columns it's every thrird
                i % 3 === 0 ?
                    e % 3 === 0 ? (col1 = [...col1, array[i][e]])
                        : e % 3 === 1 ? (col2 = [...col2, array[i][e]])
                            : (col3 = [...col3, array[i][e]])
                    : i % 3 === 1 ?
                        e % 3 === 0 ? (col4 = [...col4, array[i][e]])
                            : e % 3 === 1 ? (col5 = [...col5, array[i][e]])
                                : (col6 = [...col6, array[i][e]])
                        :
                        e % 3 === 0 ? (col7 = [...col7, array[i][e]])
                            : e % 3 === 1 ? (col8 = [...col8, array[i][e]])
                                : (col9 = [...col9, array[i][e]]);

            }

        }

        hasDuplicates(col1) && (result = false)
        hasDuplicates(col2) && (result = false)
        hasDuplicates(col3) && (result = false)
        hasDuplicates(col4) && (result = false)
        hasDuplicates(col5) && (result = false)
        hasDuplicates(col6) && (result = false)
        hasDuplicates(col7) && (result = false)
        hasDuplicates(col8) && (result = false)
        hasDuplicates(col9) && (result = false)

        hasDuplicates(row1) && (result = false)
        hasDuplicates(row2) && (result = false)
        hasDuplicates(row3) && (result = false)
        hasDuplicates(row4) && (result = false)
        hasDuplicates(row5) && (result = false)
        hasDuplicates(row6) && (result = false)
        hasDuplicates(row7) && (result = false)
        hasDuplicates(row8) && (result = false)
        hasDuplicates(row9) && (result = false)





        function hasDuplicates(array) {
            array = array.filter(string => string != "")
            return new Set(array).size !== array.length;
        }
        //   console.log(result, array)
        return result
    }

    function shuffler(array) {
        let shuffled = array
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)

        return shuffled
    }

    function arrayMaker(arrays) {
        let row1 = [];
        let row2 = [];
        let row3 = [];
        let row4 = [];
        let row5 = [];
        let row6 = [];
        let row7 = [];
        let row8 = [];
        let row9 = [];

        let col1 = [];
        let col2 = [];
        let col3 = [];
        let col4 = [];
        let col5 = [];
        let col6 = [];
        let col7 = [];
        let col8 = [];
        let col9 = [];


        for (let i = 0; i != 9; i++) {

            // ///checking squares
            // // console.log(array[0], i)


            for (let e = 0; e != 9; e++) {

                /// to check Rows we want to check every row3
                i < 3 ?
                    e < 3 ? (row1 = [...row1, arrays[i][e]])
                        : e < 6 ? (row2 = [...row2, arrays[i][e]])
                            : (row3 = [...row3, arrays[i][e]])
                    : i < 6 ?
                        e < 3 ? (row4 = [...row4, arrays[i][e]])
                            : e < 6 ? (row5 = [...row5, arrays[i][e]])
                                : (row6 = [...row6, arrays[i][e]])
                        :
                        e < 3 ? (row7 = [...row7, arrays[i][e]])
                            : e < 6 ? (row8 = [...row8, arrays[i][e]])
                                : (row9 = [...row9, arrays[i][e]]);

                ///to check columns it's every thrird
                i % 3 === 0 ?
                    e % 3 === 0 ? (col1 = [...col1, arrays[i][e]])
                        : e % 3 === 1 ? (col2 = [...col2, arrays[i][e]])
                            : (col3 = [...col3, arrays[i][e]])
                    : i % 3 === 1 ?
                        e % 3 === 0 ? (col4 = [...col4, arrays[i][e]])
                            : e % 3 === 1 ? (col5 = [...col5, arrays[i][e]])
                                : (col6 = [...col6, arrays[i][e]])
                        :
                        e % 3 === 0 ? (col7 = [...col7, arrays[i][e]])
                            : e % 3 === 1 ? (col8 = [...col8, arrays[i][e]])
                                : (col9 = [...col9, arrays[i][e]]);

            }

        }

        let rows = [row1, row2, row3, row4, row5, row6, row7, row8, row9]
        let columns = [col1, col2, col3, col4, col5, col6, col7, col8, col9]
        return [arrays, rows, columns]
    }

    function humanSolvable(board, position) {
        let isSolvable

        const key = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        let testBoard = structuredClone(board)
        let squareY = Math.floor(position / 9)
        let squareX = position - (squareY * 9)
        testBoard[squareY][squareX] = ""


        let squares = arrayMaker(testBoard)[0]
        let rows = arrayMaker(testBoard)[1]
        let columns = arrayMaker(testBoard)[2]



        let row
        let column
        let possibleNumbers = key

        squareY < 3 ?
            squareX < 3 ? row = 0
                : squareX < 6 ? row = 1
                    : row = 2
            : squareY < 6 ?
                squareX < 3 ? row = 3
                    : squareX < 6 ? row = 4
                        : row = 5
                :
                squareX < 3 ? row = 6
                    : squareX < 6 ? row = 7
                        : row = 8


        squareY % 3 === 0 ?
            squareX % 3 === 0 ? column = 0
                : squareX % 3 === 1 ? column = 1
                    : column = 2
            : squareY % 3 === 1 ?
                squareX % 3 === 0 ? column = 3
                    : squareX % 3 === 1 ? column = 4
                        : column = 5
                :
                squareX % 3 === 0 ? column = 6
                    : squareX % 3 === 1 ? column = 7
                        : column = 8


        squares[squareY].filter(num => {
            if (num === "") { return (possibleNumbers) }
            possibleNumbers = possibleNumbers.filter(possibleNumber => possibleNumber != num)
        })

        rows[row].filter(num => {
            if (num === "") { return (possibleNumbers) }
            possibleNumbers = possibleNumbers.filter(possibleNumber => possibleNumber != num)
        })


        columns[column].filter(num => {
            if (num === "") { return (possibleNumbers) }
            possibleNumbers = possibleNumbers.filter(possibleNumber => possibleNumber != num)
        })
        possibleNumbers.length === 1 ? isSolvable = true : isSolvable = false

        return isSolvable
    }

    function boardSubtractor(board) {
        console.log("I started running now")
        let array = [...Array(81).keys()]
        let shuffledArray = shuffler(array)
        shuffledArray.forEach(element => {

            let squareY = Math.floor(element / 9)
            let squareX = element - (squareY * 9)
            if (humanSolvable(board, element)) {
                board[squareY][squareX] = ""
            }
        });

        return board
    }

    function boardMaker() {

        let boardSolution = [
            ["", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", ""],
        ]
        let array = [...Array(81).keys()]
        let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        let shuffledNums = shuffler(nums)
        let num
        let x
        let y
        let f = 0
        let s = 0

        for (let i = 0; i != 81; i++) {
            num = array[i]
            f++
            y = Math.floor(num / 9)
            x = num - (y * 9)

            for (let e = 0; e != 9; e++) {
                boardSolution[y][x] = shuffledNums[e]

                if (validHandler(boardSolution)) {

                    break
                }
            }
            if (!validHandler(boardSolution)) {
                s++
                //    console.log("Total I 's:", f, "ya boy failed:  ", s, boardSolution)
                i = -1
                boardSolution = [
                    ["", "", "", "", "", "", "", "", ""],
                    ["", "", "", "", "", "", "", "", ""],
                    ["", "", "", "", "", "", "", "", ""],
                    ["", "", "", "", "", "", "", "", ""],
                    ["", "", "", "", "", "", "", "", ""],
                    ["", "", "", "", "", "", "", "", ""],
                    ["", "", "", "", "", "", "", "", ""],
                    ["", "", "", "", "", "", "", "", ""],
                    ["", "", "", "", "", "", "", "", ""],
                ]
            }
            shuffledNums = shuffler(nums)
        }
        return boardSolution
    }

    function showSolution() {
        setshowTheSolutions(showthSolution => !showthSolution)

    }

    function NumberHighlighter(e, number) {
        e.target.select()
        let Y = Math.floor(number / 9)
        let X = number - (Y * 9)


        console.log(e)

        if (FinalBoard[Y][X] == e.target.value) {



            setactiveNumber({
                active: e.target.value,
                number: number
            })




            let squareY = Math.floor(number / 9)
            let squareX = number - (squareY * 9)
            let row
            let column

            squareY < 3 ?
                squareX < 3 ? row = 0
                    : squareX < 6 ? row = 1
                        : row = 2
                : squareY < 6 ?
                    squareX < 3 ? row = 3
                        : squareX < 6 ? row = 4
                            : row = 5
                    :
                    squareX < 3 ? row = 6
                        : squareX < 6 ? row = 7
                            : row = 8


            squareY % 3 === 0 ?
                squareX % 3 === 0 ? column = 0
                    : squareX % 3 === 1 ? column = 1
                        : column = 2
                : squareY % 3 === 1 ?
                    squareX % 3 === 0 ? column = 3
                        : squareX % 3 === 1 ? column = 4
                            : column = 5
                    :
                    squareX % 3 === 0 ? column = 6
                        : squareX % 3 === 1 ? column = 7
                            : column = 8

            console.log(squareY)
            setactiveNumber({
                active: e.target.value,
                square: squareY,
                number: number,
                column: column,
                row: row
            })
        }

    }

    function winHandler(e, number) {
        NumberHighlighter(e, number)
        let squareY = Math.floor(number / 9)
        let squareX = number - (squareY * 9)
        let newBoard = [...currentBoard]
        let gameOver = false

        newBoard[squareY][squareX] = parseInt(e.target.value)
        setcurrentBoard(newBoard)



        for (let i = 0; i < 80; i++) {
            if (newBoard.flat()[i] != FinalBoard.flat()[i]) { gameOver = true }
        }
        if (!gameOver) alert("you won!")

    }

    useEffect(() => {
        // resets squares on reload ---- this helps to prevent a bug the causes multiple boards to appear 
        setSquares([])
        //  step one is to make a fully valid board that is finished  
        let solutionBoard = boardMaker()
        let finalBoard = structuredClone(solutionBoard)
        // this removes numbers in a way that is human solvable 
        boardSubtractor(finalBoard)

        //these are just for validating the WinCon :) 
        setcurrentBoard(finalBoard)
        setFinalBoard(solutionBoard)

        for (let i = 0; i < 9; i++) {
            setSquares(
                (squares) => (squares = [...squares,
                {
                    solution: solutionBoard[i],
                    boardNums: finalBoard[i],
                    key: i,
                    i: i
                }
                ])
            );
        }
    }, [])

    useEffect(() => {

    }, [FinalBoard, currentBoard])





    return (
        <>
            <h2>Sudoku</h2>

            <button onClick={() => showSolution()}>Show solutions</button>

            <BoardStyle  >{squares.map((square) =>
                <Square
                    solution={square.solution}
                    boardNums={square.boardNums}
                    i={square.i}
                    key={square.key}
                    winHandler={winHandler}
                    activeNumber={activeNumber}
                    showSolution={showTheSolutions}
                    NumberHighlighter={NumberHighlighter} />)}</BoardStyle>


            <p>Welcome to my sudoku game!  How does it work?
                <ul>
                    <li>A board is created.  This is done by starting with an empty board, we then add a random number and check if it is valid.</li>
                    <li>Once a board is created we then work on taking away numbers in a way that is human solvable. ATM this ends up being easy boards but I am working on a way for hard boards to exist to </li>
                    <li>Next the board is rendered, and we have event handlers to check if a solution entered is valid</li>
                </ul>
                This game still has a lot to add, such as a hard mode, styling, cleaning up code.
                Thank you for giving it a try!
            </p>
        </>
    )
}

export default Board;

const BoardStyle = styled.div`
  display: grid;
  border: 3px solid;
  grid-template-columns: repeat(3, 1fr);
  height: fit-content;
  width: fit-content;
`;

let finerBoyFull = [[6, 9, 4, 8, 1, 5, 3, 2, 7],
[3, 7, 8, 6, 2, 4, 5, 1, 9],
[2, 5, 1, 7, 9, 3, 6, 4, 8],
[5, 8, 3, 7, 4, 9, 2, 6, 1],
[4, 6, 2, 8, 3, 1, 9, 5, 7],
[1, 7, 9, 5, 6, 2, 8, 3, 4],
[1, 7, 6, 9, 5, 8, 4, 3, 2],
[2, 9, 3, 1, 4, 6, 7, 8, 5],
[4, 8, 5, 3, 2, 7, 9, 1, 6]]

