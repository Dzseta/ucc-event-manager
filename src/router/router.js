import EditEventView from '@/views/EditEventView.vue';
import EventsView from '@/views/EventsView.vue';
import HelpDeskView from '@/views/HelpDeskView.vue';
import LoginView from '@/views/LoginView.vue';
import ResetPasswordView from '@/views/ResetPasswordView.vue';
import { createRouter, createWebHashHistory } from 'vue-router';


const routes = [
    {
    path: '/',
    component: LoginView,
    name: 'login'
  },
  {
    path: '/reset-password',
    component: ResetPasswordView,
    name: 'reset-password'
  },
  {
    path: '/events',
    component: EventsView,
    name: 'events'
  },
  {
    path: '/edit-event/:id',
    component: EditEventView,
    name: 'edit-event'
  },
  {
    path: '/helpdesk',
    component: HelpDeskView,
    name: 'helpdesk'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;