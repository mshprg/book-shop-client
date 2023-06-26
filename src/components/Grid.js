import {Container, Row} from "react-bootstrap";

function Grid({ children }) {
    return (
        <Container>
            <Row>
                {children}
            </Row>
        </Container>
    );
}

export default Grid;