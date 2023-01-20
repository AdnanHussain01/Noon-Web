
const Header = () =>{
    return(
        <div>
        <div className="header">
           <a href=""> <img className="noon" src="https://z.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg" /></a>
           <a href=""> <img className="uae" src="https://z.nooncdn.com/s/app/com/common/images/flags/ae.svg" /></a>
            <a href="" id="nounderline"><p>Deliver to <br /><span id="dub">Dubai </span></p></a>
            <input id="inp" type="text" placeholder="What are you looking for?" />
            <a href="" id="nounderline"><p>العربية <span id="line"> |</span></p></a>
            <a href="" id="nounderline"><p id="bold">Sign In <span id="line"> |</span></p></a>
            <a href="" id="nounderline"><p id="bold">Cart</p></a>
        </div>

        <div className="mainsection">
            
            <ul className="sectionsli">
                <a href="" id="nounderline"><li id="allgategories"> ALL CATEGORIES </li></a>
                <a href="" id="nounderline"><li>ELECTRONICS</li></a>
                <a href="" id="nounderline"><li>MEN</li></a>
                <a href="" id="nounderline"><li>WOMEN</li></a>
                <a href="" id="nounderline"><li>HOME</li></a>
                <a href="" id="nounderline"><li>BEAUTY & FRAGNANCE</li></a>
                <a href="" id="nounderline"><li>BABA & TOYS</li></a>
                <a href="" id="nounderline"><li>SPORTS</li></a>
                <a href="" id="nounderline"><li>BESTSELLERS</li></a>
                <a href="" id="nounderline"><li>SELL ON MOON</li></a>
            </ul>
            
        </div>
        <div>
           <a href="" id="nounderline"><img id="van" src="https://f.nooncdn.com/mpcms/EN0001/assets/35ed38ac-b1f1-4d24-a7c3-a21aafc803c0.png"  /></a> 
        </div>
        </div>

    )
}

export default Header;