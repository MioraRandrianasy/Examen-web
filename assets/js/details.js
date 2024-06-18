const productName = document.querySelector(".product-name");
const productDescri = document.querySelector(".product-description");
const productPrice = document.querySelector(".product-price");
const productSku = document.querySelector(".product-sku");
const productImage = document.querySelector('.product-image');

const size = document.querySelector("#size");

const baseUrl = window.location.origin;

const fromStorage = localStorage.getItem("details");
if(fromStorage){
    const currDetails = JSON.parse(fromStorage);

    console.log("currDetails", currDetails)
    
    productName.innerHTML = `${currDetails.name}`;
    productDescri.innerHTML = `${currDetails.description}`;
    productPrice.innerHTML = `${currDetails.price} €`;
    productSku.innerHTML = `${currDetails.sku}`;
    productImage.src = `${baseUrl}/${currDetails.image}`

    const nodes = currDetails.attributes.size.map((a) => {
        const optCreated = document.createElement("option");

        optCreated.value = a
        optCreated.children = a

        return optCreated
    })

    size.append(nodes);

}