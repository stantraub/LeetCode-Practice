var swapPairs = function (head) {
    let count = 0;

    let curNode = head

    while (curNode !== null) {
        if (count % 2 === 0 && curNode.next !== null) {
            let temp = curNode.val;
            curNode.val = curNode.next.val
            curNode.next.val = temp;
        }
        count++
        curNode = curNode.next
    }

    return head

};