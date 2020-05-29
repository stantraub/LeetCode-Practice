function minCost(cost) {
    let costs = cost[0];
    let currCosts = new Array(3).fill(0);
    for (let i = 1; i < cost.length; i++) {   // loop through each of the houses
        let houseCosts = cost[i];
        for (let matIdx = 0; matIdx < houseCosts.length; matIdx++) {
            switch (matIdx) {
                case 0:
                    currCosts[matIdx] = houseCosts[matIdx] + Math.min(costs[1], costs[2])
                    break;
                case 1:
                    currCosts[matIdx] = houseCosts[matIdx] + Math.min(costs[0], costs[2])
                    break;
                case 2:
                    currCosts[matIdx] = houseCosts[matIdx] + Math.min(costs[0], costs[1])
                    break;
            }
        }
        costs = currCosts;
        currCosts = [];
    }
    return Math.min(costs[0], costs[1], costs[2]);
}