import { makeStyles } from '@material-ui/core';
import { colors, fonts } from 'theme';

export default makeStyles((theme) => ({
  root: {
    position: 'relative',
    marginBottom: 16,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '30%',
    },
  },
  input: {
    backgroundColor: colors.grayTertiary,
    color: colors.grayQuaternary,
    transition: 'color .2s ease, background-color .2s ease',
    border: 'none',
    borderRadius: theme.shape.borderRadius,
    width: '100%',
    padding: '10px 18px',
    fontSize: fonts.size.mobile.input,
    fontWeight: fonts.weight.mobile.input,
    lineHeight: fonts.lineHeight.mobile.input,
    [theme.breakpoints.up('md')]: {
      fontSize: fonts.size.desktop.input,
      fontWeight: fonts.weight.desktop.input,
      lineHeight: fonts.lineHeight.desktop.input,
    },
    marginTop: 6,
    marginBottom: 6,
    '&:focus': {
      backgroundColor: colors.blackSecondary,
    },
  },
  label: {
    color: colors.whitePrimary,
    fontSize: fonts.size.mobile.inputLabel,
    fontWeight: fonts.weight.mobile.inputLabel,
    lineHeight: fonts.lineHeight.mobile.inputLabel,
    [theme.breakpoints.up('md')]: {
      fontSize: fonts.size.desktop.inputLabel,
      fontWeight: fonts.weight.desktop.inputLabel,
      lineHeight: fonts.lineHeight.desktop.inputLabel,
    },
  },
}));
