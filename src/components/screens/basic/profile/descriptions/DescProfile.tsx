import { FC } from "react";
import { useResponsive } from "src/hooks";
import { useGetMeQuery } from "src/services";
import { useItemsProfile } from "./useItemsProfile";
import { UiButton, UiDescriptions } from "src/components/ui";
import styles from "./desc.module.scss";
import { HeadTable } from "src/components/shared";
import { Tooltip } from "antd";
import { BiEditAlt } from "react-icons/bi";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useFormStorageStore } from "src/store";
import { useNavigate } from "react-router-dom";

const DescProfile: FC = () => {
	const { data: user } = useGetMeQuery();
	const { isMobile } = useResponsive(768);
	const setParamsForm = useFormStorageStore((state) => state.setParamsForm);
	const navigate = useNavigate();

	const onEditProfile = () => {
		setParamsForm(user?.data)
	}

	const items = useItemsProfile(isMobile, user?.data);
	return (
		<article className={styles.desc}>
			<div className={styles.head}>
				<HeadTable
					title="Профиль"
					children={[
						<Tooltip title="Изменить" key="Edit">
							<UiButton
								key="Edit_Button"
								type="primary"
								icon={<BiEditAlt />}
								onClick={onEditProfile}
								aria-label="Edit"
							/>
						</Tooltip>,
						<Tooltip title="Назад" key="Back">
							<UiButton
								key="Back_Button"
								type="primary"
								icon={<IoIosArrowRoundBack />}
								onClick={() => navigate(-1)}
							/>
						</Tooltip>,
					]}
				/>
			</div>
			<UiDescriptions 
			bordered 
			column={isMobile ? 1 : 2} 
			items={items} 
			style={{
				overflowX: "auto"
			}}
			/>
		</article>
	);
};

export { DescProfile };
