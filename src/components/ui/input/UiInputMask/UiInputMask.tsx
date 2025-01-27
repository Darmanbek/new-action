import { ConfigProvider, InputProps } from "antd"
import { ConfigContext } from "antd/es/config-provider"
import useCSSVarCls from "antd/es/config-provider/hooks/useCSSVarCls"
import useSize from "antd/es/config-provider/hooks/useSize"
import { SizeType } from "antd/es/config-provider/SizeContext"
import { FormItemInputContext } from "antd/es/form/context"
import useVariant from "antd/es/form/hooks/useVariants"
import useStyle from "antd/es/input/style"
import clsx from "clsx"
import { forwardRef, useContext } from "react"
import RcInputMask, { Props, ReactInputMask } from "react-input-mask"

const UiInputMask = forwardRef<ReactInputMask, Props & InputProps>((props, ref) => {
	const { size, variant, prefix, suffix, className, ...rest } = props

	const { getPrefixCls } = useContext(ConfigContext)
	const prefixCls = getPrefixCls("input")
	const rootCls = useCSSVarCls(prefixCls)
	const rootSize = useSize<SizeType>(size)
	const [, hashId, cssVarCls] = useStyle(prefixCls, rootCls)
	const [rootVariant] = useVariant("input", variant)

	const { status: contextStatus, hasFeedback, feedbackIcon } = useContext(FormItemInputContext)

	if (prefix || suffix || hasFeedback)
		return (
			<ConfigProvider>
				<span
					className={clsx(
						`${prefixCls}-affix-wrapper`,
						`${prefixCls}-affix-wrapper${rootSize === "large" ? "-lg" : rootSize === "small" ? "-sm" : ""}`,
						hashId,
						`${prefixCls}-${rootVariant}`,
						contextStatus && `${prefixCls}-status-${contextStatus}`,
						cssVarCls,
						rootCls,
						className
					)}
				>
					{prefix && <span className={"ant-input-prefix"}>{prefix}</span>}
					<RcInputMask
						className={clsx(
							prefixCls,
							`${prefixCls}${rootSize === "large" ? "-lg" : rootSize === "small" ? "-sm" : ""}`,
							hashId
						)}
						maskChar={""}
						{...rest}
					/>
					{(suffix || feedbackIcon) && (
						<span className={"ant-input-suffix"}>
							{suffix}
							{feedbackIcon}
						</span>
					)}
				</span>
			</ConfigProvider>
		)
	return (
		<ConfigProvider>
			<RcInputMask
				className={clsx(
					prefixCls,
					`${prefixCls}${rootSize === "large" ? "-lg" : rootSize === "small" ? "-sm" : ""}`,
					hashId,
					`${prefixCls}-${rootVariant}`,
					contextStatus && `${prefixCls}-status-${contextStatus}`,
					cssVarCls,
					rootCls,
					className
				)}
				ref={ref}
				maskChar={""}
				{...rest}
			/>
		</ConfigProvider>
	)
})
UiInputMask.displayName = "InputMask"

export { UiInputMask }
