import styled from "@emotion/styled";

const COLS = 8;
const ROWS = 8;

const DARK = '#B7C0D8';
const WHITE = '#E8EDF9';

export const Board = () => {

    return (
        <>
            {
                Array.from(Array(ROWS).keys()).map(row => {
                    return (
                        <StyledRow key={row}>
                            {Array.from(Array(COLS).keys()).map(col => {
                                const invertedRow = row % 2 === 0;
                                return invertedRow ?
                                    <StyledSlot color={col % 2 === 0 ? WHITE : DARK} /> :
                                    <StyledSlot color={col % 2 !== 0 ? WHITE : DARK} />;
                            })}
                        </StyledRow>
                    )
                })
            }
        </>
    )
}

const StyledSlot = styled.div<{ color: string }>`
  display: flex;
  background: ${({ color }) => color};
  width: 72px;
  height: 72px;
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;