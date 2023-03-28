import './Card.css';

function Card(props) {
    console.log('props in card: ', props);
    const classes = 'card ' + props.className;
    return <div className={classes} id={props.id}>{props.children}</div>
}

export default Card;