<script lang="ts">
  import { onMount } from "svelte";
  import { getMedicalKeywords, mockSpeechRecognitionAPI } from "../services/api";
  import { TranscriptionList, Button } from ".";

  import { transcriptions } from "../store/transcriptions";

  interface TranscriptionsProps {
    class?: string;
  }

  const { class: className, ...props }: TranscriptionsProps = $props();

  let loading: boolean = $state<boolean>(false);
  let medicalKeywords = $state<string[]>([]);

  const maxSegments: number = 10;
  let segmentCounter: number = 0;
  let interval: ReturnType<typeof setInterval>;

  onMount(async () => {
    const keywords = await getMedicalKeywords();
    medicalKeywords = keywords;
  });

  function handleClick() {
    loading = true;
    segmentCounter = 0;
    transcriptions.reset();

    interval = setInterval(async () => {
      if (segmentCounter >= maxSegments) {
        clearInterval(interval);
        loading = false;
        return;
      }

      const currentSegment = segmentCounter;
      segmentCounter++;

      try {
        const response = await mockSpeechRecognitionAPI.fetchTranscription(currentSegment);
        transcriptions.push(response.segmentId, response.text)
      } catch (error) {
        clearInterval(interval);
        loading = false;
      }
    }, 100);
  }
</script>

<main class={`flex flex-col justify-center items-center h-full gap-6 ${className}`}>
  <h1 class="text-3xl">Transcrição de Áudio</h1>

  <Button label="Transcrever" onclick={handleClick}/>

  <TranscriptionList
    transcriptions={$transcriptions}
    {medicalKeywords}
  />
</main>
