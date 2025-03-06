<script lang="ts">

import { Item } from "@smui/list";
import Textfield from "@smui/textfield";

let {
  element,
  oninput
}: { 
  element: {name?: string}
  oninput?: () => void
} = $props();

</script>
{#if element.name}
<Item style="min-height: 65px;">
  <Textfield
    label="name"
    bind:value={element.name}
    variant="outlined"
    oninput={() => {
      if (oninput)
        oninput();
    }}
  />
</Item>
{/if}