function getMaximalDisjoints(A) {
    A.sort((a,b)=>(a[1]-b[1]));
    let max_disjoints=1;  //At least 1 disjoints will be there
    r1=A[0][1];
    for(let i=1;i<A.length;i++){
        l2=A[i][0];
        r2=A[i][1];
        if(l2>r1){
            max_disjoints++;
            r1=r2;
        }
    }
  return max_disjoints;
}

//Time complexity: O(n)
//Space complexity: O(1)
