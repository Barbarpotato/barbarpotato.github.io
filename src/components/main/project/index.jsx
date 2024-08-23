import { Suspense, lazy, useState } from 'react'
import { useDisclosure } from '@chakra-ui/react';
import ProjectModal from './modal'
import Loading from '../../loading';

// load necessary components when needed
const ProjectDesktop = lazy(() => import('./desktop/index'));
const ProjectTablet = lazy(() => import('./tablet/index'));
const ProjectMobile = lazy(() => import('./mobile/index'));

function Project({ isLoading, contents, width }) {

    //this is used for the project detail modal functionality
    const { isOpen, onOpen, onClose } = useDisclosure()

    // this state is used for the project id data
    const [projectData, setProjectData] = useState({})

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
                width >= 1280 ? <ProjectDesktop isLoading={isLoading} contents={contents} handleOnClickProjectCard={handleOnClickProjectCard} /> :
                    width >= 768 && width < 1280 ? <ProjectTablet isLoading={isLoading} contents={contents} handleOnClickProjectCard={handleOnClickProjectCard} /> :
                        <ProjectMobile isLoading={isLoading} contents={contents} handleOnClickProjectCard={handleOnClickProjectCard} />
            }
        </Suspense>
    )
}

export default Project