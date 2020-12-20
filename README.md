# Vue mixins Demo

- [Vue mixins Demo](#vue-mixins-demo)
  - [Deployment](#deployment)
  - [Reusability](#reusability)
  - [Mixins](#mixins)

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
