<script>
	import {
		faArrowTrendUp,
		faBasketShopping,
		faCode,
		faGlobe,
		faMicrochip,
		faMobileScreen
	} from '@fortawesome/free-solid-svg-icons';
	import Card from './Card.svelte';
</script>

<div id="expertise" class="expertise">
	<div class="container">
		<h2 class="title has-text-centered pb-4">Our expertise</h2>

		<div class="columns">
			<div class="column">
				<Card title="Web development" icon={faGlobe}>
					<p>
						We're experts in web technologies and can bring your online presence to the next level.
					</p>
					<p>
						From design and development to production, we offer full-stack and cloud services to
						help you bring your ideas to fruition.
					</p>
				</Card>
			</div>
			<div class="column">
				<Card title="Software development" icon={faCode}>
					<p>We develop high performance, reliable custom software solutions to meet your needs.</p>
					<p>Work with us to bring your software idea into reality.</p>
				</Card>
			</div>
			<div class="column">
				<Card title="Mobile app development" icon={faMobileScreen}>
					<p>Need the perfect iOS or Android app? We can make it happen!</p>
					<p>
						We work with you to design and develop an engaging, robust mobile app which connects you
						to your users.
					</p>
				</Card>
			</div>
		</div>
		<div class="columns">
			<div class="column">
				<Card title="Decision support systems" icon={faArrowTrendUp}>
					<p>
						Have a business problem which needs solving? We develop intelligent decision support
						systems tailored to your requirements.
					</p>

					<p>
						From scheduling, to vehicle-routing, to inventory management, our custom solutions
						enable you to take your business to the next level.
					</p>
				</Card>
			</div>
			<div class="column">
				<Card title="E-commerce" icon={faBasketShopping}>
					<p>
						Custom e-commerce made for your business, giving your customers the best possible
						experience.
					</p>
					<p>
						We develop bespoke e-commerce solutions which tick all the boxes, for whatever products
						or services you need to provide.
					</p>
				</Card>
			</div>
			<div class="column">
				<Card title="Embedded programming" icon={faMicrochip}>
					<p>From industrial control to consumer electronics and IoT, we've got you covered.</p>
					<p>
						Tap into our expert knowledge in embedded programming and robotics to bridge the gap
						between software and hardware.
					</p>
				</Card>
			</div>
		</div>
	</div>
</div>

<style>
	.expertise {
		background-color: var(--bulma-scheme-main-bis);
		padding: 4rem 0;
	}
</style>
