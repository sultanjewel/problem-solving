function mergeSortedArrays(nums1,m,nums2,n){
  for(let i=m,j=0;j<n;i++,j++){
    nums1[i]=nums2[j];
  }
  nums1.sort((a,b)=> a-b);
}

//Time Complexity: O(nlog n)
//Space Complexity: O(n)
