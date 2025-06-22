import React from 'react';

interface Props {
    currentPage: number;
    total: number;
    totalPage: number;
    onChangePage: (page: number) => void;
}

const CustomPagination = ({ currentPage, total, totalPage, onChangePage }: Props) => {
    const isLastPage = currentPage * total >= totalPage;


    const handleClickPage = (page: number) => {
        if (page !== currentPage) {
            onChangePage(page);
        }
    };

    const handlePreviousPage = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (currentPage !== 1) {
            onChangePage(currentPage - 1);
        }
    };
    const handleNextPage = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (!isLastPage) {
            onChangePage(currentPage + 1);
        }
    };

    const renderPageNumbers = () => {
        const pages: number[] = [];

        for (let i = 1; i <= total; i++) {
            pages.push(i);
        }

        return pages.map((page) => (
            <li key={page} className={page === currentPage ? 'active' : ''}>
                <a href="#" onClick={(e) => { e.preventDefault(); handleClickPage(page); }}>
                    {page}
                </a>
            </li>
        ));
    };

    return (
        <div className="ps-pagination">
            <ul className="pagination">
                {
                    currentPage !== 1
                }
                <li>
                    <a href="#" onClick={(e) => handlePreviousPage(e)}>
                        <i className="icon-chevron-left"></i> Trước
                    </a>
                </li>
                {renderPageNumbers()}
                <li>
                    <a href="#" onClick={(e) => handleNextPage(e)}>
                        Sau <i className="icon-chevron-right"></i>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default CustomPagination;
