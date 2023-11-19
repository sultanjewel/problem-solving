function isValidBST(node){
    if(node==null)return true;
    if(node.left!=null){
        if(find_max(node.left)>=node.val)return false;
    }
    if(node.right!=null){
        if(find_min(node.right)<=node.val)return false;
    }
    return isValidBST(node.left) && isValidBST(node.right);
}

// Write, Edit and Run your Javascript code using JS Online Compiler
function find_max(node){
    if(node==null)return 0;
    return Math.max(node.val,find_max(node.left),find_max(node.right));
}
function find_min(node){
    if(node==null)return Number.MAX_SAFE_INTEGER;
    return Math.min(node.val,find_min(node.left),find_min(node.right));
}


//Time Complexity: O(n^2)
//Space Complexity: O(n)
