
function stringChop(str, size) {
  // your code here
  if (str.length === 0 || str === null) {
    return [];
  }
  if (str.length <= size) {
    return [str];
  }
  let ans = [];
  let count = 0;
  let strLength = str.length;
  while (count <= strLength) {
    let slicedStr = str.slice(count, count + size);
    console.log(slicedStr);
    ans.push(slicedStr);
    count += size;
  }

  return ans;
}
// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
