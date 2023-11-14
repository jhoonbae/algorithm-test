/**
 * 
 * 색칠할 구역(section)이 있을때만 while문 동작
 * 칠할 구역(첫번째인덱스)를 찾고, +m-1(한번에 칠할 수 있는 길이 - (현재 구역을 칠해야하니 -1))을 해서 한번에 칠해지는 구역 찾기,
 * 섹션에서 위 값보다 큰 값을 찾고, 값이 있을 때만 해당 값으 인덱스를 찾아 배열 자르기
 * 없을때는 다 칠해졌다는 뜻이니 배열 초기화 후 while문 종료.
 */
function solution(n, m, section) {
    let i = 0;
    let answer = 0;
    while(section.length > 0) {
        let paint = section[i];
        let painted = paint + m -1;
        let not_p = section.find((s) => s > painted);
        if(not_p){
            let painted_idx = section.indexOf(not_p);
            section.splice(painted_idx, section.length-1)
        }
        else section = []
        answer++
    }
    return answer;
}

console.log(solution(5, 4, [1,3]))