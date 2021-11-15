//1.
/** 
  * Task description: Write a method that creates a new array with given values 
  * Expected Result: (3, 'a') => ['a', 'a', 'a'] 
  * Task Complexity: 1 of 5 
*/
const fill = (arraySize, value) => {
    let result = [];
    for (let i = 0; i < 3; i++) {
        result.push(valueToFill);
        
        
    }
    return result;
}
const data = 3;
const valueToFill = 'a';
console.log(fill(data, valueToFill)) // ['a', 'a', 'a']

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
//2.
/**
 * Task description: Write a method to creates a slice of array with n elements dropped from the beginning.
 * Expected Result: [1, 2, 3, 4] => [3, 4]
 * Task Complexity: 1 of 5
 * @param {Array} array - Array of any elements
 * @param {Number} elementToDrop - number of elements to drop.
 * @returns {Array}
 */
 const drop = (array,elementToDrop) => {
    let result = [];
   for (let i = elementToDrop; i < data.length; i++) {
       result.push(data[i]);
       
   }
        return result;
}
const data = [1, 2, 3, 4];
const elementToDrop = 2;
console.log(drop(data,elementToDrop)); // [3, 4]

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//3.
/**
 * Task description: Removes all given values from array using values array for equality comparisons.
 * Expected Result: ['a', 'b', 'c', 'a', 'b', 'c'] => ['b', 'b']
 * Task Complexity: 1 of 5
 * @param {Array} array - The array to query.
 * @param {Array} values - The values to remove.
 * @returns {Array}
 */
 const pull = (array,values) => {
    let result = [];
    for (let i = 0; i < data.length; i++) {
       if (!values.includes(data[i])) {
           result.push(data[i]);
           
       }
        
    }
    return result;
}
const data = ['a', 'b', 'c', 'a', 'b', 'c'];
const values = ['a', 'c'];
console.log(pull(data,values)); // ['b', 'b'] 
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//4.
/** 
  * Task description: Write a method that reverts input array 
  * Expected Result: [1, 2, 3] => [3, 2, 1] 
  * Task Complexity: 1 of 5 
  * @param {Array} array - Array of any elements 
  * @returns {Array} 
*/
const reverse = (array) => {
  let result = [];
  for (let i = data.length-1; i >=0; i--) {
      result.push(data[i]);
      
  }
  return result;
}
const data = [1, 2, 3];
console.log(reverse(data)); // [3, 2, 1] 

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//5.
/**
 * Task description: Gets all but the first element of array.
 * Expected Result: [1, 2, 3] => [2, 3]
 * Task Complexity: 1 of 5
 * @param {Array} array - The array to query.
 * @returns {Array}
 */
 const tail = (array) => {
    let result = [];
    for (let i = 1; i < data.length; i++) {
        result.push(data[i]);
        
    }
    return result;
}
const data = [1, 2, 3];
console.log(tail(data)); // [2, 3]

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
//6.
/**
  * Task description: Write a method that to print a even Numbers only without conditional statement using loop.
  * Expected Result: (15) => 0,2,4,6,8,10,12,14,16,18,20,22,24,26,28
  * Task Complexity: 1 of 5
*/
const printEvenNumbers = (size) => {
    let ans = [];
    for (let i = 0; i <30; i=i+2) {
        ans.push(i);
        
    }
    return ans;
}

const size = 15
console.log(printEvenNumbers(size))

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//7.
/**
  * Task description: Write a method that to add up each element in the same position and
    create a new array containing the sum of each pair. Assume both arrays are of the same length.
  * Expected Result: ([4, 6, 7],[8, 1, 9]) => [12, 7, 16]
  * Task Complexity: 1 of 5
*/
const sumOfPairs = (num1, num2) => {
    let result = [];
 
for (let i = 0; i < 3; i++) {
   result.push(num1[i]+num2[i]);   
}       
   
    return result;
}
let num1 = [4, 6, 7];
let num2 = [8, 1, 9];
console.log(sumOfPairs(num1, num2)) // [12, 7, 16]

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//8.
/**
  * Task description: Write a method that to get the sum of array actually the sum of all their elements.
  * Expected Result: ([3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]) => 276
  * Task Complexity: 1 of 5
*/
const sum = (numbers)=> {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result=result+numbers[i];
        }
