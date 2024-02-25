import React from 'react';
import './Styles/FilterSearch.css'
function FilterSearch(props) {
    return (
        <div className='filter_main'>
            <div className='serach_div'>
                <input type="text" placeholder='Enter Blog Name 🔍' className='filter_searchbar'/>
            </div>
            <div className='filter_div'>
                <select className='filter_filterbar'>
                    <option value="">Select Filter</option>
                    <option value="Travel">Travel</option>
                    <option value="Science">Science</option>
                    <option value="Economics">Economics</option>
                </select>
            </div>
        </div>
    );
}

export default FilterSearch;