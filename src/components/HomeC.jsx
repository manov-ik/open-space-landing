import * as THREE from "three";
import lock from "../assets_c/lock_4.glb";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

const ModelWithAnimation = ({ position = [0, 0, 0] }) => {
  const { scene, animations } = useGLTF(lock);
  const mixerRef = useRef();
  const actionRef = useRef();
  const modelRef = useRef();
  const [animationComplete, setAnimationComplete] = useState(false);
  const { camera } = useThree();

  useEffect(() => {
    setAnimationComplete(false);

    if (animations.length) {
      mixerRef.current = new THREE.AnimationMixer(scene);
      actionRef.current = mixerRef.current.clipAction(animations[0]);
      actionRef.current.setLoop(THREE.LoopOnce);
      actionRef.current.clampWhenFinished = true;

      actionRef.current.reset();
      actionRef.current.play();

      mixerRef.current.addEventListener("finished", () => {
        setAnimationComplete(true);
      });
    }

    // Center the model
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    scene.position.sub(center);

    // Adjust camera to fit the centered model
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = camera.fov * (Math.PI / 180);
    let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));
    cameraZ *= 1.6;

    camera.position.set(0, 2, cameraZ);
    camera.lookAt(0, 0, 0);

    return () => {
      if (mixerRef.current) {
        mixerRef.current.stopAllAction();
        mixerRef.current.uncacheRoot(scene);
      }
    };
  }, [animations, scene, camera]);

  useFrame((state, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }
  });

  return (
    <group position={position}>
      <primitive ref={modelRef} object={scene} scale={[0.5, 0.5, 0.5]} />
    </group>
  );
};

const HomeC = () => {
  // Example position, you can adjust these values as needed
  const modelPosition = [-10, 0, 0];

  return (
    <>
      <div className="flex w-[100%] h-[90vh] m-auto max-mobile:w-[100%]">
        <div className="w-[100%] flex justify-between mt-[25vh] mx-auto max-mobile:flex-col max-mobile:mt-[18vh]">
          <div className="m-auto ml-0 w-[50%] h-full max-mobile:w-[100%] max-mobile:ml-auto">
            <div className="h-full">
              <Canvas key={Date.now()}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <ModelWithAnimation position={modelPosition} />
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  minPolarAngle={Math.PI / 4}
                  maxPolarAngle={Math.PI / 1.5}
                />
              </Canvas>
            </div>
          </div>

          <div className="m-auto flex flex-col items-end w-[40%] mr-[10%] max-mobile:w-[100%] max-mobile:items-center max-mobile:mr-auto">
            <div className="text-white text-4xl text-right font-semibold max-mobile:text-3xl max-mobile:text-center max-mobile:mt-6">
              Connect. Create. Contribute.
            </div>
            <p className="text-right text-xl max-laptop:text-base mt-3 w-[80%] text-white font-light max-mobile:text-center max-mobile:m-auto max-mobile:text-sm max-mobile:w-[90%] max-mobile:mt-2">
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
      <div className="text-white text-5xl font-semibold flex justify-center mt-24 max-mobile:text-4xl max-mobile:w-[80%] m-auto max-mobile:text-center max-mobile:mt-16 max-mobile:mb-16">
        we love open-source
      </div>
    </>
  );
};

export default HomeC;
