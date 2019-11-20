https://leetcode.com/problems/reverse-linked-list

var reverseList = function (head) {
    let p1 = null;
    let p2 = head;
    while (p2 !== null) {
        let p3 = p2.next;
        p2.next = p1;
        p1 = p2;
        p2 = p3;
    }

    return p1;
};