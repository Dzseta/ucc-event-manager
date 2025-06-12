import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { defineStore } from 'pinia';
import { auth } from '../firebase/firebase';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useEventStore } from './EventStore';

export const useAuthStore = defineStore('authStore', () => {

    const user = ref({});
    const router = useRouter();
    const eventStore = useEventStore();

    const init = () => {
        onAuthStateChanged(auth, (userDetails) => {
            if (userDetails) {
                const uid = userDetails.uid;
                user.value = { email: userDetails.email, uid };
                router.push({ name: 'events' });
                eventStore.getEvents();
            } else {
                user.value = {};
                router.replace({ name: 'login' });
                eventStore.clearEvents();
            }
        });
    };

    const registerUser = (credentials) => {
        createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    const loginUser = (credentials) => {
        signInWithEmailAndPassword(auth, credentials.email, credentials.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
        })
        .catch((error) => {
            console.log(error.message);
        });
    };

    const logoutUser = () => {
        signOut(auth)
            .then(() => {
                console.log('Logged out');
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    return {
        registerUser,
        loginUser,
        logoutUser,
        init,
        user
    };
});
