<script module lang="ts">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import { Button, Loader } from "../components";
  import { fn } from "storybook/test";

  const { Story } = defineMeta({
    title: "Components/Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {
      backgroundColor: { control: "color" },
      size: {
        control: { type: "select" },
        options: ["small", "medium", "large"],
      },
    },
    args: {
      onclick: fn(),
    }
  });
</script>

<Story name="Primary" args={{ primary: true, label: "Button" }} />

<Story name="Secondary" args={{ label: "Button" }} />

<Story name="Small" args={{ size: "small", label: "Button" }} />

<Story name="Medium" args={{ size: "medium", label: "Button" }} />

<Story name="Large" args={{ size: "large", label: "Button" }} />

<Story name="Progress" args={{ size: "medium", label: "Button",loading: true, progress: 0.4 }} />

<Story name="Children" args={{ size: "medium", label: "Button", loading: true }}>
  {#snippet template(args)}
    <Button {...args}>
      <span>
        <Loader />
      </span>
    </Button>
  {/snippet}
</Story>
