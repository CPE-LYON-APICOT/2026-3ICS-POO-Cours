<script lang="ts">
	export let id: string | null = null
	export let animate = true
	export let restart = false
	export let data_background_gradient: string | null = null
	export let data_background_color: string | null = null
	export let className: string | null = null

	data_background_color = $$props['data-background-color'] || data_background_color
	data_background_gradient = $$props['data-background-gradient'] || data_background_gradient
</script>

<section
	{id}
	class={className}
	data-auto-animate-id={id}
	data-auto-animate={animate || null}
	data-background-gradient={data_background_gradient || null}
	data-background-color={data_background_color || null}
	data-auto-animate-restart={restart || null}
>
	<slot />
</section>
