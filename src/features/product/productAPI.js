// A mock function to mimic making an async request for data
export  function fetchAllProducts() {
  return new Promise(async(resolve) =>{
    const response = await fetch('http://localhost:8080/products')
    const data = await response.json()
    resolve({data})
  }
  );
}
export  function fetchProductById(id) {
  return new Promise(async(resolve) =>{
    const response = await fetch('http://localhost:8080/products/'+id)
    const data = await response.json()
    resolve({data})
  }
  );
}


export  function fetchProductsByFilters(filter, sort,pagination) {
  // filters ={"Category":["smartphone"]}
  // sort ={_sort:"price", _order:"desc"}
  let queryString =''
  for(let key in filter){
  
    const categoryValues = filter[key];
    
    if(categoryValues.length){
      const lastCategoryValues = categoryValues[categoryValues.length-1]
     queryString +=`${key}=${lastCategoryValues}&`  // http://localhost:8080/products?category=laptops
    }
     
  }

  for(let key in sort){
    queryString +=`${key}=${sort[key]}&` 
  }
  for(let key in pagination){
  
    queryString +=`${key}=${pagination[key]}&` 
  }
  console.log("api:",queryString)
  return new Promise(async(resolve) =>{
    const response = await fetch(`http://localhost:8080/products?${queryString}`)
    const data = await response.json()
    const totalItems = await response.headers.get('X-Total-Count')
    console.log(totalItems)
    resolve({data:{products:data, totalItems:+totalItems}})
  }
  );
}
 
export  function fetchCategories() {
  return new Promise(async(resolve) =>{
    const response = await fetch('http://localhost:8080/categories')
    const data = await response.json()
    resolve({data})
  }
  );
}
export  function fetchBrands() {
  return new Promise(async(resolve) =>{
    const response = await fetch('http://localhost:8080/brands')
    const data = await response.json()
    resolve({data})
  }
  );
}