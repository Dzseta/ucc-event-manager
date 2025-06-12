import { defineStore } from "pinia"
import { computed, ref } from "vue";
import { getDocs, collection, onSnapshot, setDoc, doc, addDoc, updateDoc, deleteDoc,
    query, orderBy } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { useAuthStore } from './AuthStore';

export const useEventStore = defineStore('eventStore', () => {
    const events = ref([]);
    const eventsLoaded = ref(false);
    const authStore = useAuthStore();
    let eventsCollectionRef;
    let eventsCollectionQuery;
    let eventsSnapshot = null;

    const getEvents = async () => {

        eventsCollectionRef = collection(db, 'users', authStore.user.uid, 'events');
        eventsCollectionQuery = query(eventsCollectionRef, orderBy('date', 'desc'), orderBy('time', 'desc'));

        eventsSnapshot = onSnapshot(eventsCollectionQuery, (querySnapshot) => {
            let eventsData = [];
            eventsLoaded.value = false;
            querySnapshot.forEach((doc) => {
                let event = {
                    id: doc.id,
                    title: doc.data().title,
                    desc: doc.data().desc,
                    date: doc.data().date,
                    time: doc.data().time
                };
                eventsData.push(event);
            });
            events.value = eventsData;
            eventsLoaded.value = true;
        });
    };

    const clearEvents = () => {
        events.value = [];
        if (eventsSnapshot) eventsSnapshot();
    };
    
    const getEventTitleById = computed(() => {
        return (id) => {
            return events.value.find((event) => event.id === id).title;
        };
    });

    const getEventDateById = computed(() => {
        return (id) => {
            return events.value.find((event) => event.id === id).date;
        };
    });

    const getEventTimeById = computed(() => {
        return (id) => {
            return events.value.find((event) => event.id === id).time;
        };
    });

    const getEventDescById = computed(() => {
        return (id) => {
            return events.value.find((event) => event.id === id).desc;
        };
    });

    const addEvent = async (eventTitle, eventDesc, eventDate, eventTime) => {
        await addDoc(eventsCollectionRef, {
            title: eventTitle,
            desc: eventDesc,
            date: eventDate,
            time: eventTime
        });
    };

    const updateEvent = async (id, eventTitle, eventDesc, eventDate, eventTime) => {
        await updateDoc(doc(eventsCollectionRef, id), {
            title: eventTitle,
            desc: eventDesc,
            date: eventDate,
            time: eventTime
        });
    };

    const deleteEvent = async (idToDelete) => {
        await deleteDoc(doc(eventsCollectionRef, idToDelete));
    };

    return {
        events,
        addEvent,
        updateEvent,
        deleteEvent,
        getEvents,
        getEventTitleById,
        getEventDateById,
        getEventTimeById,
        getEventDescById,
        eventsLoaded,
        clearEvents
    };
});