/**
 * Portfolio Tree - Main JavaScript Module
 * Handles animations and interactive features
 */

(function() {
	'use strict';

	// Initialize when DOM is ready
	document.addEventListener('DOMContentLoaded', function() {
		console.log('Portfolio Tree initialized');
		
		// Initialize animations if anime.js is available
		if (typeof anime !== 'undefined') {
			initAnimations();
		}

		// Initialize smooth scrolling
		initSmoothScrolling();

		// Initialize accessibility enhancements
		initAccessibility();
	});

	/**
	 * Initialize background animations
	 */
	function initAnimations() {
		const svgElements = document.querySelectorAll('.bg-decoration__svg polygon, .bg-decoration__svg feTurbulence, .bg-decoration__svg feDisplacementMap');
		
		if (svgElements.length > 0) {
			anime({
				targets: svgElements,
				baseFrequency: [0, 0.02],
				scale: [1, 1.1],
				loop: true,
				duration: 5000,
				direction: 'alternate',
				easing: 'easeInOutExpo'
			});
		}
	}

	/**
	 * Initialize smooth scrolling for anchor links
	 */
	function initSmoothScrolling() {
		document.querySelectorAll('a[href^="#"]').forEach(anchor => {
			anchor.addEventListener('click', function(e) {
				const href = this.getAttribute('href');
				if (href !== '#' && href.length > 1) {
					const target = document.querySelector(href);
					if (target) {
						e.preventDefault();
						target.scrollIntoView({
							behavior: 'smooth',
							block: 'start'
						});
					}
				}
			});
		});
	}

	/**
	 * Initialize accessibility enhancements
	 */
	function initAccessibility() {
		// Add keyboard navigation support
		document.querySelectorAll('.link-list-item, .icon-list a').forEach(element => {
			element.addEventListener('keydown', function(e) {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					this.click();
				}
			});
		});

		// Add focus visible styles
		document.querySelectorAll('a, button').forEach(element => {
			element.addEventListener('focus', function() {
				this.style.outline = '2px solid var(--highlight-color)';
				this.style.outlineOffset = '2px';
			});

			element.addEventListener('blur', function() {
				this.style.outline = '';
				this.style.outlineOffset = '';
			});
		});
	}

	/**
	 * Utility function to handle external link clicks
	 */
	function handleExternalLinks() {
		document.querySelectorAll('a[target="_blank"]').forEach(link => {
			link.addEventListener('click', function() {
				// Analytics tracking could go here
				console.log('External link clicked:', this.href);
			});
		});
	}

	// Initialize external link tracking
	handleExternalLinks();

	// Console message for developers
	console.log('Hey there, curious developer! I see you peeking ;)');
	console.log('Feel free to check out all the code on my github: https://github.com/dipesh55');

})();
