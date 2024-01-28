import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import { ReactComponent as BellIcon } from "./icons/bell.svg";
import { ReactComponent as MessengerIcon } from "./icons/messenger.svg";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";
import { ReactComponent as CogIcon } from "./icons/cog.svg";
import { ReactComponent as ChevronIcon } from "./icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg";
import logo from './logo.svg';
import {useState} from "react";

function App() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<"main" | "settings" | "animals">("main");

  return (
      <div className="App">
        <nav>
          <a
              className="logo"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            <img src={logo} alt="logo"/>
          </a>
          <ul className="nav--list">
            <li>
              <PlusIcon/>
            </li>
            <li>
              <BellIcon/>
            </li>
            <li>
              <MessengerIcon/>
            </li>
            <li>
              <CaretIcon onClick={() => setOpen(!open)} />
            </li>
          </ul>

          {open && activeMenu === "main" && (
              <div className="dropdown">
                <ul className="dropdown--list">
                  <li>
                    <CogIcon/>
                    My Profile
                  </li>
                  <li onClick={() => setActiveMenu("settings")}>
                    <CogIcon/>
                    Settings
                    <ChevronIcon className="submenuIcon"/>
                  </li>
                  <li onClick={() => setActiveMenu("animals")}>
                    <CogIcon/>
                    Animals
                    <ChevronIcon className="submenuIcon" />
                  </li>
                </ul>
              </div>
          )}

          {open && activeMenu === "settings" && (
              <div className="dropdown">
                <ul className="dropdown--list">
                  <li onClick={() => setActiveMenu("main")}>
                    <ArrowIcon/>
                    My Tutorial
                  </li>
                  <li>
                    <CogIcon/>
                    CSS
                  </li>
                  <li>
                    <CogIcon/>
                    JavaScript
                  </li>
                  <li>
                    <CogIcon/>
                    Awesome!
                  </li>
                </ul>
              </div>
          )}

          {open && activeMenu === "animals" && (
              <div className="dropdown">
                <ul className="dropdown--list">
                  <li onClick={() => setActiveMenu("main")}>
                    <ArrowIcon/>
                    Animals
                  </li>
                  <li>
                    <CogIcon/>
                    Frog
                  </li>
                  <li>
                    <CogIcon/>
                    Unicorn
                  </li>
                  <li>
                    <CogIcon/>
                    Chicken
                  </li>
                  <li>
                    <CogIcon/>
                    Kangaroo
                  </li>
                </ul>
              </div>
          )}

        </nav>
      </div>
  );
}

export default App;
