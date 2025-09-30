export class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <nav
        class="navbar navbar-expand-lg bg-body-transparent py-lg-3 responsive-position"
      >
        <div class="container">
          <a
            class="navbar-brand fs-36 lh-46 text-uppercase fw-bolder"
            href="/index.html"
            >Dekorior</a
          >
          <div class="justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  class="nav-link text-capitalize fs-18 lh-26 fw-bold"
                  aria-current="page"
                  href="/index.html"
                  ><sup class="me-2 fw-normal">01</sup>Home</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-capitalize fs-18 lh-26 fw-bold"
                  href="/About.html"
                  ><sup class="me-2 fw-normal">02</sup>About Us</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-capitalize fs-18 lh-26 fw-bold"
                  href="/Services.html"
                  ><sup class="me-2 fw-normal">03</sup>Services</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-capitalize fs-18 lh-26 fw-bold"
                  href="/Teams.html"
                  ><sup class="me-2 fw-normal">04</sup>Portfolio</a
                >
              </li>
              <a
                href="./Contact.html"
                class="btn btn-primary fs-18 lh-26 fw-semibold text-uppercase px-4 py-2"
                role="button"
                >Contact Us</a
              >
            </ul>
          </div>
        </div>
      </nav>
        `;
  }
}

customElements.define("desktop-navbar", Navbar);

export class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer>
      <div class="container">
        <div class="row justify-content-md-center gap-md-2 gap-lg-0">
          <div class="col-12 col-md-12 col-lg-7 newsletter-text text-md-center text-lg-start">
            <h4 class="fw-semibold">Sign up to our newsletter</h4>
            <p class="fw-normal fs-6">
              Stay up to date with the latest news, announcements, and articles.
            </p>
          </div>
          <div class="col-12 col-md-8 col-lg-5 ">
            <form class="d-flex flex-column flex-md-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                class="form-control"
                required
              />
              <button type="submit" class="btn subsBtn">Subscribe</button>
            </form>
          </div>
        </div>
        <div class="row mt-5 mb-5">
          <div class="col-12 col-md-6 col-lg-6 foot-logo mb-3">
            <h2 class="text-uppercase">Dekorior</h2>
            <p class="fw-normal fs-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque porttitor ligula gravida lacus cursus ullamcorper.
            </p>
          </div>

          <!-- Foot Nav links 1  -->

          <div class="col-6 col-md-3 col-lg-2 foot-links mb-3">
            <h5 class="fw-medium text-uppercase">Our Services</h5>
            <ul class="nav-menu m-0 p-0">
              <li class="nav-items">
                <a href="#" class="nav-links">Sketch Design</a>
              </li>
              <li class="nav-items">
                <a href="#" class="nav-links">Renovations</a>
              </li>
              <li class="nav-items">
                <a href="#" class="nav-links">Implementation</a>
              </li>
            </ul>
          </div>

          <!-- Foot Nav links 2 -->
          <div class="col-6 col-md-3 col-lg-2 foot-links mb-3">
            <h5 class="fw-medium text-uppercase">Company</h5>
            <ul class="nav-menu m-0 p-0">
              <li class="nav-items">
                <a href="/About.html" class="nav-links">About Us</a>
              </li>
              <li class="nav-items">
                <a href="/Services.html" class="nav-links">Services</a>
              </li>
              <li class="nav-items">
                <a href="/index.html" class="nav-links">Portfolio</a>
              </li>
            </ul>
          </div>

          <!-- Foot Nav links 3 -->
          <div class="col-12 col-md-3 col-lg-2 foot-links mb-3">
            <h5 class="fw-medium text-uppercase">Legal</h5>
            <ul class="nav-menu m-0 p-0">
              <li class="nav-items">
                <a href="#" class="nav-links">Return Policy</a>
              </li>
              <li class="nav-items">
                <a href="#" class="nav-links">Shipping Policy</a>
              </li>
              <li class="nav-items">
                <a href="#" class="nav-links">Privacy Policy</a>
              </li>
              <li class="nav-items">
                <a href="#" class="nav-links">Terms of Services</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col-12 col-lg-8 order-2 order-lg-1">
            <p class="text-center text-lg-start">&copy; 2023 Dekorior. All rights reserved</p>
          </div>
          <div
            class="col-12 col-lg-4 d-flex justify-content-center align-items-center gap-3 footer-icons order-1 mb-4 order-lg-2 justify-content-lg-end"
          >
            <a href="#"
              ><img src="./assets/image/icons/WhatsApp.svg" alt="WhatsApp Icon"
            /></a>
            <a href="#"
              ><img src="./assets/image/icons/Facebook.svg" alt="Facebook Icon"
            /></a>
            <a href="#"
              ><img
                src="./assets/image/icons/Instagram.svg"
                alt="Instagram Icon"
            /></a>
          </div>
        </div>
      </div>
    </footer>
    `;
  }
}

customElements.define("app-footer", Footer);
