import React, { useEffect, useRef, useState } from 'react'
import style from './CodeInput.module.scss'

let currentOtpIndex: number = 0

const CodeInput = () => {
	const [otp, setOtp] = useState<string[]>(new Array(4).fill(''))
	const [activeOtpIndex, setActiveOtpIndex] = useState(0)
	const ref = useRef<HTMLInputElement>(null)

	const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = target
		const newOtp = [...otp]
		//get last number of type to state
		newOtp[currentOtpIndex] = value.substring(value.length - 1)

		//change active input for focus
		if (!value) setActiveOtpIndex(currentOtpIndex - 1)
		else setActiveOtpIndex(currentOtpIndex + 1)

		setOtp(newOtp)
	}

	// to back input when type 'Backspace'
	const onKeyDown = (
		{ key }: React.KeyboardEvent<HTMLInputElement>,
		index: number
	) => {
		currentOtpIndex = index
		if (key === 'Backspace') setActiveOtpIndex(index - 1)
	}

	//to focus next input after type
	useEffect(() => {
		ref.current?.focus()
	}, [activeOtpIndex])

	return (
		<div className={style.inputs}>
			<p>Code from SMS</p>
			{otp?.map((_, index) => (
				<React.Fragment key={index}>
					<input
						key={index}
						ref={index === activeOtpIndex ? ref : null}
						type='number'
						className={style.input}
						onChange={onChange}
						onKeyDown={(e) => onKeyDown(e, index)}
						value={otp[index]}
					/>
				</React.Fragment>
			))}
		</div>
	)
}

export default CodeInput
