<template>
    <div class="m-4">
        <form>
            <div class="card auth-form">
                <div class="card-content">
                    <div class="title has-text-centered">Reset password</div>
                        <div class="content">
                            <div class="field">
                                <label class="label">Email</label>
                            <div class="control">
                                <input class="input" type="email" placeholder="Email Address" />
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">New Password</label>
                            <div class="control">
                                <input
                                class="input"
                                type="Password"
                                placeholder="Enter Password"
                                />
                            </div>
                        </div>

                        <div class="field is-grouped is-grouped-right">
                            <p class="control">
                                <button class="button is-warning">Reset</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<style scoped>
    .auth-form {
        max-width: 400px;
        margin: 0 auto;
    }
</style>