<script lang="ts">
  import Dialog, { Title, Content, Actions } from '@smui/dialog';
  import Button, { Label } from '@smui/button';

  let {
    open = $bindable(false),
    resetRobot = undefined
  }: {
    open: boolean,
    resetRobot?: () => void
  } = $props();
</script>



<Dialog
  bind:open
  aria-labelledby="delete-title"
  aria-describedby="delete-content"
>
  <!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
  <Title id="delete-title">A fresh start</Title>
  <Content id="delete-content">Delete the whole robot?</Content>
  <Actions>
    <Button>
      <Label>No</Label>
    </Button>
    <Button onclick={
      (e: any) => {
        if (resetRobot) {
          resetRobot()
        }
      }}>
      <Label>Yes</Label>
    </Button>
  </Actions>
</Dialog>
