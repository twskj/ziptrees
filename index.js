'use strict';

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function insert(x, root) {
    return insertHelper({ key: x }, root);
}

function insertHelper(x, root) {
    if (!root) {
        x.rank = getRandomInt(10000000);
        return x;
    }

    if (x.key < root.key) {
        if (insertHelper(x, root.left) === x) {
            if (x.rank < root.rank) {
                root.left = x;
            }
            else {
                root.left = x.right;
                x.right = root;
                return x;
            }
        }
    }
    else {
        if (insertHelper(x, root.right) === x) {
            if (x.rank <= root.rank) {
                root.right = x;
            }
            else {
                root.right = x.left;
                x.left = root;
                return x;
            }
        }
    }
    return root;
}

function del(x, root) {
    if (x.key === root.key) {
        return zip(root.left, root.right);
    }

    if (x.key < root.key) {
        if (x.key === root.left.key) {
            root.left = zip(root.left.left, root.left.right);
        }
        else {
            del(x, root.left);
        }
    }
    else {
        if (x.key === root.right.key) {
            root.right = zip(root.right.left, root.right.right);
        }
        else {
            del(x, root.right);
        }
    }
    return root;
}

function zip(x, y) {
    if (!x) {
        return y;
    }
    if (!y) {
        return x;
    }
    if (x.rank < y.rank) {
        y.left = zip(x, y.left);
        return y;
    }
    else {
        x.right = zip(x.right, y);
        return x;
    }
}

function min(root) {
    return root.min;
}

function 



module.exports = {
    insert,
    delete: del,
    min
};