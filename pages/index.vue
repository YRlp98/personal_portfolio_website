<template>
	<div class="index-container">
		<HeroSection class="heroSection" />
		<div class="aboutMe-container">
			<WaveBackground class="waveBackground" />
			<AboutMe class="defualt-margin" />
		</div>
		<div class="defualt-margin education-container">
			<Education />
		</div>
		<div class="defualt-margin experience-container">
			<Experience />
		</div>
		<div class="skills-container">
			<Skills />
		</div>
		<div class="defualt-margin projects-container">
			<Projects />
		</div>
		<div class="defualt-margin blog-container">
			<Blog />
		</div>
	</div>
</template>

<script>
import HeroSection from "../components/pages/home/HeroSection.vue";
import WaveBackground from "../components/backgrounds/WaveBackground";
import AboutMe from "../components/pages/home/AboutMe.vue";
import Education from "../components/pages/home/Education.vue";
import Experience from "../components/pages/home/Experience.vue";
import Skills from "../components/pages/home/Skills.vue";
import Projects from "../components/pages/home/Projects";
import Blog from "../components/pages/home/Blog.vue";

export default {
	head() {
		const baseUrl = 'https://yrlp.ir';
		const path = this.$route.path;
		const canonicalUrl = baseUrl + path;

		return {
			title: 'Yousef Roshandel | Front-End Developer & UI/UX Designer',
			meta: [
				{ hid: 'description', name: 'description', content: 'Yousef Roshandel is a passionate Front-End Developer and UI/UX Designer creating modern, user-friendly websites and digital experiences.' },
				{ hid: 'og:title', property: 'og:title', content: 'Yousef Roshandel | Front-End Developer & UI/UX Designer' },
				{ hid: 'og:description', property: 'og:description', content: 'Yousef Roshandel is a passionate Front-End Developer and UI/UX Designer creating modern, user-friendly websites and digital experiences.' },
				{ hid: 'og:url', property: 'og:url', content: canonicalUrl },
			],
			link: [
				{ rel: 'canonical', href: canonicalUrl }
			],
		}
	},

	components: {
		HeroSection,
		WaveBackground,
		AboutMe,
		Education,
		Experience,
		Skills,
		Projects,
		Blog,
	},

	mounted() {
		if (process.client) {
			this.$nextTick(() => {
				this.$gsap.from(".education-container", {
					opacity: 0,
					y: 100,
					duration: 1,
					ease: "power3.out",
					scrollTrigger: {
						trigger: ".education-container",
						start: "-40% bottom",
						scrub: 1,
						toggleActions: "play none none pause",
					},
				});

				this.$gsap.from(".experience-container", {
					opacity: 0,
					y: 100,
					duration: 1,
					ease: "power3.out",
					scrollTrigger: {
						trigger: ".experience-container",
						start: "-40% bottom",
						scrub: 1,
						toggleActions: "play none none pause",
					},
				});

				this.$gsap.from(".skills-container", {
					opacity: 0,
					y: 100,
					duration: 1,
					ease: "power3.out",
					scrollTrigger: {
						trigger: ".skills-container",
						start: "-40% bottom",
						scrub: 1,
						toggleActions: "play none none pause",
					},
				});

				this.$gsap.from(".projects-container", {
					opacity: 0,
					y: 100,
					duration: 1,
					ease: "power3.out",
					scrollTrigger: {
						trigger: ".projects-container",
						start: "-40% bottom",
						scrub: 1,
						toggleActions: "play none none pause",
					},
				});

				this.$gsap.from(".blog-container", {
					opacity: 0,
					y: 100,
					duration: 1,
					ease: "power3.out",
					scrollTrigger: {
						trigger: ".blog-container",
						start: "-40% bottom",
						scrub: 1,
						toggleActions: "play none none pause",
					},
				});
			});
		}
	},
};
</script>

<style lang="scss" scoped>
.index-container {
	position: relative;
	overflow: hidden;
}

.aboutMe-container {
	position: relative;

	.waveBackground {
		top: -200px;
	}
}

.education-container {
	position: relative;
	margin-top: 150px;
}

.experience-container {
	margin-top: 150px;
}

.skills-container {
	margin-top: 150px;
}

.projects-container {
	margin-top: 150px;
}

.blog-container {
	margin-top: 150px;
	padding-bottom: 50px;
}

// Tablet
@include mediaQueryMin("md") {
	.aboutMe-container {
		margin-top: 150px;

		.waveBackground {
			top: -310px;
		}
	}

	.education-container {
		position: relative;
		margin-top: 250px;
	}

	.experience-container {
		margin-top: 250px;
	}

	.skills-container {
		margin-top: 450px;
	}

	.projects-container {
		margin-top: 250px;
	}

	.blog-container {
		margin-top: 250px;
	}
}
</style>
