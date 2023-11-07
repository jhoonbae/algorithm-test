function solution(keymap, targets) {
    var answer = [];
    targets.map((target, i) => {
        let a = [];
        target.split("").map((s) => {
            let idx_arr = [];
            for(let i = 0; i < keymap.length; i++) {
                let index = keymap[i].split("").indexOf(s);
                if(index >= 0) idx_arr.push(index+1);
            }
            a.push(Math.min(...idx_arr));
        })
        if(a[i] === Infinity || a.includes(Infinity)) {
            answer.push(-1);
        }
        else {
            const result = a.reduce((c, a, i) => c+a,0)
            answer.push(result);
        }
    })
    return answer;
}
const keymap =["ABACD", "BCEFD"];
const targets = ["ABCAQ"];

console.log(solution(keymap, targets));