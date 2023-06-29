import Input from '@/components/ui/input/Input'
import React from 'react'
import style from './Step1.module.scss'
import CodeInput from '@/components/ui/codeInput/CodeInput'

const Step1 = () => {
	return (
		<div>
			<h2 className={style.title}>Valid your phone</h2>
			<label htmlFor='number' className={style.label}>
				Mobile Number
			</label>
			<div className={style.phone}>
				<select name='number' id='number' className={style.select}>
					<option value='+7'>+7</option>
					<option value='+77'>+77</option>
				</select>
				<Input name='phone' value='0' />
			</div>
			<CodeInput />
			<Input
				name='email'
				placeholder='youremail@gmail.com'
				label='Email Address'
			/>
			<Input
				name='password'
				placeholder='******'
				label='Create Password'
				type='password'
			/>
			<Input
				name='confirm password'
				placeholder='******'
				label='Confirm Password'
				type='password'
			/>
		</div>
	)
}

export default Step1
