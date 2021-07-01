<template>
  <div
    class="tw-absolute tw-top-1 tw-left-1.5 tw-flex tw-flex-col tw-items-start"
  >
    <VeilSlideYTransition hide-on-leave group>
      <NotificationContent
        v-for="notification of notifyQueue.filter((it) => it.group === 'tl')"
        :notification="notification"
        :key="notification.id"
      />
    </VeilSlideYTransition>
  </div>
  <div
    class="tw-absolute tw-top-1 tw-right-1.5 tw-flex tw-flex-col tw-items-end"
  >
    <VeilSlideYTransition hide-on-leave group>
      <NotificationContent
        v-for="notification of notifyQueue.filter((it) => it.group === 'tr')"
        :notification="notification"
        :key="notification.id"
      />
    </VeilSlideYTransition>
  </div>
  <div
    class="
      tw-absolute tw-bottom-5 tw-left-1.5 tw-flex tw-flex-col tw-items-start
    "
  >
    <VeilSlideYReverseTransition hide-on-leave group>
      <NotificationContent
        v-for="notification of notifyQueue.filter((it) => it.group === 'bl')"
        :notification="notification"
        :key="notification.id"
      />
    </VeilSlideYReverseTransition>
  </div>
  <div
    class="
      tw-absolute tw-bottom-5 tw-right-1.5 tw-flex tw-flex-col tw-items-end
    "
  >
    <VeilSlideYReverseTransition hide-on-leave group>
      <NotificationContent
        v-for="notification of notifyQueue.filter((it) => it.group === 'br')"
        :notification="notification"
        :key="notification.id"
      />
    </VeilSlideYReverseTransition>
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
    <VeilSlideYReverseTransition hide-on-leave group>
      <NotificationContent
        v-for="notification of notifyQueue.filter((it) => it.group === 'bc')"
        :notification="notification"
        :key="notification.id"
      />
    </VeilSlideYReverseTransition>
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
    <VeilSlideYTransition hide-on-leave group>
      <NotificationContent
        v-for="notification of notifyQueue.filter((it) => it.group === 'tc')"
        :notification="notification"
        :key="notification.id"
      />
    </VeilSlideYTransition>
  </div>
</template>

<script>
import { notifyQueue } from "./notify";
import NotificationContent from "./NotificationContent.vue";
import { VeilSlideYReverseTransition,VeilSlideYTransition } from "veil-transitions"
import "./chunked.css"
export default {
  name: "Notification",
  components: { NotificationContent,VeilSlideYReverseTransition,VeilSlideYTransition },
  emits: ["notification-click"],
  setup() {
    return {
      notifyQueue,
    };
  },
};
</script>
