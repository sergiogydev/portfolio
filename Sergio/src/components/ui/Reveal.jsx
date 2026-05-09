import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.05,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
  once = true,
  ...rest
}) {
  const MotionTag = motion[Tag] || motion.div;
  return (
    <MotionTag
      className={className}
      variants={variants}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-80px" }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
