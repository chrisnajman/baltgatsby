import React from "react"
import { Link } from "gatsby"
import FolderIcon from "../../images/icon-folder.svg"
import { Wrapper, Menu } from "./ArchiveSidebar.styles"

const ArchiveSidebar = ({ catId, categories }) => {
  const sortedCategories = [...categories].sort((x, y) => {
    if (x.node.slug === "all-posts") return -1
    if (y.node.slug === "all-posts") return 1
    return 0
  })
  return (
    <Wrapper>
      <Menu>
        <li className="sidebar-menu-header">
          <img src={FolderIcon} alt="" />
          <span>Categories</span>
        </li>
        {sortedCategories.map(cat => {
          if (cat.node.count !== 0) {
            return cat.node.slug !== "uncategorized" ? (
              <li key={cat.node.id}>
                <span className="count">{cat.node.count}</span>
                <Link to={cat.node.uri} activeClassName="sidebar-highlighted">
                  {cat.node.name}
                </Link>
              </li>
            ) : null
          }
          return null
        })}
      </Menu>
    </Wrapper>
  )
}

export default ArchiveSidebar
