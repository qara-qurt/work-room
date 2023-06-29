import React, { FC } from 'react'
import { IError } from './Error.interface'
import style from './Error.module.scss'
import hint from '@/assets/hint.png'
import Image from 'next/image'

const Error: FC<IError> = ({ err }) => {
	return (
		<div className={style.error}>
			<Image src={hint} alt={err ?? 'error'} />
			{err}
		</div>
	)
}

export default Error
