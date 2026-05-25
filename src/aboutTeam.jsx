import style from "./aboutTeam.module.css";
import FreeDelivery from "./ProductsImages/Team.png";

function AboutTeam() {
  return (
 <>
    <div className={style.main}>
     <div className={style.heading}>
      <h1>About Our Team</h1>
      <p>HerbAmrit me hamari team sirf employees ka group nahi hai —
yeh ek family hai jo health, trust aur natural healing me believe karti hai.

Best homeopathy products select karne se lekar unhe safely aapke ghar tak pahunchane tak, har step hum poori care aur dedication ke saath handle karte hain. Hamari team ka ek hi mission hai — logon tak genuine, safe aur effective homeopathy medicines pahunchana.

Hamare experts, staff aur support members sab milkar is baat ka dhyan rakhte hain ki har product quality standards ko follow kare aur customers ko best experience mile. Hum samajhte hain ki health sabse important hoti hai, isliye HerbAmrit par har medicine trust aur authenticity ke saath provide ki jati hai.

Har product ke peeche hamari honesty, care aur customer satisfaction ka promise hota hai.

HerbAmrit me hum sirf medicines provide nahi karte —
hum natural wellness aur trust deliver karte hain.</p>
     </div>
     <div className={style.imgIcon}>
      <img src={FreeDelivery} />
     </div>
    </div>
  </>
  );
}

export default AboutTeam;