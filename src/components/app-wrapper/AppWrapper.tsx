import type { AppWrapperProps } from "../../types/appTypes";

const AppWrapper = ({ wrapperbgcolor, className, children }: AppWrapperProps) => {
  return (
    <div className={`flex justify-center ${wrapperbgcolor}`}>
      <div className={`w-full px-5 sm:max-w-[83vw] ${className}`}>{children}</div>
    </div>
  );
};

export default AppWrapper;
