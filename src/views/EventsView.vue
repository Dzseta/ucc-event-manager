<template>
    <div class="has-background-warning-dark my-4 p-4">
        <div class="field">
            <label class="label has-text-light">Title</label>
            <div class="control">
                <input class="input" type="text" placeholder="Title">
            </div>
        </div>

        <div class="field">
            <label class="label has-text-light">Description</label>
            <div class="control">
                <textarea class="textarea" placeholder="Description"></textarea>
            </div>
        </div>

        <div class="field">
            <label class="label has-text-light">Date & Time</label>
            <div class="control">
                <input class="input" type="date" placeholder="Date">
            </div>
            <div class="control">
                <input class="input" type="time" placeholder="Time">
            </div>
        </div>

        <div class="field is-grouped is-grouped-right">
            <div class="control">
                <button class="button is-link is-warning">Submit</button>
            </div>
        </div>
    </div>


    <div class="card">
        <header class="card-header">
            <p class="card-header-title">Component</p>
            <button class="card-header-icon" aria-label="more options">
            <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
            </button>
        </header>
        <div class="card-content">
            <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
                iaculis mauris.
            </div>
        </div>
        <footer class="card-footer">
            <a href="#" class="card-footer-item">Edit</a>
            <a href="#" class="card-footer-item">Delete</a>
        </footer>
    </div>
</template>