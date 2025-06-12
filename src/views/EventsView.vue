<template>
    <div class="has-background-warning-dark my-4 p-4">
        <div class="field">
            <label class="label has-text-light">Title</label>
            <div class="control">
                <input class="input" type="text" placeholder="Title" v-model="eventTitle" ref="newEventRef">
            </div>
        </div>

        <div class="field">
            <label class="label has-text-light">Description</label>
            <div class="control">
                <textarea class="textarea" placeholder="Description" v-model="eventDesc"></textarea>
            </div>
        </div>

        <div class="field">
            <label class="label has-text-light">Date & Time</label>
            <div class="control">
                <input class="input" type="date" placeholder="Date" v-model="eventDate">
            </div>
            <div class="control">
                <input class="input" type="time" placeholder="Time" v-model="eventTime">
            </div>
        </div>

        <div class="field is-grouped is-grouped-right">
            <div class="control">
                <button :disabled="!eventTitle || !eventDesc || !eventDate || !eventTime" class="button is-link is-warning" @click.prevent="addEvent">Submit</button>
            </div>
        </div>
    </div>

    <SingleEvent v-for="event in events" :key="event.id" :event="event"/>    
</template>

<script setup>
    import { ref } from 'vue';
    import SingleEvent from '@/components/events/SingleEvent.vue';
    import { useEventStore } from '@/stores/EventStore';
    import { storeToRefs } from 'pinia';

    const eventStore = useEventStore();

    const newEventRef = ref(null);

    const { events } = storeToRefs(eventStore);

    const eventTitle = ref('');
    const eventDesc = ref('');
    const eventDate = ref('');
    const eventTime = ref('');

    const addEvent = () => {
        eventStore.addEvent(eventTitle.value, eventDesc.value, eventDate.value, eventTime.value);

        eventTitle.value = '';
        eventDesc.value = '';
        eventDate.value = '';
        eventTime.value = '';
        newEventRef.value.focus();
    }

</script>
