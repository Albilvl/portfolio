import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'My Skills'} span={'my skills'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'Javascript'}
                            width={'75%'}
                            text={'75%'}
                        />
                        <ProgressBar 
                            title={'Ruby'}
                            width={'65%'}
                            text={'65%'}
                        />
                        <ProgressBar 
                            title={'React JS'}
                            width={'85%'}
                            text={'85%'}
                        />
                        <ProgressBar 
                            title={'Github'}
                            width={'60%'}
                            text={'60%'}
                        />
                        <ProgressBar 
                            title={'Redux'}
                            width={'20%'}
                            text={'20%'}
                        />
                        <ProgressBar 
                            title={'SQLite'}
                            width={'40%'}
                            text={'40%'}
                        />
                        <ProgressBar 
                            title={'Data Structures & Algorithms'}
                            width={'20%'}
                            text={'20%'}
                        />
                        <ProgressBar 
                            title={'Willingness to Learn'}
                            width={'100%'}
                            text={'100%'}
                        />
                        <ProgressBar 
                            title={'Object Oriented Programming'}
                            width={'60%'}
                            text={'60%'}
                        />
                        <ProgressBar 
                            title={'Leadership'}
                            width={'100%'}
                            text={'100%'}
                        />
                        <ProgressBar 
                            title={'CSS'}
                            width={'40%'}
                            text={'40%'}
                        />
                        <ProgressBar 
                            title={'Ruby on Rails'}
                            width={'60%'}
                            text={'60%'}
                        />
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
