# Interview Questions in Javascript() {...}
*A mostly reasonable collection of technical software development interview questions solved in Javascript*

## Table of Contents
1. [Questions](#questions)
1. To Be Made 

## Questions (To be separated) 
- **Given an array of integers, find the largest product yield from three of the integers**  
  ```javascript
  var unsorted_array = [-10, 7, 29, 30, 5, -10, -70];
  
  computeProduct(unsorted_array);
  
  // greatest product is either (min1 * min2 * max1 || max1 * max2 * max3)
  function computeProduct(unsorted) {
    var sorted_array = unsorted.sort(),
        product1 = 1,
        product2 = 1,
        length = sorted_array.length;
        
    // Get the product of three largest integers in sorted array
    for (int x = length; x > length - 2; x--) {
        product1 *= sorted_array[x];
    }
    product2 = sorted_array[0] * sorted_array[1] * sorted_array[length];
    
    if (product1 > product2) return product1;
    return product2
  }
  ```
  
