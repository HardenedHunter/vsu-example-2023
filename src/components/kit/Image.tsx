type ImageProps = {
  src: string;
  alt: string;
};

export const Image: React.FC<ImageProps> = ({ src, alt }) => (
  <img
    className="h-24 w-24 rounded-full border-2 border-solid border-black"
    src={src}
    alt={alt}
  />
);
