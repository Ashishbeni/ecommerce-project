import style from "./OurVision.module.css"
import Ourvision from "./ProductsImages/OurVision.png";

function OurVision() {
  return (
 <>
    <div className={style.main}>
     <div className={style.heading}>
      <h1>OurVision</h1>
      <p>Natural wellness aur homeopathy ko har ghar tak trusted way me pahunchana.”

HerbAmrit sirf ek wellness brand nahi banna chahta, balki logon ki healthy lifestyle journey ka trusted partner banna chahta hai. Hamara aim hai ki jab bhi koi natural healing, immunity support ya safe wellness products ke baare me soche, to sabse pehle HerbAmrit ka naam yaad aaye.

Aane wale samay me hum apni reach ko aur expand karna chahte hain, naye products introduce karna chahte hain aur zyada se zyada families tak apne trusted wellness solutions pahunchana chahte hain. Lekin growth ke saath-saath hum apni core values — purity, trust aur quality — ko kabhi compromise nahi karenge.

Hum believe karte hain ki asli success sirf business growth me nahi, balki customers ke trust aur satisfaction me hoti hai. Isi liye hum har din better banne ki koshish karte hain, taki aapko hamesha safe, natural aur reliable products mil sakein jo aapki daily wellness journey ko support karein.</p>
     </div>
     <div className={style.imgIcon}>
      <img src={Ourvision} alt="Team" />
     </div>
    </div>
  </>
  );
}

export default OurVision;