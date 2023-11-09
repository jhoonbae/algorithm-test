/**
 * 
 * 정규식으로 가능한 단어들을 숫자로 변환 후 배열 반환
 * 반환한 배열에 필터로 검색
 * 문자열 하나씩 잘라 반복문 수행
 * 반복문 수행 시 숫자인지 확인, 숫자가 아니라면 false
 * 숫자라도 이전 문자와 같다면 false, 나머지 true.
 * 
 */
function solution(babbling) {
    let reg_babbling = babbling.map(s => s.replaceAll(/aya/g, '1').replaceAll(/ye/g, '2').replaceAll(/woo/g, '3').replaceAll(/ma/g, '4'));
    let answer = reg_babbling.filter((s, i) => {
        let split = s.split("");
        let a = '';
        let res =  true;
        for(let i = 0; i < split.length; i++) {
            if(!Number(split[i])) {
                res = false;
                break;
            } else {
                if(a === split[i]) res = false;
                a = split[i]
            }
        }
        return res;
    })
    return answer.length;
}

console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]))