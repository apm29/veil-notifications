<template>
  <div
      class="tw-absolute tw-top-1 tw-left-1.5 tw-flex tw-flex-col tw-items-start"
  >
    <transition-group name="slide-y-transition">
      <NotificationContent
          v-for="notification of notifyQueue.filter((it) => it.group === 'tl')"
          :notification="notification"
          :key="notification.id"
      />
    </transition-group>
  </div>
  <div
      class="tw-absolute tw-top-1 tw-right-1.5 tw-flex tw-flex-col tw-items-end"
  >
    <transition-group name="slide-y-transition">
      <NotificationContent
          v-for="notification of notifyQueue.filter((it) => it.group === 'tr')"
          :notification="notification"
          :key="notification.id"
      />
    </transition-group>
  </div>
  <div
      class="
      tw-absolute tw-bottom-5 tw-left-1.5 tw-flex tw-flex-col tw-items-start
    "
  >
    <transition-group  name="slide-y-reverse-transition">
      <NotificationContent
          v-for="notification of notifyQueue.filter((it) => it.group === 'bl')"
          :notification="notification"
          :key="notification.id"
      />
    </transition-group>
  </div>
  <div
      class="
      tw-absolute tw-bottom-5 tw-right-1.5 tw-flex tw-flex-col tw-items-end
    "
  >
    <transition-group  name="slide-y-reverse-transition">
      <NotificationContent
          v-for="notification of notifyQueue.filter((it) => it.group === 'br')"
          :notification="notification"
          :key="notification.id"
      />
    </transition-group>
  </div>

  <div
      class="
      tw-absolute
      tw-bottom-5
      tw-right-1.5
      tw-left-1.5
      tw-flex
      tw-flex-col
      tw-items-center
    "
  >
    <transition-group  name="slide-y-reverse-transition">
      <NotificationContent
          v-for="notification of notifyQueue.filter((it) => it.group === 'bc')"
          :notification="notification"
          :key="notification.id"
      />
    </transition-group>
  </div>
  <div
      class="
      tw-absolute
      tw-top-1
      tw-right-1.5
      tw-left-1.5
      tw-flex
      tw-flex-col
      tw-items-center
    "
  >
   <transition-group  name="slide-y-transition">
      <NotificationContent
          v-for="notification of notifyQueue.filter((it) => it.group === 'tc')"
          :notification="notification"
          :key="notification.id"
      />
    </transition-group>
  </div>
</template>

<script>
import { notifyQueue } from './notify'
import NotificationContent from './NotificationContent.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Notification',
  components: { NotificationContent },
  emits: ['notification-click'],
  setup() {
    return {
      notifyQueue,
    }
  },
})
</script>
<style scoped>
</style>
