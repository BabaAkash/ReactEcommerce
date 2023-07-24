// A mock function to mimic making an async request for data
export  function fetchAllProducts() {
  return new Promise(async(resolve) =>{
    const response = await fetch('http://localhost:8080/products')
    const data = await response.json()
    resolve({data})
  }
  );
}


export  function fetchProductsByFilters(filter) {
  // filters ={"Category":"smartphone"}
  
  let queryString =''
  for(let key in filter){
     queryString +=`${key}=${filter[key]}&`  // http://localhost:8080/products?category=laptops
    
  }
  return new Promise(async(resolve) =>{
    const response = await fetch(`http://localhost:8080/products?${queryString}`)
    const data = await response.json()
    resolve({data})
  }
  );
}

