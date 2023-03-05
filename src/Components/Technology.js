
import "../CSS/Technologies.css"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react"

export default function Technology({technology}){
    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0, scale: 0 }
    };
    const control = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
          control.start("visible");
        } else {
          control.start("hidden");
        }
    }, [control, inView]);
    return (
        <motion.div className="technology">
            <div className="tech-logo">
                <img src={technology.image} alt="!" width={technology.width} />
            </div>
            <p>{technology.name}</p>
        </motion.div>
    )
}