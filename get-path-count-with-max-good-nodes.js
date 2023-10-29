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
    let count=0;
    if(adjMap['1'].length==0)return 0;
    count=count+recursive(A,node,adjMap,C,0,count);
    return count;
}
