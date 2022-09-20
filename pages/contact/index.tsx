import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <p>tu jest kontakt</p>
    </motion.div>
  );
};

export default Contact;
