import React, { FC, useState } from 'react'
import { ISignIn } from './SignIn.interface'
import Head from 'next/head'
import style from './SignIn.module.scss'
import Image from 'next/image'
import logo from '@/assets/white.png'
import Illustration from '@/assets/Illustration.png'
import Form from './form/Form'

const SignIn: FC<ISignIn> = ({ title }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<div className={style.content}>
				<div className={style.left_side}>
					<div className={style.container}>
						<div className={style.title}>
							<Image src={logo} alt='workroom' />
							<h3>Workroom</h3>
						</div>
						<h2 className={style.text}>
							Your place to work <br /> Plan. Create. Control
						</h2>
						<Image src={Illustration} alt='illustrator' />
					</div>
				</div>
				<div className={style.form}>
					<div className={style.container}>
						<h2>Sign in to Workroom</h2>
						<Form />
					</div>
				</div>
			</div>
		</>
	)
}

export default SignIn
