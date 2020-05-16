import React, {useState} from 'react';



const Filter = (data) => {
    const filterData = data.props;
    console.log(data);
    return(
        <div className="filter-wrapper">
            <div className="filter">
                <div className="filter-icon-warpper">
                    <img src={filterData.icon} className="filter-icon" />
                </div>
                <div className="filter-label">
                    {filterData.name}
                </div>
            </div>
        </div>
    )
}

export default Filter;
