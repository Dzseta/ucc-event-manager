<template>
    <div class="m-4">
        <form @submit.prevent="onSubmit">
            <div class="card auth-form">
                <div class="card-content">
                <div class="title has-text-centered">{{ formTitle }}</div>
                <div class="content">
                    <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                        <input class="input" type="email" placeholder="Email Address" v-model="credentials.email" />
                    </div>
                    </div>
                    <div class="field">
                    <label class="label">Password</label>
                    <div class="control">
                        <input
                        class="input"
                        type="Password"
                        placeholder="Enter Password"
                        v-model="credentials.password"
                        />
                    </div>
                    </div>

                    <div class="field is-grouped is-grouped-right">
                    <p class="control">
                        <button class="button is-warning">{{ formTitle }}</button>
                    </p>
                    </div>
                </div>
                </div>
            </div>
        </form>
        <div class="columns is-centered m-4">
            <ul>
                <li class="button is-warning mr-4" :class="{ 'is-active': !register }"><a class="has-text-black" @click.prevent="register = false">To login</a></li>
                <li class="button is-warning" :class="{ 'is-active': register }"><a class="has-text-black" @click.prevent="register = true">To registration</a></li>
            </ul>
        </div>
        <div class="columns is-centered m-2">
            <RouterLink :to="{ name: 'reset-password' }" class="button is-warning">
                <strong>Reset Password</strong>
            </RouterLink>    
        </div>
    </div>
</template>

    <script setup>
    import { computed, reactive, ref } from 'vue';
    import { useAuthStore } from '@/stores/AuthStore';

    const register = ref(false);
    const authStore = useAuthStore();


    const credentials = reactive({
        email: '',
        password: ''
    });

    const formTitle = computed(() => {
        return register.value ? 'Register' : 'Login';
    });

    const onSubmit = () => {
        if (!credentials.email || !credentials.password) {
            alert('Please enter e-mail and password');
            return;
        }

        if (register.value) {
            authStore.registerUser(credentials);
        } else {
            authStore.loginUser(credentials);
        }
    };
</script>

<style scoped>
    .auth-form {
        max-width: 400px;
        margin: 0 auto;
    }
</style>