import React from 'react';

const Pagination = ({ currentPage, pageCount, onChoosePage }) => {
    const pageLeft =
        currentPage - 1 > 0 ? (currentPage - 2 > 0 ? currentPage - 2 : currentPage - 1) : 1;
    console.log(pageLeft)
    let pageRight =
        currentPage - 1 > 0
            ? currentPage - 2 > 0 ? currentPage + 2 : currentPage + 3
            : currentPage + 4;
    console.log(pageRight)

    if (pageRight > pageCount) {
        pageRight = pageCount;
    }
    console.log('pageCount', pageCount)

    const pages = [];
    for (let i = pageLeft; i <= pageRight; i++) {
        pages.push(i);
    }
    console.log('pages', pages)

    return (
        <div className="paginator">
            {pages.map((page) => (
                <span
                    key={page}
                    className={
                        page === currentPage ? (
                            'paginator__page paginator__page_active'
                        ) : (
                            'paginator__page'
                        )
                    }
                    onClick={() => onChoosePage(page)}
                >
					{page}
				</span>
            ))}
        </div>
    );
};

export default Pagination;
