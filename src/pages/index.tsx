import * as React from 'react';
import { graphql, HeadFC, useStaticQuery } from 'gatsby';
import Navbar from '../components/Navbar';
import Project from '../components/Project';
import '../global.css';

const IndexPage = () => {
    const query = useStaticQuery(graphql`
        query Images {
            allImageSharp {
                edges {
                    node {
                        gatsbyImageData
                        id
                    }
                }
            }
        }
    `);

    const imagesData = [...query.allImageSharp.edges];

    return (
        <div>
            <Navbar />
            <br />
            {imagesData.map((data: any) => {
                return (
                    <Project
                        key={data.node.id}
                        title="Netflix Clone"
                        imageData={data.node.gatsbyImageData}
                        description="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker."
                    />
                );
            })}
        </div>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
