import React from "react"
import { Link } from "gatsby"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import { NavigationWrapper } from "./Navigation.styles"

const Navigation = () => {
  const { wpMenu } = useMenuQuery()
  const mainMenu = wpMenu.menuItems.nodes
  return (
    <NavigationWrapper>
      <ul>
        {mainMenu.map(item => {
          return (
            <li key={item.id}>
              <Link to={item.url}>{item.label}</Link>
            </li>
          )
        })}
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </NavigationWrapper>
  )
}

export default Navigation
