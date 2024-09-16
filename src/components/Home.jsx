import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, Center } from "@react-three/drei";
import * as THREE from "three";
import lock from "../assets_c/lock.glb";

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
      <div className="flex w-[80%] h-[90vh] m-auto max-mobile:w-[100%] ">
        <div
          className="w-[100%]  flex justify-between  mt-[25vh] mx-auto 
        max-mobile:flex-col  max-mobile:mt-[18vh] "
        >
          <div
            className=" m-auto ml-0 w-[50%] h-full 
          max-mobile:w-[100%] max-mobile:ml-auto "
          >
            <div className="h-full ">
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

          <div
            className=" m-auto mr-0 flex flex-col items-end w-[50%] 
          max-mobile:w-[100%]  max-mobile:items-center
           max-mobile:mr-auto "
          >
            <div
              className="text-white text-4xl text-right font-semibold
            max-mobile:text-3xl max-mobile:text-center max-mobile:mt-6 "
            >
              Connect. Create. Contribute.
            </div>
            <p
              className="text-right text-xl max-laptop:text-base mt-3 w-[80%] text-white font-light
            max-mobile:text-center max-mobile:m-auto max-mobile:text-sm max-mobile:w-[90%] max-mobile:mt-2
            "
            >
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
      <div
        className="text-white text-5xl font-semibold flex justify-center mt-24
            max-mobile:text-4xl max-mobile:w-[80%] m-auto max-mobile:text-center 
            max-mobile:mt-16 max-mobile:mb-16"
      >
        we love open-source
      </div>
    </>
  );
}
export default Home;
