<template>
  <div>
    <div>
      <RouterLink :to="{ name: 'login' }">Login</RouterLink> | 
      <RouterLink :to="{ name: 'register' }">Register</RouterLink> | 
      <RouterLink :to="{ name: 'reset-password' }">Reset password</RouterLink> | 
      <RouterLink :to="{ name: 'events' }">Events</RouterLink> | 
      <RouterLink :to="{ name: 'helpdesk' }">Help Desk</RouterLink>
    </div>
    <RouterView />
  </div>
</template>