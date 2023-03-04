import styled from 'styled-components';

export const ListItem = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform var(--animation-duration) var(--timing-function);
  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const ModalImage = styled.img`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  object-fit: cover;
`;
