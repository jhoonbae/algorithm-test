/**
 * CASE 1
 * 내가 푼 방법 : 시간복잡도가 O(n^2)라서 s의 길이가 늘어나면 효율적이지 못하다.
 */
function solution(s) {
    const split = s.split("");
    let answer = split.map((word, i) => {
        if(s.indexOf(word) === i) return -1;
        else {
            for(let j = i-1; j >= 0; j--) {
                if(word === split[j]) return i-j;
            }
        }
    })
    return answer;
}

/**
 * 
 * CASE 2
 * 다른사람 풀이 : 시간복잡도 O(n) 효율적인코드.
 * 객체에 키값으로 전 값 밸류로 인덱스를 넣어놓는 방식은 생각하지 못했다.
 * 하나 배웠다잉 ~
 */
function solution(s) {
    const hash={};

    return [...s].map((v,i)=>{
        let result = hash[v] !== undefined ? i - hash[v] : -1;
        hash[v] = i;
        return result;
    });
}

console.log(solution("banana"));