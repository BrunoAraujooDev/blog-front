import styled from 'styled-components';

export const PostsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 200px 40px 50px 40px;
    gap: 5rem;
    background-color: ${props => props.theme['primary-color-theme']};

    @media (max-width: 570px) {
        padding: 200px 10px 40px 10px;
  }
`

export const PostSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 4rem;
`