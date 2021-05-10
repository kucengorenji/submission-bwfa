class SearchBar extends HTMLElement{
    constructor(){
        super();

    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <h4 class="mt-5">Silahkan masukan keyword dan klik tombol submit</h4>
        <input type="text" class="mt-5 mx-auto" name="" id="inputValue">
        <button type="submit" class="d-block mx-auto mt-3 btn btn-primary position-relative" id="search" >Cari Film</button>
        `;
    }
}

customElements.define("search-bar", SearchBar);