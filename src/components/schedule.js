import React from 'react';

const schedule = () => {
    return (
        <div className="schedule">
            <div className="schedule-wrapper">
                <div className="schedule-area--date">
                    <div className="schedule-date-wrapper">
                        <span className="schedule-date--dd">
                            00
                        </span>
                        <span className="schedule-date-mmyy">Jan 20</span>
                    </div>
                </div>
                <div className="schedule-area--info">
                    <span className="schedule-info--name">
                        Convention name
                    </span>
                    <span className="schedule-info--location">
                        Convention location
                    </span>
                </div>
            </div>
        </div>
    )
}

export default schedule;