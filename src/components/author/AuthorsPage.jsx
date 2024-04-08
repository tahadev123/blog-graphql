import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom'
import sanitizeHtml from "sanitize-html"
import { GET_AUTHOR_INFO } from '../../graphql/queries';
import CardEL from "../../shared/CardEL"
import { Container, Grid, Avatar, Typography } from "@mui/material"
import Loader from '../../shared/Loader';

function AuthorsPage() {
  const { slug } = useParams();
  console.log(slug);

  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  })

  if (loading) return <Loader />
  if (error) return <h4>Something went wrong...</h4>

  const { avatar, name, field, description, posts } = data.author

  return (
    <Container maxWidth="lg">
      <Grid container mt={10}>
        <Grid item xs={12} display="flex" flexDirection="column" alignItems="center">
          <Avatar src={avatar.url} sx={{ width: 250, height: 250 }} />
          <Typography component="h3" variant="h5" fontWeight={700} mt={4}>
            {name}
          </Typography>
          <Typography component="h3" variant="h5" color="text.secondary" mt={2}>
            {field}
          </Typography>
        </Grid>
        <Grid item xs={12} mt={5}>
          <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(description.html) }}></div>
        </Grid>
        <Grid item xs={12} mt={6}>
          <Typography component="h3" variant="h5" fontWeight={700}>
            مقالات {name}
          </Typography>
          <Grid container spacing={3} mt={3}>
            {posts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <CardEL 
                  title={post.title}
                  slug={post.slug}
                  coverPhoto={post.coverPhoto}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default AuthorsPage