import { Phone } from "lucide-react";

const StickyCallButton = () => {
  return (
    <a
      href="tel:+918660428450"
      aria-label="Call Eyemax Optical Store"
      className="
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        h-14 w-14
        rounded-full
        bg-black text-white
        shadow-lg
        transition
        hover:bg-gray-900
        hover:scale-105
        active:scale-95
      "
    >
      <Phone className="h-6 w-6" />
    </a>
  );
};

export default StickyCallButton;
