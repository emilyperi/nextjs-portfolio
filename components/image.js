
export default function Image ({small, medium, large, className}) {
  return (
    <img src={small} srcSet={`${small} 300w, ${medium} 768w, ${large} 1280w`} className={className}/>
  );
}