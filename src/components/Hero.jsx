import React from "react";
import {TypeAnimation} from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {motion} from "framer-motion";
import {
    ProfileBio,
    ProfileCV,
    ProfileName,
    PROFILEPIC,
    ProfileSocials,
    ProfileTechStack,
    ProfileTitles
} from "../config.js";


const Hero = () => {
    return (
        <div className="mt-24 max-w-[1200px] mx-auto relative">
            <div className="grid md:grid-cols-2 place-items-center gap-8">
                <motion.div
                    initial={{opacity: 0, y: -50}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 1}}
                >
                    <TypeAnimation
                        sequence={ProfileTitles.reduce((acc, title) => [...acc, title, 1000], [])}
                        speed={50}
                        repeat={Infinity}
                        className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
                    />

                    <motion.p
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true}}
                        transition={{duration: 1, delay: 0.5}}
                        className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
                    >
                        HEY, I AM <br/>
                        <span className="text-purple-500">{ProfileName}</span>
                    </motion.p>

                    <motion.p
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true}}
                        transition={{duration: 1, delay: 1}}
                        className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
                    >
                        {ProfileBio}
                    </motion.p>

                    <motion.div
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 1, delay: 1.5}}
                        className="flex flex-row items-center gap-6 my-4 md:mb-0"
                    >
                        <motion.button whileHover={{scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)"}}
                                       className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border
                                     border-purple-400 rounded-xl"
                                       onClick={() => {
                                           window.open(ProfileCV, "_blank");
                                       }}
                        >
                            Download CV
                        </motion.button>

                        <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
                            {ProfileSocials.map((social, index) => (
                                <motion.a whileHover={{scale: 1.2}} href={social.url} key={index} target="_blank">
                                    {social.icon()}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>


                <motion.img
                    src={PROFILEPIC}
                    className="w-[300px] md:w-[450px]"
                    initial={{opacity: 0, scale: 0.8}}
                    whileInView={{opacity: 1, scale: 1}}
                    viewport={{once: true}}
                    transition={{duration: 1}}
                />
            </div>

            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1, delay: 2}}
                className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
            >
                <p className="text-gray-200 mr-6">My Tech Stack</p>
                {ProfileTechStack.map((tech, index) => (
                    <tech.icon key={index} className="text-gray-300 mx-2" style={{color: tech.color}}/>
                ))}

            </motion.div>

            <div className="absolute inset-0 hidden md:block">
                <ShinyEffect left={0} top={0} size={1400}/>
            </div>

        </div>
    )
}

export default Hero