import React from 'react'
import axios from 'axios';

export async  function getProducts() {
    return (
       await axios.get(process.env.REACT_APP_PRODUCTS_API_URL,{
        //     await axios.get('https://fakestoreapi.com/products/',{

            params: {
              _limit: 10
             }
          }).then(
               (data)=>{return data.data;
                console.log(data)
      }
           ).catch(
                {error: 'error occurred'}
            
                
           )

    )
}



 function productService() {
    return (
        <div>
        </div>

    )
}

export default {
    productService,
    getProducts
}
