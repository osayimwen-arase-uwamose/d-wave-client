import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      aria-label="D-Wave Entertainment Home"
      className="
        inline-flex
        shrink-0
        items-center
        gap-3
        rounded-md
        transition-opacity
        duration-200
        hover:opacity-90
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-sky-400
      "
    >
      <img
        src="https://res.cloudinary.com/dslzm3lo6/image/upload/v1771483783/logo_rbnlbh.jpg"
        alt="D-Wave Entertainment"
        className="
          block
          h-10
          w-10
          shrink-0
          rounded-full
          object-contain
        "
      />

      <span
        className="
          whitespace-nowrap
          font-display
          text-sm
          font-bold
          tracking-wide
          text-white
          sm:text-base
        "
      >
        D-WAVE
        <span className="ml-1 text-sky-400">
          ENTERTAINMENT
        </span>
      </span>
    </Link>
  );
};

export default Logo;
