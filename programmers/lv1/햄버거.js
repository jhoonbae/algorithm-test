/**
 * 빵 , 야채 , 고기 빵 순으로 햄버거를 포장해야 하는데,
 * 주어진 배열에서 포장할 수 있는 햄버거의 갯수를 리턴.
 * @param {Array} ingredient 재료 (1 : 빵, 2 : 야채, 3 : 고기)
 * @returns {int} answer
 */

function solution(ingredient) {
    let ans = 0;
    let arr = []
    for(let i =0; i < ingredient.length; i++) {
        arr.push(ingredient[i]);
        if(arr[arr.length-4] === 1 && arr[arr.length-3] === 2 && arr[arr.length-2] === 3 && arr[arr.length-1] === 1) {
            arr.splice(-4)
            ans++;
        }
    }
    return ans;
}


console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]))
