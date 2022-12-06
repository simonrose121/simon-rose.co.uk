import { style, globalStyle } from '@vanilla-extract/css';

export const cssVars = style({
	vars: {
		'--primary-color': 'red'
	},
})

globalStyle('body', {
	margin: 0,
});
