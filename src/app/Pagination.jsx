import React from 'react';

const Pagination = ({currentPage, pageCount, onChoosePage}) => {
    const pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

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
