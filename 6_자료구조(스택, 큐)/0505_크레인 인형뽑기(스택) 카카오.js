// 45. 크레인 인형뽑기(스택):카카오

// 내 풀이
function solution(board, moves) {
  let answer = 0;
  let box = [];
  let arr = Array.from({ length: board.length }, () => []);

  board.map((a) => a.map((b, i) => arr[i].push(b)));
  let newArr = arr.map((a) => a.filter((e) => e !== 0));
  moves.map((a) => {
    if (newArr[a - 1][0]) {
      box.push(newArr[a - 1][0]);
      newArr[a - 1].shift();
      if (box[box.length - 1] === box[box.length - 2]) {
        box = box.slice(0, -2);
        answer += 2;
      }
    }
  });
  return answer;
}

// 내 풀이2
function solution2(board, moves) {
  let box = [];
  let answer = 0;

  moves.map((a) => {
    for (let x of board) {
      if (x[a - 1] !== 0) {
        if (x[a - 1] === box[box.length - 1]) {
          box.pop();
          answer += 2;
        } else box.push(x[a - 1]);
        x[a - 1] = 0;
        break;
      }
    }
  });
  return answer;
}

// 문제풀이
function solution3(board, moves) {
  let answer = 0;
  let stack = [];

  moves.forEach((pos) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][pos - 1] !== 0) {
        let tmp = board[i][pos - 1];
        board[i][pos - 1] = 0;
        if (tmp === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else stack.push(tmp);
        break; // break하지 않으면 인형을 하나만 꺼내지 않고 다 꺼내버림
      }
    }
  });

  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
