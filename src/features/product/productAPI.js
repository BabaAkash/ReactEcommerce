// A mock function to mimic making an async request for data
export  function fetchAllProducts() {
  return new Promise(async(resolve) =>{
    const response = await fetch('http://localhost:8080/products')
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
    console.log(categoryValues)
    if(categoryValues){
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
  return new Promise(async(resolve) =>{
    const response = await fetch(`http://localhost:8080/products?${queryString}`)
    const data = await response.json()
    const totalItems = await response.headers.get('X-Total-Count')
    console.log(totalItems)
    resolve({data:{products:data, totalItems:+totalItems}})
  }
  );
}

