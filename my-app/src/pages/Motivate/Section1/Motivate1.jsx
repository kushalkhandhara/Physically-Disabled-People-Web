import "./Motivate1.css"
import MotivateCard from "./MotivateCard"

import Nick from "../../../assets/nick_vujicic.jpg";
import Andrea from "../../../assets/andrea_boccelli.jpg"
import Kyle from "../../../assets/kyle_maynard.jpg"
import Bethany from "../../../assets/bethany_hamilton.jpg"
import Muniba from "../../../assets/muniba_mazari.jpg"
import Stephen from "../../../assets/stephen_hawking.jpg"
import Steve from "../../../assets/stevie_wonder.jpg"

export default function Motivate1() {
  return (
    <div className="motivate1 container">
        <div className="motivate1-header">
            <h2>Explore 100+ Motivational Stories</h2>
        </div>
        <div className="motivate1-explore">
           <MotivateCard image={Nick} header="Nick Vuijicic" para="It doesn’t get more inspiring than Nick Vujicic. Vujicic was born in 1982 with no limbs. He often recalls that as a child he suffered ridicule and discrimination. Things got so bad for Nick that at one point he even attempted to commit suicide. With time, however, he learned to see his potential.
            Nick taught himself to improvise to accomplish several skills, including playing musical instruments and using a computer. 
            In 2005, Nick founded Life Without Limbs in order to spread hope and inspiration around the world. He currently gives motivational talks around the world, has written several books and is a regular on talk shows and TV programs. 
            Nick’s fame spiked after starring in the touching short film The Butterfly Circus back in 2009." />
           <MotivateCard image={Andrea} header="Andrea Bocelli" para="Tenor, musician, writer, and musical producer of Italian origin, Andrea Boccelli has had an exceptional music career and has sold more than 75 million records.
            Boccelli was born with congenital glaucoma that made him partially blind from the beginning of his life. 
            Identifying his musical talent, Boccelli’s parents arranged for him to take music lessons from a young age. He studied the piano until the age of six despite his visual difficulties.
            At age 12, the young Andrea suffered a serious injury during a football game. The effects of the blow on top of his congenital vision impairment left him completely blind. Endowed with a special spirit, he decided to focus entirely on music, specifically on singing. Boccelli became an internationally acclaimed vocalist. He is one of the few artists ever that brought classical music to the top of international pop charts.
            Boccelli has received numerous international awards and even has a beach named after him on the Adriatic coast." />
           
           <MotivateCard image={Kyle} header="Kyle Maynard" para="Despite being born with a rare condition  known as congenital amputation that left him with arms that end at the elbows and legs that end near his knees, Kyle learned early on to live life independently. 
            Kyle’s feats are simply remarkable. In 2012, Kyle became the first quadruple amputee to climb the 19,340 feet to the top of Mount Kilimanjaro without the aid of prosthetics. Four years later in 2016, he reached the summit of Argentina’s Mount Aconcagua. Standing at 22,838 feet, Aconcagua is the highest peak in both the Western and Southern Hemispheres. Many of Kyle’s accomplishments are done to raise awareness for special causes such as injured veterans and children in need.  
            Today, Kyle is a motivational speaker, author, entrepreneur, and ESPY award-winning mixed martial artist." />
           <MotivateCard image={Bethany} header="Bethany Hamilton" para="In 2003, Bethany survived a shark   attack in which she lost her arm. 
            Bethany didn’t let her injury keep her down. Already an avid surfer, Bethany was back in the water within three to four weeks of the attack. She turned pro and has competed internationally ever since, scoring six first-place trophies and several other prestigious sports awards over the past fifteen years. 
            In addition to competing, Bethany runs courses on motivation and life transformation-based and powered on her own experiences and inspirational story." />

           <MotivateCard image={Muniba} header="Muniba Mazari" para="Muniba became confined to a wheelchair after a serious car accident in her native Pakistan that severely damaged her spinal cord. 
            During her many months of rehabilitation, Muniba began discovering her artistic talent. She painted self-expressive portraits as an outlet for her personal sorrow. Muniba’s unique and vibrant style almost immediately attracted attention. She became a highly sought-after artist, working on private contracts on a variety of projects in Pakistan and abroad.  
            As her fame grew due to her exceptional art and unique story, Muniba began to take up motivational speaking and humanitarian activism. She has received numerous international awards for her work over the years and is the first Goodwill Ambassador to UN Women from her home nation of Pakistan." />
           
           <MotivateCard image={Stephen} header="Stevie Wonder" para="Hawkings was diagnosed with ALS (Lou Gehrig’s Disease) when he was 21 years old while still a student at Cambridge. His doctors initially told him he had two years to live. He ended up living with the disease for more than five decades. 
            One of the most well-known physicists in the world, Stephen Hawking had prestigious careers as a theoretical physicist, cosmologist, author, and Director of Research at the Centre for Theoretical Cosmology at the University of Cambridge.
            One of his most famous books was A Brief History of Time and he is one of the few contemporary physicists and researchers to transcend the world of scientists to become a household name around the world.
            Dr. Hawkings spent years paralyzed from head to toe. He communicated through a voice synthesizer, which he operated with the use of a single cheek muscle. Hawking was able to continue with his scientific research, publication, and lecturing. His contributions to his field are numerous and include revolutionary new theories in physical cosmology. He was the recipient of no fewer than fifteen major awards, nearly all of which earned long after his body had become incapacitated by his ALS. 
            Hawking passed away in 2018 at the age of seventy-six." />

           <MotivateCard image={Steve} header="Stephen Hawking" para="Stevie Wonder was born 6 weeks prematurely and the blood vessels in his eyes had not yet developed. The oxygen-rich atmosphere in the hospital incubator resulted in retinopathy of prematurity, a condition in which the growth of the eyes is aborted and causes the retinas to detach causing blindness. 
            Despite being blind from birth, Stevie excelled at music from a young age. Stevie was identified as a child prodigy and signed his first record label at age eleven. He has recorded more than 30 U.S. top ten hits including famous tracks like “Signed, Sealed, Delivered I’m Yours,” “Superstition,” “You Are the Sunshine of My Life,” and “I Just Called to Say I Love You.” He has over 25 Grammy Awards to his name. 
            Wonder has also spent years in political activism. He was one of the key campaigners to make Martin Luther King Jr.’s birthday a national holiday in the U.S. In 1985, he was honored by the United Nations for his stance against racism in South Africa. In 2009, he was named a United Nations Messenger of Peace for his years of efforts in peaceful political causes." />

        </div>
    </div>
  )
}
