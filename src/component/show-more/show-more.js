import React from 'react';

import styles from './show-more.module.scss';

function ShowMore({ ticketCount, onClick }) {
  const showMoreText = `Показать ещё ${ticketCount} билетов!`;

  const handleShowMoreClick = () => {
    onClick();
  };

  const { showMoreCont, showMoreButton } = styles;

  return (
    <div className={showMoreCont}>
      <button type="button" className={showMoreButton} onClick={handleShowMoreClick}>
        {showMoreText.toUpperCase()}
      </button>
    </div>
  );
}

export default ShowMore;
