class MySponsor extends HTMLElement {
 connectedCallback() {
  this.innerHTML = `
<p style="text-align:center" style="margin-top:5px"><a href=error.html><img src="https://boysundflugzeuge.github.io/sponsor.png"></a></p>
`
 }
}

customElements.define('my-sponsor',MySponsor)