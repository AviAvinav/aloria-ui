import "./index.css";

let defaultDir;

if (window.innerWidth >= 767) {
  defaultDir = "row";
} else {
  defaultDir = "column";
}

export const Container = ({
  flexDirection,
  alignItems,
  className,
  justifyContent,
  children,
}) => {
  return (
    <div
      className={`aloria-Container ${flexDirection ? flexDirection : ""} ${
        alignItems ? alignItems : ""
      } ${justifyContent ? justifyContent : ""} ${className ? className : ""} ${
        "aloria-Container-padding" ? padding : ""
      }`}
    >
      {children}
    </div>
  );
};
