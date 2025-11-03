import "./main.css"
import "./projects.css"

// Skills images
import java_logo from "/java-logo.svg"
import c_logo from "/C-logo.svg"
import git_logo from "/git-logo.svg"

// Events images
import SoM_logo from "/SoM-logo.png"

// Contact images
import github_logo from "/github-logo.svg?raw"
import mail_symbol from "/mail-symbol.svg?raw"

const github_logo_with_gradient = github_logo;

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="main-grid">
    <ul>  
      <li class="about-me">
        <div>
          <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>
        </div>
      </li>

      <li class="events">
        <div>
          <a href="https://summer.hackclub.com" target="_blank" alt="Summer of Making" title="Summer of Making">
            <img src="${SoM_logo}">
          </a>
        </div>
      </li>

      <li class="project-count">
        <div>
          <p>6+</p>
        </div>
      </li>

      <li class="projects">
        <div>
          <div class="project-card">
            <div class="project-card-label">
              <p>Title</p>
            </div>
            <div class="project-card-subtitle">
              <p>Text</p>
            </div>
          </div>

          <div class="project-card">
            <div class="project-card-label">
              <p>Title</p>
            </div>
            <div class="project-card-subtitle">
              <p>Text</p>
            </div>
          </div>

          <div class="project-card">
            <div class="project-card-label">
              <p>Title</p>
            </div>
            <div class="project-card-subtitle">
              <p>Text</p>
            </div>
          </div>

          <div class="project-card">
            <div class="project-card-label">
              <p>Title</p>
            </div>
            <div class="project-card-subtitle">
              <p>Text</p>
            </div>
          </div>
        </div>
      </li>

      <li class="contact">
        <div>
          <p>Connect with me</p>

          <div class="contact-links">
            <a href="https://github.com/Nils1024" target="_blank" alt="GitHub">
              ${github_logo_with_gradient}
            </a>
            <a href="mailto:test@email.de" alt="E-Mail">
              ${mail_symbol}
            </a>
          </div>
        </div>
      </li>

      <li class="skills">
        <div>
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
      </li>
    </ul>
  </div>
`
