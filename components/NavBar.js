const navbar = Vue.createApp({
    template: /*html*/`
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <button style="color: yellow;" class="btn btn-transparent nav-logo"><i class="bi bi-sun-fill"></i></button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                <ul class="navbar-nav navbar-animated mb-2 mb-lg-0 nav-links">
                    <li class="nav-item" style="height: 46px;">
                        <img class="nav-icon" src="./media/fb-logo2-white.svg" alt="" width="32" height="32">
                    </li>
                    <div class="nav-links-container">
                        <li v-for="link in links" :key="link.lbl"
                            class="nav-item">
                            <a type="button" class="nav-link" data-bs-target="#mi-carousel" :data-bs-slide-to="link.target" :aria-label="link.lbl">
                                <i class="bi" :class="link.icon"></i> {{ link.txt }}
                            </a>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    </nav>
    `,
    data() {
        return {
            links_count: Number
        }
    },
    methods: {
        carousel(txt, icon) {
            if (this.links_count === Number) {
                this.links_count = 0; 
            } else {
                this.links_count++
            }
            const target = this.links_count
            return { carousel: true, id: '#mi-carousel', target, txt, lbl:`Slide ${target}`, icon: `bi-${icon}` }
        }
    },
    computed: {
        links() {
            return [
                this.carousel('About Me', 'person-vcard'),
                this.carousel('Projects', 'briefcase'),
                this.carousel('Languages', 'globe-americas'),
                this.carousel('Hard/Soft Skils', 'lightning'),
                this.carousel('Contact', 'telephone'),
            ]
        }
    }
})