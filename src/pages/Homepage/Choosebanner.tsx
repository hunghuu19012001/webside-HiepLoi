import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { Theme } from '@mui/material/styles';
// import choose from '../../assets/choose.png'
const images = [
  {
    url: 'https://cdn.honda.com.vn/motorbikes/December2023/Fl5DEjjKFPzsWfKRcAIh.jpg',
    title: 'Bạn muốn mua xe Honda?',
    width: '33%',
  },
  {
    url: 'https://yamaha-motor.com.vn/wp/wp-content/uploads/2022/09/995b48cb58adbabf082d0d1bd84a4348-scaled.jpg',
    title: 'Bạn muốn mua xe Yamaha?',
    width: '34%',
  },
  {
    url: 'https://kazukidtp.vn/wp-content/uploads/2024/01/z5097456631314_8c9a9f0c4d8c6ad64eb1661afcea64c3.jpg',
    title: 'Bạn muốn mua xe điện?',
    width: '33%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 400,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.6,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function ButtonBaseDemo() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme: Theme) => `calc(${theme.spacing(1)} + 6px)`,
                fontSize: '20px', // Kích thước chữ
                fontWeight: 'bold', // Độ đậm
                textTransform: 'uppercase', // Chuyển đổi văn bản thành chữ in hoa
                textAlign: 'center', // Căn giữa văn bản
                color: 'white', // Màu chữ
                zIndex: 10, // Độ sâu của phần tử
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}