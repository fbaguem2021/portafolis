const navbar = Vue.createApp({
    template: /*html*/`
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-lg-0 nav-links d-flex flex-row-reverse">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item"><a href="" class="nav-link">Test</a></li>
                    <li class="nav-item">
                        <a type="button" class="nav-link" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 2">Last</a>
                    </li>
                </ul>
                <button style="color: yellow;" class="btn btn-outline-primary nav-icon"><i class="bi bi-sun-fill"></i></button>
                <span class="nav-space"></span>
            </div>
        </div>
    </nav>
    `
})