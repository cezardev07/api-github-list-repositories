const url = "https://api.github.com/users/cezardev07/repos"
const menu = document.querySelector(".repositorio")

const urlRepo = "https://github.com/cezardev07/"

const get = async function(){
    const res = await fetch(url)
    const db = await res.json()

    return db
}
const user = async function(){
    const db = await get()
    
    for(let i = 0; i < db.length; i++){
        //console.log(db[i].name)

        const repo = document.createElement("div")
        repo.classList = "repo"

        menu.appendChild(repo)
        repo.innerHTML = `

            <div class="title">
                <a href="${urlRepo + db[i].name}" class="link-title"  target="_blank" rel="noopener noreferrer">
                    ${db[i].name}
                </a>
                <span class="repo-visibility">
                    ${db[i].visibility}
                </span>
            </div>
            <div class="description">
                <p>
                    ${db[i].description}
                </p>
            </div>
            <div class="language">
                <div class="circle-language"></div>
                <p>
                    ${db[i].language}
                </p>
            </div>
        
        `
    }

    colorLanguage()
    buscaRepo()

}
user()

const buscaRepo = function(){
    const inp = document.querySelector("input")
    inp.oninput = filterRepositorio;

    function filterRepositorio(){
        const repositorio = document.querySelectorAll(".repo")
        const valor = inp.value.toLocaleLowerCase()

        repositorio.forEach(repo => {
            // repo.children[0] 
            if(valor === ""){
                repo.classList.remove("closeRepositorio")
                return
            }
            if(repo.textContent.includes(valor)){
                repo.classList.remove("closeRepositorio")
            }else{
                repo.classList.add("closeRepositorio")
            }

        })

    }
}

const colorLanguage = function(){
    const languageRepo = document.querySelectorAll(".language")

    languageRepo.forEach(item => {
        const circle = item.children[0]

        if(item.children[1].innerText === "CSS"){
            circle.style.background = "#573d7c"
            return
        }
        if(item.children[1].innerText === "HTML"){
            circle.style.background = "#e34c26"
            return
        }
        if(item.children[1].innerText === "JavaScript "){
            circle.style.background = "#f1e05a"
            return
        }
        if(item.children[1].innerText === "Python"){
            circle.style.background = "#58a6ff"
            return
        }
        if(item.children[1].innerText === "C" || item.children[1].innerText === "C++"){
            circle.style.background = "#f34b7d"
            return
        }

    })

}

const mainRepo = document.querySelector("main")
const overviewRepo = document.querySelector(".overview")

const btnOver = document.querySelector(".btn-over")
const btnRep = document.querySelector(".btn-repo")

btnOver.onclick = over;
btnRep.onclick = rep;

function over(){
    overviewRepo.classList.remove("close-repo")
    mainRepo.classList.add("close-repo")

    colorLanguage()

    btnRep.style.borderBottomColor = "transparent"
    btnOver.style.borderBottomColor = "#f78166"
}

function rep(){
    overviewRepo.classList.add("close-repo")
    mainRepo.classList.remove("close-repo")

    colorLanguage()

    btnRep.style.borderBottomColor = "#f78166"
    btnOver.style.borderBottomColor = "transparent"
}

const pinnedFixed = async function(){
    const data = await get()

    overviewRepo.innerHTML = `
    <h2 class="overview-title-pinned">Pinned</h2>

    <div class="overview-repo">
        <div class="title">
            <a href="${urlRepo + data[9].name}" target="_blank" rel="noopener noreferrer"class="link-title">
                ${data[9].name}
            </a>
            <span class="repo-visibility">
                ${data[9].visibility}
            </span>
        </div>
        <div class="description">
            <p>
                 ${data[9].description}
            </p>
        </div>
        <div class="language">
            <div class="overview-circle-language"></div>
            <p> 
              ${data[9].language}
            </p>
        </div>
    </div>

    <div class="overview-repo">
        <div class="title">
            <a href="${urlRepo + data[7].name}" target="_blank" rel="noopener noreferrer"class="link-title">
                ${data[7].name}
            </a>
            <span class="repo-visibility">
                ${data[7].visibility}
            </span>
        </div>
        <div class="description">
            <p>
                 ${data[7].description}
            </p>
        </div>
        <div class="language">
            <div class="overview-circle-language"></div>
            <p> 
              ${data[7].language}
            </p>
        </div>
    </div>


    <div class="overview-repo">
        <div class="title">
            <a href="${urlRepo + data[0].name}" target="_blank" rel="noopener noreferrer"class="link-title">
                ${data[0].name}
            </a>
            <span class="repo-visibility">
                ${data[0].visibility}
            </span>
        </div>
        <div class="description">
            <p>
                 ${data[0].description}
            </p>
        </div>
        <div class="language">
            <div class="overview-circle-language"></div>
            <p> 
              ${data[0].language}
            </p>
        </div>
    </div>

    
    <div class="overview-repo">
        <div class="title">
            <a href="${urlRepo + data[15].name}" target="_blank" rel="noopener noreferrer"class="link-title">
                ${data[15].name}
            </a>
            <span class="repo-visibility">
                ${data[15].visibility}
            </span>
        </div>
        <div class="description">
            <p>
                 ${data[15].description}
            </p>
        </div>
        <div class="language">
            <div class="overview-circle-language"></div>
            <p> 
              ${data[15].language}
            </p>
        </div>
    </div>

    `
    colorLanguage()
}
pinnedFixed()

console.log("Hello dev!")
