import React, { useRef, useState, Suspense, useEffect } from "react"
// css
import webGLcss from "./webGl.css"

import { Canvas, useFrame } from "react-three-fiber"
// useFrame => Loop pour l'animation

// import { MeshWobbleMaterial, OrbitControls, Html } from "drei"
import { HTML, useGLTFLoader, useProgress } from "@react-three/drei"

import { OrbitControls } from "drei"

import { Section, useSection } from "./section"
import { State } from "./state"

//
import { ContainerTitleWebGL, TitleWebGL } from "../../styles/homeStyles"

// Loader
import { a, useTransition } from "@react-spring/web"

//responsive
import { useBreakpoint } from "gatsby-plugin-breakpoints"

function Loader() {
  const [canScroll, setCanScroll] = useState(false)

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll")
    } else {
      document.querySelector("body").classList.remove("no-scroll")
    }
  }, [canScroll])

  const { active, progress, loaded } = useProgress()
  const transition = useTransition(active, {
    from: { opacity: 1, progress: 0 },
    leave: { opacity: 0, loaded },
    update: { progress },
  })

  useEffect(() => {
    if (loaded >= 3) {
      setCanScroll(true)
    }
  })

  return transition(
    ({ progress, opacity }, active) =>
      active && (
        <a.div className="loading" style={{ opacity }}>
          <a.span className="loading-data">
            {progress.to(p => `${p.toFixed(2)}%`)}
          </a.span>
        </a.div>
      )
  )
}

const Model = () => {
  const gltf = useGLTFLoader("/scene.gltf", true)
  return <primitive object={gltf.scene} dispose={null} />
}

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.1} />
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
  let ouho = useSection()
  // useFrame est différent useEffect..ça vient de react-three-fiber
  // useFrame(() => (ref.current.rotation.y += 0.001))

  // useFrame(() => (ref.current.rotation.x += 0.001))
  // useFrame(() => (ref.current.position.z += 0.01) && (ref.current.rotation.x += 0.001))

  {
    /* <group position={[0, 250, -70]} */
  }

  return (
    <Section factor={1.5} offset={1}>
      {ouho.mobile ? (
        <group position={[0, 250, -70]}>
          <mesh ref={ref} position={[0, 0, 0]}>
            <Model />
          </mesh>
          {/* <HTML>
          <ContainerTitleWebGL>
            <TitleWebGL>Hey, welcome in my world !</TitleWebGL>
          </ContainerTitleWebGL>
        </HTML> */}
        </group>
      ) : (
        <group position={[0, 250, -10]}>
          <mesh ref={ref} position={[0, 0, 0]}>
            <Model />
          </mesh>
          {/* <HTML>
            <ContainerTitleWebGL>
              <TitleWebGL>SCROLL</TitleWebGL>
            </ContainerTitleWebGL>
          </HTML> */}
        </group>
      )}
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
        <OrbitControls enableZoom={false} />
      </Canvas>

      <Loader />
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
