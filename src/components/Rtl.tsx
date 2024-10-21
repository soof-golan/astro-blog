import type { PropsWithChildren } from "react";

export const Rtl = ({ children }: PropsWithChildren) => {
	return <div dir="rtl">{children}</div>;
};

export default Rtl;
