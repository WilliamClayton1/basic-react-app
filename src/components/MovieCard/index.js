import styled from "styled-components";

function MovieCard(props) {
    return(
        <StyledCards>
            <PosterWrapper>
                <Poster scr="htttps//via.placeholder.com/300x300"></Poster>
            </PosterWrapper>
            <MovieTitle>Example Title here</MovieTitle>
        </StyledCards>
    )
}


const Poster = styled.img``;
const PosterWrapper = styled.div`
  width: 100%;
  border: 1px solid black;
`;
const StyledCard = styled.div`
  display: flex;
  width: 200px;
  justify-content: center;
  align-items: center;
`;

export default MovieCard;