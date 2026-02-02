<script lang="ts">
	export let id: string | null = null
	export let lines: string | boolean | null = null
	export let noescape = false
	export let className: string | null = import.meta.env.VITE_DEFAULT_CODE_LANGUAGE
	export let data_fragment_index: string | null = null
	export { className as class }
	data_fragment_index = $$props['data-fragment-index'] || null
</script>

<pre
	class={className || null}
	data-id={id || null}
	data-fragment-index={data_fragment_index || null}>
  <code data-trim data-line-numbers={lines || true} data-noescape={noescape || null}>
    <slot />
  </code>
</pre>
