import style from "./OurStory.module.css";
import Ourstory from "./ProductsImages/OurStory.png";


function OurStory() {
  return (
 <>
    <div className={style.main}>
     <div className={style.heading}>
      <h1>OurStory</h1>
      <p>HerbAmrit ki shuruaat ek simple belief se hui —
“Nature ke through healthy aur balanced life har ghar tak pahunchni chahiye.”

Hamari journey ek chhoti si vision se start hui thi, jahan humne natural wellness aur homeopathy ko logon tak simple aur trusted way me pahunchane ka goal rakha. Dheere-dheere yeh sirf ek business nahi, balki ek commitment ban gaya — logon ko safe, natural aur quality wellness solutions provide karne ka.

Aaj bhi HerbAmrit wahi values follow karta hai — purity, care aur trust. Har product ko carefully select aur maintain kiya jata hai taki customers ko har baar ek reliable aur satisfying experience mil sake.

Hum maante hain ki ek strong brand sirf products se nahi, balki customers ke trust aur relationships se banta hai. Isi liye HerbAmrit sirf ek name nahi, balki ek promise hai — natural healing, better lifestyle aur long-term wellness ka.

“Healing Naturally, Living Better.</p>
     </div>
     <div className={style.imgIcon}>
      <img src={Ourstory} alt="Team" />
     </div>
    </div>
  </>
  );
}

export default OurStory;