import * as THREE from 'three';

export default class Scene {
	constructor() {
		this.container = document.getElementById('gooey-bg')

		this.scene = new THREE.Scene()
		this.renderer = new THREE.WebGLRenderer({
			canvas: this.container,
			alpha: true,
	  })

		this.renderer.setSize(window.innerWidth, window.innerHeight)
		this.renderer.setPixelRatio(window.devicePixelRatio)

        this.initLights();
        this.initCamera();
        this.update();
    }
    
	initLights() {
		const ambientlight = new THREE.AmbientLight(0xffffff, 2)
		this.scene.add(ambientlight)
    }
    
    initCamera() {
        const perspective = 800;
        
        const fov = (180 * (2 * Math.atan(window.innerHeight / 2 / perspective))) / Math.PI
    
        this.camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, 1, 1000)
        this.camera.position.set(0, 0, perspective)
    }

    update() {
        requestAnimationFrame(this.update.bind(this))
        
        this.renderer.render(this.scene, this.camera)
    }
}