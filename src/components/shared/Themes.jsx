import {IoIosColorPalette, IoMdArrowDropdown} from 'react-icons/io'

const Themes = () => {
    return (
        <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost m-1 flex flex-nowrap">
                <IoIosColorPalette className="text-2xl sm:text-4xl" title="themes"/>
                <span className="ml-2">
                    <IoMdArrowDropdown />
                </span>
            </label>
            <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><button data-set-theme="bumblebee" data-act-class="ACTIVECLASS">Light</button></li>
                <li><button data-set-theme="dark" data-act-class="ACTIVECLASS">Dark</button></li>
                <li><button data-set-theme="cupcake" data-act-class="ACTIVECLASS">Cupcake</button></li>
                <li><button data-set-theme="aqua" data-act-class="ACTIVECLASS">Aqua</button></li>
                <li><button data-set-theme="wireframe" data-act-class="ACTIVECLASS">Wireframe</button></li>
                <li><button data-set-theme="fantasy" data-act-class="ACTIVECLASS">Fantasy</button></li>
                <li><button data-set-theme="cyberpunk" data-act-class="ACTIVECLASS">Cyberpunk</button></li>
                <li><button data-set-theme="dracula" data-act-class="ACTIVECLASS">Dracula</button></li>
                <li><button data-set-theme="valentine" data-act-class="ACTIVECLASS">Valentine</button></li>
                <li><button data-set-theme="black" data-act-class="ACTIVECLASS">Black</button></li>
            </ul>
        </div>
    );
}
 
export default Themes;