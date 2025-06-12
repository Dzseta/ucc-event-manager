<template>
    <div class="has-background-warning  box my-4 p-4">
        <div class="field">
            <label class="label">Title</label>
            <div class="control">
                <input class="input" 
                    type="text" 
                    placeholder="Title" 
                    :value="eventTitle" 
                    @input="$emit('update:eventTitle', $event.target.value)" 
                    ref="newEventRef">
            </div>
        </div>

        <div class="field">
            <label class="label">Description</label>
            <div class="control">
                <textarea class="textarea" 
                    placeholder="Description" 
                    :value="eventDesc"
                    @input="$emit('update:eventDesc', $event.target.value)">
                </textarea>
            </div>
        </div>

        <div class="field">
            <label class="label">Date & Time</label>
            <div class="control column mt-2 is-one-quarter">
                <input class="input" 
                    type="date" 
                    placeholder="Date" 
                    :value="eventDate"
                    @input="$emit('update:eventDate', $event.target.value)">
            </div>
            <div class="control column mt-2 is-one-quarter">
                <input class="input" 
                    type="time" 
                    placeholder="Time" 
                    :value="eventTime"
                    @input="$emit('update:eventTime', $event.target.value)">
            </div>
        </div>

        <div class="field is-grouped is-grouped-right">
            <div class="control">
                <slot name="button"></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

    const props = defineProps(['eventTitle', 'eventDesc', 'eventDate', 'eventTime']);
    const emit = defineEmits(['update:eventTitle', 'update:eventDesc', 'update:eventDate', 'update:eventTime']);

    const newEventRef = ref(null);
    const focusTitle = () => {
        newEventRef.value.focus();
    };

    defineExpose({
        focusTitle
    });
</script>