<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import TranscriptionListSkeleton from "../components/TranscriptionListSkeleton.svelte";

	const { Story } = defineMeta({
		title: "Transcription Components/TranscriptionListSkeleton",
		component: TranscriptionListSkeleton,
		tags: ["autodocs"],
		argTypes: {
			count: { control: "number" },
		},
	});
</script>

<Story name="TranscriptionListSkeleton" args={{ count: 1 }}/>
