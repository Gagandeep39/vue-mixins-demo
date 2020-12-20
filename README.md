# Vue mixins Demo

- [Vue mixins Demo](#vue-mixins-demo)
  - [Deployment](#deployment)
  - [Reusability](#reusability)
  - [Mixins](#mixins)
  - [Multiple Mixins](#multiple-mixins)
  - [Global Mixins](#global-mixins)

## Deployment

- Checkout deployment at <https://gagandeep39.github.io/vue-mixins-demo/>
-

## Reusability

- Reusing similar code
- Logic, templates are most commonly reused
- Vue provides mixins to do the same

## Mixins

- Reusing same code
- Wen we have same Javascript logic bu different template, we use mixins

```js
// Mixin Code
import UserAlert from '../components/UserAlert.vue';

export default {
  components: {
    UserAlert,
  },
  data() {
    return {
      alertIsVisible: false,
    };
  },
  methods: {
    showAlert() {
      this.alertIsVisible = true;
    },
    hideAlert() {
      this.alertIsVisible = false;
    },
  },
};
```

```js
// Using it in actual component
import alertMixin from '../mixins/alert';

export default {
  mixins: [alertMixin],
};
```

## Multiple Mixins

- We can use half code from mixin, and other from inside component
- At runtime, component and mixin data are merged together
- If mixing and component have same data, **Components have higher priority**
- In case of lifeccle hooks, mixins will execute first, followed by component hooks

## Global Mixins

- Limited usecase
- Can be used for logging
- Can be used in all components
- Not required to be imported

```js
export default {
  mounted() {
    console.log('Logger Mixin - Mounted hook');
  },
};
```

```js
// Registering in root fil
import loggerMixin from './mixins/logger';

createApp(App)
  .mixin(loggerMixin)
  .mount('#app');
```
