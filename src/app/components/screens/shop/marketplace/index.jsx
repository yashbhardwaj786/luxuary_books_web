
import React, { useState, useEffect } from 'react';
import { MarketPlaceWrapper } from './style'


export default function ShowMarketPlace({ isMobile = false, book = [], country = [] }) {

    const [selectedBookOption, setSelectedBookOption] = useState('');
    const [selectedCountryOption, setSelectedCountryOption] = useState('');

    const handleBookSelectChange = (event) => {
        setSelectedBookOption(event.target.value);
    };
    const handleCountrySelectChange = (event) => {
        setSelectedCountryOption(event.target.value);
    };

    return (
        <MarketPlaceWrapper>
            <label className='title-text'>Select Book and Your Country</label>
            <div className='selection-container'>
                 <div className='select-book'>
                    <select className='select-book-text' value={selectedBookOption} onChange={handleBookSelectChange}>
                        <option className='select-option-text' value="">Select Book</option>
                        {book.map(bookOption => (
                            <option key={bookOption.bookId} className='select-option-text' value={bookOption.bookId}>{bookOption.bookName}</option>
                        ))}
                    </select>
                </div>
                <div className='select-country'>
                    <select className='select-book-text' value={selectedCountryOption} onChange={handleCountrySelectChange}>
                        <option className='select-option-text' value="">Select Country</option>
                        {country.map(countryOption => (
                            <option key={countryOption.countryId} className='select-option-text' value={countryOption.countryId}>{countryOption.countryName}</option>
                        ))}
                    </select>
                </div>


            </div>
        </MarketPlaceWrapper>
    );
};