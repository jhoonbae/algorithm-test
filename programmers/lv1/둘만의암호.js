function solution(s, skip, index){
    let ans = ''
    let a_code = 'a'.charCodeAt();
    let z_code = 'z'.charCodeAt();
    for(let a of s) {
        let ascii = a.charCodeAt();
        for(let i =0; i<index; i++){
            ascii = ascii === z_code ? a_code : ascii + 1
            if(skip.includes(String.fromCharCode(ascii))) i -=1;
        }
        ans+=String.fromCharCode(ascii)
    }
    return ans
}

console.log(solution("aukks", "wbqd", 5))