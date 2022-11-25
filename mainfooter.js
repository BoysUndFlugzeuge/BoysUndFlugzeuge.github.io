class MyFooter extends HTMLElement {
 connectedCallback() {
  this.innerHTML = `<footer>
<p><a href="https://discord.gg/WWHfjkFmnW">Join our discord</a></p></div>
</footer>`
 }
}

customElements.define('my-footer',MyFooter)