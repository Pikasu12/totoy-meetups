import Link from "next/link"

import classes from "./MainNavigation.module.css"

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Totoy Crewmates</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Crewmates</Link>
          </li>
          <li>
            <Link href="/new-meetup">Add New Crewmates</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
