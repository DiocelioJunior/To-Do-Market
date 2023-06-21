//Função para mostrar o card "New Item" após clicar no botão flutunate
function showCard() {
    const card = document.getElementById('card-New-Item');
    const home = document.getElementById('home');

    card.style.display = 'flex';
    home.classList.add('hide');

}
//Função para esconder o card "New Item" após clicar no botão fechar do card
function closeCard() {
    const card = document.getElementById('card-New-Item');
    const home = document.getElementById('home');

    card.style.display = 'none';
    home.classList.remove('hide');

    updateProduct();
}

//////// Funções TO DO LIST ///////

updateProduct();

//Função para adicionar um novo produto
function addProduct() {
    const productName = document.getElementById('product-name');
    const productQuantity = document.getElementById('product-quantity');
    const productMeasure = document.getElementById('product-measure');
    const productPrice = document.getElementById('product-price');



    const newProduct = {
        Nome: productName.value,
        Quantidade: productQuantity.value,
        Unidade: productMeasure.value,
        Preço: productPrice.value.trim() || "0"
    };



    const items = JSON.parse(localStorage.getItem('products') || "[]");

    items.push(newProduct);

    localStorage.setItem("products", JSON.stringify(items))
    
    alert("Produto adicionado!")

    productName.value = " ";
    productQuantity.value = " ";
    productMeasure.value = " ";
    productPrice.value = " ";

    updateProduct();
}

function deleteProduct(index) {
    const items = JSON.parse(localStorage.getItem('products') || "[]");
    items.splice(index, 1); 

    localStorage.setItem("products", JSON.stringify(items));
    
    updateProduct(); 
}

function updateProduct() {
    const items = JSON.parse(localStorage.getItem('products') || "[]");
    const list = document.getElementById('list');
    const total = document.getElementById('total');
    let totalPrice = 0;

    list.innerHTML = "";

    items.forEach(function (newProduct, index) {

        list.innerHTML += `
        <div class="to-do-list-card" id="card">
                <div class="to-do-list-card-title">
                    <h1>${newProduct.Nome}</h1>
                    <p>${newProduct.Quantidade} ${newProduct.Unidade}</p>
                </div>

            <div class="to-do-list-card-check">
                <a href="#" onclick="deleteProduct()"><span class="material-symbols-outlined">
                delete
                </span></a>
                <a href="#" onclick="purchasedProduct(${index})"><span class="material-symbols-outlined">
                check_circle
                </span></a>
                <a href="#" onclick="editPrice(${index})"><span class="material-symbols-outlined">
                edit
                </span></a>

            </div> 
        </div>
        `

        totalPrice += parseFloat(newProduct.Preço.replace(',','.'));    
    });

    let totalPriceInBRL = totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    total.innerHTML = `
    <h1>${totalPriceInBRL}</h1>
    `;
}


function editPrice(index) {
    const items = JSON.parse(localStorage.getItem('products') || "[]");
    const product = items[index];
    const card = document.getElementById('card-Edit-Price');
    const home = document.getElementById('home');
  
    card.style.display = 'flex';
    home.classList.add('hide');
  
    document.getElementById('edit-price').value = product.Preço;
    document.getElementById('edit-index').value = index;
  }
  

  function savePrice() {
    const items = JSON.parse(localStorage.getItem('products') || "[]");
    const index = document.getElementById('edit-index').value;
    const product = items[index];
  
    product.Preço = document.getElementById('edit-price').value;
  
    localStorage.setItem("products", JSON.stringify(items));
  
    closeEditCard();
  }
  
  function closeEditCard() {
    const card = document.getElementById('card-Edit-Price');
    const home = document.getElementById('home');
  
    card.style.display = 'none';
    home.classList.remove('hide');
  
    updateProduct();
  }
  
  

