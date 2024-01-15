import { type ChangeEvent, type FC, useEffect, useState } from 'react';

import { filterPodcasts } from '@pages/Home/components';

import { useAppDispatch } from '@store/hooks';

import { useDebounce } from '../../hooks';

import s from './SearchBar.module.scss';

const SearchBar: FC = () => {
  const [keyword, setKeyword] = useState<string>('');

  const dispatch = useAppDispatch();

  const debouncedValue = useDebounce<string>(keyword, 500);

  useEffect(() => {
    dispatch(filterPodcasts(debouncedValue));
  }, [debouncedValue]);

  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setKeyword(value);
  };

  return (
    <div className={s.searchbar}>
      <input
        value={keyword}
        onChange={handleChange}
        className={s.searchbar__input}
        placeholder="Search podcast"
      />
    </div>
  );
};

export default SearchBar;
