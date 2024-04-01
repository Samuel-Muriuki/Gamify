import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const Alert = ({ children }: Props) => {
    return <div>{children}</div>;
};

export default Alert;
