# Calendar

> 日历，支持月视图, 周视图, 当日时间装饰。

-------------

## 引入

```javascript
import { Calendar } from 'mint-ui';

Vue.component(Calendar.name, Picker);
```

## 例子

将一个本地变量与 `calendar` 的 `selected` 属性同步即可实现双向绑定

```html
<mt-calendar :selected.sync="selected""></mt-calendar>
```

更多的配置项

```html
<mt-calendar
  :decorate="decorate"
  :view="'month'"
  :selected.sync="selected">
</mt-calendar>
```

```javascript
export default {
  data() {
    return {
      selected: new Date(),
      decorate: {
        '2016-08-09': true,
        '2016-08-10': true,
        '2016-08-11': true
      }
    }
  }
}
```
## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| selected | 选中的日期 | Date | | new Date |
| startMonday | 一周是否从周一开始 | Boolean | | false |
| startDate | 日历初始化时展示的日期 | Date | | new Date() |
| decorate | 日期下是否显示点 | Object | | {} |
| view | 视图类型 | String | 'month', 'week' | 'month' |
