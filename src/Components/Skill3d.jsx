import React from 'react';
import { Text, Billboard } from "@react-three/drei";
import { Flex, Box } from '@react-three/flex';

export default function Skill3d(...props) {
    return (
        <Flex size={[5, 5, 10]} flexWrap="wrap-reverse" flexDirection="column" plane="yz" position={[-1, -0.5, 3]} visible={true}>

            <SkillBox text="React"/>


            <SkillBox text= "ASP.NET"/>


            <SkillBox />


            <SkillBox />

        </Flex>
    );
}

function SkillBox(props) {
    return (
        <Box padding={1.5}>
            <Flex justifyContent="center" alignItems="center" >

                <Box centerAnchor>
                    <mesh>
                        <icosahedronGeometry />
                        <meshPhongMaterial color={'#FFFFFF'} wireframe={false} size={0.1} flatShading={true} />

                    </mesh>
                </Box>
                <Box>
                    <Billboard follow position={[0, 0, 0]}>
                        <Text outlineColor="white" outlineWidth={0.005} color="white" fontSize={0.4} position={[0, -0.5, 0]} textAlign="center" {...props} />
                    </Billboard>
                </Box>
            </Flex>
        </Box>
    );
}
