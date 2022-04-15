import React, { useEffect, useState } from "react";
import Square from "./Square";

import styled from "styled-components";

function Board() {
    const [squares, setSquares] = useState([]);


    const [boardNums, setBoardNums] = useState([
        ["0", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "80"],
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



    function solver(array) {

        let test = array
        let arr = [...Array(81).keys()]
        let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        let shuffledNums = shuffler(nums)

        while (!isComplete(test)) {

          
            for (let i = 0; i != 9; i++) {
                for (let e = 0; e != 9; e++) {
                    if (test[i][e] === "") {
                        for (let f = 0; f != 9; f++) {
                            test[i][e] = shuffledNums[f]
                            if (validHandler(test)) { break }
                        }

                    }
                }


                console.log("in  loop:", test)
            }
        }
        console.log("out  loop:", test)
    }





   console.log(solver(finerBoy))
    
    function isComplete(array) {
        let result = true

        for (let i = 0; i != 9; i++) {
            array[i].filter(num => num === "").length != 0 && (result = false)
        //    console.log(array[i].filter(num => num === "").length, array[i])

        }

        return result
    }




    useEffect(() => {
        let bDog = [
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


        // for (let i = 0; i != 81; i++) {
        //     num = array[i]
        //     f = f + 1
        //     y = Math.floor(num / 9)
        //     x = num - (y * 9)

        //     for (let e = 0; e != 9; e++) {
        //         bDog[y][x] = shuffledNums[e]

        //         if (validHandler(bDog)) { break }
        //     }

        //     if (!validHandler(bDog)) {
        //         s = s + 1
        //         //    console.log("Total I 's:", f, "ya boy failed:  ", s)
        //         i = 0
        //         bDog = [
        //             ["", "", "", "", "", "", "", "", ""],
        //             ["", "", "", "", "", "", "", "", ""],
        //             ["", "", "", "", "", "", "", "", ""],
        //             ["", "", "", "", "", "", "", "", ""],
        //             ["", "", "", "", "", "", "", "", ""],
        //             ["", "", "", "", "", "", "", "", ""],
        //             ["", "", "", "", "", "", "", "", ""],
        //             ["", "", "", "", "", "", "", "", ""],
        //             ["", "", "", "", "", "", "", "", ""],
        //         ]
        //     }
        //     shuffledNums = shuffler(nums)

        // }
        // setBoardNums(bDog)

        // console.log(boardNums, "and Bdog is ", bDog)



        setSquares((squares) => (squares = []));



        for (let i = 0; i < 9; i++) {
            setSquares(
                (squares) => (squares = [...squares, <Square boardNums={bDog[i]} key={i} i={i} />])
            );
        }

    }, [])



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


let fineBoy = [[7, 6, 9, 5, 1, 4, 3, 2, 8],
[2, 8, 4, 6, 7, 3, 9, 1, 5],
[1, 5, 3, 9, 2, 8, 7, 6, 4],
[8, 4, 7, 9, 5, 1, 2, 3, 6],
[3, 9, 6, 4, 2, 7, 8, 5, 1],
[5, 1, 2, 3, 8, 6, 4, 7, 9],
[1, 8, 3, 4, 9, 5, 6, 7, 2],
[7, 4, 2, 1, 6, 8, 5, 3, 9],
[6, 9, 5, 2, 3, 7, 8, 4, 1]]

let finerBoy = [[6, 9, 4, 8, 1, 5, 3, 2, 7],
[3, 7, 8, 6, 2, 4, 5, 1, 9],
[2, 5, 1, 7, 9, 3, 6, 4, 8],
[5, 8, 3, 7, 4, 9, 2, 6, 1],
[4, 6, 2, 8, 3, 1, 9, 5, 7],
[1, 7, 9, 5, 6, 2, 8, 3, 4],
[1, 7, 6, 9, 5, 8, 4, 3, 2],
[2, 9, 3, 1, 4, 6, 7, 8, 5],
[4, 8, 5, 3, 2, 7, 9, 1, 6]]

let testerBoy = [["", "", 4, 8, 1, 5, 3, 2, 7],
[3, 7, 8, 6, 2, 4, 5, 1, 9],
[2, 5, 1, 7, 9, 3, 6, 4, 8],
[5, 8, 3, 7, 4, 9, 2, 6, 1],
[4, 6, 2, 8, 3, 1, 9, 5, 7],
[1, 7, 9, 5, 6, 2, 8, 3, 4],
[1, 7, 6, 9, 5, 8, 4, 3, 2],
[2, 9, 3, 1, 4, 6, 7, 8, 5],
[4, 8, 5, 3, 2, 7, 9, 1, 6]]