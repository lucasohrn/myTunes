import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
        <h1>Welcome Lucas Öhrn</h1>
        `;
    }
}