return result;
}
const numbers = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]
console.log(sum(numbers)) // 276

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//9.
/**
 * Task description: Creates an object composed of the inverted keys and values of object.
 * Expected Result: { 'a': 1, 'b': 2, 'c': 3 } => { '1': 'a', '2': 'b', '3': 'c' }
 * Task Complexity: 1 of 5
 * @param {Object} data - The object to invert.
 * @returns {Object} - Returns the new inverted object.
 */
 const invert = (data) => {
   const result = {}
    for (let key in data) {
     const val1 = key;
     const val2 = data[key];
     result[val2] = val1;
        }
        return result;
    }


const data = {
    a : 1,
    b : 2,
    c : 3
}
console.log(invert(data));

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//10.
/**
 * Task description: Creates an array of the own enumerable property names of object.
 * Expected Result: { 'a': 1, 'b': 2, 'c': 3 } => ['a', 'b', 'c']
 * Task Complexity: 1 of 5
 * @param {Object} data - The object to query.
 * @returns {Array} - Returns the array of property names.
 */
 const keys = (data) => {
     const result = [];
     for (let key in data) {

         result.push(key);
             
         }
         return result;
     }
const data = {
    a : 1,
    b : 2,
    c : 3
}
console.log(keys(data)); // ['a', 'b', 'c']

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//11.
/**
 * Task description: Creates an object composed of the picked object properties.
 * Expected Result: { 'a': 1, 'b': '2', 'c': 3 }, ['a', 'c'] => { 'a': 1, 'c': 3 }
 * Task Complexity: 1 of 5
 * @param {Object} data - The source object
 * @param {Array} paths - TThe property paths to pick.
 * @returns {Object}
 */
 const pick = (data,paths) => {
    const result = {}
    for (let key in data) {
        const value = data[key];
        if (paths.includes(key)) {
            result[key] = value;
              }
            }
        return result;
    }

const data = {
    a : 1,
    b : 2,
    c : 3
}
const paths =  ['a', 'c']
console.log(pick(data,paths));

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//12.
/**
 * Task description: Get all the values from the source object
 * Expected Result: {a :1 ,b:2 : c:3} => [1,2,3]
 * Task Complexity: 1 of 5
 * @param {object} data - The source object
 * @returns {Array}
 */
 const values = (data) => {
    const result = [];
    for (let key in data) {
        result.push(data[key]);
    }
    return result;
}
const data = {
    a : 1,
    b : 2,
    c : 3,
}
console.log(values(data)); // [1,2,3]

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//13.
/**
 * Task description: Omit the properties from the source object
 * Expected Result: {a :1 ,b:2 : c:3} => {b : 2}
 * Task Complexity: 1 of 5
 * @param {object} data - The source object
 * @param {Array} paths - The property paths to omit.
 * @returns {Object}
 */
 const omit = (data,paths) => {
   const result = {};
   for (let key in data) {
       const value = data[key];
       if (!paths.includes(key)) {
           result[key] = value;
           
       }
    }
    return result;
}
const data = {
    a : 1,
    b : 2,
    c : 3,
}
const paths = ['a', 'c']
console.log(omit(data,paths));

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//14.
/**
 * Task description: Creates an array of data values not included in the other given arrays
 * Expected Result: [2, 1], [2, 3] => [1]
 * Task Complexity: 2 of 5
 * @param {Array} array - The array to inspect.
 * @param {Array} valuesToExclude - The values to exclude.
 * @returns {Array}
 */
 const difference = (array,valuesToExclude) => {
  const result = [];
  for (let i = 0; i < data.length; i++) {
      if (!valuesToExclude.includes(data[i])) {
          result.push(data[i]);
          
      }
      
  }
  return result;
  }
  const data = [2, 1];
  const valuesToExclude =  [2, 3];
  console.log(difference(data,valuesToExclude)); // [1]
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
   //15.
  /**
    * Task description: Write a method that to combine elements from 3 arrays to 
    * generate a string
    * Expected Result: (['A', 'B', 'C'],['1', '2', '3', '4', '5', '6', '7', '8'],['a', 'e', 'i', 'o', 'u']) => 'A1aB2eC3i4o5u678'
    * Task Complexity: 2 of 5
  */
   const characters = ['A', 'B', 'C'];
   const numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];
   const vowels = ['a', 'e', 'i', 'o', 'u']
   const multi_combine = (characters, numbers,vowels) => {
       let result = "";
       const max=Math.max(characters.length,numbers.length,vowels.length);
       for(let i=0;i<max;i++){
         res+=((characters[i] || "" )+(numbers[i] || "")+ (vowels[i] || ""));
        }
       return result;

   }
   console.log(multi_combine(characters,numbers,vowels))
 //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 //================================================================================================
  //16.
  /** 
    * Task description: Write a method that finds shallow intersections of objects 
    * Expected Result: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 } 
    * Task Complexity: 3 of 5 
    * @param {Object<string | number>} firstObj - Object with values of primitive data types 
    * @param {Object<string | number>} secondObj - Object with values of primitive data types 
    * @returns {Object} 
  */
   const intersection = (firstObject, secondObject) => {
    let res={}
   for(let key in data){
     if(data2[key]===data[key]){
       res[key]=data[key];
     }
   }
   return res
};
const data = { a: 1, b: 2 };
const data2 = { c: 1, b: 2 };
console.log(intersection(data, data2));
//=======================================================================================
  //17.
