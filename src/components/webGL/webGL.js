import React, { useRef, useState, Suspense } from "react"

import { Canvas, useFrame } from "react-three-fiber"
// useFrame => Loop pour l'animation

// import { MeshWobbleMaterial, OrbitControls, Html } from "drei"
import { HTML, useGLTFLoader } from "@react-three/drei"
import { Section } from "./section"
import { State } from "./state"

// import { useSpring, a } from "react-spring/three"

const Model = () => {
  const gltf = useGLTFLoader("/space.gltf", true)
  return <primitive object={gltf.scene} dispose={null} />
}

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1}></directionalLight>
      <directionalLight
        position={[0, 10, 0]}
        intensity={1.5}
      ></directionalLight>
      <spotLight position={[1000, 0, 0]} intensity={1}></spotLight>
    </>
  )
}

const HTMLContent = () => {
  const ref = useRef()
  // useFrame est différent useEffect..ça vient de react-three-fiber
  useFrame(() => (ref.current.rotation.y += 0.001))

  return (
    <Section factor={1.5} offset={1}>
      <group position={[-100, 150, 0]}>
        <mesh ref={ref} position={[15, -35, 100]}>
          <Model />
        </mesh>
        {/* <HTML>
          <div>
            <div>hello</div>
          </div>
        </HTML> */}
      </group>
    </Section>
  )
}

const WebGL = () => {
  return (
    <>
      <Canvas colorManagement camera={{ position: [0, 0, 120], fov: 70 }}>
        <Lights />
        {/* <HTML fullscreen>
          <div>
            <div>hello</div>
          </div>
        </HTML> */}
        <Suspense fallback={null}>
          <HTMLContent></HTMLContent>
        </Suspense>
      </Canvas>
    </>
  )
}

export default WebGL

// const SpinningMesh = ({ position, args, color, speed }) => {
//   const mesh = useRef(null)
//   useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

//   // ANIMATION
//   const [expand, setExpand] = useState(false)
//   const props = useSpring({
//     scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
//   })

//   return (
//     // position = [x, y, depth]
//     <a.mesh
//       onClick={() => setExpand(!expand)}
//       scale={props.scale}
//       castShadow
//       position={position}
//       ref={mesh}
//     >
//       {/* args = [width, height, depth] */}
//       <boxBufferGeometry attach="geometry" args={args} />
//       <MeshWobbleMaterial
//         attach="material"
//         color={color}
//         speed={speed}
//         factor={0.6}
//       />
//     </a.mesh>
//   )
// }

// const WebGL = () => {
//   return (
//     <>
//       {/* On ne peut pas mettre du HTML dans Canvas il ne prend que les three.js element */}
//       <Canvas
//         colorManagement
//         shadowMap
//         camera={{ position: [-5, 2, 10], fov: 60 }}
//       >
//         <ambientLight intensity={0.3} />
//         {/* Lumière principal qui vient du top milieu et qui éclaire de au dessus comme le soleil */}
//         <directionalLight
//           castShadow
//           position={[0, 10, 0]}
//           intensity={1.5}
//           shadow-mapSize-width={1024}
//           shadow-mapSize-height={1024}
//           shadow-camera-far={50}
//           shadow-camera-left={-10}
//           shadow-camera-right={-10}
//           shadow-camera-top={10}
//           shadow-camera-bottom={-10}
//         />

//         {/* Lumière vers la gauche */}
//         <pointLight position={[-10, 0, -20]} intensity={0.5} />
//         {/* Lumière vers le bas à droite */}
//         <pointLight position={[0, -10, 0]} intensity={1.5} />

//         <group>
//           {/* On a besoin de faire un floor (sol) pour créer des ombres à nos mesh */}
//           <mesh
//             rotation={[-Math.PI / 2, 0, 0]}
//             position={[0, -3, 0]}
//             receiveShadow
//           >
//             <planeBufferGeometry attach="geometry" args={[100, 100]} />
//             <shadowMaterial attach="material" opacity={0.3} />
//           </mesh>
//         </group>

//         <SpinningMesh
//           position={[0, 1, 0]}
//           args={[3, 2, 1]}
//           color="lightblue"
//           speed={2}
//         ></SpinningMesh>
//         <SpinningMesh
//           position={[-2, 1, -5]}
//           color="pink"
//           speed={6}
//         ></SpinningMesh>
//         <SpinningMesh
//           position={[5, 1, -2]}
//           color="pink"
//           speed={6}
//         ></SpinningMesh>
//         <OrbitControls></OrbitControls>
//       </Canvas>
//     </>
//   )
// }

// export default WebGL
