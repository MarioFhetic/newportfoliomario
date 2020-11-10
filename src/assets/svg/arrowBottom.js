import React from "react"
import { motion } from "framer-motion"

const icon = {
  hidden: {
    y: -70,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    y: 0,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
  },
}

export const ArrowBottom = () => {
  return (
    <motion.svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
    >
      <motion.path
        d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] },
        }}
      />
    </motion.svg>
  )
}
export default ArrowBottom
