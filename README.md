### INSTALL

```shell
yarn add veil-notifications
```
```shell
npm install veil-notification --save
```

### USAGE
1.首先在全局组件中放置`Notification`组件,一般就放置在`App.vue`
```vue
<template>
  <router-view></router-view>
  <Notification/>
</template>

<script>
import Notification from 'veil-notification'
export default {
  
}
</script>
```

2.在代码中发送通知
```javascript
import { notification } from "./components/notify"

notification.success("I'm message content")
```


### API

`notification` 挂载了四个函数,分别是success/warning/info/error,参数都是一样的

* message, //消息内容
* duration = 2500, //持续时间
* group = "tr", //位置: tl tr tc 左上 右上 顶部居中  bl br bc 左下 右下 底部居中
* data, //data参数,会在点击时传递给`onNotificationClick`
* onNotificationClick //点击事件

