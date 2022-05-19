// 59. 이분검색

// 내 풀이
function solution(m, arr) {
  arr.sort((a, b) => a - b);
  return arr.indexOf(m) + 1;
}

// 내 풀이2
function solution2(m, arr) {
  arr.sort((a, b) => a - b);
  let num = arr.length / 2;
  let n = num;
  while (true) {
    n /= 2;
    if (Math.floor(num) > arr.indexOf(m)) num -= n;
    else if (Math.floor(num) < arr.indexOf(m)) num += n;
    else return num + 1;
  }
}

// 문제풀이
function solution3(m, arr) {
  let answer;
  arr.sort((a, b) => a - b); // 이분검색하려면 무조건 정렬돼있어야 함
  let lt = 0,
    rt = arr.length - 1;
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (arr[mid] === m) {
      answer = mid + 1;
      break;
    } else if (arr[mid] > m) rt = mid - 1;
    else lt = mid + 1;
  }
  return answer;
}

// 이분검색(이분탐색) -> 데이터가 정렬돼 있는 배열에서 특정한 값을 찾아내는 알고리즘
//                      1. 배열의 중간에 있는 임의의 값을 선택하여 찾고자 하는 값 X와 비교함. X가 중간 값보다 작으면 중간 값을 기준으로 좌측의 데이터들을 대상으로, X가 중간값보다 크면 배열의 우측을 대상으로 다시 탐색함.
//                      2. 해당 값을 찾을 때까지 과정 반복

console.log(solution(32, [23, 87, 65, 12, 57, 32, 99, 81]));
