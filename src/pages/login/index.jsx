import styled from "styled-components";
import imageStart from "../../assets/imageStart.svg";
import icon from "../../assets/icon.svg";
import { Carousel } from "react-responsive-carousel";

// const H1 = styled.h1`
//   color: #fff;
//   font-size: 2rem;
// `;

const Img = styled.div`
    background-image: url(${imageStart});
    width: 100%;
    height: auto;
    position: absolute;
    z-index: -1;
    height: 100%;
    min-height: 100rem;
    background-repeat: no-repeat;
    background-size: cover;
`

const Icon = styled.img`
    margin-top: 10rem;
`

const Center = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    padding: 5.4rem 1.6rem;
    width: 100%;
    height: 100%;
    min-height: 100vh;
`

const Button = styled.button`
    background: #1ED760;
    width: 100%;
    border: none;
    padding: 2.25rem;
    border-radius: 2rem;
    cursor: pointer;
    box-shadow: 5px 5px 20px 0px #000;
    font-size: 1.5rem;
    font-weight: 800;
`

export default function Login() {
  return (
    <Img>

        <Carousel>
            <div>
                <h1>a</h1>
            </div>
            <div>
                <h1>alo</h1>
            </div>
        </Carousel>
        <Center>
            <Icon src={icon}  alt="icon"></Icon>

            <Button>Get started</Button>

        </Center>
    </Img>
  );
}
