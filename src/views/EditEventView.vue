<template>
    <AddEditEvent
        v-model:eventTitle="eventTitle" 
        v-model:eventDesc="eventDesc" 
        v-model:eventDate="eventDate" 
        v-model:eventTime="eventTime"
        ref="addEditEventRef"
        label="Edit event"
        placeholder="Edit event">
        <template #button>
            <button class="button is-dark" @click.prevent="$router.back()">Cancel</button>
            <button :disabled="!eventTitle || !eventDate || !eventTime" class="button ml-4 is-link  has-background-black"  @click.prevent="onEventSave">Save Event</button>
        </template>
    </AddEditEvent>
</template>

<script setup>
    import AddEditEvent from '@/components/events/AddEditEvent.vue';
    import { useRoute, useRouter } from 'vue-router';
    import { ref } from 'vue';
    import { useEventStore } from '@/stores/EventStore';

    const route = useRoute();
    const router = useRouter();

    const eventStore = useEventStore();

    const eventUserid = ref('');
    const eventTitle = ref('');
    const eventDesc = ref('');
    const eventDate = ref('');
    const eventTime = ref('');


    eventUserid.value = eventStore.getEventUseridById(route.params.id);
    eventTitle.value = eventStore.getEventTitleById(route.params.id);
    eventDesc.value = eventStore.getEventDescById(route.params.id);
    eventDate.value = eventStore.getEventDateById(route.params.id);
    eventTime.value = eventStore.getEventTimeById(route.params.id);

    const onEventSave = () => {
        eventStore.updateEvent(route.params.id, eventUserid.value, eventTitle.value, eventDesc.value, eventDate.value, eventTime.value);
        router.push({ name: 'events' });
    };

</script>