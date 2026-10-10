import "./ImageSlot.css";

interface ImageSlotProps {
  src?: string;
  alt?: string;
  label?: string;
  className?: string;
  style?: React.CSSProperties;
  styleSlot?: React.CSSProperties;
}

export function ImageSlot({
  src,
  alt = "",
  label = "Imagem",
  className = "",
  style = {},
  styleSlot = {},
}: ImageSlotProps) {
  return (
    <div style={styleSlot} className={`image-slot ${className}`}>
      {src ? (
        <img
          style={style}
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