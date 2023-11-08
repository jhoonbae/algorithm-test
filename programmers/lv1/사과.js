function solution(k, m, score) {
    var answer = 0;
    score = score.sort((a, b) => b-a); // 내림차순 정렬
    const result = [];
    for (let i = 0; i < score.length; i += m) { // m 만큼 증가
        const slice = score.slice(i, i + m); // i 부터 i+m 까지 배열 자르기
        if (slice.length === m) { // 자른 배열의 길이가 m이랑 같을때만 result에 push
          result.push(slice);
        }
    }
    result.map(arr => {
        const min = Math.min(...arr); // 배열내부의 최소값 저장
        answer+= min * arr.length; // 최소값에 배열 길이 곱해서 상자의 가격 증가.
    })
    return answer;
}

const k = 4;
const m = 3;
const score = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2];

console.log(solution(k, m, score))