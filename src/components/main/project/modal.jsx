import { useState } from 'react'
import {
    Modal, ModalOverlay, ModalContent, Box,
    ModalHeader, ModalBody, ModalCloseButton,
    Heading, Breadcrumb, BreadcrumbItem, BreadcrumbLink,
} from '@chakra-ui/react'
import { primaryFontColor } from '../../../theme/globalTheme'

function ProjectModal({ isOpen, onClose, projectData, width }) {

    const OverlaySendMessage = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
        />
    )

    // ** Modal Utility
    const [overlay, _setOverlay] = useState(<OverlaySendMessage />)

    return (
        <Modal variant={'purple'} scrollBehavior='inside'
            size={'5xl'} colorScheme={'black'} isCentered isOpen={isOpen} onClose={onClose}>
            {overlay}
            <ModalContent>
                <ModalHeader opacity={0.7} fontSize={"lg"}>Project Detail</ModalHeader>
                <ModalCloseButton />
                <ModalBody paddingBottom={"50px"} paddingX={width >= 768 ? "20%" : "10px"}>
                    <Heading color={primaryFontColor} fontSize={width >= 1280 ? 'xxx-large' : 'xx-large'}>{projectData.heading}</Heading>
                    <Heading color={primaryFontColor} fontSize={width >= 1280 ? 'x-large' : 'large'}>{projectData.text}</Heading>
                    <Breadcrumb my={10} separator={">"}>
                        <BreadcrumbItem>
                            <BreadcrumbLink color={primaryFontColor} onClick={onClose}>Home</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink href='#' color={primaryFontColor}>{projectData.heading}</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <Box color={primaryFontColor}>
                        <pre style={{
                            marginBottom: '10px', textAlign: 'justify', whiteSpace: 'pre-wrap',
                            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica',
                            fontSize: width >= 1280 ? 'medium' : 'small',
                        }}>
                            {projectData.htmlContent}
                        </pre>
                    </Box>

                    <Heading color={primaryFontColor} my={5} fontSize={width >= 1280 ? 'x-large' : 'large'}>User Interface (UI)</Heading>
                    <Box id='image' dangerouslySetInnerHTML={{ __html: projectData?.htmlImage }}>
                    </Box>

                </ModalBody>
            </ModalContent>
        </Modal >
    )
}

export default ProjectModal 