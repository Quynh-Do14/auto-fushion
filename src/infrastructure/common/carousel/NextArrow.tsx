import React from 'react';
type Props = {
    className?: string;
    onClick?: () => void;
    icon?: string;
};
const NextArrow = (props: Props) => {
    const { className, onClick, icon } = props;
    return (
        <a className={`slick-arrow slick-next ${className}`} onClick={onClick}>
            {icon ? (
                <i className={icon}></i>
            ) : (
                <i className="icon-chevron-right"></i>
            )}
        </a>
    );
};

export default NextArrow;
