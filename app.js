(function () {
  function getNavigationHTML() {
    function getCurrentPage() {
      const path = window.location.pathname;
      const page = path.split("/").pop();
      console.log(`Current page: ${page}`);
      return page;
    }

    function getStyles(isActive) {
      return isActive ? "active-btn" : "";
    }

    const currentPage = getCurrentPage();

    const indexPage = "index.html";
    const aboutPage = "about.html";
    const blogsPage = "blogs.html";
    const contactPage = "contact.html";
    const educationPage = "education.html";
    const worksPage = "works.html";

    let isIndexPageActive = false;
    let isAboutPageActive = false;
    let isBlogsPageActive = false;
    let isContactPageActive = false;
    let isEducationPageActive = false;
    let isWorksPageActive = false;

    switch (currentPage) {
      case indexPage:
        isIndexPageActive = true;
        break;
      case aboutPage:
        isAboutPageActive = true;
        break;
      case blogsPage:
        isBlogsPageActive = true;
        break;
      case contactPage:
        isContactPageActive = true;
        break;
      case educationPage:
        isEducationPageActive = true;
        break;
      case worksPage:
        isWorksPageActive = true;
        break;
    }

    return `
            <nav class="controls">
                <div class="controls-wrapper">
                    <a href="${indexPage}">
                        <div class="control ${getStyles(isIndexPageActive)}">
                            <i class="fas fa-home"></i>
                            <span>Home</span>
                        </div>
                    </a>
                    <a href="${aboutPage}">
                        <div class="control ${getStyles(isAboutPageActive)}">
                            <i class="fas fa-user"></i>
                            <span>About</span>
                        </div>
                    </a>
                    <a href="${educationPage}">
                        <div class="control ${getStyles(
                          isEducationPageActive
                        )}">
                            <i class="fas fa-briefcase"></i>
                            <span>Education</span>
                        </div>
                    </a>
                    <a href="${worksPage}">
                        <div class="control ${getStyles(isWorksPageActive)}">
                            <i class="fas fa-code"></i>
                            <span>Works</span>
                        </div>
                    </a>
                    <a href="${blogsPage}">
                        <div class="control ${getStyles(isBlogsPageActive)}">
                            <i class="fas fa-newspaper"></i>
                            <span>Blogs</span>
                        </div>
                    </a>
                    <a href="${contactPage}">
                        <div class="control ${getStyles(isContactPageActive)}">
                            <i class="fas fa-envelope-open"></i>
                            <span>Contact</span>
                        </div>
                    </a>
                </div>
            </nav>
        `;
  }

  function getFooterHTML() {
    return `<footer>
        <hr />
        <div class="site-footer">
            <div class="copyright-text">
                <p>Copyright &copy; <time datetime="2022">2022</time></p>
            </div>
            <div class="contact-icon">
                <a href="https://www.facebook.com/" target="_blank">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/" target="_blank">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="https://github.com/" target="_blank">
                    <i class="fab fa-github"></i>
                </a>
                <a href="https://www.youtube.com/" target="_blank">
                    <i class="fab fa-youtube"></i>
                </a>
            </div>
        </div>     
    </footer>`;
  }

  document.getElementById("navigation").innerHTML = getNavigationHTML();
  document.getElementById("footer").innerHTML = getFooterHTML();

  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn")?.classList.remove("active-btn");
      this.classList?.add("active-btn");
      document.querySelector(".active")?.classList.remove("active");
      document.getElementById(button.dataset.id)?.classList.add("active");
    });
  });

  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body?.classList.toggle("light-mode");
    document.getElementById("theme-icon")?.classList.toggle("fa-sun");
    document.getElementById("theme-icon")?.classList.toggle("fa-moon");
  });
})();
