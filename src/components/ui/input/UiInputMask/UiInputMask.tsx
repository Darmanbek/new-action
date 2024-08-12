import React from 'react';
import ReactInputMask, { Props } from 'react-input-mask';
import { useResponsive } from 'src/hooks';
import styles from './mask.module.scss';
import clsx from 'clsx';

interface UiPhoneInputProps {
  mySize?: 'small' | 'middle' | 'large';
}

export const UiInputMask = (
  props: React.PropsWithChildren<UiPhoneInputProps & Props>
) => {
  const { isMobile } = useResponsive(768);
  const { mySize, ...rest } = props;
  const { 'aria-invalid': isInvalid, disabled } = props;

  return (
    <>
      <ReactInputMask
        {...rest}
        className={clsx(
          styles.phone,
          styles[mySize ? mySize : isMobile ? 'middle' : 'large'],
          isInvalid && styles.error,
          disabled && styles.disabled
        )}
      />
    </>
  );
};
