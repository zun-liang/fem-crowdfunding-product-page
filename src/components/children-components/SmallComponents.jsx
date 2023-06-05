import styled from 'styled-components'
import { SmallText } from '../../assets/styles/elementStyles'

const Info = styled(SmallText)`
    margin: 1rem auto;
`
export const ModalWelcome = () =>
    <SmallText>
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
    </SmallText>

export const NoRewardInfo = () => 
    <Info>
        Choose to support us without a reward if you simply believe in our project. As a backer, 
        you will be signed up to receive product updates via email.
    </Info>
    
export const BambooStandInfo = () => 
    <Info>
        You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
        you’ll be added to a special Backer member list.
    </Info>

export const BlackStandInfo = () => 
    <Info>
        You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
        member list. Shipping is included.
    </Info>

export const MahoganyStandInfo = () => 
    <Info>
        You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
        to our Backer member list. Shipping is included.
    </Info>

export const ProjectIntro = () => 
    <SmallText>
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
        to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
        your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
    </SmallText>

export const ProjectIntro2 = () =>
    <SmallText>
        Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
        to allow notepads, pens, and USB sticks to be stored under the stand.
    </SmallText>