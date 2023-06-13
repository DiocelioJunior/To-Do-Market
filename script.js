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

    card.style.display = 'none'
    home.classList.remove('hide')

    updateProduct();
}

//////// Funções TO DO LIST ///////

updateProduct();

//Função para adicionar um novo produto
function addProduct() {
    const productName = document.getElementById('product-name').value;
    const productQuantity = document.getElementById('product-quantity').value;
    const productMeasure = document.getElementById('product-measure').value;
    const productPrice = document.getElementById('product-price').value;


    const newProduct = {
        Nome: productName,
        Quantidade: productQuantity,
        Unidade: productMeasure,
        Preço: productPrice
    };

    const items = JSON.parse(localStorage.getItem('products') || "[]");

    items.push(newProduct);

    localStorage.setItem("products", JSON.stringify(items))

    productName.value = "";
    productQuantity.value = "";
    productMeasure.value = "";
    productPrice.value = "";
    
    alert("Produto adicionado!")
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

    list.innerHTML = "";

    items.forEach(function (newProduct, index) {

        list.innerHTML += `
        <div class="to-do-list-card" id="card">
                <div class="to-do-list-card-title">
                    <h1>${newProduct.Nome}</h1>
                    <p>${newProduct.Quantidade} ${newProduct.Unidade}</p>
                </div>

            <div class="to-do-list-card-price">
                <input type="text" pattern="\d+(\.\d{1,2})?" placeholder="Insira o Preço"
                    title="Insira um preço válido (ex: 10.99)">
            </div>

            <div class="to-do-list-card-check">
                <a href="#" onclick="deleteProduct()"><span class="material-symbols-outlined">
                delete
                </span></a>
                <a href="#" onclick="purchasedProduct(${index})"><span class="material-symbols-outlined">
                check_circle
                </span></a>
            </div> 
        </div>
        `
    });
}

function purchasedProduct() {
    const item = event.target.closest('.to-do-list-card');
    item.classList.add('disable')
}



