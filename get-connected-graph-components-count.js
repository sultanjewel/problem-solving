function getCoinnectedComponentsCount(A,B){
    if(A==0)return 0;
    let count =0;
    let adjMap={};
    for(let [node_a,node_b] of B){
        if(typeof adjMap[node_a]=='undefined')adjMap[node_a]=[];
        if(typeof adjMap[node_b]=='undefined')adjMap[node_b]=[];
        adjMap[node_a].push(node_b);
        adjMap[node_b].push(node_a);
    }
    let visited=Array(A+1).fill(false);
    for(let i=1;i<=A;i++){
        if(visited[i]==false){
            count++;
            let toTravarse=[];
            toTravarse.push(i);
            visited[i]=true;
            while(toTravarse.length>0){
                let node=toTravarse.pop();
                if(typeof adjMap[node] !='undefined'){
                for(let adj of adjMap[node]){
                    if(!visited[adj]){
                    toTravarse.push(adj);
                    visited[adj]=true;
                    }
                }
                }
            }
        }
    }
    return count;
}

//Time complexity: O(n);
//Space complexity: O(n)
