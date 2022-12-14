import React from 'react'

export const Listing = ({items}) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <div className="item" key={item.listing_id}>
          <div className="item-image">
            <a href={item.url}>
              {item.MainImage?.url_570xN ? (
                <img src={item.MainImage.url_570xN} alt="" />
              ) : null}
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">
              {item.title?.length > 50
                ? `${item.title.substring(0, 50)}...`
                : item.title}
            </p>
            <p className="item-price">
              {item.currency_code === 'USD'
                ? '$'
                : item.currency_code === 'EUR'
                ? '€'
                : null}
              {item.price}
              {item.currency_code === 'GBP' && ' GBP'}
            </p>
            <p
              className={`item-quantity level-${
                item.quantity <= 10
                  ? 'low'
                  : item.quantity <= 20
                  ? 'medium'
                  : 'high'
              }`}
            >
              {item.quantity} left
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
