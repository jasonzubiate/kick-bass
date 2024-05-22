import { motion } from "framer-motion";

type MenuButtonProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function MenuButton({ isOpen, setIsOpen }: MenuButtonProps) {
  return (
    <div className="fixed top-4 lg:top-8 right-4 lg:right-8">
      <button onClick={() => setIsOpen(!isOpen)} className="menu__btn">
        <motion.div
          animate={{ top: isOpen ? "-100%" : "0" }}
          className="menu__btn__slider"
        >
          <div className="menu__btn__inner">Menu</div>
          <div className="menu__btn__inner">Close</div>
        </motion.div>
      </button>
    </div>
  );
}
