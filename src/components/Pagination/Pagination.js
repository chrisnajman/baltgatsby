import React from "react"
import { Link } from "gatsby"
import { Wrapper } from "./Pagination.styles"

const Pagination = ({ catUri, page, totalPages }) => {
  return (
    <React.Fragment>
      <h2>
        Page {page} / {totalPages}
      </h2>
      {console.log(page)}
      <Wrapper isFirst={page === 1}>
        {page > 1 ? (
          <Link to={`${catUri}${page === 2 ? "" : page - 1}`} className="back">
            Previous
          </Link>
        ) : null}
        {page < totalPages ? (
          <Link to={`${catUri}${page + 1}`} className="forward">
            Next
          </Link>
        ) : null}
      </Wrapper>
    </React.Fragment>
  )
}

export default Pagination
