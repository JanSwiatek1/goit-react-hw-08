import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';


function SearchBox() {
  const dispatch = useDispatch();

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}

export default SearchBox;