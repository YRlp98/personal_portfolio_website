<template>
	<div class="heroSection-container" id="#homeHeroSection">
		<div class="heroSection-content" :style="{ direction: `${changeDirection(this.activeLang)}` }">
			<div class="heroSection-welcome" ref="heroWelcome">
				<h1>{{ $t("homePageHello") }} {{ $t("homePageName") }}</h1>
				<span></span>
				<h2>{{ $t("homePageJobTitleP1") }} {{ $t("homePageJobTitleP2") }}</h2>
				<h2></h2>
			</div>
			<ScrollIcon class="scrollIcon" />
		</div>
		<IconBackground ref />
	</div>
</template>

<script>
import ScrollIcon from "../../icons/ScrollIcon.vue";
import IconBackground from "../../backgrounds/IconBackground.vue";
import changeDirection from "../../../assets/mixins/changeDirection";

export default {
	name: "HeroSection",
	components: {
		ScrollIcon,
		IconBackground,
	},
	data() {
		return {
			activeLang: this.$i18n.locale,
		};
	},
	mixins: [changeDirection],
	mounted() {
		this.$gsap.from(this.$refs.heroWelcome.children, {
			opacity: 0,
			y: 100,
			duration: 1,
			ease: "back.out(1.7)",
			stagger: 0.2,
		});
	},
};
</script>

<style lang="scss" scoped>
.heroSection-container {
	position: relative;
	width: 100%;
	height: 120vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	direction: rtl;
	background: var(--gray-3);

	.heroSection-welcome {
		position: relative;
		bottom: 15vh;
		z-index: 101;
		pointer-events: none;

		h1 {
			font-size: 50px;
			font-weight: normal;
			color: white;
		}

		h2 {
			padding-top: 20px;
			font-size: 24px;
			line-height: 20px;
			color: var(--green-1);
		}
	}

	.scrollIcon {
		top: 90vh;
		transform: scale(0.65);
		z-index: 101;
	}
}

// Tablet
@include mediaQueryMin("md") {
	.heroSection-container {
		.heroSection-welcome {
			h1 {
				display: inline-block;
				margin: 0 3px;
			}

			span {
				display: block;
			}

			h2 {
				display: inline-block;
				margin: 0 3px;
			}
		}
	}
}
</style>
