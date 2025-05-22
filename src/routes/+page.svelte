<script lang="ts">
  // svelte
  import { goto } from "$app/navigation";

  // SMUI
  import { AppContent } from "@smui/drawer";
  import Card, { ActionIcons, Actions, Content, Media, MediaContent, PrimaryAction } from '@smui/card';
  import IconButton from "@smui/icon-button";
  import LayoutGrid, { Cell } from '@smui/layout-grid';

  // data
  import { robots } from "$lib/data/robots";
  import { page } from "$app/state";
  
  const prefix = page.url.href + '/..';
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
                <div
                  style="color: #fff; margin: 16px;"
                >
                <h2 class="mdc-typography--headline6" style="margin: 0;">
                  {robot.title}
                </h2>
                <h3
                  class="mdc-typography--subtitle2"
                  style="margin: 0 0 10px; color: #888;"
                >
                  {robot.desc}
                </h3>
                </div>
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