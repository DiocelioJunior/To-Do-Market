//Função para mostrar o card "New Item" após clicar no botão flutunate
function showCard(){
    const card = document.getElementById('card-New-Item');
    const home = document.getElementById('home');

    card.style.display = 'flex';
    home.classList.add('hide');

}
//Função para esconder o card "New Item" após clicar no botão fechar do card
function closeCard(){
    const card = document.getElementById('card-New-Item');
    const home = document.getElementById('home');

    card.style.display = 'none'
    home.classList.remove('hide')
}

//////// Funções TO DO LIST ///////

//Array para armazenar produtos
let products = [];

//Função para adicionar um novo produto
function addProduct(){
    const productName = document.getElementById('product-name').value;
    const productQuantity = document.getElementById('product-quantity').value;
    const productMeasure = document.getElementById('product-measure').value;
    const productPrice = document.getElementById('product-price').value;

    if (productName !== '' &&  productQuantity !== ''){
        const newProduct = {
            Nome: productName,
            Quantidade: productQuantity,
            Unidade: productMeasure,
            Preço: productPrice,
        }
        products.push(newProduct)

        saveLocalStorage();
    }else{
        alert('Insira os dados!')
    }
}

//Função para salvar em Local Storage
function saveLocalStorage(){
    localStorage.setItem("products", JSON.stringify(products));
}


