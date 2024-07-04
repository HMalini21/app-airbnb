import star from '../assets/Star 1.png';

function Scrollbox(props) {
  let badgetext;
  if (props.d.openspot === 0) {
    badgetext = 'SOLDOUT';
  }

  return (
    <div className="card-gird">
      <div>
        {badgetext && <div className="badge">{badgetext}</div>}
        <img src={props.d.img} alt={props.d.alter} className="ALL-image" />
      </div>
      <div>
        <img src={star} alt="redstart" className="star-image" />
        <span className="greypart"> {props.d.info}</span>
        <p>{props.d.descrip}</p>
        <p>{props.d.value}</p>
      </div>
    </div>
  );
}

export default Scrollbox;
