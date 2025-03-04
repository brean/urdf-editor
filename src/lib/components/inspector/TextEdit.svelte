<script lang="ts">

import { Item } from "@smui/list";
import Textfield from "@smui/textfield";

let { element }: { element: {name?: string} } = $props();

</script>
{#if element.name}
<Item style="min-height: 65px;">
  <Textfield
    label="name"
    bind:value={element.name}
    variant="outlined"
  />
</Item>
{/if}