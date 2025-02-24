import React, { Fragment, useRef, lazy, Suspense } from 'react';
import { MdSupportAgent } from "react-icons/md";
import { Button, useBreakpointValue, useDisclosure } from '@chakra-ui/react';

// Lazy load Drawer-related components
const DarwinDrawer = lazy(() => import('../../components/DarwinDrawer'));

function Darwin() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();

    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Fragment>
            <Suspense fallback={null}>
                {isOpen && <DarwinDrawer isOpen={isOpen} onClose={onClose} btnRef={btnRef} />}
            </Suspense>

            {/* Mobile Button */}
            {isMobile ? (
                <button
                    ref={btnRef}
                    onClick={onOpen}
                    className='chatbot-toggle-button'
                >
                    <MdSupportAgent size={30} color={'white'} />
                </button>
            ) : (
                <Button
                    ref={btnRef}
                    position="fixed"
                    right="20px"
                    bottom="20px"
                    colorScheme="purple"
                    onClick={onOpen}
                >
                    Ask Darwin AI
                </Button>
            )}
        </Fragment>
    );
}

export default Darwin;
