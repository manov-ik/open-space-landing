<<<<<<< HEAD
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import lock from "../../assets/lock.glb";
import "./HeroSection.css";
=======
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls, Center } from '@react-three/drei';
import * as THREE from 'three';
import lock from '../../assets/lock.glb';
import './HeroSection.css';
>>>>>>> remotes/origin/dev

function Model() {
  const gltf = useLoader(GLTFLoader, lock);
  const modelRef = useRef();
  const { scene } = useThree();
  const [mixer, setMixer] = useState();

  useEffect(() => {
    const model = gltf.scene;
    model.scale.set(3, 3, 3);

<<<<<<< HEAD
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / 2 / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 50);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth / 2, window.innerHeight - 100);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);

    sceneRef.current.appendChild(renderer.domElement);

    let mixer;
    const loader = new GLTFLoader();
    loader.load(
      lock,
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(3, 3, 3);
        scene.add(model);

        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);
        model.position.x -= 50;
        model.position.y += 10;
        model.position.z = 0;

        model.rotation.x = Math.PI / 10;
        model.rotation.y = -Math.PI / 20;

        mixer = new THREE.AnimationMixer(model);
        const clips = gltf.animations;
        clips.forEach((clip) => {
          const action = mixer.clipAction(clip);
          action.play();
        });
      },
      undefined,
      (error) => {
        console.error("An error occurred loading the model", error);
      }
    );

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      if (mixer) {
        const delta = clock.getDelta();
        mixer.update(delta);
      }
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / 2 / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth / 2, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (sceneRef.current) {
        sceneRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", handleResize);
=======
    const box = new THREE.Box3().setFromObject(model);
    const center = box.getCenter(new THREE.Vector3());
    model.position.sub(center);

    return () => {
      if (mixer) mixer.stopAllAction();
>>>>>>> remotes/origin/dev
    };
  }, [gltf, scene]);

  useFrame((state, delta) => {
    if (mixer) mixer.update(delta);
  });

  return <primitive object={gltf.scene} ref={modelRef} />;
}

function HeroSection() {
  return (
    <>
    {/* Better than giving margin-top */}
    <br /><br /><br />
      <section id="home">
        <div className="three-d-model-container" style={{ width: '100%', height: 'calc(100vh - 100px)' }}>
          <Canvas camera={{ position: [0, 0, 50], fov: 50 }}>
            <ambientLight intensity={0.7} />
            <directionalLight intensity={0.8} position={[1, 1, 1]} />
            {/* <Center> */}
              <Model />
            {/* </Center> */}
            <OrbitControls

            />
          </Canvas>
        </div>
<<<<<<< HEAD
        <div className="content-container text-white">
          <div className="hero-content-heading-container h-20 flex items-center justify-center font-semibold">
            <h1 className="text-4xl">Connect. Create. Contribute.</h1>
          </div>
          <div className="hero-content-content-container float-right w-96 text-right text-md font-thin">
            <p>
              Step into a world where college students come together to spark
              innovation and build impactful products! Our platform is the
              perfect place to turn your ideas into reality while contributing
              to meaningful open-source projects. Whether you are working solo
              or teaming up with others, this is where your creativity speaks
              up. Jump in, collaborate, and make a difference together!
            </p>
          </div>
        </div>
        <div className="something">
          <h1 className="text-white text-6xl text-center">
            We love open-source
          </h1>
        </div>
=======
        <div className="content-container w-[90%] text-white">
          <div className="float-left hero-content-heading-container h-20 flex items-center justify-center font-semibold">
            <h1 className='text-2xl'>Connect. Create. Contribute.</h1>
          </div>
          <div className="hero-content-content-container float-right text-right text-md font-thin">
            <p className='max-w-[70%]'>
              Step into a world where college students come together to spark innovation and build impactful products! Our platform is the perfect place to turn your ideas into reality while contributing to meaningful open-source projects. Whether you are working solo or teaming up with others, this is where your creativity speaks up. Jump in, collaborate, and make a difference together!
            </p>
          </div>
        </div>
>>>>>>> remotes/origin/dev
      </section>
      <div className='something'>
        <h1 className='text-white text-6xl text-center'>We love open-source</h1>
      </div>
    </>
  );
}

export default HeroSection;
