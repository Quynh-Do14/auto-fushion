import React from 'react'
type Props = {
    onClick: () => void,
    title: string,
    width?: number
    disabled?: boolean
    variant: "ps-btn--fullwidth" | "ps-btn--reverse" | "ps-btn--black" | "ps-btn--gray"
}
const ButtonCommon = (props: Props) => {
    const {
        onClick,
        title,
        width = false,
        disabled = false,
        variant = "ps-btn--fullwidth"
    } = props;
    return (
        <button
            onClick={onClick}
            className={`ps-btn ${variant}`}
            disabled={disabled}
            style={{
                width: width ? width : '100%',
                whiteSpace: "nowrap"
            }}>
            {title}
        </button>
    )
}

export default ButtonCommon