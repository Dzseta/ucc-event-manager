import { defineStore } from "pinia"
import { computed, ref } from "vue";

export const useEventStore = defineStore('eventStore', () => {
    const events = ref([
        {id: 'id1', userid: 'uid', title: 'title1', desc: 'Description', date: '2025-06-12', time: '12:00:00'},
        {id: 'id2', userid: 'uid', title: 'title2', desc: 'Description 2', date: '2025-06-12', time: '14:00:00'}
    ]);

    const getEventUseridById = computed(() => {
        return (id) => {
            return events.value.find((event) => event.id === id).userid;
        };
    });

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

    const addEvent = (eventTitle, eventDesc, eventDate, eventTime) => {
        const event = {
            id: eventTitle,
            userid: 'uid',
            title: eventTitle,
            desc: eventDesc,
            date: eventDate,
            time: eventTime
        };

        events.value.unshift(event);
    };

    const updateEvent = (id, eventUserid, eventTitle, eventDesc, eventDate, eventTime) => {
        const index = events.value.findIndex((event) => event.id === id);
        events.value[index].userid = eventUserid;
        events.value[index].title = eventTitle;
        events.value[index].desc = eventDesc;
        events.value[index].date = eventDate;
        events.value[index].time = eventTime;
    };

    const deleteEvent = (idToDelete) => {
        events.value = events.value.filter(event => event.id != idToDelete);
    };

    return {
        events,
        addEvent,
        updateEvent,
        deleteEvent,
        getEventUseridById,
        getEventTitleById,
        getEventDateById,
        getEventTimeById,
        getEventDescById
    };
});