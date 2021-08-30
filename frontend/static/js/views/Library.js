import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Library");
    }

    async getHtml() {
        return `
        <h1>Library</h1>
        `;
    }
}