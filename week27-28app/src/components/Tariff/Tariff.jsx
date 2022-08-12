import './Tariff.scss';

export default function Tariff({ title, speed, description, isSelected, onClick }) {

    const handleClick = () => {
        onClick(title);
    }

    return (
        <div onClick={handleClick} className={`tariff tariff-${title} ` + (isSelected ? "selected" : "")}>
            <div className={`tariff-title tariff-title-${title}`}>Безлимитный {title}</div>
            <div className={`tariff-price tariff-price-${title}`}> <span className='tariff-price-rub'>руб</span> {title}<span className='tariff-price-month'>/мес</span></div>
            <div className='tariff-speed'>до {speed} Мбит/сек</div>
            <div className='tariff-description'>{description}</div>
        </div>
    );
}