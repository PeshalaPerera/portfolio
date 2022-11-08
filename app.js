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
    const skillsPage = "skills.html";

    let isIndexPageActive = false;
    let isAboutPageActive = false;
    let isBlogsPageActive = false;
    let isContactPageActive = false;
    let isEducationPageActive = false;
    let isSkillsPageActive = false;

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
      case skillsPage:
        isSkillsPageActive = true;
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
                    <a href="${skillsPage}">
                        <div class="control ${getStyles(isSkillsPageActive)}">
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

  document.getElementById("navigation").innerHTML = getNavigationHTML();

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
