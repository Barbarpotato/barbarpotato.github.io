import { Fragment, useEffect } from 'react'
import Loading from '../../components/loading'
import { useDataBlogDetail } from '../../api/blog'
import { Link, useParams } from 'react-router-dom'
import '../../styles/labs/detail.css'
import Footer from '../../components/footer'
import Navigation from '../../components/navigation'
import { Box, Center, Heading, Image } from '@chakra-ui/react'
import useWindowSize from '../../hooks/useWindowSize'
import { primaryFontColor } from '../../theme/globalTheme'

function LabContentDetail() {

    const { blogId } = useParams()
    const { width } = useWindowSize()
    const { data: blog, isLoading } = useDataBlogDetail(blogId)
    useEffect(() => {
        const applyStyles = () => {
            const contentDiv = document.querySelector('.content');
            if (!contentDiv) return;

            const preTags = contentDiv.querySelectorAll('pre');
            const codeTags = contentDiv.querySelectorAll('code');

            preTags.forEach(tag => {
                if (width <= 1024) {
                    tag.style.width = "1024px";
                    const parentDiv = tag.parentNode;
                    parentDiv.style.overflowX = 'scroll';
                    parentDiv.style.marginBlock = '15px';
                }

                tag.style.backgroundColor = '#272822';
                tag.classList.add('custom-pre');
            });

            codeTags.forEach(tag => {
                tag.classList.add('custom-code');
            });
        };

        applyStyles();

        // Reapply styles whenever the content changes
        const observer = new MutationObserver(applyStyles);
        const contentDiv = document.querySelector('.content');
        if (contentDiv) {
            observer.observe(contentDiv, { childList: true, subtree: true });
        }

        // Cleanup observer on component unmount
        return () => {
            if (contentDiv) {
                observer.disconnect();
            }
        };
    }, [blog, width]);


    return (
        <Fragment>
            {isLoading ? <Loading /> :
                <Fragment>
                    <Navigation />
                    <Link to={"/darmajr94/labs"} style={{ textDecoration: 'none' }}>
                        <Heading color={primaryFontColor} size={width > 768 ? 'lg' : 'sm'} my={4} ml={'15%'} style={{ cursor: 'pointer' }}>⬅️ Back to Lab</Heading>
                    </Link>

                    <h1 style={{ textAlign: 'center', paddingBlock: width > 768 ? '40px' : '20px', fontSize: width > 768 ? '2em' : '1.5em', marginBottom: '0.5em', color: 'whitesmoke', fontWeight: 'bold' }} color={'white'}>{blog?.title}</h1>
                    <Center pt={2} pb={10}>
                        <Image borderRadius={'lg'} w={'70%'} display={'flex'} justifyContent={'center'} src={blog?.image} />
                    </Center>
                    <Box mx="auto" w="70%" display="flex" justifyContent="center" >
                        <div class='content' style={{ overflowX: 'auto' }} dangerouslySetInnerHTML={{ __html: blog?.description }} />
                    </Box>
                    <Footer />
                </Fragment>

            }
        </Fragment >
    )
}

export default LabContentDetail