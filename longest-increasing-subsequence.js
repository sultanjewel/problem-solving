function getLIS(nums){
    let mem = Array(nums.length).fill(1);
    let LIS=1;
    for(let i=1;i<nums.length;i++){
        for(let j=0;j<i;j++){
            if(nums[i]>nums[j]){
                mem[i]=Math.max(mem[i],mem[j]+1)
                LIS=Math.max(LIS,mem[i]);
            }
        }
    }
    return LIS;
}

//Time Complexity: O(n^2)
//Space Complexity: O(n)
