<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">
                {{ event.date + " @ " + event.time + " - " + event.title}}
            </p>
            <button class="card-header-icon" aria-label="more options">
            <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
            </button>
        </header>
        <div class="card-content">
            <div class="content">
                {{ event.desc }}
            </div>
        </div>
        <footer class="card-footer">
            <RouterLink :to="{ name: 'edit-event', params: { id: event.id } }" class="card-footer-item">Edit</RouterLink>
            <a href="#" class="card-footer-item" @click.prevent="onDeleteEvent">Delete</a>
        </footer>
    </div>
</template>

<script setup>
import { useEventStore } from '@/stores/EventStore';

    const props = defineProps({
        event: {
            type: Object,
            required: true
        }
    });

    const eventStore = useEventStore();

    const onDeleteEvent = () => {
        eventStore.deleteEvent(props.event.id);
    }
</script>