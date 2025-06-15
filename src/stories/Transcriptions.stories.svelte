<script module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import Transcriptions from "../components/Transcriptions.svelte";
    import { fn } from "storybook/test";
  
    const { Story } = defineMeta({
      title: "Example/Transcriptions",
      component: Transcriptions,
      tags: ["autodocs"],
      argTypes: {
        maxSegments: { control: "number" }
      }
    });
  </script>
  
  <Story name="Transcriptions" args={{ maxSegments: 30 }} />
  