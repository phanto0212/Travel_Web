import React, { useState, useEffect } from 'react';
import { Wrapper, WrapperContent, WrapperLableText, WrapperTextValue } from './style';

function NavbarComponent({ onFilterChange }) {
    const [selectedText, setSelectedText] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState(null);

    useEffect(() => {
        onFilterChange({ text: selectedText, price: selectedPrice });
    }, [selectedText, selectedPrice, onFilterChange]);

    const handleTextClick = (textKey) => {
        setSelectedText(selectedText === textKey ? null : textKey);
    };

    const handlePriceClick = (priceKey) => {
        setSelectedPrice(selectedPrice === priceKey ? null : priceKey);
    };

    const renderContent = (type, options) => {
        switch(type) {
            case 'text':
                return options.map((option) => (
                    <WrapperTextValue
                        key={option.key}
                        isSelected={selectedText === option.key}
                        onClick={() => handleTextClick(option.key)}
                    >
                        {option.value}
                    </WrapperTextValue>
                ));
            case 'price':
                return options.map((option) => (
                    <div
                        key={option.priceKey}
                        style={{
                            padding: '8px 12px',
                            color: selectedPrice === option.priceKey ? '#fff' : '#38383d',
                            backgroundColor: selectedPrice === option.priceKey ? '#ff5b00' : '#f5f5f5',
                            borderRadius: '10px',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                            cursor: 'pointer'
                        }}
                        onClick={() => handlePriceClick(option.priceKey)}
                    >
                        {option.price}
                    </div>
                ));
            default:
                return null;
        }
    };

    return (
        <Wrapper>
            
            <WrapperLableText>Địa Điểm:</WrapperLableText>
            <WrapperContent>
                {renderContent('text', [
                    { value: 'Tp Hồ Chí Minh', key: 1 },
                    { value: 'Đà Nẵng', key: 2 },
                    { value: 'Đà Lạt', key: 3 },
                    { value: 'Ninh Bình', key: 4 }
                ])}
            </WrapperContent>
            <WrapperLableText>Giá:</WrapperLableText>
            <WrapperContent>
                {renderContent('price', [
                    { price: 'Dưới 1.000.000', priceKey: 1 },
                    { price: 'Trên 1.000.000', priceKey: 2 }
                ])}
            </WrapperContent>
        </Wrapper>
    );
}

export default NavbarComponent;
