import "./styles/main.css"
import "./styles/about-me.css"
import "./styles/projects.css"
import "./styles/events.css"
import "./styles/skills.css"
import "./styles/contact.css"

// Skills images
import java_logo from "/java-logo.svg?raw"
import c_logo from "/C-logo.svg?raw"
import git_logo from "/git-logo.svg?raw"
import sqlite_logo from "/SQLite-logo.svg?raw"

// Events images
import SoM_logo from "/SoM-logo.png"

// Contact images
import github_logo from "/github-logo.svg?raw"
import mail_symbol from "/mail-symbol.svg?raw"

// Others
import website_symbol from "/website-symbol.svg?raw"

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="main-grid">
    <ul>  
      <li class="about-me">
        <div>
          <p class="heading">
            &lt;/Hi, I'm Nils&gt;
          </p>
          <p>
            I'm a trainee software engineer from near Cologne, Germany.
          </p>
          <br>
          <p>
            I started programming in my spare time during secondary school and have since developed a strong passion for it. 
            Furthermore, I enjoy experimenting with new technologies and hardware to see what creative ideas I can bring to life.
          </p>

          <div class="misc">
            <div class="languages">
              <p>Languages</p>
              <ul>
                <li>🇩🇪 German – Native</li>
                <li>🇬🇧 English – B2*</li>
              </ul>
            </div>

            <div class="hobbies">
              <p>Hobbies</p>
              <ul>
                <li>🎹 Piano</li>
                <li>🚶‍➡️ Hiking</li>
                <li>💻 Strategy & Logic Games</li>
              </ul>
            </div>
          </div>

          <div class="gloss">
            <p>* Common European Framework of Reference for Languages (CEFR)</p>
          </div>
        </div>
      </li>

      <li class="events">
        <div class="event">
          <a href="https://summer.hackclub.com" target="_blank" rel="noopener noreferrer" alt="Summer of Making" title="Summer of Making">
            <img src="${SoM_logo}">
          </a>
          <p>Summer of Making was an international hackathon where I ranked 121st out of 2,165 participants (<b>top 6%</b>).</p>
        </div>
      </li>

      <li class="years-of-experience">
        <div>
          <p>3+</p>
          <p>YOE</p>
        </div>
      </li>

      <li class="project-count">
        <div>
          <p>12+</p>
          <p>Projects</p>
        </div>
      </li>

      <li class="projects" style="--card-color: var(--color-blue-400)">
        <p>Projects</p>
      
        <div class="projects-area">
          <div class="project-card">
            <div class="project-card-label">
              <p>ConnTest</p>
            </div>
            <div class="project-card-subtitle">
              <p>A tool for testing network communication</p>
            </div>
            <div class="project-card-links">
              <a href="https://github.com/Nils1024/ConnTest" target="_blank" rel="noopener noreferrer" alt="GitHub">
                ${github_logo}
              </a>
            </div>
          </div>

          <div class="project-card" style="--card-color: var(--color-orange-400)">
            <div class="project-card-label">
              <p>TrustScanner</p>
            </div>
            <div class="project-card-subtitle">
              <p>A userscript that checks websites for dangerous categories (malware, phishing) and displays a warning banner if a threat is detected.</p>
            </div>
            <div class="project-card-links">
              <a href="https://github.com/Nils1024/TrustScanner" target="_blank" rel="noopener noreferrer" alt="GitHub">
                ${github_logo}
              </a>
              <a href="https://github.com/Nils1024/TrustScanner" target="_blank" rel="noopener noreferrer" alt="Download">
                ${website_symbol}
              </a>
            </div>
          </div>

          <div class="project-card" style="--card-color: var(--color-indigo-600)">
            <div class="project-card-label">
              <p>Explorer</p>
            </div>
            <div class="project-card-subtitle">
              <p>A Windows 10 Explorer clone for Windows XP</p>
            </div>
            <div class="project-card-links">
              <a href="https://github.com/Nils1024/explorer" target="_blank" rel="noopener noreferrer" alt="GitHub">
                ${github_logo}
              </a>
            </div>
          </div>

          <div class="project-card" style="--card-color: var(--color-red-400)">
            <div class="project-card-label">
              <p>DJ Controller</p>
            </div>
            <div class="project-card-subtitle">
              <p>A web-based DJ controller with basic functionality, built with React and Vite.</p>
            </div>
            <div class="project-card-links">
              <a href="https://github.com/Nils1024/dj_controller" target="_blank" rel="noopener noreferrer" alt="GitHub">
                ${github_logo}
              </a>
              <a href="https://djcontroller.vercel.app" target="_blank" rel="noopener noreferrer" alt="Download">
                ${website_symbol}
              </a>
            </div>
          </div>

          <div class="project-card" style="--card-color: var(--color-green-700)">
            <div class="project-card-label">
              <p>Spooky-Tomb</p>
            </div>
            <div class="project-card-subtitle">
              <p>Scene (No. 66) for the Summer of Making Grand Survey Expedition.</p>
            </div>
            <div class="project-card-links">
              <a href="https://github.com/Nils1024/Spooky-Tomb" target="_blank" rel="noopener noreferrer" alt="GitHub">
                ${github_logo}
              </a>
              <a href="https://nilsb.tech/Spooky-Tomb/" target="_blank" rel="noopener noreferrer" alt="Download">
                ${website_symbol}
              </a>
            </div>
          </div>
        </div>
      </li>

      <li class="contact">
        <div>
          <p>Connect with me</p>

          <div class="contact-links">
            <a href="https://github.com/Nils1024" target="_blank" alt="GitHub" rel="noopener noreferrer">
              ${github_logo}
            </a>
            <a href="https://form.typeform.com/to/cHvoXd5Q" target="_blank" alt="E-Mail">
              ${mail_symbol}
            </a>
          </div>
        </div>
      </li>

      <li class="skills">
        <div>
          <p>Skills</p>

          <div class="skills-symbols">
            <a href="https://www.java.com" target="_blank" rel="noopener noreferrer">
              ${java_logo}
            </a>
            <a href="https://www.c-language.org" target="_blank" rel="noopener noreferrer">
              ${c_logo}
            </a>
            <a href="https://sqlite.org" target="_blank" rel="noopener noreferrer">
              ${sqlite_logo}
            </a>
            <a href="https://git-scm.com" target="_blank" rel="noopener noreferrer">
              ${git_logo}
            </a>
          </div>
        </div>
      </li>
    </ul>
  </div>
`
