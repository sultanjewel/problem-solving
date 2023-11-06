

function maxProfit(prices,start,end){
    if(start>=end)return 0;
    let result=0,profit=0;
    for(let i=start;i<end;i++){
        for(let j=i+1;j<=end;j++){
            if(prices[i]<prices[j]){
                profit=(prices[j]-prices[i])+maxProfit(prices,start,i-1)+maxProfit(prices,j+1,end);
                result=Math.max(result,profit);
            }
        }
    }
    return result;
}


//Time Complexity: O(n^2)
//Space Complexity: O(1)