/** 
  * Task description: Write a method that returns an object composed of key-value pairs. 
  * Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 } 
  * Task Complexity: 2 of 5 
  * @param {Array} array - a deep array of pairs 
  * @returns {Array} 
*/
const fromPairs = (array) => {
    const res = Object.fromEntries(data);

    return res
  }
  const data = [['a', 1], ['b', 2]];
  console.log(fromPairs(data)) // { a: 1, b: 2 }

   //==========================================================================================
//18.
  /**
    * Task description: Write a method that returns an array composed of nested array
    * Expected Result: {a : 1, b :2, c:3} => [['a', 1], ['b', 2], ['c', 3]]
    * Task Complexity: 2 of 5
    * @param {Object} obj - The object to query.
    * @returns {Array}
  */
  const toPairs = (obj) => {
    const res = Object.entries(data);
    return res
  }
  const data = {
    a : 1,
    b : 2,
    c : 3,
  }
  console.log(toPairs(data)) // [['a', 1], ['b', 2], ['c', 3]]

               //(OR)

const toPairs = (obj) => {
    const res=[];
    for(let key in data){
      res.push([key,data[key]]);
      
    }
    return res;
  }
  const data = {
    a : 1,
    b : 2,
    c : 3,
  }
  console.log(toPairs(data))
//===================================================================================================

//19
/**
  * Task description: Write a method to convert a string into camel case.
  * Expected Result: (JavaScript exercises) => "JavaScriptExercises"
  * Task Complexity: 1 of 5
*/
const camelize = (str) => {
 
  let res="";
  for (let i = 0; i < str.length; i++)
  {
      if (str[i] == " ")
      {
          res= res + str[i+1].toUpperCase();
          i++;
      }
      else{
       
          res= res + str[i];
          }}
  return res;
}

const str = "JavaScript exercises"
console.log(camelize(str)) // "JavaScriptExercises"

//============================================================================================

//20

/**
  * Task description: Write a method that creates to capitalize the first letter of each word in a string.
  * Expected Result: (js string exercises) => "Js String Exercises"
  * Task Complexity: 1 of 5
*/
const capitalize = (str) => {
  let res="";
   for (let i = 0; i < str1.length; i++)
   {
       if (str1[i] == " ")
       {
           res= res + " " +str1[i+1].toUpperCase();
           i++;
       }
       else{
           res= res + str1[i];
           }}
   return res;
}
const str1 = "js string exercises"
console.log(capitalize(str)) // "Js String Exercises"
//=========================================================================================
//21
/**
  * Task description: Write a method to check whether a string is blank or not
  * Expected Result: ('') => true
  * Task Complexity: 1 of 5
*/
const checkIsBlank = (str) => {
  if(str2==""){
    return true
  }
  else{
    return false;
  }
}
const str2 = '';
console.log(checkIsBlank(str)) // true
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//22.
/**
  * Task description: Write a method that to chop a string into chunks of a given length
  * Expected Result: (javascript) =>  ["ja", "va", "sc", "ri", "pt"]
  * Task Complexity: 1 of 5
*/
const chop = (str,chunk) => {
  
    let res=[]
    for(let i=0;i<str.length;i+=chunk){
      res.push(str[i]+str[i+1])
    }
    return res
}
const str = 'javascript'
const chunk = 2
console.log(chop(str,chunk)) // ["ja", "va", "sc", "ri", "pt"]
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//23.
/**
  * Task description: Write a method to convert a string into snakeCase case.
  * Expected Result: (Robin Singh from USA) => "robin-singh-from-usa"
  * Task Complexity: 1 of 5
*/
const snakeCase = (str) => {
  let res="";
  let str1=str.toLowerCase();
for (let i = 0; i < str1.length; i++)
{
if (str1[i] == " ")
{
  res= res + "-" +str1[i+1];
  i++;
}
else{
  res= res + str1[i];
  }}
return res;

}
const str = 'Robin Singh from USA.'
console.log(snakeCase(str)) // "robin-singh-from-usa"