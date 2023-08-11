import { useDispatch } from 'react-redux';

import { showMoreTickets } from '../../redux/actions';

import styles from './show-more.module.scss';

function ShowMore() {
  const showMore = 'Показать ещё 5 билетов!';
  const dispatch = useDispatch();
  const handleShowMoreClick = () => {
    dispatch(showMoreTickets(5));
  };
  const { showMoreCont, showMoreButton } = styles;
  return (
    <div className={showMoreCont}>
      <button type="button" className={showMoreButton} onClick={handleShowMoreClick}>
        {showMore.toUpperCase()}
      </button>
    </div>
  );
}

export default ShowMore;
