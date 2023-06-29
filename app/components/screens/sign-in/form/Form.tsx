import React, { FC, useState } from 'react'
import { IFormInput } from './Form.interface'
import style from './Form.module.scss'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import Link from 'next/link'
import Input from '@/components/ui/input/Input'
import Error from '@/components/ui/error/Error'
import { spawn } from 'child_process'

const Form: FC = () => {
	const {
		handleSubmit,
		control,
		formState: { isValid }
	} = useForm<IFormInput>({ defaultValues: { remember: false } })

	const onSubmit: SubmitHandler<IFormInput> = (data) => {
		console.log(data)
	}

	return (
		<form action='' onClick={handleSubmit(onSubmit)}>
			<Controller
				name='email'
				control={control}
				rules={{
					required: 'Email is required!',
					pattern: {
						value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
						message: 'Please enter valid email'
					}
				}}
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<>
						<Input
							value={value}
							name='email'
							label='Email Address'
							type='text'
							placeholder='youremail@gmail.com'
							onChange={onChange}
						/>
						{error && <Error err={error.message} />}
					</>
				)}
			/>
			<Controller
				name='password'
				control={control}
				rules={{
					required: 'Password is required!'
				}}
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<>
						<Input
							value={value}
							name='password'
							label='Password'
							type='password'
							placeholder='******'
							onChange={onChange}
						/>
						{error && <Error err={error.message} />}
					</>
				)}
			/>
			<Link href='/' className={style.gray}>
				Forgot password?
			</Link>
			<div className={style.bottom}>
				<button className={style.button} disabled={!isValid} type='submit'>
					Sign in <AiOutlineArrowRight />
				</button>
				<Link href='/sign-up' className={style.blue}>
					Don't have an acccount?
				</Link>
			</div>
		</form>
	)
}

export default Form
