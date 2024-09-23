import { motion, stagger } from "framer-motion"
import styled from "styled-components"
import { useState, useRef, useEffect } from "react"
export default function LoadingMessage() {

    const timer = useRef()

    const messages = ["Loading", "Deploying bot to investigate page", "The bot is assessing your page", "Capturing entire page", "Making it look nice and pretty for you", "Fetching your screenshot", "This is taking longer than usual", "As A Good Canadian Robot, I Apologize For The Wait...", "Almost there!", "Hang tight!", "Well this is embarassing...", "Loading"]

    const [messageIndex, setMessageIndex] = useState(0)

    const messagesLength = messages.length



    const Container = styled.div`

        display:flex;
        justify-content: center;
        align-items: center;

    `



    useEffect(() => {


        setTimeout(() => {

            if (messageIndex < messagesLength - 1) {

                setMessageIndex(messageIndex + 1)
            }

        }, 7000)




    }, [messageIndex])







    return (

        <Container>

            <motion.p

                initial={{ opacity: 0 }}

                exit={{ opacity: 0 }}

                animate={{ opacity: [100, 0, 100] }}

                transition={{ duration: 1, repeat: Infinity }}>

                {messages[messageIndex]}

            </motion.p>



        </Container>

    )
}