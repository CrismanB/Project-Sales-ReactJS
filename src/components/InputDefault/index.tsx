import React, {
    InputHTMLAttributes,
    useCallback,
    useState,
    useRef,
} from "react";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
}

const InputDefault: React.FC<InputProps> = ({ placeholder, ...rest }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [IsFilled, setIsFilled] = useState(false);
    const [IsFocused, setIsFocused] = useState(false);

    const handleFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);

        setIsFilled(!!inputRef.current?.value);
    }, []);

    const handleClickSpan = useCallback(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <Container IsFilled={IsFilled} IsFocused={IsFocused}>
            <span onClick={handleClickSpan}>{placeholder}</span>
            <input
                ref={inputRef}
                onFocus={handleFocus}
                onBlur={handleInputBlur}
                {...rest}
            ></input>
        </Container>
    );
};

export default InputDefault;
