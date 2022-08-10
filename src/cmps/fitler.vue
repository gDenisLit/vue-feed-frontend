<template>
  <input type="text" />
</template>
<script>
import { debounce } from 'lodash'
export default {
  name: 'filter',
  data() {
    return {
      filterBy: {
        txt: '',
      },
    }
  },
}
</script>
