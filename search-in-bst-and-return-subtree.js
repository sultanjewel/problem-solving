function searchBST(root, searchVal){
    if(root==null)return null;
    if(root.val==searchVal)return root;
    if(root.val<searchVal)return searchBST(root.right,searchVal);
    return searchBST(root.left,searchVal);
}
