<template>
    <AddEditEvent v-model:eventTitle="eventTitle" 
        v-model:eventDesc="eventDesc" 
        v-model:eventDate="eventDate" 
        v-model:eventTime="eventTime"
        ref="addEditEventRef">
        <template #button>
                <button :disabled="!eventTitle || !eventDate || !eventTime" class="button is-link has-background-black" @click.prevent="addEvent">
                    Submit
                </button>
        </template>
    </AddEditEvent>

    <SingleEvent v-for="event in events" :key="event.id" :event="event"/>    
</template>

<script setup>
    import { ref } from 'vue';
    import SingleEvent from '@/components/events/SingleEvent.vue';
    import { useEventStore } from '@/stores/EventStore';
    import { storeToRefs } from 'pinia';
    import AddEditEvent from '@/components/events/AddEditEvent.vue';

    const eventStore = useEventStore();

    const addEditEventRef = ref(null);

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
        addEditEventRef.value.focusTitle();
    }

</script>
