<template>
    <header class="app-header main-layout full">
        <section class="app-header__inner flex justify-between items-center">

            <div class="logo-wrapper" @click="$router.push('/')">
                <!-- <img src="" alt="LOGO"> -->
                <h2>LOGO</h2>
            </div>

            <nav class="nav-wrapper" :class="{ open: isMenuOpen }">
                <ul class="nav clean-list flex">

                    <span class="close-menu-btn" @click="toggleMenu">
                        <font-awesome-icon icon="fa-light fa-circle-x" />
                    </span>

                    <li v-for="(link, idx) in links" :key="link.id">
                        <router-link class="header-link" :to="link.path" @click="setActive(idx)"
                            :class="{ active: currActive === idx, hide: link.title === 'Login' && loggedInUser}">
                            {{ link.title }}
                        </router-link>
                    </li>

                </ul>
            </nav>

            <div class="hamburger-wrapper" @click="toggleMenu">
                <font-awesome-icon icon="fa-light fa-bars" />
            </div>

        </section>
    </header>
</template>

<script>
import { utilService } from '../services/util.service'
export default {
    name: 'app-header',
    data() {
        return {
            links: null,
            isMenuOpen: false,
            currActive: 0,
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen
        },
        setActive(idx) {
            this.currActive = idx
            this.toggleMenu()
        },
    },
    computed: {
        loggedInUser() {
            return this.$store.getters.loggedinUser
        }
    },
    created() {
        this.links = utilService.getHeaderLinks()

    },
}
</script>
