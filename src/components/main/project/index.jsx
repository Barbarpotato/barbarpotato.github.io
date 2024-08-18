import { Suspense, lazy, useState, useEffect } from 'react'
import { partitionArray, chunkArray } from '../../../utils/preprocessData';
import { useDisclosure } from '@chakra-ui/react';
import ProjectModal from './modal'
import Loading from '../../loading';

// load necessary components when needed
const ProjectDesktop = lazy(() => import('./desktop/index'));
const ProjectTablet = lazy(() => import('./tablet/index'));
const ProjectMobile = lazy(() => import('./mobile/index'));

function Project({ contents, width }) {

    const [tabletContents, setTabletContents] = useState([])
    // the desktop screen implement left & right partitions elements
    const [desktopContent, setDesktopContent] = useState({
        leftPartitions: [],
        rightPartitions: []
    })

    //this is used for the project detail modal functionality
    const { isOpen, onOpen, onClose } = useDisclosure()

    // this state is used for the project id data
    const [projectData, setProjectData] = useState({})

    useEffect(() => {
        // ** using if statement to prevent over used memory
        // ** pre-process data for desktop screen size
        if (width >= 1280) {
            // partition the contents array for the desktop screen size
            const [leftParitions, rightPartitions] = partitionArray(contents)
            // after partitions. the left partitions will implement chunk Array
            const chunkedArrRes = chunkArray(leftParitions, 3)
            setDesktopContent({ leftPartitions: chunkedArrRes, rightPartitions: rightPartitions })
        }
        // ** pre-process data for tablet screen size
        if (width >= 768 && width < 1280) {
            setTabletContents(chunkArray(contents, 3))
        }
    }, [width])

    const handleOnClickProjectCard = (objectData) => {
        // set the value to the project id. projectId state will be passed to the detail modal project
        setProjectData(objectData)
        // open the modal if the detail of the project exist
        if (objectData.htmlContent || objectData.htmlImage) {
            onOpen()
        }
    }

    return (
        <Suspense fallback={<Loading />}>
            <ProjectModal isOpen={isOpen} onClose={onClose} projectData={projectData} width={width} />
            {
                width >= 1280 ? <ProjectDesktop desktopContent={desktopContent} handleOnClickProjectCard={handleOnClickProjectCard} /> :
                    width >= 768 && width < 1280 ? <ProjectTablet tabletContents={tabletContents} handleOnClickProjectCard={handleOnClickProjectCard} /> :
                        <ProjectMobile contents={contents} width={width} handleOnClickProjectCard={handleOnClickProjectCard} />
            }
        </Suspense>
    )
}

export default Project