import React, { useState } from 'react';

function Game() {
	// const [clicked, setClicked] = useState('');

	function randomNum() {
		return Math.floor(Math.random() * 4);
	}
	const [gameObj0, setGameObj0] = useState(randomNum);
	const [gameObj1, setGameobj1] = useState(randomNum);
	const [gameObj2, setGameobj2] = useState(randomNum);
	const [gameObj3, setGameobj3] = useState(randomNum);
	const [gameObj4, setGameobj4] = useState(randomNum);
	const [gameObj5, setGameobj5] = useState(randomNum);
	const [gameObj6, setGameobj6] = useState(randomNum);
	const [gameObj7, setGameobj7] = useState(randomNum);
	const [gameObj8, setGameobj8] = useState(randomNum);
	const [gameObj9, setGameobj9] = useState(randomNum);
	const [gameObj10, setGameobj10] = useState(randomNum);
	const [gameObj11, setGameobj11] = useState(randomNum);
	const [gameObj12, setGameobj12] = useState(randomNum);
	const [gameObj13, setGameobj13] = useState(randomNum);
	const [gameObj14, setGameobj14] = useState(randomNum);
	const [gameObj15, setGameobj15] = useState(randomNum);
	const [gameObj16, setGameobj16] = useState(randomNum);
	const [gameObj17, setGameobj17] = useState(randomNum);
	const [gameObj18, setGameobj18] = useState(randomNum);
	const [gameObj19, setGameobj19] = useState(randomNum);
	const [gameObj20, setGameobj20] = useState(randomNum);
	const [gameObj21, setGameobj21] = useState(randomNum);
	const [gameObj22, setGameobj22] = useState(randomNum);
	const [gameObj23, setGameobj23] = useState(randomNum);
	const [gameObj24, setGameobj24] = useState(randomNum);

	const [winPercentage, setWinPercentage] = useState(0);

	let winState = [
		0, 1, 2, 3, 0, 1, 1, 1, 3, 2, 1, 2, 2, 2, 1, 0, 3, 1, 3, 0, 1, 2, 1, 3, 2,
	];

	let gameArray = [
		gameObj0,
		gameObj1,
		gameObj2,
		gameObj3,
		gameObj4,
		gameObj5,
		gameObj6,
		gameObj7,
		gameObj8,
		gameObj9,
		gameObj10,
		gameObj11,
		gameObj12,
		gameObj13,
		gameObj14,
		gameObj15,
		gameObj16,
		gameObj17,
		gameObj18,
		gameObj19,
		gameObj20,
		gameObj21,
		gameObj22,
		gameObj23,
		gameObj24,
	];

	function checkWinPercentage() {
		let per = 0;
		for (let i = 0; i < gameArray.length; i++) {
			if (gameArray[i] === winState[i]) {
				per++;
			}
		}
		setWinPercentage((per / 25) * 100);
	}

	function handleClick0() {
		switch (gameArray[0]) {
			case 0:
				setGameObj0(gameObj0 + 1);
				break;
			case 1:
				setGameObj0(gameObj0 + 1);
				break;
			case 2:
				setGameObj0(gameObj0 + 1);
				break;
			case 3:
				setGameObj0(0);
				break;
		}
	}

	function handleClick1() {
		switch (gameArray[1]) {
			case 0:
				setGameobj1(gameObj1 + 1);
				break;
			case 1:
				setGameobj1(gameObj1 + 1);
				break;
			case 2:
				setGameobj1(gameObj1 + 1);
				break;
			case 3:
				setGameobj1(0);
				break;
		}
	}

	function handleClick2() {
		switch (gameArray[2]) {
			case 0:
				setGameobj2(gameObj2 + 1);
				break;
			case 1:
				setGameobj2(gameObj2 + 1);
				break;
			case 2:
				setGameobj2(gameObj2 + 1);
				break;
			case 3:
				setGameobj2(0);
				break;
		}
	}

	function handleClick3() {
		switch (gameArray[3]) {
			case 0:
				setGameobj3(gameObj3 + 1);
				break;
			case 1:
				setGameobj3(gameObj3 + 1);
				break;
			case 2:
				setGameobj3(gameObj3 + 1);
				break;
			case 3:
				setGameobj3(0);
				break;
		}
	}

	function handleClick4() {
		switch (gameArray[4]) {
			case 0:
				setGameobj4(gameObj4 + 1);
				break;
			case 1:
				setGameobj4(gameObj4 + 1);
				break;
			case 2:
				setGameobj4(gameObj4 + 1);
				break;
			case 3:
				setGameobj4(0);
				break;
		}
	}

	function handleClick5() {
		switch (gameArray[5]) {
			case 0:
				setGameobj5(gameObj5 + 1);
				break;
			case 1:
				setGameobj5(gameObj5 + 1);
				break;
			case 2:
				setGameobj5(gameObj5 + 1);
				break;
			case 3:
				setGameobj5(0);
				break;
		}
	}

	function handleClick6() {
		switch (gameArray[6]) {
			case 0:
				setGameobj6(gameObj6 + 1);
				break;
			case 1:
				setGameobj6(gameObj6 + 1);
				break;
			case 2:
				setGameobj6(gameObj6 + 1);
				break;
			case 3:
				setGameobj6(0);
				break;
		}
	}

	function handleClick7() {
		switch (gameArray[7]) {
			case 0:
				setGameobj7(gameObj7 + 1);
				break;
			case 1:
				setGameobj7(gameObj7 + 1);
				break;
			case 2:
				setGameobj7(gameObj7 + 1);
				break;
			case 3:
				setGameobj7(0);
				break;
		}
	}

	function handleClick8() {
		switch (gameArray[8]) {
			case 0:
				setGameobj8(gameObj8 + 1);
				break;
			case 1:
				setGameobj8(gameObj8 + 1);
				break;
			case 2:
				setGameobj8(gameObj8 + 1);
				break;
			case 3:
				setGameobj8(0);
				break;
		}
	}

	function handleClick9() {
		switch (gameArray[9]) {
			case 0:
				setGameobj9(gameObj9 + 1);
				break;
			case 1:
				setGameobj9(gameObj9 + 1);
				break;
			case 2:
				setGameobj9(gameObj9 + 1);
				break;
			case 3:
				setGameobj9(0);
				break;
		}
	}

	function handleClick10() {
		switch (gameArray[10]) {
			case 0:
				setGameobj10(gameObj10 + 1);
				break;
			case 1:
				setGameobj10(gameObj10 + 1);
				break;
			case 2:
				setGameobj10(gameObj10 + 1);
				break;
			case 3:
				setGameobj10(0);
				break;
		}
	}

	function handleClick11() {
		switch (gameArray[11]) {
			case 0:
				setGameobj11(gameObj11 + 1);
				break;
			case 1:
				setGameobj11(gameObj11 + 1);
				break;
			case 2:
				setGameobj11(gameObj11 + 1);
				break;
			case 3:
				setGameobj11(0);
				break;
		}
	}

	function handleClick12() {
		switch (gameArray[12]) {
			case 0:
				setGameobj12(gameObj12 + 1);
				break;
			case 1:
				setGameobj12(gameObj12 + 1);
				break;
			case 2:
				setGameobj12(gameObj12 + 1);
				break;
			case 3:
				setGameobj12(0);
				break;
		}
	}

	function handleClick13() {
		switch (gameArray[13]) {
			case 0:
				setGameobj13(gameObj13 + 1);
				break;
			case 1:
				setGameobj13(gameObj13 + 1);
				break;
			case 2:
				setGameobj13(gameObj13 + 1);
				break;
			case 3:
				setGameobj13(0);
				break;
		}
	}

	function handleClick14() {
		switch (gameArray[14]) {
			case 0:
				setGameobj14(gameObj14 + 1);
				break;
			case 1:
				setGameobj14(gameObj14 + 1);
				break;
			case 2:
				setGameobj14(gameObj14 + 1);
				break;
			case 3:
				setGameobj14(0);
				break;
		}
	}

	function handleClick15() {
		switch (gameArray[15]) {
			case 0:
				setGameobj15(gameObj15 + 1);
				break;
			case 1:
				setGameobj15(gameObj15 + 1);
				break;
			case 2:
				setGameobj15(gameObj15 + 1);
				break;
			case 3:
				setGameobj15(0);
				break;
		}
	}

	function handleClick16() {
		switch (gameArray[16]) {
			case 0:
				setGameobj16(gameObj16 + 1);
				break;
			case 1:
				setGameobj16(gameObj16 + 1);
				break;
			case 2:
				setGameobj16(gameObj16 + 1);
				break;
			case 3:
				setGameobj16(0);
				break;
		}
	}

	function handleClick17() {
		switch (gameArray[17]) {
			case 0:
				setGameobj17(gameObj17 + 1);
				break;
			case 1:
				setGameobj17(gameObj17 + 1);
				break;
			case 2:
				setGameobj17(gameObj17 + 1);
				break;
			case 3:
				setGameobj17(0);
				break;
		}
	}

	function handleClick18() {
		switch (gameArray[18]) {
			case 0:
				setGameobj18(gameObj18 + 1);
				break;
			case 1:
				setGameobj18(gameObj18 + 1);
				break;
			case 2:
				setGameobj18(gameObj18 + 1);
				break;
			case 3:
				setGameobj18(0);
				break;
		}
	}

	function handleClick19() {
		switch (gameArray[19]) {
			case 0:
				setGameobj19(gameObj19 + 1);
				break;
			case 1:
				setGameobj19(gameObj19 + 1);
				break;
			case 2:
				setGameobj19(gameObj19 + 1);
				break;
			case 3:
				setGameobj19(0);
				break;
		}
	}

	function handleClick20() {
		switch (gameArray[20]) {
			case 0:
				setGameobj20(gameObj20 + 1);
				break;
			case 1:
				setGameobj20(gameObj20 + 1);
				break;
			case 2:
				setGameobj20(gameObj20 + 1);
				break;
			case 3:
				setGameobj20(0);
				break;
		}
	}

	function handleClick21() {
		switch (gameArray[21]) {
			case 0:
				setGameobj21(gameObj21 + 1);
				break;
			case 1:
				setGameobj21(gameObj21 + 1);
				break;
			case 2:
				setGameobj21(gameObj21 + 1);
				break;
			case 3:
				setGameobj21(0);
				break;
		}
	}

	function handleClick22() {
		switch (gameArray[22]) {
			case 0:
				setGameobj22(gameObj22 + 1);
				break;
			case 1:
				setGameobj22(gameObj22 + 1);
				break;
			case 2:
				setGameobj22(gameObj22 + 1);
				break;
			case 3:
				setGameobj22(0);
				break;
		}
	}

	function handleClick23() {
		switch (gameArray[23]) {
			case 0:
				setGameobj23(gameObj23 + 1);
				break;
			case 1:
				setGameobj23(gameObj23 + 1);
				break;
			case 2:
				setGameobj23(gameObj23 + 1);
				break;
			case 3:
				setGameobj23(0);
				break;
		}
	}

	function handleClick24() {
		switch (gameArray[24]) {
			case 0:
				setGameobj24(gameObj24 + 1);
				break;
			case 1:
				setGameobj24(gameObj24 + 1);
				break;
			case 2:
				setGameobj24(gameObj24 + 1);
				break;
			case 3:
				setGameobj24(0);
				break;
		}
	}

	return (
		<>
			<button onClick={checkWinPercentage}>Check Win Percentage</button>
			<p>{winPercentage}</p>
			<div className='container'>
				{gameArray[0] == 0 && (
					<div
						id='a0'
						className='game-item0 game-item'
						onClick={handleClick0}
					></div>
				)}
				{gameArray[0] == 1 && (
					<div
						id='a1'
						className='game-item1 game-item'
						onClick={handleClick0}
					></div>
				)}
				{gameArray[0] == 2 && (
					<div
						id='a2'
						className='game-item2 game-item'
						onClick={handleClick0}
					></div>
				)}
				{gameArray[0] == 3 && (
					<div
						id='a3'
						className='game-item3 game-item'
						onClick={handleClick0}
					></div>
				)}

				{gameArray[1] == 0 && (
					<div
						id='b0'
						className='game-item0 game-item'
						onClick={handleClick1}
					></div>
				)}
				{gameArray[1] == 1 && (
					<div
						id='b1'
						className='game-item1 game-item'
						onClick={handleClick1}
					></div>
				)}
				{gameArray[1] == 2 && (
					<div
						id='b2'
						className='game-item2 game-item'
						onClick={handleClick1}
					></div>
				)}
				{gameArray[1] == 3 && (
					<div
						id='b3'
						className='game-item3 game-item'
						onClick={handleClick1}
					></div>
				)}

				{gameArray[2] == 0 && (
					<div
						id='c0'
						className='game-item0 game-item'
						onClick={handleClick2}
					></div>
				)}
				{gameArray[2] == 1 && (
					<div
						id='c1'
						className='game-item1 game-item'
						onClick={handleClick2}
					></div>
				)}

				{gameArray[2] == 2 && (
					<div
						id='c2'
						className='game-item2 game-item'
						onClick={handleClick2}
					></div>
				)}
				{gameArray[2] == 3 && (
					<div
						id='c3'
						className='game-item3 game-item'
						onClick={handleClick2}
					></div>
				)}

				{gameArray[3] == 0 && (
					<div
						id='d0'
						className='game-item0 game-item'
						onClick={handleClick3}
					></div>
				)}
				{gameArray[3] == 1 && (
					<div
						id='d1'
						className='game-item1 game-item'
						onClick={handleClick3}
					></div>
				)}

				{gameArray[3] == 2 && (
					<div
						id='d2'
						className='game-item2 game-item'
						onClick={handleClick3}
					></div>
				)}
				{gameArray[3] == 3 && (
					<div
						id='d3'
						className='game-item3 game-item'
						onClick={handleClick3}
					></div>
				)}

				{gameArray[4] == 0 && (
					<div
						id='e0'
						className='game-item0 game-item'
						onClick={handleClick4}
					></div>
				)}
				{gameArray[4] == 1 && (
					<div
						id='e1'
						className='game-item1 game-item'
						onClick={handleClick4}
					></div>
				)}

				{gameArray[4] == 2 && (
					<div
						id='e2'
						className='game-item2 game-item'
						onClick={handleClick4}
					></div>
				)}
				{gameArray[4] == 3 && (
					<div
						id='e3'
						className='game-item3 game-item'
						onClick={handleClick4}
					></div>
				)}

				{gameArray[5] == 0 && (
					<div
						id='f0'
						className='game-item0 game-item'
						onClick={handleClick5}
					></div>
				)}
				{gameArray[5] == 1 && (
					<div
						id='f1'
						className='game-item1 game-item'
						onClick={handleClick5}
					></div>
				)}

				{gameArray[5] == 2 && (
					<div
						id='f2'
						className='game-item2 game-item'
						onClick={handleClick5}
					></div>
				)}
				{gameArray[5] == 3 && (
					<div
						id='f3'
						className='game-item3 game-item'
						onClick={handleClick5}
					></div>
				)}

				{gameArray[6] == 0 && (
					<div
						id='g0'
						className='game-item0 game-item'
						onClick={handleClick6}
					></div>
				)}
				{gameArray[6] == 1 && (
					<div
						id='g1'
						className='game-item1 game-item'
						onClick={handleClick6}
					></div>
				)}

				{gameArray[6] == 2 && (
					<div
						id='g2'
						className='game-item2 game-item'
						onClick={handleClick6}
					></div>
				)}
				{gameArray[6] == 3 && (
					<div
						id='g3'
						className='game-item3 game-item'
						onClick={handleClick6}
					></div>
				)}

				{gameArray[7] == 0 && (
					<div
						id='h0'
						className='game-item0 game-item'
						onClick={handleClick7}
					></div>
				)}
				{gameArray[7] == 1 && (
					<div
						id='h1'
						className='game-item1 game-item'
						onClick={handleClick7}
					></div>
				)}

				{gameArray[7] == 2 && (
					<div
						id='h2'
						className='game-item2 game-item'
						onClick={handleClick7}
					></div>
				)}
				{gameArray[7] == 3 && (
					<div
						id='h3'
						className='game-item3 game-item'
						onClick={handleClick7}
					></div>
				)}

				{gameArray[8] == 0 && (
					<div
						id='i0'
						className='game-item0 game-item'
						onClick={handleClick8}
					></div>
				)}
				{gameArray[8] == 1 && (
					<div
						id='i1'
						className='game-item1 game-item'
						onClick={handleClick8}
					></div>
				)}

				{gameArray[8] == 2 && (
					<div
						id='i2'
						className='game-item2 game-item'
						onClick={handleClick8}
					></div>
				)}
				{gameArray[8] == 3 && (
					<div
						id='i3'
						className='game-item3 game-item'
						onClick={handleClick8}
					></div>
				)}

				{gameArray[9] == 0 && (
					<div
						id='j0'
						className='game-item0 game-item'
						onClick={handleClick9}
					></div>
				)}
				{gameArray[9] == 1 && (
					<div
						id='j1'
						className='game-item1 game-item'
						onClick={handleClick9}
					></div>
				)}

				{gameArray[9] == 2 && (
					<div
						id='j2'
						className='game-item2 game-item'
						onClick={handleClick9}
					></div>
				)}
				{gameArray[9] == 3 && (
					<div
						id='j3'
						className='game-item3 game-item'
						onClick={handleClick9}
					></div>
				)}

				{gameArray[10] == 0 && (
					<div
						id='k0'
						className='game-item0 game-item'
						onClick={handleClick10}
					></div>
				)}
				{gameArray[10] == 1 && (
					<div
						id='k1'
						className='game-item1 game-item'
						onClick={handleClick10}
					></div>
				)}

				{gameArray[10] == 2 && (
					<div
						id='k2'
						className='game-item2 game-item'
						onClick={handleClick10}
					></div>
				)}
				{gameArray[10] == 3 && (
					<div
						id='k3'
						className='game-item3 game-item'
						onClick={handleClick10}
					></div>
				)}

				{gameArray[11] == 0 && (
					<div
						id='l0'
						className='game-item0 game-item'
						onClick={handleClick11}
					></div>
				)}
				{gameArray[11] == 1 && (
					<div
						id='l1'
						className='game-item1 game-item'
						onClick={handleClick11}
					></div>
				)}

				{gameArray[11] == 2 && (
					<div
						id='l2'
						className='game-item2 game-item'
						onClick={handleClick11}
					></div>
				)}
				{gameArray[11] == 3 && (
					<div
						id='l3'
						className='game-item3 game-item'
						onClick={handleClick11}
					></div>
				)}

				{gameArray[12] == 0 && (
					<div
						id='m0'
						className='game-item0 game-item'
						onClick={handleClick12}
					></div>
				)}
				{gameArray[12] == 1 && (
					<div
						id='m1'
						className='game-item1 game-item'
						onClick={handleClick12}
					></div>
				)}

				{gameArray[12] == 2 && (
					<div
						id='m2'
						className='game-item2 game-item'
						onClick={handleClick12}
					></div>
				)}
				{gameArray[12] == 3 && (
					<div
						id='m3'
						className='game-item3 game-item'
						onClick={handleClick12}
					></div>
				)}

				{gameArray[13] == 0 && (
					<div
						id='n0'
						className='game-item0 game-item'
						onClick={handleClick13}
					></div>
				)}
				{gameArray[13] == 1 && (
					<div
						id='n1'
						className='game-item1 game-item'
						onClick={handleClick13}
					></div>
				)}

				{gameArray[13] == 2 && (
					<div
						id='n2'
						className='game-item2 game-item'
						onClick={handleClick13}
					></div>
				)}
				{gameArray[13] == 3 && (
					<div
						id='n3'
						className='game-item3 game-item'
						onClick={handleClick13}
					></div>
				)}

				{gameArray[14] == 0 && (
					<div
						id='o0'
						className='game-item0 game-item'
						onClick={handleClick14}
					></div>
				)}
				{gameArray[14] == 1 && (
					<div
						id='o1'
						className='game-item1 game-item'
						onClick={handleClick14}
					></div>
				)}

				{gameArray[14] == 2 && (
					<div
						id='o2'
						className='game-item2 game-item'
						onClick={handleClick14}
					></div>
				)}
				{gameArray[14] == 3 && (
					<div
						id='o3'
						className='game-item3 game-item'
						onClick={handleClick14}
					></div>
				)}

				{gameArray[15] == 0 && (
					<div
						id='p0'
						className='game-item0 game-item'
						onClick={handleClick15}
					></div>
				)}
				{gameArray[15] == 1 && (
					<div
						id='p1'
						className='game-item1 game-item'
						onClick={handleClick15}
					></div>
				)}

				{gameArray[15] == 2 && (
					<div
						id='p2'
						className='game-item2 game-item'
						onClick={handleClick15}
					></div>
				)}
				{gameArray[15] == 3 && (
					<div
						id='p3'
						className='game-item3 game-item'
						onClick={handleClick15}
					></div>
				)}

				{gameArray[16] == 0 && (
					<div
						id='q0'
						className='game-item0 game-item'
						onClick={handleClick16}
					></div>
				)}
				{gameArray[16] == 1 && (
					<div
						id='q1'
						className='game-item1 game-item'
						onClick={handleClick16}
					></div>
				)}

				{gameArray[16] == 2 && (
					<div
						id='q2'
						className='game-item2 game-item'
						onClick={handleClick16}
					></div>
				)}
				{gameArray[16] == 3 && (
					<div
						id='q3'
						className='game-item3 game-item'
						onClick={handleClick16}
					></div>
				)}

				{gameArray[17] == 0 && (
					<div
						id='r0'
						className='game-item0 game-item'
						onClick={handleClick17}
					></div>
				)}
				{gameArray[17] == 1 && (
					<div
						id='r1'
						className='game-item1 game-item'
						onClick={handleClick17}
					></div>
				)}

				{gameArray[17] == 2 && (
					<div
						id='r2'
						className='game-item2 game-item'
						onClick={handleClick17}
					></div>
				)}
				{gameArray[17] == 3 && (
					<div
						id='r3'
						className='game-item3 game-item'
						onClick={handleClick17}
					></div>
				)}

				{gameArray[18] == 0 && (
					<div
						id='s0'
						className='game-item0 game-item'
						onClick={handleClick18}
					></div>
				)}
				{gameArray[18] == 1 && (
					<div
						id='s1'
						className='game-item1 game-item'
						onClick={handleClick18}
					></div>
				)}

				{gameArray[18] == 2 && (
					<div
						id='s2'
						className='game-item2 game-item'
						onClick={handleClick18}
					></div>
				)}
				{gameArray[18] == 3 && (
					<div
						id='s3'
						className='game-item3 game-item'
						onClick={handleClick18}
					></div>
				)}

				{gameArray[19] == 0 && (
					<div
						id='t0'
						className='game-item0 game-item'
						onClick={handleClick19}
					></div>
				)}
				{gameArray[19] == 1 && (
					<div
						id='t1'
						className='game-item1 game-item'
						onClick={handleClick19}
					></div>
				)}

				{gameArray[19] == 2 && (
					<div
						id='t2'
						className='game-item2 game-item'
						onClick={handleClick19}
					></div>
				)}
				{gameArray[19] == 3 && (
					<div
						id='t3'
						className='game-item3 game-item'
						onClick={handleClick19}
					></div>
				)}

				{gameArray[20] == 0 && (
					<div
						id='u0'
						className='game-item0 game-item'
						onClick={handleClick20}
					></div>
				)}
				{gameArray[20] == 1 && (
					<div
						id='u1'
						className='game-item1 game-item'
						onClick={handleClick20}
					></div>
				)}

				{gameArray[20] == 2 && (
					<div
						id='u2'
						className='game-item2 game-item'
						onClick={handleClick20}
					></div>
				)}
				{gameArray[20] == 3 && (
					<div
						id='u3'
						className='game-item3 game-item'
						onClick={handleClick20}
					></div>
				)}

				{gameArray[21] == 0 && (
					<div
						id='v0'
						className='game-item0 game-item'
						onClick={handleClick21}
					></div>
				)}
				{gameArray[21] == 1 && (
					<div
						id='v1'
						className='game-item1 game-item'
						onClick={handleClick21}
					></div>
				)}

				{gameArray[21] == 2 && (
					<div
						id='v2'
						className='game-item2 game-item'
						onClick={handleClick21}
					></div>
				)}
				{gameArray[21] == 3 && (
					<div
						id='v3'
						className='game-item3 game-item'
						onClick={handleClick21}
					></div>
				)}

				{gameArray[22] == 0 && (
					<div
						id='w0'
						className='game-item0 game-item'
						onClick={handleClick22}
					></div>
				)}
				{gameArray[22] == 1 && (
					<div
						id='w1'
						className='game-item1 game-item'
						onClick={handleClick22}
					></div>
				)}

				{gameArray[22] == 2 && (
					<div
						id='w2'
						className='game-item2 game-item'
						onClick={handleClick22}
					></div>
				)}
				{gameArray[22] == 3 && (
					<div
						id='w3'
						className='game-item3 game-item'
						onClick={handleClick22}
					></div>
				)}

				{gameArray[23] == 0 && (
					<div
						id='x0'
						className='game-item0 game-item'
						onClick={handleClick23}
					></div>
				)}
				{gameArray[23] == 1 && (
					<div
						id='x1'
						className='game-item1 game-item'
						onClick={handleClick23}
					></div>
				)}

				{gameArray[23] == 2 && (
					<div
						id='x2'
						className='game-item2 game-item'
						onClick={handleClick23}
					></div>
				)}
				{gameArray[23] == 3 && (
					<div
						id='x3'
						className='game-item3 game-item'
						onClick={handleClick23}
					></div>
				)}

				{gameArray[24] == 0 && (
					<div
						id='y0'
						className='game-item0 game-item'
						onClick={handleClick24}
					></div>
				)}
				{gameArray[24] == 1 && (
					<div
						id='y1'
						className='game-item1 game-item'
						onClick={handleClick24}
					></div>
				)}

				{gameArray[24] == 2 && (
					<div
						id='y2'
						className='game-item2 game-item'
						onClick={handleClick24}
					></div>
				)}
				{gameArray[24] == 3 && (
					<div
						id='y3'
						className='game-item3 game-item'
						onClick={handleClick24}
					></div>
				)}
			</div>
		</>
	);
}

export default Game;
