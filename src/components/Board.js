import React, { useEffect, useState } from "react";
import Square from "./Square";

import styled from "styled-components";

function Board() {
    const [squares, setSquares] = useState([]);


    const [boardNums, setBoardNums] = useState([
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
    ]);


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
        console.log(result)
        return result
    }

    function getRandomInt() {
        return Math.floor(Math.random() * (10 - 1) + 1)
    }

    function checkDone() {
let result = true
        for (let i = 0; i != 9; i++) {
            boardNums[i].find(num=> num ==="") && (result = false)

        }
        return result
    }


    useEffect(() => {

        setBoardNums(board => ([...boardNums, board[getRandomInt()][getRandomInt()] = getRandomInt()]))

        setBoardNums(board => ([...boardNums, board[getRandomInt()][getRandomInt()] = getRandomInt()])) 
        setBoardNums(board => ([...boardNums, board[getRandomInt()][getRandomInt()] = getRandomInt()]))

        setBoardNums(board => ([...boardNums, board[getRandomInt()][getRandomInt()] = getRandomInt()]))   
           setBoardNums(board => ([...boardNums, board[getRandomInt()][getRandomInt()] = getRandomInt()]))

        setBoardNums(board => ([...boardNums, board[getRandomInt()][getRandomInt()] = getRandomInt()])) 

//         while (checkDone()) {
//             x = getRandomInt()
//             y = getRandomInt()
//             z = getRandomInt()

// }

    }, [])



    useEffect(() => {
        setSquares((squares) => (squares = []));

        for (let i = 0; i < 9; i++) {
            setSquares(
                (squares) => (squares = [...squares, <Square boardNums={boardNums[i]} key={i} i={i} />])
            );
        }
    }, []);

    if (squares === []) return null
    console.log("i")
    return <BoardStyle>{squares.map((square) => square)}</BoardStyle>;
}

export default Board;

const BoardStyle = styled.div`
  display: grid;
  border: 3px solid;
  grid-template-columns: repeat(3, 1fr);
  height: fit-content;
  width: fit-content;
`;
