import { CaretDownOutlined } from "@ant-design/icons";
import { FC, useEffect } from "react";
import { UiSelect } from "src/components/ui";
import { primaryColorText } from "src/data";
import { useGetDashboardCompaniesQuery } from "src/services/dashboard/dashboard.api";
import { useAuthPersistStore } from "src/store";

const HeadCompanies: FC = () => {
	const { company, toCompany } = useAuthPersistStore();
	const { data: companies } = useGetDashboardCompaniesQuery();

	const onChangeCompany = (id: string) => {
		if (!companies) return;
		const company = companies.data.find(el => el.id === id);
		if (!company) return;
		toCompany(company);
	};

	useEffect(() => {
		if (companies && !company && companies.data.length) {
			toCompany(companies.data[0]);
		}
	}, [companies, company, toCompany]);
	return (
		<UiSelect
			value={company?.id}
			variant={"borderless"}
			onChange={onChangeCompany}
			popupMatchSelectWidth={false}
			options={companies?.data.map(el => ({
				value: el.id,
				label: el.name,
			}))}
			suffixIcon={<CaretDownOutlined style={{ color: primaryColorText, fontSize: 14 }} />}
			labelRender={(value) => (
				<h3
					style={{ color: primaryColorText, fontSize: 16, textTransform: "uppercase" }}>
					{value.label}
				</h3>
			)}
		/>
	);
};

export { HeadCompanies };
