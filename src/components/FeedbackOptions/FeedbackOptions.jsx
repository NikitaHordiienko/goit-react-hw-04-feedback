import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul className={css['button-list']}>
            {options.map(buttonLabel => {
                return (
                    <li className={css['button-list__item']} key={buttonLabel}>
                        <button className={css.button} onClick={onLeaveFeedback} type="button" >
                            {buttonLabel}
                        </button>
                    </li>
                )
            })}
        </ul>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;