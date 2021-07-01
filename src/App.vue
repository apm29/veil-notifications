<template>
  <div>
    <button
        @click="notification.error('ERRRRRRRRRRRRRRRRRRRRRRRROR', 2500000, 'tl')"
    >
      error
    </button>
    <button @click="notification.success(123)">success</button>
    <button @click="notification.warning(123)">warning</button>
    <button @click="notification.info(123)">info</button>
    <button
        @click="
        notification.info(123, 2500, 'tl', { a: 1 }, (data) => testDialog(data))
      "
    >
      info
    </button>
    <button @click="notification.info(123, 2500, 'bl')">info</button>
    <button @click="notification.info(123, 2500, 'br')">info</button>
    <button @click="notification.info(123, 2500, 'bc')">info</button>
    <button @click="notification.info(123, 2500, 'tc')">info</button>
  </div>
  <Notification/>
</template>

<script>
import Notification from './components/index'
import { notification } from "./components/notify"
export default {
  components: { Notification },
  data(){
    return{
      notification
    }
  },
  methods:{
    async testDialog(data = "确认关闭吗") {
        alert(JSON.stringify(data));
    },
  }
}
</script>

<style>
</style>
