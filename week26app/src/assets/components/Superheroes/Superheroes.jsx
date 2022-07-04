import './Superheroes.css';

function Superheroes(props) {
    return (
        <div className="App">
            <div className="image__container">
                <img className="superhero__image" alt={props.superhero.name} src={`${props.superhero.image}`} />
            </div>
            <div className="superhero__name">{props.superhero.name}</div>
            <div>Вселенная: {props.superhero.universe}</div>
            <div>Альтер эго: {props.superhero.alterego}</div>
            <div>Род деятельности: {props.superhero.alterego}</div>
            <div>Друзья: {props.superhero.friends}</div>
            <div>Суперсилы: {props.superhero.superpower}</div>
        </div>
    );
}

export default Superheroes;