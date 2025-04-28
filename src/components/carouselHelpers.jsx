import { ChevronLeft, ChevronRight } from "lucide-react";

// Render previous arrow
export const renderArrowPrev = (onClickHandler, hasPrev, label) =>
  hasPrev && (
    <button
      type="button"
      onClick={onClickHandler}
      title={label}
      className="cursor-pointer absolute top-1/2 left-4 z-10 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full shadow-lg"
    >
      <ChevronLeft size={24} />
    </button>
  );

// Render next arrow
export const renderArrowNext = (onClickHandler, hasNext, label) =>
  hasNext && (
    <button
      type="button"
      onClick={onClickHandler}
      title={label}
      className="cursor-pointer absolute top-1/2 right-4 z-10 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full shadow-lg"
    >
      <ChevronRight size={24} />
    </button>
  );

// Render indicator (dot buttons)
export const renderIndicator = (onClickHandler, isSelected, index, label) => {
  const baseClass = "inline-block w-3 h-3 mx-1 rounded-full cursor-pointer";
  const selectedClass = "bg-orange-500";
  const unselectedClass = "bg-gray-300";

  return (
    <li
      className={`${baseClass} ${isSelected ? selectedClass : unselectedClass}`}
      onClick={onClickHandler}
      onKeyDown={onClickHandler}
      value={index}
      key={index}
      role="button"
      tabIndex={0}
      aria-label={`${label} ${index + 1}`}
    />
  );
};
