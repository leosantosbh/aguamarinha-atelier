import "./ImageSlot.css";

interface ImageSlotProps {
  src?: string;
  alt?: string;
  label?: string;
  className?: string;
}

export function ImageSlot({
  src,
  alt = "",
  label = "Imagem",
  className = "",
}: ImageSlotProps) {
  return (
    <div className={`image-slot ${className}`}>
      {src ? (
        <img
          src={src}
          alt={alt}
        />
      ) : (
        <div className="image-slot__placeholder">
          <span>✦</span>
          <p>{label}</p>
        </div>
      )}
    </div>
  );
}