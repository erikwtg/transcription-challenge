<script lang="ts">
  import { onMount } from "svelte";
  import { getMedicalKeywords, mockSpeechRecognitionAPI } from "../services/api";
  import { TranscriptionList, Button, Loader } from ".";

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

<main class={`min-h-screen w-full bg-gray-50 ${className}`}>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="bg-white rounded-lg shadow-lg p-6">
      <div class="flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h1 class="text-2xl font-bold text-gray-900">Transcrição de Áudio</h1>
        </div>
        
        <div class="flex gap-4">
          <Button 
            label="Iniciar Transcrição"
            primary={!loading}
            onclick={handleClick}
            disabled={loading}
          />
        </div>
      </div>

      {#if loading}
        <div class="mt-6">
          <Loader />
        </div>
      {/if}

      {#if $transcriptions.length !== 0}
        <div class="mt-6">
          <TranscriptionList
            transcriptions={$transcriptions}
            {medicalKeywords}
          />
        </div>
      {/if}
    </div>
  </div>
</main>
