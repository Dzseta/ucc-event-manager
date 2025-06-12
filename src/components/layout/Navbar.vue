<template>
    <nav class="navbar is-warning px-4" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <RouterLink :to="{ name: 'events' }" class="navbar-item is-size-4 is-family-monospace">
                <strong>Event Manager</strong>
            </RouterLink>
            <a  role="button"
                class="navbar-burger has-text-black"
                :class="{ 'is-active': showNavBarMenu }"
                @click.prevent="showNavBarMenu = !showNavBarMenu"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarTop"
                >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarTop" :class="{ 'is-active': showNavBarMenu }" class="navbar-menu">
            <div class="navbar-start">
                <RouterLink :to="{ name: 'events' }" class="navbar-item">
                    <strong>Events</strong>
                </RouterLink>
                <RouterLink :to="{ name: 'helpdesk' }" class="navbar-item">
                    <strong>Help Desk</strong>
                </RouterLink>
            </div>
            
            <div class="navbar-end">
                <div class="navbar-item ">
                    <div class="buttons">
                        <RouterLink :to="{ name: 'login' }" active-class="is-active" class="button is-dark">
                            <strong>Log in</strong>
                        </RouterLink>
                    </div>
                </div>
                <div class="navbar-item" v-if="authStore.user.uid">
                    <div class="buttons">
                        <RouterLink :to="{ name: 'login' }" active-class="is-active" class="button is-dark" @click.prevent="onLogout">
                            <strong>Log out</strong>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
    import { ref } from 'vue';
    import { useAuthStore } from '../../stores/AuthStore';

    const showNavBarMenu = ref(false);
    const authStore = useAuthStore();

    const onLogout = () => {
        authStore.logoutUser();
    };
</script>

<style scoped>
    @media (max-width: 1000px) {
        .navbar-menu {
            position: absolute;
            left: 0;
            right: 0;
        }
    }
</style>