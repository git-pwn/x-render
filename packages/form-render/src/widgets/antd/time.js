import { TimePicker } from 'antd';
import moment from 'moment';
import React from 'react';
import { getFormat } from '../../utils/common';

// TODO: 不要使用moment，使用dayjs
export default ({ onChange, format, value, style, ...rest }) => {
  const timeFormat = getFormat(format);
  const _value = value ? moment(value, timeFormat) : undefined;

  const handleChange = (value, string) => {
    onChange(string);
  };

  const timeParams = {
    value: _value,
    style: { width: '100%', ...style },
    onChange: handleChange,
    format: timeFormat,
    ...rest,
  };

  return <TimePicker {...timeParams} />;
};
