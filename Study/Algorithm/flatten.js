function steamrollArray(arr) {
  const finalArr= []

  arr.forEach(ele=> {
    if(Array.isArray(ele)){
     finalArr.push(...steamrollArray(ele))
    }else {
     finalArr.push(ele)
    //  console.log(finalArr)
    }
  })
  console.log(finalArr)
  return finalArr;
}
steamrollArray([1, {}, [3, [[4]]]]);

