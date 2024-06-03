document.addEventListener("DOMContentLoaded",()=>{
    let productDetails = document.getElementById("productDetails")
    let product =JSON.parse( localStorage.getItem("products"))
    let pid =JSON.parse( localStorage.getItem("selectedProductid"))
    console.log(pid)
    if(product && pid){
        let selectedProduct =product.find(val =>val.id == pid)
        if(selectedProduct){
            console.log(selectedProduct.images[0])
            productDetails.innerHTML=`
            <div class="product-cnt">
            <img src=${selectedProduct.images[0]} height="120" alt="img"/>
            <div class="product-details">
            <h1 class="p-title">${selectedProduct.title}</h1>
            <p><b>category : </b> ${selectedProduct.category}</p>
            <p><b>description : </b> ${selectedProduct.description}</p>
            <p><b>price : $</b> ${selectedProduct.price}</p>
            <p><b>stock : </b> ${selectedProduct.stock}</p>
            <p><b>rating : </b> ${selectedProduct.rating}</p>
            <button class="add-to-cart" id="addToCart">Add to Cart</button>
            
            </div>
            </div>
            <div class="review">
            <h1>Product Reviews</h1>
            <hr/>
            ${
                selectedProduct.reviews.map((review)=>
                `
                <div class="review-cart">
                <p class="comment"><b>Comment : </b>${review.comment}</p>
                <p class="rating"><b>Rating : </b>  ${review.rating}</p>
                <p class="name"><b>Name : </b> ${review.reviewerName}</p>
                </div>
                <hr/>
                
                `)
            }
            </div>
            `
            document.getElementById("addToCart").addEventListener("click",()=>addToCart(selectedProduct)
        )
    }
   else{
    productDetails.innerHTML="No Product found"
   }
}
else{
    productDetails.innerHTML="No product selected"
}

})
function addToCart(product){
    let cart=JSON.parse(localStorage.getItem("cart")) || []
    cart.push(product)
    localStorage.setItem("cart",JSON.stringify(cart))
    alert("product added to cart")
    console.log("product")
}