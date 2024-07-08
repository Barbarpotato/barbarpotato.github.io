import { Player } from '@lottiefiles/react-lottie-player';
import { Fragment } from 'react';
import notfound from '../../assets/404.json'
import { Box } from '@chakra-ui/react';
import Navigation from '../../components/navigation';

function NotFoundPage() {
    return (
        <Fragment>
            <Navigation />
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>

                <Player
                    src={notfound}
                    className="player"
                    loop
                    autoplay
                    speed={1}
                />
            </Box>
        </Fragment>
    )
}

export default NotFoundPage