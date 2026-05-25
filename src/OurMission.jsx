import style from "./OurMission.module.css";
import Ourmission from "./ProductsImages/OurMission.png";

function OurMission() {
  return (
 <>
    <div className={style.main}>
     <div className={style.heading}>
      <h1>OurMission</h1>
      <p>HerbAmrit me hamara mission sirf products sell karna nahi hai —
humara goal hai har ghar tak natural, safe aur trusted homeopathy solutions pahunchana.

Hum believe karte hain ki acchi health ki shuruaat nature se hoti hai. Isi liye HerbAmrit me hum carefully selected homeopathic medicines aur wellness products provide karte hain jo purity, safety aur quality standards ko follow karte hain.

Hamara focus har customer ko ek healthy aur trustworthy experience dena hai. Product selection se lekar packaging aur delivery tak, har step par hum quality aur hygiene ka special dhyaan rakhte hain taki aap tak sirf best products hi pahunch sakein.

Hum chahte hain ki jab bhi aap HerbAmrit ka koi product use karein, to aapko confidence aur satisfaction feel ho — kyunki hamare liye aapki health aur trust sabse important hai.

HerbAmrit sirf ek brand nahi, balki natural healing aur better lifestyle ki taraf ek commitment hai —
“Healing Naturally, Living Better.</p>
     </div>
     <div className={style.imgIcon}>
      <img src={Ourmission} alt="Team" />
     </div>
    </div>
  </>
  );
}

export default OurMission;