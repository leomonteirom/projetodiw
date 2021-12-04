const gURL = "https://github.com"
/*<img src="${username.avatar_url}" class="card-img-top">*/

function usuario(usuario) {

    const request = new XMLHttpRequest(); 
    const repoUrl = `https://api.github.com/users/${usuario}`

    request.open('GET', repoUrl, true);

    request.onload = function() {
    
        const informacoes = JSON.parse(this.response);  
        
        

        let img = document.getElementById('imagem');

        img.innerHTML = (`
            <img src="${informacoes.avatar_url}" class="card-img-top">
        `);
        
        let info = document.getElementById('info');
        info.innerHTML = (`
            <h1>${informacoes.name}</h1>
            <p>${informacoes.bio}</p>
            <p>${informacoes.html_url}</p>
        `);
    }  
    request.send();
}

function repositorios(usuario) {

    const request = new XMLHttpRequest(); 
    const rep = `https://api.github.com/users/${usuario}/repos`

    request.open('GET', rep, true);

    request.onload = function() {
    
        const repInfo = JSON.parse(this.response); 
        console.log(repInfo)
        
        
        for (let i in repInfo) {

            if (i < 4) {

                let ul = document.getElementById('repositorios');

                let div = document.createElement('div');

                div.classList.add('col-md-6', 'col-lg-3')

                div.innerHTML = (`
                    <p><strong>${repInfo[i].name}</strong></p>
                    <p>${repInfo[i].description}</p>
                    <p>Link: <a href="${repInfo[i].html_url}">${repInfo[i].html_url}</a></p>
                    <p>Criado em: ${repInfo[i].created_at}</p>
                `);

                ul.appendChild(div);
            }

            /*teste*/

        }

    }  
    request.send();
}

repositorios('leomonteirom')
usuario('leomonteirom')