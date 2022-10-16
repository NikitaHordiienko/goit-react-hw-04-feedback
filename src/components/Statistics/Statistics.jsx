import PropTypes from 'prop-types';
import Notification from 'components/Notification/Notification';
import css from './Statistics.module.css'

const Statistics = ({ good, neutral, bad, total, percent }) => {
    return (
        <div>
            {total ? (
                <ul className={css["statistics-list"]}>
                    <li>
                        <p className={css["statistics-item__text"]}>
                            Good: <span className={css["statistics-item__value"]}>{good}</span>
                        </p>
                    </li>
                    <li>
                        <p className={css["statistics-item__text"]}>
                            Neutral: <span className={css["statistics-item__value"]}>{neutral}</span>
                        </p>
                    </li>
                    <li>
                        <p className={css["statistics-item__text"]}>
                            Bad: <span className={css["statistics-item__value"]}>{bad}</span>
                        </p>
                    </li>
                    <li>
                        <p className={css["statistics-item__text"]}>
                            Total: <span className={css["statistics-item__value"]}>{total}</span>
                        </p>
                    </li>
                    <li>
                        <p className={css["statistics-item__text"]}>
                            Positive feedback: <span className={css["statistics-item__value"]}>{percent}%</span>
                        </p>
                    </li>
                </ul>
                
            ) : (<Notification message="There is no feedback" />
            )}
                
        </div>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired,
}

export default Statistics