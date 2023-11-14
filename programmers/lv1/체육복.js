/**
    n	lost	reserve	    return
    5	[2, 4]	[1, 3, 5]	5
    5	[2, 4]	[3]	        4
    3	[3]	    [1]	        2
 * @param {*} n 학생 수
 * @param {*} lost 잃어버린 학생 번호
 * @param {*} reserve 여벌옷 가져온 학생 번호
 */
function solution(n, lost, reserve) {
    let before;
    let answer = 0;
    for(let i = 1; i < n+1; i++) {
        if(lost.includes(i)) {
            let bef = reserve.indexOf(i-1);
            let aft = reserve.indexOf(i+1);
            if(bef >= 0) {
                reserve.splice(bef, 1);
                lost.splice(i, 1);
                answer++;
                continue;
            }else if (aft >=0) {
                reserve.splice(aft, 1);
                lost.splice(i, 1);
                answer++;
                continue;
            }
            else continue;
        }else {
            answer++;
        }
    }
    return answer;
}

console.log(solution(5, [4,5], [3,4]))