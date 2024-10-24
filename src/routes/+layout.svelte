<slot />

<style lang="scss" global>
	@use 'bulma/sass' with (
		$family-primary: '"Noto Sans", sans-serif',
		$primary: hsl(281, 70%, 57%),
		$navbar-height: 5rem,
		$navbar-item-img-max-height: 2.5rem,
        $body-overflow-y: auto,
		$card-header-shadow: 0 0.125em 0.25em hsla(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-scheme-invert-l), 0.05),
		$footer-background-color: var(--bulma-scheme-main)
	);
	@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');
</style>
