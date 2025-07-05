import React, { useEffect, useState } from 'react';
import { MessageError } from '../controls/MessageError';
import { validateFields } from '@/infrastructure/helper/helper';

type Props = {
    label: string;
    attribute: string;
    isRequired: boolean;
    setData: (value: Record<string, any>) => void;
    dataAttribute: any;
    disabled: boolean;
    validate: any;
    setValidate: Function;
    submittedTime: any;
    listDataOfItem: Array<any>;
    valueName?: string;
    labelName?: string;
};

const InputSelectCommon = ({
    dataAttribute,
    setData,
    attribute,
    disabled,
    listDataOfItem,
    setValidate,
    validate,
    submittedTime,
    isRequired,
    label,
    valueName = 'id',
    labelName = 'name'
}: Props) => {
    const [value, setValue] = useState<string>("");

    const labelLower = label.toLowerCase();

    const validateBlur = (isImplicitChange = false) => {
        if (isRequired) {
            validateFields(isImplicitChange, attribute, !value, setValidate, validate, !value ? `Vui lòng nhập ${labelLower}` : "");
        }
    };

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        setValue(selectedValue);
        setData({ [attribute]: selectedValue });
    };

    useEffect(() => {
        if (dataAttribute !== undefined && dataAttribute !== null) {
            setValue(String(dataAttribute));
        } else {
            setValue('');
        }
    }, [dataAttribute]);

    useEffect(() => {
        if (submittedTime != null) {
            validateBlur(true);
        }
    }, [submittedTime]);

    return (
        <div className="input-text-common">
            <label htmlFor={`${attribute}-input`}>
                <span>
                    {label} {isRequired && <span className="required">*</span>}
                </span>
            </label>

            <select
                id={`${attribute}-input`}
                className="form-control"
                value={value}
                onChange={onChange}
                onBlur={() => validateBlur(false)}
                disabled={disabled}
            >
                <option value="">-- Chọn {labelLower} --</option>
                {listDataOfItem?.map((item, index) => (
                    <option
                        key={index}
                        value={item[valueName]}
                        title={item[labelName]}
                    >
                        {item[labelName]}
                    </option>
                ))}
            </select>

            <MessageError
                isError={validate[attribute]?.isError || false}
                message={validate[attribute]?.message || ''}
            />
        </div>
    );
};

export default InputSelectCommon;
