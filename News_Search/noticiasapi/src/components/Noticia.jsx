import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';

const Noticia = ({ noticia }) => {

    const { urlToImage, url, title, description, source } = noticia;

    return (
        <div>
            noticia
        </div>
    )
}

Noticia.propTypes = {
    noticia: PropTypes.object.isRequired
};

export default Noticia
