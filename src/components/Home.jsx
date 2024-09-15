import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, Center } from "@react-three/drei";
import * as THREE from "three";
import lock from "../assets/lock.glb";

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

function Home() {
  return (
    <>
      <div className="flex w-[80%] h-[80vh] m-auto">
        <div className="w-[100%] flex justify-between  mt-[25vh] mx-auto">
          <div className=" m-auto ml-0 w-[50%] h-full 100">
            <div className="h-[60vh]">
              <Canvas camera={{ position: [0, 0, 50], fov: 50 }}>
                <ambientLight intensity={0.7} />
                <directionalLight intensity={0.8} position={[1, 1, 1]} />
                {/* <Center> */}
                <Model />
                {/* </Center> */}
                <OrbitControls />
              </Canvas>
            </div>
          </div>

          <div className=" m-auto mr-0 flex flex-col items-end w-[50%]">
            <div className="text-white text-4xl text-right font-semibold">
              Connect. Create. Contribute.
            </div>
            <p className="text-right text-xl mt-3 w-[80%] text-white font-light">
              Step into a world where college students come together to spark
              innovation and build impactful products! Our platform is the
              perfect place to turn your ideas into reality while contributing
              to meaningful open-source projects. Whether you are working solo
              or teaming up with others, this is where your creativity speaks
              up. Jump in, collaborate, and make a difference together!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
