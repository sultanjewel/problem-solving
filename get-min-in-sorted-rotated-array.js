var findMin = function(nums,start=0,end=nums.length-1,min=5000) {
    if(start==end)return nums[start];
    else if(start>end)return min;
    else if((start+1)==end)return Math.min(nums[start],nums[end]);
    mid=Math.floor(start+(end-start)/2);
     if(nums[start]<nums[end] && nums[mid]<nums[end]){ 
        min=nums[start];
        end=mid;
    }else if(nums[start]>nums[end] && nums[mid]>nums[end]){
        min=nums[end];
        start=mid;
    }else if(nums[start]>nums[end] && nums[mid]<nums[end]){
        min=nums[mid];
        end=mid;
    }
    min=Math.min(min,findMin(nums,start,end,min));
    return min;
};

// Time complexity log(n)
// Space complexity O(n)
