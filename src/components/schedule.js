import React from 'react';

const schedule = (data) => {

    let scheduleData = data.data;
    console.log("SCHEDULE DATA:", scheduleData);

    const ScheduleItem = (props) => {
        const itemData = props.data;

        // console.log(itemData.date);

        // DATE FORMAT: mmddyyyy 
        let day = itemData.date.slice(2,4);
        let monthNum = itemData.date.slice(0,2);
        // console.log(monthNum);
        let month = '';

        switch (monthNum) {
            case '01':
                month = 'Jan'
                break;

            case '02': 
                month = 'Feb'
                break;

            case '03':
                month = 'Mar'
                break;

            case '04':
                month = 'Apr'
                break;
            case '05':
                month = 'May'
                break;
            case '06':
                month = 'Jun'
                break;
            case '07':
                month = 'July'
                break;
            case '08':
                month = 'Aug'
                break;
            case '09':
                month = 'Sep'
                break;
            case '10':
                month = 'Oct'
                break;
            case '11':
                month = 'Nov'
                break;
            case '12':
                month = 'Dec'
                break;

            default: 
            return '00';
        }


        console.log(month);
        let year = itemData.date.slice(6,8);

        return (
            <div className="schedule">
                <div className="schedule-wrapper">
                    <div className="schedule-area--date">
                        <div className="schedule-date-wrapper">
                            <span className="schedule-date--dd">
                                {day}
                            </span>
                            <span className="schedule-date-mmyy">{month} {year}</span>
                        </div>
                    </div>
                    <div className="schedule-area--info">
                        <span className="schedule-info--name">
                            {itemData.name}
                        </span>
                        <span className="schedule-info--location">
                            {itemData.location}
                        </span>
                    </div>
                </div>
            </div>
        )
    }

    const ScheduleList = scheduleData.map((item, index) => 
        <ScheduleItem data={item} key={item.id}/>
    );

    // console.log(data);
    return (
        ScheduleList
    )
}

export default schedule;