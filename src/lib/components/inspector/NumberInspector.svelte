<script lang="ts">
  import { Item } from '@smui/list';
  import Textfield from '@smui/textfield';
  
  interface Props {
    data: number[]
    keys?: string[]
    type?: string
    oninput?: () => void
  }

  let {
    data,
    keys = ['x', 'y', 'z'],
    type = 'text',
    oninput = () => {}

  }: Props = $props();
</script>

<Item style="min-height: 65px;">
{#each keys as label, index}
  <Textfield
    label={label}
    {type}
    style="width: 100%;"
    oninput={() => {
      let val = Number(data[index]);
      if (isNaN(val)) {
        val = 0;
      }
      data[index] = val;
      if (oninput)
        oninput();
    }}
    bind:value={data[index]}
    variant="outlined" />
{/each}
</Item>
