<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Loader from "../components/Loader.svelte";
	import { fn } from "storybook/test";

	const { Story } = defineMeta({
		title: "Components/Loader",
		component: Loader,
		tags: ["autodocs"],
		argTypes: {
			size: { control: 'text' },
			text: { control: 'text' }
		},
		args: {
			onclick: fn(),
		}
	});
</script>

<Story name="Small" args={{ size: "small" }} />

<Story name="Medium" args={{ size: "medium" }} />

<Story name="Large" args={{ size: "large" }} />