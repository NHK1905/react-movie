import React from "react";
import { Feature, OptForm } from "../components";
import { FaqsContainer } from "../containers/faq";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { JumbotronContainer } from "../containers/jumbotron";
export default function Home() {
    return(
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>
                        Unlimited Film, TV programmes and more.
                    </Feature.Title>
                    <Feature.Subtitle>
                        Watch anywhere. Cancel at any time.
                    </Feature.Subtitle>
                </Feature>
                <OptForm>
                    <OptForm.Input placeholder="Email address"/>
                    <OptForm.Button>Get Started</OptForm.Button>
                    <OptForm.Break/>
                    <OptForm.Text>
                        Ready to watch? Enter your email to create or restart your membership.
                    </OptForm.Text>
                </OptForm>
            </HeaderContainer>
            <JumbotronContainer/>
            <FaqsContainer/>
            <FooterContainer/>
        </>
    )
}