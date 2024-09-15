import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, Center } from "@react-three/drei";
import * as THREE from "three";
import lock from "../../assets/lock.glb";
import "./HeroSection.css";

function Model() {
  const gltf = useLoader(GLTFLoader, lock);
  const modelRef = useRef();
  const { scene } = useThree();
  const [mixer, setMixer] = useState();

  useEffect(() => {
    const model = gltf.scene;
    model.scale.set(3, 3, 3);

    const box = new THREE.Box3().setFromObject(model);
    const center = box.getCenter(new THREE.Vector3());
    model.position.sub(center);

    return () => {
      if (mixer) mixer.stopAllAction();
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
      <br />
      <br />
      <br />
      <section id="home">
        <div
          className="three-d-model-container"
          style={{ width: "100%", height: "calc(100vh - 100px)" }}
        >
          <Canvas camera={{ position: [0, 0, 50], fov: 50 }}>
            <ambientLight intensity={0.7} />
            <directionalLight intensity={0.8} position={[1, 1, 1]} />
            {/* <Center> */}
            <Model />
            {/* </Center> */}
            <OrbitControls />
          </Canvas>
        </div>
        <div className="content-container w-[90%] text-white">
          <div className="float-left hero-content-heading-container h-20 flex items-center justify-center font-semibold">
            <h1 className="text-2xl">Connect. Create. Contribute.</h1>
          </div>
          <div className="hero-content-content-container float-right text-right text-md font-thin">
            <p className="max-w-[70%]">
              Step into a world where college students come together to spark
              innovation and build impactful products! Our platform is the
              perfect place to turn your ideas into reality while contributing
              to meaningful open-source projects. Whether you are working solo
              or teaming up with others, this is where your creativity speaks
              up. Jump in, collaborate, and make a difference together!
            </p>
          </div>
        </div>
      </section>
      <div className="something">
        <h1 className="text-white text-6xl text-center">We love open-source</h1>
      </div>
    </>
  );
}

export default HeroSection;
