let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");


function createAndAppendSearchResult(result) {
    let {
        description,
        link,
        title
    } = result;

    let container = document.createElement("div");
    container.classList.add("result-item");

    let ancherEle = document.createElement("a");
    ancherEle.href = link;
    ancherEle.target = "_blank";
    ancherEle.textContent = title;
    ancherEle.classList.add("result-title");
    container.appendChild(ancherEle);

    let lineBr1 = document.createElement("Br");
    container.appendChild(lineBr1);

    let urlEle = document.createElement("a");
    urlEle.href = link;
    urlEle.target = "_blank";
    urlEle.textContent = link;
    urlEle.classList.add("result-url");
    container.appendChild(urlEle);

    let linebr2 = document.createElement("br");
    container.appendChild(linebr2);

    let peraGra = document.createElement("p");
    peraGra.textContent = description;
    peraGra.classList.add("link-description");
    container.appendChild(peraGra);

    searchResultsEl.appendChild(container);

}

function displayResults(search_results) {
    spinnerEl.classList.add("d-none");
    for (let very of search_results) {

        createAndAppendSearchResult(very);
    }
}

function searchWikipedia(event) {
    if (event.key === "Enter") {
        searchResultsEl.textContent = "";
        spinnerEl.classList.remove("d-none");

        let searchInput = searchInputEl.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
        let options = {
            method: "GET"
        };

        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                displayResults(search_results);
            });
    }
}

searchInputEl.addEventListener("keydown", searchWikipedia);