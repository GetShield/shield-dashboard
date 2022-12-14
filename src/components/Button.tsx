import { cva, VariantProps } from 'class-variance-authority'

export const buttonClasses = cva('rounded-md px-4 py-2 text-center', {
	variants: {
		intent: {
			primary: 'bg-blue-500 text-white',
			secondary: 'border border-white/50 text-white',
			primaryFull: 'bg-blue-500 text-white w-full',
			secondaryFull: 'border border-white/50 text-white w-full'
		}
	}
})

interface ButtonProps extends VariantProps<typeof buttonClasses> {
	title: string
	onConfirm?: () => void
}

const Button = ({ intent = 'primary', title, onConfirm }: ButtonProps) => {
	return (
		<button onClick={onConfirm} className={buttonClasses({ intent })}>
			{title}
		</button>
	)
}

export default Button
