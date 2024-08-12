import { useEffect } from 'react';
import { Input, Space } from 'antd';
import { InputProps } from 'antd/lib';
import { useLocation } from 'react-router-dom';
import { UiButton } from 'src/components/ui';
import { useDebounce } from 'src/hooks';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';
import { useSearchListStore } from 'src/store';

export const SearchListInput = (props: React.PropsWithChildren<InputProps>) => {
  const { pathname } = useLocation();
  const searchValue = useSearchListStore((state) => state.searchValue);
  const setSearchValue = useSearchListStore((state) => state.setSearchValue);
  const setDebounceValue = useSearchListStore(
    (state) => state.setDebounceValue
  );
  const debounceValue = useDebounce(searchValue);

  const onClearInput = () => {
    setSearchValue({ searchValue: '' });
    setDebounceValue({ debounceValue: '' });
  };

  useEffect(() => {
    setSearchValue({ searchValue: '' });
    setDebounceValue({ debounceValue: '' });
  }, [pathname]);

  useEffect(() => {
    setDebounceValue({ debounceValue });
  }, [debounceValue]);

  return (
    <Space.Compact>
      <Input
        {...props}
        prefix={<SearchOutlined />}
        value={searchValue}
        onChange={(e) => setSearchValue({ searchValue: e.target.value })}
      />
      <UiButton
        danger
        icon={<CloseOutlined />}
        onClick={onClearInput}
        aria-label="Clear"
      />
    </Space.Compact>
  );
};
