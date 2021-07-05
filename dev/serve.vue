<script>
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
import { VeilNotifications,notification } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  components: {
    VeilNotifications,
  },
  data(){
    return {
      notification
    }
  }
});
</script>

<template>
  <div id="app">
    <veil-notifications/>
    <div @click="notification.error(12345)">123</div>
  </div>
</template>
