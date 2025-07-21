import { useEffect, useState } from "react";
import logo from "@/asset/img/logo.png";

type Props = {
    isLoading?: boolean;
    size?: string;
    tip?: any;
    color?: string;
};

export const PageLoading = (props: Props) => {
    const { isLoading } = props;
    const [showLoading, setShowLoading] = useState<boolean>(false);

    useEffect(() => {
        if (isLoading) {
            setShowLoading(true);
        } else {
            // Delay 1s sau khi loading false
            const timeout = setTimeout(() => {
                setShowLoading(false);
            }, 500);

            return () => clearTimeout(timeout);
        }
    }, [isLoading]);

    return (
        <>
            {showLoading && (
                <div className="home-page-loading">
                    <LoadingRegion />
                </div>
            )}
        </>
    );
};

/**
 * Loading spin
 */
export const LoadingRegion = () => {
    return (
        <>
            <img src={logo.src} alt="autofusion" width={320} height="auto" />
        </>
    );
};
