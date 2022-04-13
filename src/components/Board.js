import React, { useEffect, useState } from "react";
import Set from "./Set";

import styled from "styled-components";

function Board() {
    const [sets, setSets] = useState([]);

    const [boardNums, setBoardNums] = useState([
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
    ]);

    let x = [
        ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""],
    ];



    function validHandler(array) {
        let num;
        let row1 = [];
        let row2 = [];
        let row3 = [];
        let row4 = [];
        let five = [];
        let six = [];
        let seven = [];
        let eight = [];
        let nine = [];

        for (let i = 0; i != 9; i++) {
            ///checking sets
           // console.log(array[0], i )
           // console.log(hasDuplicates(array[0]))

            for (let e = 0; e != 9; e++) {
                num = i * 9 + e;
                /// to check Rows we want to check every row3
                /// that is 0-2 , 3-5 .6-8 of e  but this repeats row3 times
                /// so if i is 0 -2 then thats row1
                i < 3 ?
                    e < 3 ? (row1 = [...row1, num])
                        : e < 6 ? (row2 = [...row2, num])
                            : (row3 = [...row3, num])
                    : i < 6 ?
                        e < 3 ? (row4 = [...row4, num])
                            : e < 6 ? (five = [...five, num])
                                : (six = [...six, num])
                        :
                        e < 3 ? (seven = [...seven, num])
                            : e < 6 ? (eight = [...eight, num])
                                : (nine = [...nine, num]);
                ///to check columns it's every thrird
                //column 0,3,6 ------- ,1,4,7 , 2,5,8
                // For i it's the same 0,3,6
            }
        }
    }

    function hasDuplicates(array) {
        return new Set(array).size !== array.length;
    }

 

    useEffect(() => {
        setSets((sets) => (sets = []));
  
        for (let i = 0; i < 9; i++) {
            setSets(
                (sets) => (sets = [...sets, <Set data={data[i]} key={i} i={i} />])
            );
        }
    }, []);

    return <BoardStyle>{sets.map((set) => set)}</BoardStyle>;
}

export default Board;

const BoardStyle = styled.div`
  display: grid;
  border: 3px solid;
  grid-template-columns: repeat(3, 1fr);
  height: fit-content;
  width: fit-content;
`;

const data = [
    ["", "", "8", "5", "", "9", "", "", ""],

    ["", "", "", "", "1", "", "", "", "6"],

    ["", "", "", "", "", "7", "", "1", ""],

    ["2", "", "5", "", "8", "", "", "6", ""],

    ["", "", "4", "", "5", "", "", "", ""],

    ["9", "", "", "", "", "", "", "", "2"],

    ["", "", "", "", "2", "", "7", "", "1"],

    ["3", "", "", "", "", "", "", "6", ""],

    ["4", "", "", "", "", "", "", "", "9"],
];
