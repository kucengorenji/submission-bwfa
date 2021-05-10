import icon from '../../assets/movie.png'

class NavigationBar extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="${icon}" alt="" width="30" height="24" class="d-inline-block align-text-top">
                Search Movie TMDB
            </a>
            </div>
            

        </nav>
        `;
    }
}

customElements.define("navigation-bar", NavigationBar);