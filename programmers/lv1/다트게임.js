/**
 * 
 점수를 숫자와 문자로 나누는 작업 하여 arr이란 배열 생성.
 arr배열을 다시 반복문을 돌려 a 라는 배열에 숫자만 푸쉬,
 이전점수만 활용하기위해 a.length - 1을 하여 마지막 점수 획득
 조건문을 통해 최종적인 점수 생성 후에 reduce로 a 배열 점수 합산 후 리턴
 (문제 해결은 했지만 코드 가독성도 좋아보이진 않고, 로직도 그닥 좋아보이지 않음. 추후에 다시 리팩토링 해봐야 할 거 같다.)
 */
function solution(dartResult) {
    let not_num = ['S', 'D', 'T', '#', '*'];
    let bef = '';
    let now = '';
    let arr = [];
    let a = [];
    for(let i = 0; i < dartResult.length; i++) {
        now = dartResult[i]
        if(not_num.indexOf(now) >= 0) {
            arr.push(now);
        }else {
            bef+=now;
            if(not_num.indexOf(dartResult[i+1]) >= 0) {
                arr.push(Number(bef));
                bef = '';
            }
        }
    }
    for(let i = 0; i < arr.length; i++) {
        if(Number(arr[i]) >= 0) {
            now = Number(arr[i]);
            a.push(now);
            idx = a.length -1;
        }
        else if(arr[i] === '#') {
            a[idx] = -a[idx];
        }
        else if(arr[i] === '*') {
            a[idx]=a[idx]*2;
            a[idx-1]= a[idx-1] * 2;
        }
        else if(arr[i] === 'D'){
            a[idx] = Math.pow(a[idx], 2);
        }
        else if(arr[i] === 'T'){
            a[idx] = Math.pow(a[idx], 3);
        }
        else {
            a[idx] = a[idx];

        }
        before = a[idx];
    }
    return a.reduce((a, c) => a + c,0)
}

console.log(solution("1D2S0T"));