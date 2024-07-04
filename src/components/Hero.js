import Grppic from '../assets/Grouppic.png';

function Herobox() {
  return (
    <>
      <div className="hero--img">
        <img className="Grpimg" src={Grppic} alt="group of pictures" />
      </div>
      <div className="title-info">
        <h1>Online Experineces</h1>
        <p>Join unique activity led by one-of-a-kind host-all without leaving house</p>
      </div>
    </>
  );
}

export default Herobox;
