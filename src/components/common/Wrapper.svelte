<script lang="ts">
	let classOverrides = '';
	const baseClasses = 'py-24';

	let classList = `${classOverrides} ${baseClasses}`;

	export { classOverrides as class };
</script>

<div class={classList}>
	<slot />
</div>
