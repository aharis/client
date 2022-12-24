import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material'

const Login = () => {
  return (
    <Card
      style={{
        margin: '100px auto',
        maxWidth: '500px',
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `center`,
        alignItems: 'center',
      }}>
      <CardContent>
        <Typography gutterBottom variant='h4' align='center'>
          Login
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField label='Username' variant='outlined' fullWidth />
          </Grid>
          <Grid xs={12} item>
            <TextField label='Password' variant='outlined' fullWidth />
          </Grid>
        </Grid>

        <Link href='/register' underline='none'>
          Don't have an account? Register by clicking here!
        </Link>
        <Box textAlign='center'>
          <Button variant='outlined'>Log In</Button>
        </Box>
      </CardContent>
    </Card>
  )
}

export default Login
