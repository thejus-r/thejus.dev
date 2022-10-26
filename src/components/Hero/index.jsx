import { motion } from "framer-motion"
import Button from "../Button"

export default function index() {
  const resumeLink =
    "https://firebasestorage.googleapis.com/v0/b/thejus-dev.appspot.com/o/Resume.pdf?alt=media&token=bac3a251-bc29-461f-9801-d514b06fbdd3"
  return (
    <>
      {/* <motion.div
        className="bg-neutral-800 absolute top-0 left-0 h-screen w-screen"
        initial={{ height: "100%" }}
        animate={{
          height: "0%",
          transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 1.5 },
        }}
      ></motion.div> */}
      <div className="p-12 xl:h-[44rem] lg:h-[40rem] flex flex-col justify-center  md:ml-32 ">
        <motion.div className="text-neutral-800 font-['Clash_Display'] text-[3rem] md:text-[6rem] xl:text-[10rem] leading-none font-bold">
          <h1>
            <span className="block">Thejus</span>
            <span className="block">Rajendran</span>
          </h1>
        </motion.div>
        <h3 className="text-lg xl:text-4xl pt-6">User Experience Designer</h3>
      </div>
      <div className="flex p-12 justify-end lg:justify-between lg:items-center  md:mx-32 md:mb-28">
        <div className="hidden md:text-xl lg:text-2xl lg:flex lg:items-center">
          <div className="border-2 h-20 w-20 border-neutral-800 rounded-full flex justify-center items-center">
            <motion.img
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="h-1/3"
              alt="scroll-icon"
              src="assets\ScrollDown.svg"
            ></motion.img>
          </div>
          <div className="m-8">scroll down to discover</div>
        </div>
        <Button content={"View Resume"} link={resumeLink} />
      </div>
    </>
  )
}
