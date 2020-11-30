import React from 'react';
import styled from 'styled-components'
import { TopSection } from './topSection';
// import Logo from '../../assets/logo/logo_cropped.png'

const PageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export function Homepage(props) {
    return  (
        <PageContainer>
            <TopSection />
        </PageContainer>
    )

}