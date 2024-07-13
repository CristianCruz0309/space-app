import { styled } from 'styled-components';

const PieEstilizado = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 100px;
    background-color: #04244F;
    padding: 22px;
    box-sizing: border-box;
`;

const IconoContainer = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    li {
        display: inline-block;
        margin-right: 32px;
    }
`;

const PieTexto = styled.p`
    font-size: 16px;
    color: white;
    margin: 0;
`;

function Pie() {
    return (
        <PieEstilizado>
            <IconoContainer>
                <li>
                    <a href="https://www.aluracursos.com/promo/AprendeConAluraLatam?utm_source=google&utm_medium=cpc&utm_campaign=AL_PRF_Search_Institucional&gad_source=1&gclid=CjwKCAjwy8i0BhAkEiwAdFaeGPErvSKodyBlQ-87q1dq9mfSwH6Xe5GqkWkdjBH3Ba8ASmGtBKUCfhoCJLYQAvD_BwE">
                        <img src="/img/redes/facebook.png" alt="facebook" />
                    </a>
                </li>
                <li>
                    <a href="https://www.aluracursos.com/promo/AprendeConAluraLatam?utm_source=google&utm_medium=cpc&utm_campaign=AL_PRF_Search_Institucional&gad_source=1&gclid=CjwKCAjwy8i0BhAkEiwAdFaeGPErvSKodyBlQ-87q1dq9mfSwH6Xe5GqkWkdjBH3Ba8ASmGtBKUCfhoCJLYQAvD_BwE">
                        <img src="/img/redes/twitter.png" alt="twitter" />
                    </a>
                </li>
                <li>
                    <a href="https://www.aluracursos.com/promo/AprendeConAluraLatam?utm_source=google&utm_medium=cpc&utm_campaign=AL_PRF_Search_Institucional&gad_source=1&gclid=CjwKCAjwy8i0BhAkEiwAdFaeGPErvSKodyBlQ-87q1dq9mfSwH6Xe5GqkWkdjBH3Ba8ASmGtBKUCfhoCJLYQAvD_BwE">
                        <img src="/img/redes/instagram.png" alt="instagram" />
                    </a>
                </li>
            </IconoContainer>
            <PieTexto>Desarrollado por Cris.</PieTexto>
        </PieEstilizado>
    );
}

export default Pie