/**
 * 
    입출력 예
    number	limit	power	result
    5	    3	    2	    10
    10	    3	    2	    21
    약수를 구할 때 제곱근에서 for루프 돌린다.
    이유는 제곱근보다 큰 수에서는 약수가 있을 수 없기 때문에
    제곱근보다 작은수로 나눠지는 수만 확인한 뒤 * 2를 해주고,
    만약 제곱근이 정수일경우 + 1을 해준다 (제곱근보다 작은 수만 for roop을 돌리기때문에)
 */


function solution(number, limit, power) {
    const arr = Array.from({length : number}, (a ,i) => i+1);

    let cnt_arr = arr.map((num) => {
        let cnt = 0;
        for(let i = 1; i < Math.sqrt(num); i++) {
            (num % i === 0) && cnt++;
        }
        cnt = (cnt * 2 + Number.isInteger(Math.sqrt(num)))
        return cnt > limit ? power : cnt;
    })
    return cnt_arr
    .reduce((c, a) => c + a, 0);
}

console.log(solution(10, 3, 2))

