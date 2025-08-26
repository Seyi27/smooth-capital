import { TailSpin } from "react-loader-spinner";
import type { CustomButtonProps } from "../../types/appTypes";

const CustomButton = ({
  label,
  width,
  height,
  bgColor,
  fontSize,
  fontWeight,
  borderRadius,
  borderWidth,
  loader,
  loaderColor,
  textColor,
  onClick,
  disabled,
  icon,
}: CustomButtonProps) => {
  return (
    <button
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        width: width,
        height: height,
        backgroundColor: bgColor,
        fontSize: fontSize,
        fontWeight: fontWeight,
        borderRadius: borderRadius,
        borderWidth: borderWidth,
        color: textColor,
        cursor: "pointer",
        opacity: disabled ? "0.5" : "1",
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span>{icon}</span>}
      {loader ? (
        <TailSpin
          visible={true}
          height={"25"}
          width={"25"}
          color={loaderColor ? loaderColor : "black"}
          ariaLabel="tail-spin-loading"
          radius="2"
          wrapperStyle={{}}
          wrapperClass=""
        />
      ) : (
        <span>{label}</span>
      )}
    </button>
  );
};

export default CustomButton;
