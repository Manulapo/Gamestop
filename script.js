

function getData() {
    fetch('prod-info.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        let output = ''
        data.forEach(product => {
            output += `
                <div class="cards">
                    <img src="${product.img}">
                    <h3> ${product.title}</h3>
                    <p> ${product.platform}</p>
                    <button id="promo">Prenota Ora<a href="${product.link}"></a></button>
                </div>
             `;            
        });
        document.getElementById('cards').innerHTML = output;
    })
}



getData();
