import dayjs from 'dayjs';

export const b64toBlob = (b64Data: any, contentType = "") => {
	const byteCharacters = atob(b64Data);
	const byteNumbers = new Array(byteCharacters.length);
	for (let i = 0; i < byteCharacters.length; i++) {
		byteNumbers[i] = byteCharacters.charCodeAt(i);
	}
	const byteArray = new Uint8Array(byteNumbers);
	const image = new Blob([byteArray], { type: contentType });
	return image;
};

export const getDateTimeFormat = (format: "yyyy-mm-dd" | "yyyy-mm" | "yyyy", step?: number) => {
	const date = new Date();
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1 + (step ? step : 0)).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");
	if (format === "yyyy-mm-dd") {
		return `${year}-${month}-${day}`;
	}
	if (format === "yyyy-mm") {
		return `${year}-${month}`;
	}
	return `${year}`
}

export const dateFormatter = (date: string, format?: string) => dayjs(date).format(format || "YYYY-MM-DD");

export const mouthNumberFormatter = (month?: number) => {
	if (!month) return month;
	return {
		1: "Январь",
		2: "Февраль",
		3: "Март",
		4: "Апрель",
		5: "Май",
		6: "Июнь",
		7: "Июль",
		8: "Август",
		9: "Сентябрь",
		10: "Октябрь",
		11: "Ноябрь",
		12: "Декабрь",
	}[month];
};

export const mouthFormatter = (date?: string) => {
	if (!date) return date;
	return {
		"01": "Январь",
		"02": "Февраль",
		"03": "Март",
		"04": "Апрель",
		"05": "Май",
		"06": "Июнь",
		"07": "Июль",
		"08": "Август",
		"09": "Сентябрь",
		"10": "Октябрь",
		"11": "Ноябрь",
		"12": "Декабрь",
	}[date.split("-")[1]];
};

export const phoneFormatter = (phone?: string | null) => {
	return phone
		? phone.replace(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, "+$1 $2 $3 $4 $5")
		: "-";
};
export const phoneReverseFormatter = (phone?: string | null) => {
	return phone
		? phone.replace(/ /g, "").substring(1)
		: "-";
};

export const priceFormatter = (price?: number) => {
	if (price === undefined) {
		return 0;
	}
	return Intl.NumberFormat("ru-RU", {}).format(price);
};

export const formatEmpty = (value?: any) => value || "-"

export const formatNum = <T>(value: T) =>
	`${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
export const formatPercent = <T>(value: T) => `${value}%`;

export const chartsFormatter = (params: any[]) => {
	return `
    <div style="margin: 0px 0 0; line-height: 1">
    <div style="margin: 0px 0 0; line-height: 1">
        <div
            style="
                font-size: 14px;
                color: #666;
                font-weight: 400;
                line-height: 1;
            "
        >
            <b>${params[0].axisValue}</b>
        </div>
        <div style="margin: 10px 0 0; line-height: 1">
            ${params
							.map(
								(item, index) => `
            <div style="margin: ${index === 0 ? 0 : 10}px 0 0; line-height: 1">
                <div style="margin: 0px 0 0; line-height: 1">
                    ${item.marker}<span
                        style="
                            font-size: 14px;
                            color: #666;
                            font-weight: 400;
                            margin-left: 2px;
                        "
                    >${item.seriesName}:</span
                    ><span
                        style="
                            float: right;
                            margin-left: 20px;
                            font-size: 14px;
                            color: #666;
                            font-weight: 900;
                        "
                        >${
													item.data.value || item.data.value === 0
														? priceFormatter(item.data.value)
														: priceFormatter(item.data)
												}</span
                    >
                    <div style="clear: both"></div>
                </div>
                <div style="clear: both"></div>
            </div>
            `
							)
							.join("")}
            <div style="clear: both"></div>
        </div>
        <div style="clear: both"></div>
    </div>
    <div style="clear: both"></div>
</div>

    `;
};
