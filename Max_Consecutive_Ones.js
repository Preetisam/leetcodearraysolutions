//Given a binary array nums, return the maximum number of consecutive 1's in the array.
Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
Input: nums = [1,0,1,1,0,1]
Output: 2//

var findMaxConsecutiveOnes = function(nums) {
     let count = 0, maxCount = 0;
	for(n of nums){
		n === 0 ? count = 0 : count++;
		if(count > maxCount) maxCount = count;
	}
	return maxCount;
  
  
  //solution 2
  
  for(let i=0;i<nums.length;i++){
        if(nums[i]===0){
            count=0;
        }else{
            count++;
        }
        
        if(count>maxCount){
            maxCount=count;
        }
        
    }
	return maxCount;
  
  
  
  
  
  
  
  
