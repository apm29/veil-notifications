<template>
  <div
    class="notification-wrapper tw-px-6 tw-py-3 tw-rounded-xl tw-shadow-2xl tw-mb-2
  tw-border-l-8 tw-border-t-0 tw-border-b-0 tw-border-r-0 tw-border-solid
  tw-font-bold tw-text-lg tw-flex tw-items-center tw-flex-nowrap tw-cursor-pointer"
    :class="[notification.type]"
    @click="notification.onNotificationClick()"
  >
    <div class="tw-flex-grow tw-text-left">
      {{ notification.message }}
    </div>
    <div class="tw-w-2 tw-flex-shrink-0"></div>
    <div v-html="getIcon(notification.type)">
    </div>
  </div>
</template>
<script>
export default {
  name: "NotificationContent",
  props: {
    notification: {},
  },
  setup() {
    const getIcon = function (type) {
      switch (type) {
        case "error":
          return `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z" /></svg>`;
        case "warning":
          return `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M13,17H11V15H13V17M13,13H11V7H13V13Z" /></svg>`;
        case "success":
          return `<svg fill="#fff" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512z m0-938.666667a426.666667 426.666667 0 1 0 426.666667 426.666667A426.666667 426.666667 0 0 0 512 85.333333z m-85.333333 622.506667a42.666667 42.666667 0 0 1-30.72-14.506667l-128-145.493333a42.666667 42.666667 0 1 1 64-56.32l94.72 110.933333 266.24-273.493333a42.666667 42.666667 0 0 1 61.44 59.733333l-298.666667 306.346667a42.666667 42.666667 0 0 1-29.013333 12.8z"></path></svg>`;
        case "info":
          return `<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M512 180c88.6 0 172 34.6 234.8 97.2C809.4 340 844 423.4 844 512s-34.6 172-97.2 234.8C684 809.4 600.6 844 512 844s-172-34.6-234.8-97.2C214.6 684 180 600.6 180 512s34.6-172 97.2-234.8C340 214.6 423.4 180 512 180m0-84C282.2 96 96 282.2 96 512s186.2 416 416 416 416-186.2 416-416S741.8 96 512 96z"></path><path d="M554 720h-84V470h84v250z m0-332h-84v-84h84v84z"></path></svg>`;
        default:
          return `<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M512 180c88.6 0 172 34.6 234.8 97.2C809.4 340 844 423.4 844 512s-34.6 172-97.2 234.8C684 809.4 600.6 844 512 844s-172-34.6-234.8-97.2C214.6 684 180 600.6 180 512s34.6-172 97.2-234.8C340 214.6 423.4 180 512 180m0-84C282.2 96 96 282.2 96 512s186.2 416 416 416 416-186.2 416-416S741.8 96 512 96z"></path><path d="M554 720h-84V470h84v250z m0-332h-84v-84h84v84z"></path></svg>`;
      }
    };
    return {
      getIcon,
    };
  },
};
</script>
<style scoped>
.notification-wrapper {
  min-width: 16rem;
  min-height: 4rem;
}

.error {
  color: white;
  background-color: rgb(239,68,68);
  border-color: rgb(254,202,202);
}

.info {
  background-color: #fff;
  color: rgb(82,82,91);
  border-color: rgb(125,211,252);
}

.success {
  background-color:rgb(34,197,94);
  color:  #fff;
  border-color: rgb(187,247,208);
}

.warning {
  background-color:rgb(245,158,11);
  color:  #fff;
  border-color: rgb(253,230,138);
}
</style>
