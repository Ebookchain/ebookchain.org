import Ember from 'ember';

export default Ember.Component.extend({

	didRender() {
		new particlesJS('particles-js', {
			    "particles": {
			      "number": {
			        "value": 80,
			        "density": {
			          "enable": true,
			          "value_area": 800
			        }
			      },
			      "color": {
			        "value": "#ffffff"
			      },
			      "shape": {
			        "type": "image", // "circle", "edge" or "triangle", "image", "star","polygon"
			        "stroke": {
			          "width": 10,
			          "color": "#000000"
			        },
			        "polygon": {
			          "nb_sides": 5
			        },
			        "image": {
			          "src": "images/logo-white.png",
			          "width": 300,
			          "height": 300
			        }
			      },
			      "opacity": {
			        "value": 0.5,
			        "random": true,
			        "anim": {
			          "enable": true,
			          "speed": 0.5,
			          "opacity_min": 0.1,
			          "sync": false
			        }
			      },
			      "size": {
			        "value": 5,
			        "random": true,
			        "anim": {
			          "enable": false,
			          "speed": 20,
			          "size_min": 0.1,
			          "sync": false
			        }
			      },
			      "line_linked": {
			        "enable": false,
			        "distance": 150,
			        "color": "#ffffff",
			        "opacity": 0.4,
			        "width": 1
			      },
			      "move": {
			        "enable": true,
			        "speed": 6,
			        "direction": "none", // "top", none, top-right, right , bottom-right, bottom, bottom-left, left, top-left
			        "random": false,
			        "straight": false,
			        "out_mode": "out", // out or bounce
			        "attract": {
			          "enable": false,
			          "rotateX": 600,
			          "rotateY": 1200
			        }
			      }
			    },
			    "interactivity": {
			      "detect_on": "canvas",  //canvas, window 
			      "events": {
			        "onhover": {
			          "enable": true,
			          "mode": "grab"  // grab , bubble, repulse
			        },
			        "onclick": {
			          "enable": true,
			          "mode": "push" // push, remove , bubble , repulse
			        },
			        "resize": true
			      },
			      "modes": {
			        "grab": {
			          "distance": 400,
			          "line_linked": {
			            "opacity": 1
			          }
			        },
			        "bubble": {
			          "distance": 400,
			          "size": 40,
			          "duration": 2,
			          "opacity": 8,
			          "speed": 3
			        },
			        "repulse": {
			          "distance": 200
			        },
			        "push": {
			          "particles_nb": 4
			        },
			        "remove": {
			          "particles_nb": 2
			        }
			      }
			    },
			    "retina_detect": true,
			    "config_demo": {
			      "hide_card": false,
			      "background_color": "#b61924",
			      "background_image": "",
			      "background_position": "50% 50%",
			      "background_repeat": "no-repeat",
			      "background_size": "cover"
			    }
			});
	}
});
