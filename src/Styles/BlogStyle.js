import styled from 'styled-components'

export const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.imgWidth};
  border: ${props => props.border};
  transition: 0.2s;

  img {
    height: ${props => props.imgHeight};
    width: ${props => props.imgWidth};
    border-radius: 4px;
  }

  h1, p {
    border-bottom: 1px solid lightgray;
    padding-bottom: 9px;
  }

  &:hover {
    transform: scale(1.05);
  }
`
