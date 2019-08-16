import React from "react";
import PropTypes from "prop-types";

import "./Pagination.scss";

class Pagination extends React.Component {
    getPresentPage = () => this.props.presentPage || 1;

    changePage = async newPage => {
        const { onPageChange } = this.props;
        await this.setState({ presentPage: newPage });
        onPageChange(newPage);
    };

    render() {
        const { pages } = this.props;
        const { changePage, getPresentPage } = this;
        const presentPage = getPresentPage();

        return (
            <div className="pagination">
                <ul className="pagination__list">
                    {presentPage > 1 && (
                        <li
                            key="prev"
                            onClick={() => {
                                changePage(presentPage - 1);
                            }}
                            className="pagination__list__item"
                        >
                            {"<"}
                        </li>
                    )}
                    {[...Array(pages)].map((el, page) => (
                        <li
                            key={++page}
                            onClick={() => {
                                changePage(page);
                            }}
                            className={`pagination__list__item${
                                page === presentPage ? " pagination__list__item--active" : ""
                            }`}
                        >
                            {page}
                        </li>
                    ))}
                    {presentPage < pages && (
                        <li
                            key="next"
                            onClick={() => {
                                changePage(presentPage + 1);
                            }}
                            className="pagination__list__item"
                        >
                            {">"}
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

Pagination.propTypes = {
    pages: PropTypes.number.isRequired,
    initialPage: PropTypes.number,
    onPageChange: PropTypes.func.isRequired
};

export default Pagination;
