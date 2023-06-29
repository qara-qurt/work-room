import React, { FC, useState } from 'react'
import style from './Input.module.scss'

const Input: FC<IInput> = ({
	label,
	placeholder,
	type,
	name,
	value,
	onChange
}) => {
	const [val, setVal] = useState(value ?? '')

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setVal(e.target.value)
		onChange ? onChange(e.target.value) : 0
	}

	return (
		<div className={style.container}>
			{label && (
				<label className={style.label} htmlFor={name}>
					{label}
				</label>
			)}
			<input
				value={val}
				onChange={handleChange}
				className={style.input}
				type={type ?? 'text'}
				placeholder={placeholder ?? ''}
				name={name}
				id={name}
			/>
		</div>
	)
}

export default Input
