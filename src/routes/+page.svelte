<script lang="ts">
  // svelte
  import { goto } from "$app/navigation";

  // SMUI
  import { AppContent } from "@smui/drawer";
  import Card, { ActionIcons, Actions, Content, Media, PrimaryAction } from '@smui/card';
  import IconButton from "@smui/icon-button";
  import LayoutGrid, { Cell } from '@smui/layout-grid';

  // data
  import { robots } from "$lib/data/robots";

</script>

<AppContent >
  <main style="width: 80%">
    <LayoutGrid>
      {#each robots as robot}
        <Cell>
          <Card>
            <PrimaryAction onclick={() => {
              goto(robot.name + '/edit')
            }}>
              <Media class="card-media-16x9" aspectRatio="16x9" />
              <Content class="mdc-typography--body2">
                <h2 class="mdc-typography--headline6" style="margin: 0;">
                  {robot.title}
                </h2>
                <h3
                  class="mdc-typography--subtitle2"
                  style="margin: 0 0 10px; color: #888;"
                >
                  {robot.desc}
                </h3>
              </Content>
            </PrimaryAction>
            <Actions>
              <ActionIcons>
                <IconButton
                  class="material-icons"
                  title="View"
                  onclick={() => {
                    goto(robot.name + '/view')
                  }}>visibility</IconButton
                >
                <IconButton
                  class="material-icons"
                  title="Edit"
                  onclick={() => {
                    goto(robot.name + '/edit')
                  }}>edit</IconButton
                >
                <IconButton
                  class="material-icons"
                  title="Delete">delete</IconButton
                >
              </ActionIcons>
            </Actions>
          </Card>
        </Cell>
      {/each}
    </LayoutGrid>
  </main>
</AppContent>

<style>

</style>