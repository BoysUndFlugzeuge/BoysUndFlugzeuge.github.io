class MyHeader extends HTMLElement {
 connectedCallback() {
  this.innerHTML = `<header>
 <H1><img src="https://boysundflugzeuge.github.io/logo.png" width="291" height="130"><H1>
 </header>
 <nav>
 <ul>
  <li><a href="https://boysundflugzeuge.github.io/index.html">Main menu</a></li>
  <li><a href="https://boysundflugzeuge.github.io/stories.html">Stories</a></li>
  <li><a href="https://boysundflugzeuge.github.io/news.html">News</a></li>
  <li><a href="https://boysundflugzeuge.github.io/friday.html">Fridays</a></li>
  <li><a href="https://boysundflugzeuge.github.io/wiki.html">Wiki</a></li>
  <li><a href="https://boysundflugzeuge.github.io/extra.html">Extra</a></li>
 </ul>
 </nav>`
 }
}

customElements.define('Mheader',MyHeader)

class MyFooter extends HTMLElement {
 connectedCallback() {
  this.innerHTML = `<footer>
<p><a href="https://discord.gg/WWHfjkFmnW">Join our discord</a></p></div>
</footer>`
 }
}

customElements.define('Mfooter',MyFooter)