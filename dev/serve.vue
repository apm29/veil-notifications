<script>
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { VeilNotificationsSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  // components: {
  //  VeilNotificationsSample,
  // }
});
</script>

<template>
  <div id="app">
    <veil-notifications-sample />
  </div>
</template>
