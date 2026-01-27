// fetch('')

class DevJobsAvatar extends HTMLElement {
    constructor() {
        super(); // Llamada al constructor de HTMLElement
        this.attachShadow({ mode: 'open'})
    }
    render() {
        this.shadowRoot.innerHTML = 
        `
        <img
            src="https://unavatar.io/github/AbrahamGalvezV"
            alt="Avatar de AbrahamGalvez.V"
            class="avatar"
            style="width: 40px; heingth: 40px; border-radius: 9999px;"
        />

        `
    }
    connectedCallback() {
        this.render()
    }

}

customElements.define('devjobs-avatar', DevJobsAvatar)