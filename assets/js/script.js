const container = document.querySelector('.produits-block')

fetch('./assets/data/data.json')
    .then(reponse => reponse.json())
    .then(data =>{
        const produits = data.products
        produits.forEach(produit => {
                container.innerHTML += `
                <div class="produit-item" data-id="${produit.id}">
                    <div class="produit-img">
                        <img src="${produit.image}" width="100%" alt="produit" srcset="">
                    </div>
                    <div class="item-descri">
                        <div class="description-produit">
                        <div class="titre-produit">
                            ${produit.name}
                        </div>
                        <div class="prix-produit">
                            ${produit.price}€
                        </div>
                    </div>

                    <div class="btn-produit">
                    <a href="./html/panier.html" target="_blank" <i class="fa-solid fa-cart-shopping"></i></a>
                    </div>
                        </div>
                    <div class="description">
                    <a href="./html/details.html" target="_blank" class="details">
                    Details
                    </a>
                    </div>
                </div>
            
            
            `

            const currDetails = document.querySelectorAll(".details");
            console.log(currDetails);
            currDetails.forEach(currDetail=>{
                currDetail.addEventListener("click", (e) => {
                    const currentProduit = produits.filter(currentProduit => {
                        return currentProduit.id == currDetail.closest('.produit-item').getAttribute('data-id')
                    })

                    localStorage.setItem("details", JSON.stringify(currentProduit[0]))
                })

            })
        });
})


