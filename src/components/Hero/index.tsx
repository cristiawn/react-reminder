import { Container } from "./styles";
import heroImage from "../../assets/images/hero2.jpg"

export function Hero() {
    return (
        <Container>
            <img src={heroImage} alt="Imagem Hero" />
        </Container>
    );
}
