import { Handle, Position } from '@xyflow/react';
import { Box } from '@chakra-ui/react';

const POSITION = {
    top: Position.Top,
    right: Position.Right,
    bottom: Position.Bottom,
    left: Position.Left
};

function SubNode({ data, style }) {
    const sourcePos = POSITION[data.sourcePos] || Position.Right;
    const targetPos = POSITION[data.targetPos] || Position.Left;

    return (
        <Box style={style}>
            <Handle
                type="target"
                position={targetPos}
                style={{ background: '#555' }}
            />
            <Box textAlign="center" lineHeight="1.3" whiteSpace="normal">
                {data.label}
            </Box>
            <Handle
                type="source"
                position={sourcePos}
                style={{ background: '#555' }}
            />
        </Box>
    );
}

export default SubNode;
