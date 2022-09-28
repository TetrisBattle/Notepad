import { useState } from 'react'
import { Box, InputAdornment, TextField, Typography } from '@mui/material'

const RemConverter = () => {
	const rootPx = 16
	const [px, setPx] = useState(rootPx.toString())
	const [rem, setRem] = useState('1')

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.currentTarget.value
		const id = e.currentTarget.id

		// 0.00000 is allowed
		if (value === '' || value === '0.' || /0\.0+/.test(value)) {
			setPx(value)
			setRem(value)
			return
		}

		if (value === '.') {
			setPx('0.')
			setRem('0.')
			return
		}

		// value must a number
		// value can't start with 00
		// whitespace is not allowed
		if (isNaN(+value) || value === '00' || /\s/.test(value)) return

		if (id === 'rem') {
			setRem(value)
			setPx((+value * rootPx).toString())
			return
		}

		setPx(value)
		setRem((+value / rootPx).toString())
	}

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: 6,
			}}
		>
			<Typography
				component='h1'
				variant='h2'
				color='primary'
				fontWeight='bold'
				mt={4}
			>
				PX - REM Converter
			</Typography>
			<Box
				sx={(theme) => ({
					display: 'flex',
					gap: 2,
					[theme.breakpoints.down('sm')]: {
						flexDirection: 'column',
						'.arrows': { display: 'none' },
					},
					[theme.breakpoints.up('sm')]: {
						alignItems: 'center',
					},
				})}
			>
				<TextField
					id='px'
					value={px}
					onChange={handleChange}
					InputProps={{
						endAdornment: <InputAdornment position='start'>px</InputAdornment>,
					}}
					autoComplete='off'
				/>
				<Typography className='arrows' color='primary' fontSize={24}>
					⇄
				</Typography>
				<TextField
					id='rem'
					value={rem}
					onChange={handleChange}
					InputProps={{
						endAdornment: <InputAdornment position='start'>rem</InputAdornment>,
					}}
					autoComplete='off'
				/>
			</Box>
		</Box>
	)
}

export default RemConverter
