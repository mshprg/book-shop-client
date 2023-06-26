import {motion} from "framer-motion";

const HeightWrapper = ({dir = "column", children}) => {
    return (
        <motion.div
            className="height"
            style={{display: 'flex', flexDirection: dir}}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
        >
            {children}
        </motion.div>
    );
};

export default HeightWrapper;