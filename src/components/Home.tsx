import styled from "styled-components";
import cap from "../assets/cap.png";
import bottole from "../assets/bottole.png";
import bg from "../assets/img_bg.png";
import hand from "../assets/icon_hand.png";
import water from "../assets/ion_water.png";
import recycle from "../assets/icon_recycle.png";
import { motion, useScroll, useTransform, useViewportScroll } from "framer-motion";
import { bottoleAnim, capAnim, description, down, page, show } from "../style/animation";
import bg_left from "../assets/bg_left.png";
import bg_rigth from "../assets/bg_right.png";
const Home = () => {
  // const {scrollYProgress} = useViewportScroll();
  const {scrollYProgress} = useScroll();
  const yPosCap = useTransform(scrollYProgress, [0, 0.4, 1], [0, 200, 190])
  const yPosBottole = useTransform(scrollYProgress, [0,0.4,1], [0,-70,-150])
  return (
    <motion.div  variants={page} initial="hidden" whileInView="show">
      <HomeStyle>
        <div className="decoration decorationLeft">
          <img src={bg_left} alt="" />
        </div>
        <div className="decoration decorationRight">
          <img src={bg_rigth} alt="" />
        </div>
        <motion.div variants={capAnim} style={{ y: yPosCap}}  className="cap animatedImage">
          <motion.div variants={down} >
              <img src={cap} alt="" />
          </motion.div>
        </motion.div>
        

        <motion.div variants={bottoleAnim} style={{y:yPosBottole}}  className="bottole animatedImage">
          <img src={bottole} height={350} alt="" />
        </motion.div>
        <div className="description">
            <motion.div style={{ overflow: "hidden" }} variants={description} >
                <h1>
                Elevate Hydration, Inspire Living – Pure Essence in Every Drop<span>.</span>
                </h1>
                <p>Hydration Elevated: Sip Excellence with Every Drop</p>
                <button className="btn">Shop Now</button>
            </motion.div>
        </div>
        <motion.div variants={show} className="section2">
          <div className="col1">
            <div className="item">
              <img src={hand} alt="" />
              <p>SUSTAINABLE & BPA FREE</p>
            </div>
            <div className="item">
              <img src={water} alt="" />
              <p>LIGHTWEIGHT</p>
            </div>
            <div className="item">
              <img src={recycle} alt="" />
              <p>LIFETIME WARRANTY</p>
            </div>
          </div>
          <div className="col2">
            <img src={bg} alt="" />
          </div>
        </motion.div>
      </HomeStyle>
    </motion.div>
  );
};

const HomeStyle = styled.div`
  .description {
    height: 100vh;
    text-align: center;
    /* background-color:red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* margin: 2em auto 5em auto; */
    h1 {
      margin: 0 auto;
      font-size: 3.5em;
      width: 900px;
      span{
        color :#FF4D03;
      }
    }
    p {
      margin: 20px auto;
      opacity: 60%;
    }
  }
  .animatedImage {
    z-index : 10;
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 100px;
  }
  .cap {
    position: fixed;
    z-index: 100;
    left: -5em;
    top : 6em;
  }
  .bottole {
    position: fixed;
    bottom: -10em;
    left: -9em;
  }
  .section2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    gap: 0;
    .col1 {
      background-color: #2b575b;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      justify-content: center;
      .item {
        margin-bottom: 5em;
        p {
          margin-top: 10px;
        }
      }
    }
    .col2 {
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
  .decoration{
    position : fixed;
    &.decorationLeft{
      top : -5em;
    }
    &.decorationRight{
      right : 0;
      bottom : -8em;
    }
  }
`;
export default Home;
