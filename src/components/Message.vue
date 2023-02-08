<script lang="jsx">
import { useMessage } from 'naive-ui';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const message = useMessage();
    window.msg = message;
    return () => undefined;
  },
});
</script>
