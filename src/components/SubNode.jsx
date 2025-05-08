import { Handle, Position } from '@xyflow/react';
import { Box } from '@chakra-ui/react';

function SubNode({ data, id, style }) {
    return (
        <Box style={style}>
            <Handle
                type="source"
                position={Position.Right}
                style={{ background: '#555' }}
            />
            <Box p={2}>
                {data.label}
            </Box>
        </Box>
    );
}

export default SubNode;