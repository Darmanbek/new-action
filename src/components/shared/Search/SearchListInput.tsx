import { FC, useEffect } from "react";
import { Input, Space } from "antd";
import { InputProps } from "antd/lib";
import { useLocation } from "react-router-dom";
import { useDebounce } from "src/hooks";
import { SearchOutlined } from "@ant-design/icons";
import { useSearchListStore } from "src/store";

export const SearchListInput: FC<InputProps> = (props) => {
	const { pathname } = useLocation();
	const searchValue = useSearchListStore((state) => state.searchValue);
	const setSearchValue = useSearchListStore((state) => state.setSearchValue);
	const setDebounceValue = useSearchListStore(
		(state) => state.setDebounceValue
	);
	const debounceValue = useDebounce(searchValue);

	const onClearInput = () => {
		setSearchValue({ searchValue: "" });
		setDebounceValue({ debounceValue: "" });
	};

	useEffect(() => {
		setSearchValue({ searchValue: "" });
		setDebounceValue({ debounceValue: "" });
	}, [pathname]);

	useEffect(() => {
		setDebounceValue({ debounceValue });
	}, [debounceValue, setDebounceValue]);

	return (
		<Space.Compact>
			<Input
				prefix={<SearchOutlined />}
				value={searchValue}
				onChange={(e) => setSearchValue({ searchValue: e.target.value })}
				allowClear={true}
				onClear={onClearInput}
				placeholder={"Поиск"}
				{...props}
			/>
		</Space.Compact>
	);
};
