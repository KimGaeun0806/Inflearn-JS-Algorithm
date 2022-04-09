// 19. 보이는 학생

// 내 풀이
function solution(arr) {
  let max = 0;
  let num = 0;
  arr.map((a) => {
    if (a > max) {
      max = a;
      num++;
    }
  });
  return num;
}

// 문제풀이
function solution2(arr) {
  let answer = 1,
    max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      answer++;
      max = arr[i];
    }
  }
  return answer;
}

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]));
