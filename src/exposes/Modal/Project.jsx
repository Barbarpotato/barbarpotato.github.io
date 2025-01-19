import { useState } from 'react'

import {
    useBreakpointValue, Heading, Box, Modal, ModalOverlay, ModalContent, ModalHeader,
    ModalBody, ModalCloseButton, Breadcrumb, BreadcrumbItem, BreadcrumbLink
} from '@chakra-ui/react'

function ProjectModal({ isOpen, onClose, projectData }) {

    const OverlaySendMessage = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
        />
    )

    // ** Modal Utility
    const [overlay, _setOverlay] = useState(<OverlaySendMessage />)
    // Responsive values
    const paddingX = useBreakpointValue({ base: "10px", md: "20%" });
    const headingFontSize = useBreakpointValue({ base: "xx-large", lg: "xxx-large" });
    const subHeadingFontSize = useBreakpointValue({ base: "large", lg: "x-large" });
    const contentFontSize = useBreakpointValue({ base: "small", lg: "medium" });

    return (
        <Modal
            variant="purple"
            scrollBehavior="inside"
            size="5xl"
            colorScheme="black"
            isCentered
            isOpen={isOpen}
            onClose={onClose}
        >
            {overlay}
            <ModalContent>
                <ModalHeader opacity={0.7} fontSize="lg">
                    Project Detail
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody paddingBottom="50px" paddingX={paddingX}>
                    <Heading color="#faf9ff" fontSize={headingFontSize}>
                        {projectData.heading}
                    </Heading>
                    <Heading color="#faf9ff" fontSize={subHeadingFontSize}>
                        {projectData.text}
                    </Heading>
                    <Breadcrumb my={10} separator=">">
                        <BreadcrumbItem>
                            <BreadcrumbLink color="#faf9ff" onClick={onClose}>
                                Home
                            </BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink href="#" color="#faf9ff">
                                {projectData.heading}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <Box color="#faf9ff">
                        <pre
                            style={{
                                marginBottom: "10px",
                                textAlign: "justify",
                                whiteSpace: "pre-wrap",
                                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica',
                                fontSize: contentFontSize,
                            }}
                        >
                            {projectData.htmlContent}
                        </pre>
                    </Box>

                    <Heading color="#faf9ff" my={5} fontSize={subHeadingFontSize}>
                        User Interface (UI)
                    </Heading>
                    <Box id="image" dangerouslySetInnerHTML={{ __html: projectData?.htmlImage }} />
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}

export default ProjectModal