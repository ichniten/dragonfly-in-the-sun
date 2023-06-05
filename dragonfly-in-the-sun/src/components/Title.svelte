<script>
  export let variant = 'h1'
  export let text = ''
  export let className = ''
</script>

{#if variant === 'h1'}
  <h1 class={`text-gray font-rubik-mono-one text-lg ${className}`}>{text}</h1>
{:else if variant === 'h2'}
  <h2 class={`text-gray font-montserrat text-base ${className}`}>{text}</h2>
{:else}
  <div>{text}</div>
{/if}
