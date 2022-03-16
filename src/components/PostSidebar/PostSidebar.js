import React from "react"
import { Link } from "gatsby"
import { Wrapper, Menu } from "./PostSidebar.styles"
import DateIcon from "../../images/icon-date.svg"
import AuthorIcon from "../../images/icon-author.svg"
import CategoryIcon from "../../images/icon-category.svg"

const PostSidebar = ({ postDate, postAuthor, postCategories }) => {
  return (
    <Wrapper>
      <Menu>
        <li className="sidebar-section">
          <span className="sidebar-section-content">
            <img src={DateIcon} alt="" />
            <span>{postDate}</span>
          </span>
        </li>
        <li className="sidebar-section">
          <span className="sidebar-section-content">
            <img src={AuthorIcon} alt="" />
            <span>{postAuthor}</span>
          </span>
        </li>
        <li className="sidebar-section">
          <span className="sidebar-section-content">
            <img src={CategoryIcon} alt="" />
            <span>Categories</span>
          </span>

          <ul className="sidebar-section-categories">
            {postCategories.map(category =>
              category.slug !== "all-posts" ? (
                <li key={category.id}>
                  <Link to={category.uri}>
                    <span>{category.name}</span>
                  </Link>
                </li>
              ) : null
            )}
          </ul>
        </li>
      </Menu>
    </Wrapper>
  )
}

export default PostSidebar
