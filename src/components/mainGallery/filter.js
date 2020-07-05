import React, {useState} from 'react';

const Filter = (props) => {
    const filterData = props.props;
    // console.log("filterCallback:", props.callback);

    const [isActive, setActive] = useState(false);

    const handleFilter = (filter) => {
        // console.log("filter", filter);
        props.callback(filter);
    }

    return(
       
            <div className="filter" onClick={() => handleFilter(filterData.id)} style={{color:filterData.color}}>
                {/* <div className="filter-icon-wrapper">
                    <img src={filterData.icon} className="filter-icon" />
                </div> */}
                <div className="filter-label">
                    {filterData.name}
                </div>
            </div>
    )
}

export default Filter;
