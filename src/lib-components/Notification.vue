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
import { notifyQueue } from './notify'
import NotificationContent from './NotificationContent.vue'
import { VeilSlideYReverseTransition, VeilSlideYTransition } from 'veil-transitions'
import './chunked.css'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Notification',
  components: { NotificationContent, VeilSlideYReverseTransition, VeilSlideYTransition },
  emits: ['notification-click'],
  setup() {
    return {
      notifyQueue,
    }
  },
})
</script>
<style scoped>
*, ::after, ::before {
  --tw-border-opacity: 1;
  border-color: rgba(228, 228, 231, var(--tw-border-opacity))
}

.tw-absolute {
  position: absolute
}

.tw-top-1 {
  top: .25rem
}

.tw-right-1 {
  right: .25rem
}

.tw-right-1\.5 {
  right: .375rem
}

.tw-bottom-5 {
  bottom: 1.25rem
}

.tw-left-1 {
  left: .25rem
}

.tw-left-1\.5 {
  left: .375rem
}

.tw-mb-2 {
  margin-bottom: .5rem
}

.tw-flex {
  display: flex
}

.tw-h-12 {
  height: 3rem
}

.tw-h-screen {
  height: 100vh
}

.tw-w-2 {
  width: .5rem
}

.tw-flex-shrink-0 {
  flex-shrink: 0
}

.tw-flex-grow {
  flex-grow: 1
}

@-webkit-keyframes tw-spin {
  to {
    transform: rotate(360deg)
  }
}

@keyframes tw-spin {
  to {
    transform: rotate(360deg)
  }
}

@-webkit-keyframes tw-ping {
  100%, 75% {
    transform: scale(2);
    opacity: 0
  }
}

@keyframes tw-ping {
  100%, 75% {
    transform: scale(2);
    opacity: 0
  }
}

@-webkit-keyframes tw-pulse {
  50% {
    opacity: .5
  }
}

@keyframes tw-pulse {
  50% {
    opacity: .5
  }
}

@-webkit-keyframes tw-bounce {
  0%, 100% {
    transform: translateY(-25%);
    -webkit-animation-timing-function: cubic-bezier(.8, 0, 1, 1);
    animation-timing-function: cubic-bezier(.8, 0, 1, 1)
  }
  50% {
    transform: none;
    -webkit-animation-timing-function: cubic-bezier(0, 0, .2, 1);
    animation-timing-function: cubic-bezier(0, 0, .2, 1)
  }
}

@keyframes tw-bounce {
  0%, 100% {
    transform: translateY(-25%);
    -webkit-animation-timing-function: cubic-bezier(.8, 0, 1, 1);
    animation-timing-function: cubic-bezier(.8, 0, 1, 1)
  }
  50% {
    transform: none;
    -webkit-animation-timing-function: cubic-bezier(0, 0, .2, 1);
    animation-timing-function: cubic-bezier(0, 0, .2, 1)
  }
}

.tw-cursor-pointer {
  cursor: pointer
}

.tw-flex-col {
  flex-direction: column
}

.tw-flex-nowrap {
  flex-wrap: nowrap
}

.tw-items-start {
  align-items: flex-start
}

.tw-items-end {
  align-items: flex-end
}

.tw-items-center {
  align-items: center
}

.tw-rounded-xl {
  border-radius: .75rem
}

.tw-border-t-0 {
  border-top-width: 0
}

.tw-border-r-0 {
  border-right-width: 0
}

.tw-border-b-0 {
  border-bottom-width: 0
}

.tw-border-l-8 {
  border-left-width: 8px
}

.tw-border-solid {
  border-style: solid
}

.tw-bg-sky-300 {
  --tw-bg-opacity: 1;
  background-color: rgba(125, 211, 252, var(--tw-bg-opacity))
}

.tw-p-4 {
  padding: 1rem
}

.tw-px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem
}

.tw-py-3 {
  padding-top: .75rem;
  padding-bottom: .75rem
}

.tw-text-left {
  text-align: left
}

.tw-text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem
}

.tw-font-bold {
  font-weight: 700
}

*, ::after, ::before {
  --tw-shadow: 0 0 #0000
}

.tw-shadow-2xl {
  --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}

*, ::after, ::before {
  --tw-ring-inset: var(--tw-empty,); /*!*//*!*/
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59, 130, 246, 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000
}

.notification-wrapper[data-v-09719b1b] {
  min-width: 16rem;
  min-height: 4rem
}

.error[data-v-09719b1b] {
  color: #fff;
  background-color: #ef4444;
  border-color: #fecaca
}

.info[data-v-09719b1b] {
  background-color: #fff;
  color: #52525b;
  border-color: #7dd3fc
}

.success[data-v-09719b1b] {
  background-color: #22c55e;
  color: #fff;
  border-color: #bbf7d0
}

.warning[data-v-09719b1b] {
  background-color: #f59e0b;
  color: #fff;
  border-color: #fde68a
}

</style>
