function mountainArr(A) {
    if (A.length < 3) return false;

    let prev = 0;
    let next = 1
    let increasing = 0;
    let decreasing = 0;

    while (A[prev] < A[next]) {
        increasing++;
        prev++;
        next++;
    }

    while (A[prev] > A[next]) {
        decreasing++;
        prev++;
        next++;
    }

    return next === A.length && increasing > 0 && decreasing > 0
}

console.log(mountainArr([1,2,3,2,1]))