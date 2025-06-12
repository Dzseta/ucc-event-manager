import { defineStore } from "pinia"
import { ref } from "vue";

export const useEventStore = defineStore('eventStore', () => {
    const events = ref([
        {id: 'id1', userid: 'uid', title: 'title1', desc: 'Description', date: '2025-06-12 12:00:00'},
        {id: 'id2', userid: 'uid', title: 'title2', desc: 'Description 2', date: '2025-06-12 14:00:00'}
    ]);

    const addEvent = (eventTitle, eventDesc, eventDate, eventTime) => {
        const event = {
            id: eventTitle,
            userid: 'uid',
            title: eventTitle,
            desc: eventDesc,
            date: eventDate + " " + eventTime
        };

        events.value.unshift(event);
    };

    const deleteEvent = (idToDelete) => {
        events.value = events.value.filter(event => event.id != idToDelete);
    };

    return {
        events,
        addEvent,
        deleteEvent
    };
});