import React, { FC, useState } from 'react'
import { ISignUp } from './SignUp.interface'
import Head from 'next/head'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import style from './SignUp.module.scss'
import Image from 'next/image'
import logo from '@/assets/white.png'
import Stepper from './stepper/Stepper'
import Step1 from './step1/Step1'
import { steps } from './stepper/Stepper'
import Step2 from './step2/Step2'
import Step3 from './step3/Step3'
import Step4 from './step4/Step4'

const SignUp: FC<ISignUp> = ({ title }) => {
	const [currentStep, setCurrentStep] = useState(1)
	const [complete, setComplete] = useState(false)

	const onNextStep = () => {
		currentStep == steps.length
			? setComplete(true)
			: setCurrentStep((prev) => prev + 1)
	}

	const onPreviosStep = () => {
		if (currentStep !== 1) {
			setCurrentStep((prev) => prev - 1)
			setComplete(false)
		}
	}

	const getCurrentComponent = () => {
		switch (currentStep) {
			case 1:
				return <Step1 />
			case 2:
				return <Step2 />
			case 3:
				return <Step3 />
			case 4:
				return <Step4 />
			default:
				return <Step1 />
		}
	}

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<div className={style.wrapper}>
				<div className={style.left_side}>
					<Image src={logo} alt='logo' />
					<h1>Get started</h1>
					<Stepper currentStep={currentStep} complete={complete} />
				</div>
				<div className={style.content}>
					<div className={style.container}>
						<p className={style.step_count}>
							STEP {currentStep}/{steps.length}
						</p>
						{getCurrentComponent()}
					</div>
					<div className={style.buttons}>
						<button onClick={onPreviosStep}>
							<BiLeftArrowAlt size={24} />
							Previous
						</button>
						<button className={style.nextBtn} onClick={onNextStep}>
							Next Step
							<BiRightArrowAlt size={24} />
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default SignUp
