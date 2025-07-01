import React from 'react'
type Props = {
    onClick: () => void,
    title: string,
    width?: number
    disabled?: boolean
}
const ButtonCommon = (props: Props) => {
    const {
        onClick,
        title,
        width = false,
        disabled = false
    } = props;
    return (
        <button
            onClick={onClick}
            className="ps-btn ps-btn--fullwidth"
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