import React from "react";

import { Container } from "./styles";

const ButtonDefault: React.FC = ({ children, ...rest }) => {
    return <Container {...rest}>{children}</Container>;
};

export default ButtonDefault;
