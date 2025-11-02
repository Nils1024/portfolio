import "./style.css"

// Skills images
import java_logo from "/java-logo.svg"
import c_logo from "/C-logo.svg"
import git_logo from "/git-logo.svg"

// Events images
import SoM_logo from "/SoM-logo.png"

// Contact images
import github_logo from "/github-logo.svg"
import mail_symbol from "/mail-symbol.svg"

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="main-grid">
    <div class="about-me">
      <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>
    </div>

    <div class="events">
      <a href="https://summer.hackclub.com" target="_blank">
        <img src="${SoM_logo}">
      </a>
    </div>

    <div class="contact">
      <a href="https://github.com/Nils1024" target="_blank">
        <img src="${github_logo}">
      </a>
      <a href="mailto:test@email.de">
        <img src="${mail_symbol}">
      </a>
    </div>

    <div class="skills">
      <a href="https://www.java.com" target="_blank">
        <img src="${java_logo}">
      </a>
      <a href="https://www.c-language.org" target="_blank">
        <img src="${c_logo}">
      </a>
      <a href="https://git-scm.com" target="_blank">
        <img src="${git_logo}">
      </a>
    </div>

    <div class="projects">
      <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>
    </div>
  </div>
`
