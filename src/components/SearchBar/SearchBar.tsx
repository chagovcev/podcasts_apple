import { type ChangeEvent, type FC, useEffect, useState } from 'react';

import { useDebounce } from '../../hooks';

import s from './SearchBar.module.scss';

interface ISearchBar {
  onChange: (value: string) => void;
}

const SearchBar: FC<ISearchBar> = ({ onChange }) => {
  const [keyword, setKeyword] = useState<string>('');

  const debouncedValue = useDebounce<string>(keyword, 500);

  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setKeyword(value);
  };
  useEffect(() => {
    onChange(debouncedValue);
  }, [debouncedValue]);

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
