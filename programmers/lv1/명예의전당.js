/**
 * 
    k와 honor.length 가 같지 않을 땐 honor에 push, answer에 honor.min push,
    이후는 현재 score 과 honor.min 비교 후 밑 로직 수행.
 */
function solution(k, score) {
    let honor = [];
    let answer = [];
    for(let i = 0; i < score.length; i++) {
        let min
        if(honor.length !== k) {
            honor.push(score[i]);
            min = Math.min(...honor);
            answer.push(min);
        }
        else {
            min = Math.min(...honor);
            if(min < score[i]) {
                let idx = honor.indexOf(min);
                honor[idx] = score[i];
                min = Math.min(...honor);
                answer.push(min);
            }else {
                answer.push(min);
            }
        }
    }
    return answer;
}

console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]))