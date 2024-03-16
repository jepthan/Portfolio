import React from 'react';
import { useState } from 'react';
import { Text, Billboard, Html } from "@react-three/drei";
import { Flex, Box } from '@react-three/flex';

export default function Skill3d(props) {

   
    return (
        <group>
            <Billboard>
                <Text
                    position={[0, 3, 2]}
                    fontSize={0.6}
                    visible={props.visible}

                >
                    My Skills

                </Text>
            </Billboard>

            <Flex
            
             size={[5, 6.7, 10]} flexWrap="wrap-reverse" flexDirection="column" plane="yz" position={[-2, -0.9, 2.5]} visible={props.visible}>

                <SkillBox text="React" />

                <SkillBox text="C#" />

                <SkillBox text="SQL" />

                <SkillBox text="C++" />

                <SkillBox text="Java" />

                <SkillBox text="Python" />

                <SkillBox text="HTML/CSS" />

                <SkillBox text="Scrum" />

                <SkillBox text="ASP.NET" />


            </Flex>
        </group >
    );
}

function SkillBox(props) {
    return (
        <Box padding={1.3}>
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
