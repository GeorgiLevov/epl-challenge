function catchError(promise) {
  return promise
  .then(result=>{
    return [undefined, result];
  })
  .catch(error=> {
    return [error]
  })
  
}

export default catchError;