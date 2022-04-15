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
        //   console.log(result, array)
        return result
    }

    function getRandomInt() {
        return Math.floor(Math.random() * (9))
    }


    function getRandomInt2() {
        return Math.floor(Math.random() * (9) + 1)
    }

    function checkDone() {
        let result = true
        for (let i = 0; i != 9; i++) {
            boardNums[i].find(num => num === "") && (result = false)

        }
        return result
    }


    function shuffler(array) {
        let shuffled = array
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)

        return shuffled
    }


    // useEffect(() => {
    //     let numArray = [82,344]
    //     let bDog = [
    //         ["", "", "", "", "", "", "", "", ""],
    //         ["", "", "", "", "", "", "", "", ""],
    //         ["", "", "", "", "", "", "", "", ""],
    //         ["", "", "", "", "", "", "", "", ""],
    //         ["", "", "", "", "", "", "", "", ""],
    //         ["", "", "", "", "", "", "", "", ""],
    //         ["", "", "", "", "", "", "", "", ""],
    //         ["", "", "", "", "", "", "", "", ""],
    //         ["", "", "", "", "", "", "", "", ""],
    //     ]

    //     for (let i = 0; i != 80; i++) {
    //         let y = getRandomInt()
    //         let x = getRandomInt()
    //         let z = getRandomInt2()

    //         console.log(numArray,x,y)
    //         if (numArray.find(num => (num === y * 9 + x))===undefined ) {
    //             bDog[y][x] = z
    //             if (validHandler(bDog)) {
    //                  console.log(y ,x, z, "good",bDog[y][x] )
    //                 numArray.push(y * 9 + x)
    //             } else {
    //                 console.log(y * 9 + x, z, "bad")
    //                 bDog[y][x] = ""
    //                 i--
    //             }

    //         }
    //         else {
    //             i--
    //         }



    //     }


    //     setBoardNums(bDog)

    //     console.log(boardNums, "and Bdog is ", bDog, numArray)
    //     //console.log(boardNums)

    // }, [])






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
        let shuffledArray = shuffler(array)
        let shuffledNums = shuffler(nums)
        let num
        let x
        let y
        let s = 0
        let f = 0
        console.log(array)

        for (let i = 0; i != 81; i++) {
            num = array[i]
            f=f+1
            y = Math.floor(num / 9)
            x = num - (y * 9)
            //    console.log("here we go ", num, x, y, y * 9 + x)

            //   bDog[y][x] = shuffledNums[0]
            for (let e = 0; e != 9; e++) {
                bDog[y][x] = shuffledNums[e]

                if (validHandler(bDog)) {
                
                    break
                }
                //       console.log(i, e)
            }

            if (!validHandler(bDog)) {
                console.log(f,"ya boy ran ")
                i = 0
             
                s=s+1
                bDog = [
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
        setBoardNums(bDog)

        console.log(boardNums, "and Bdog is ", bDog, x,y)



        setSquares((squares) => (squares = []));



        for (let i = 0; i < 9; i++) {
            setSquares(
                (squares) => (squares = [...squares, <Square boardNums={bDog[i]} key={i} i={i} />])
            );
        }

    }, [])

    // useEffect(() => {
    //     setSquares((squares) => (squares = []));



    //     for (let i = 0; i < 9; i++) {
    //         setSquares(
    //             (squares) => (squares = [...squares, <Square boardNums={boardNums[i]} key={i} i={i} />])
    //         );
    //     }
    //     //    console.log("Runnin here ",boardNums)
    // }, [boardNums]);

    // if (boardNums[0][0] === "") return <p>dddddddddddddddddd</p>
    console.log("iddssdsdsdsdsd")

    if (boardNums.filter(num => num === "").length === 9) return <p>Not working</p>
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
