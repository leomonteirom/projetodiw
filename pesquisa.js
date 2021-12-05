function pesquisar() {
    var form = document.getElementById("Form")
    var pesquisa = document.getElementById('reps').value

    document.getElementById("reps").click()
    

    form.addEventListener('submit',function(i){
        i.preventDefault()
        
        const xhr = new XMLHttpRequest();
        const urlDaPesquisa = `https://api.github.com/search/repositories?q=` + pesquisa
        xhr.open('GET', urlDaPesquisa, true);
        xhr.onload = function() { 
            const data = JSON.parse(this.response);
            console.log(data)

            
            for (let l in data.items) {

                
                    let ul = document.getElementById('rePesq');
        
                    let div = document.createElement('div');
        
                    div.classList.add('col-12')
        
                        div.innerHTML = `
                            <p><strong>${data.items[l].name}</strong></p>
                            <p><strong>Link do repositório:</strong> <a href="${data.items[l].html_url}">${data.items[l].html_url}</a></p>
                            <p><strong>Criado em: ${data.items[l].created_at}</strong></p>                            
                        `;
        
                        ul.appendChild(div);
                    
                }

                

            }
            
        xhr.send()
    })
}
