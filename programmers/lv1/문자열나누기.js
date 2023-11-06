function solution(s) {
    let split = s.split("");
    let first = split[0]
    let same = 0;
    let diff = 0;
    let answer = 0;
    split.map((s, i) => {
        first === s ? same+=1 : diff+=1;
        if(same === diff) {
            answer+=1;
            first = split[i+1];
            same = 0;
            diff = 0;
        }
        if(i === split.length-1 && same !== 0) answer+=1;
    })
    return answer;
}

console.log(solution("banana"))