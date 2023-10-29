function recursive(A,current_node,adjMap,C,current_good_nodes,count){
  if(A[parseInt(current_node)-1]==1)current_good_nodes++;
  if(current_good_nodes>C)return 0;
  if(typeof adjMap[current_node]=='undefined')return 1;
  for(node of adjMap[current_node]){
      count= count+recursive(A,node,adjMap,C,current_good_nodes,count);
    }
    return count;
  
}
function getPathsCount(A,B,C){
    let adjMap={};
    for(let [node_a,node_b] of B){
        if(typeof adjMap[node_a]=='undefined')adjMap[node_a]=[];
        adjMap[node_a].push(node_b);
    }
    return recursive(A,'1',adjMap,C,0,0);
}

//Time complexity: O(n)
//Space Complexity: O(n)
