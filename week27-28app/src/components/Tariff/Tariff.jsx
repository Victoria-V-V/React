import './Tariff.scss';

export default function Tariff(props) {
    return (
        <div className={`tariff tariff-${props.tariff.title} ` + (props.tariff.isSelected ? "selected" : "")}>
            <div className={`tariff-title tariff-title-${props.tariff.title}`}>Безлимитный {props.tariff.title}</div>
            <div className={`tariff-price tariff-price-${props.tariff.title}`}> <span className='tariff-price-rub'>руб</span> {props.tariff.title}<span className='tariff-price-month'>/мес</span></div>
            <div className='tariff-speed'>до {props.tariff.speed} Мбит/сек</div>
            <div className='tariff-description'>{props.tariff.description}</div>
        </div>
    );
}