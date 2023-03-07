import { Typography, useTheme } from '@mui/material'

export const MuiMode = () => {
  const theme = useTheme()

  return (
    <>
      <Typography variant="h1">{`theme is ${theme.palette.mode}`}</Typography>
    </>
  )
}
