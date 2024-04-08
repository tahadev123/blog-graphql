import React from 'react'
import { Container, Typography } from '@mui/material'
import Blogs from './Blogs'

function Blog() {
  return (
        <Container>
            <Typography component="h3" variant="h5" padding={3}>مقالات</Typography>
            <Blogs />
        </Container>
  )
}

export default Blog