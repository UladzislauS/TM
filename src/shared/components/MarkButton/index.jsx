import React from 'react';
import PropTypes from 'prop-types';
import './MarkButton.css';

const MarkButton = ({
    active, buttonDown, onButtonDown, onButtonUp,
}) => (
    <div
        role="button"
        tabIndex="0"
        className="MarkButton"
        onMouseDown={onButtonDown}
        onMouseUp={onButtonUp}
    >
        <div className={`MarkButton-mark ${buttonDown && 'MarkButton-mark__down'}`}>
            <div className={`MarkButton-primary ${active ? 'MarkButton-inline' : 'MarkButton-outline'}`} />
            <div className={`MarkButton-secondary ${active ? 'MarkButton-outline' : 'MarkButton-inline'}`} />
        </div>
        <span className="MarkButton-label headline6">Click to plan trip of your dream</span>
    </div>
);

MarkButton.propTypes = {
    active: PropTypes.bool,
    buttonDown: PropTypes.bool,
    onButtonDown: PropTypes.func,
    onButtonUp: PropTypes.func,
};

MarkButton.defaultProps = {
    active: false,
    buttonDown: false,
    onButtonDown: () => {},
    onButtonUp: () => {},
};

export default MarkButton;
