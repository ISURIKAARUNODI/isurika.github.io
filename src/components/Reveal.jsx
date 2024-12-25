import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const Reveal = ({ children, width,height = '100%' }) => {

    const ref = useRef(null)

    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
        }
    }, [isInView, mainControls])

  return (
    <div ref={ref} style={{ position: 'relative', width, height,overflow: 'hidden' }}>

        <motion.div
        variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 }, 
        }}
        className={`w-[100%] h-full`}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        >
            {children}
        </motion.div>
        
    </div>
  )
}

export default Reveal