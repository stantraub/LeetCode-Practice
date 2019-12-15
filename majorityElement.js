function majorityElement(nums) {
    let counts = {};

    let greatestCount = 0;
    let mostOccuring;

    for (const num of nums) {
        counts[num] = counts[num] + 1 || 1
        if (counts[num] > greatestCount) {
            greatestCount = counts[num];
            mostOccuring = num;
        }
    }

    return mostOccuring
}

