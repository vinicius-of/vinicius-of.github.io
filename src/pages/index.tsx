import * as React from 'react';
import { graphql, HeadFC, useStaticQuery } from 'gatsby';
import Navbar from '../components/Navbar';
import Project from '../components/Project';
import Article from '../components/Article';
import Introduction from '../components/Introduction';
import Contact from '../components/Contact';
import Columns from '../components/Columns';
import '../global.css';
import {
    descriptions,
    mainContainer,
    listExperiences,
    title,
    about,
    //@ts-ignore
} from '../styles/index.module.css';
import FastContact from '../components/FastContact';

const IndexPage = () => {
    const query = useStaticQuery(graphql`
        query Experiences {
            allMarkdownRemark {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            imageAlt
                            role
                            stack
                            content
                            image {
                                childImageSharp {
                                    gatsbyImageData(placeholder: DOMINANT_COLOR)
                                }
                            }
                        }
                    }
                }
            }
        }
    `);

    const experiences = query.allMarkdownRemark.edges;

    return (
        <>
            <Navbar />
            <header id="home">
                <Introduction />
            </header>
            <main className={mainContainer}>
                <FastContact />
                <section id="about" className={about}>
                    <Columns>
                        <div className={descriptions}>
                            <Article title="Sobre meu perfil">
                                Eu me considero ser uma pessoa organizada e
                                competente. Tento sempre me desafiar, mesmo que
                                eu n??o consiga ver a solu????o inicialmente.
                                Sempre estou disposto a ajudar um colega de
                                equipe quando dispon??vel. Eu acredito na
                                prioridade da qualidade e do planejamento de um
                                produto/ambiente antes de quantidade, eu vejo
                                que isso pode trazer um valor bem maior quando
                                cultivado e bem cuidado para o futuro.
                            </Article>
                            <Article title="Foco em qualidade">
                                Sempre tive um foco em qualidade, em manter o
                                c??digo limpo (Clean code), de manter-se dentro
                                da arquitetura e dos padr??es do projeto estimado
                                anteriormente. Acredito que para um projeto
                                funcionar precisa n??o somente de fazer o c??digo
                                funcionar, mas tamb??m ser sustent??vel a longo
                                prazo.
                            </Article>
                            <Article title="Organiza????o ?? importante">
                                O futuro n??o ?? previs??vel, nunca sabemos o que
                                pode acontecer. Flexibilidade ?? importante em
                                momentos como este e para ser flex??vel, temos
                                que ser organizado. Gosto de ser cuidadoso, ??s
                                vezes retornando um passo para avan??ar dois.
                            </Article>
                        </div>
                    </Columns>
                </section>
                <section id="experiences">
                    <h2 className={title}>Minhas experi??ncias</h2>
                    <div className={listExperiences}>
                        {experiences.map((data: any) => {
                            const {
                                title,
                                image,
                                imageAlt,
                                content,
                                role,
                                stack,
                            } = data.node.frontmatter;

                            return (
                                <Project
                                    key={data.node.id}
                                    title={title}
                                    alt={imageAlt}
                                    imageData={
                                        image.childImageSharp.gatsbyImageData
                                    }
                                    description={content}
                                    role={role}
                                    stack={stack}
                                />
                            );
                        })}
                    </div>
                </section>
            </main>
            <footer id="contact">
                <Contact />
            </footer>
        </>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
